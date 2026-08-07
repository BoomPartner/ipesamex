# Centro de preguntas frecuentes IPESA

Fecha de implementación: 2026-08-07.

## Alcance entregado

`/preguntas-frecuentes` funciona como una base de conocimiento pública con 45 preguntas publicadas, búsqueda local, ranking, categorías, líneas reales del catálogo, tags, filtros combinables, estado vacío, query params compartibles, acordeones accesibles y relaciones bidireccionales con los productos existentes.

Cada ficha `/producto/[id]` incluye ahora un bloque de preguntas pertinentes. Las relaciones explícitas del JSON siempre tienen prioridad; cuando un producto aún no tiene una relación editorial directa, el sistema selecciona contenido ya aprobado de su subcategoría y línea. No se generan respuestas nuevas ni se replica contenido fuera del JSON.

La migración incluye las 43 preguntas que estaban repartidas en `pregunatsproductos`, `preguntascontacto` y `preguntasdistribuidor` dentro de `src/components/server.js`, más las dos preguntas exclusivas que conservaba el drawer global: compra de productos y línea automotriz. Las preguntas destacadas del drawer y de la nueva promoción de Home ahora provienen de la misma fuente.

## Arquitectura

```text
src/data/faqs.json
        ↓
src/lib/faq/repository.js (sólo servidor)
        ├─ catálogo actual: resuelve IDs, imágenes y taxonomía de productos
        ├─ /preguntas-frecuentes: 45 FAQ y filtros
        ├─ /producto/[id]: hasta 5 FAQ contextuales
        ├─ Provider → Navbar: sólo 5 FAQ destacadas
        ├─ Home: total y 3 preguntas destacadas
        ├─ getFaqsByProductId(): relaciones editoriales directas
        └─ getProductFaqPayload(): selección contextual serializable

src/lib/faq/search.mjs
        ↓
FaqExplorer.jsx → FaqItem.jsx

src/lib/faq/product-relations.mjs
        ↓
ProductFaqSection.jsx (Server Component)
```

- `faqs.json` es la única fuente editorial de FAQ, categorías, tags y líneas.
- `repository.js` filtra exclusivamente `status: "published"`, resuelve relaciones con `productos[].id` y entrega objetos serializables.
- El catálogo completo permanece en el servidor. El explorador cliente recibe únicamente los datos de los productos realmente relacionados: ID, nombre, ruta, imagen y etiquetas de línea/subcategoría.
- `getHomeFaqSummary()` entrega a Home únicamente el total publicado y `id`/`question` de tres destacadas; el JSON completo permanece en el servidor.
- `search.mjs` y `normalize.mjs` no dependen de React ni de Next.js; pueden sustituirse por otro motor sin cambiar la UI.
- `product-relations.mjs` es una regla pura y verificable; no accede a archivos, React, navegador ni APIs externas.
- La página sigue siendo Server Component. Sólo el explorador y cada acordeón son interactivos.
- El bloque FAQ de la ficha usa `<details>/<summary>` nativos y se renderiza en servidor; no agrega JavaScript de hidratación a `/producto/[id]`.

## Modelo JSON

El archivo `src/data/faqs.json` tiene `schemaVersion`, fecha general de actualización y cuatro colecciones:

- `categories`: `id`, `name`, `slug`, `description`, `sortOrder`, `active`.
- `tags`: `id`, `name`, `slug`, `active`.
- `lines`: usa únicamente los IDs reales `decorativa`, `automotriz`, `ferretera`, `industrial` y `maderas`.
- `faqs`: `id`, `slug`, `question`, `answer`, relaciones, búsqueda, publicación y orden.

Campos FAQ soportados:

```json
{
  "id": "faq-0001",
  "slug": "durabilidad-productos-pinturas-vinilicas",
  "question": "...",
  "answer": "...",
  "answerItems": ["..."],
  "categoryId": "rendimiento",
  "tags": ["vinilicas", "durabilidad"],
  "lineIds": ["decorativa"],
  "productIds": ["vintek"],
  "keywords": ["duración", "vida útil"],
  "applications": ["interior", "exterior"],
  "links": [],
  "action": {
    "href": "/productos",
    "label": "Ver productos",
    "catalogueCategoryId": "decorativa",
    "catalogueMicrocategoryId": "vinilicas"
  },
  "featured": false,
  "sortOrder": 10,
  "status": "published"
}
```

`answerItems` permite listas seguras sin HTML arbitrario. `links` permite enlaces controlados; los externos se abren con `noopener noreferrer`. `action` puede conservar los filtros `categoria` y `microcategoria` del catálogo sin cambiar su formato.

Estados admitidos:

- `draft`: no se publica.
- `published`: visible en los consumidores públicos.
- `archived`: no se publica y conserva el registro.

## Búsqueda y ranking

`normalizeSearchText()` convierte a minúsculas, normaliza Unicode, elimina diacríticos y compacta espacios. Por ello `vinilica`, `vinílica`, mayúsculas y espacios repetidos son equivalentes.

El repositorio construye una vez el índice de cada FAQ antes de entregarlo al cliente. Incluye:

- pregunta y respuesta;
- elementos de lista;
- categoría;
- tags;
- keywords;
- aplicaciones;
- líneas;
- IDs y nombres de productos relacionados.
- nombres de productos asociados por la selección contextual, usados sólo para búsqueda.

El último campo permite que `q=Acritek+360`, por ejemplo, encuentre las preguntas que la ficha de Acritek muestra por subcategoría aunque todavía no exista un `productIds` directo. Estos nombres contextuales se eliminan como campo auxiliar al construir el índice: no crean tarjetas ni simulan una relación editorial exacta.

Todos los términos escritos deben aparecer en algún campo de la misma FAQ, aunque estén distribuidos. El ranking prioriza pregunta, producto, tag, keyword, aplicación, categoría/línea y finalmente respuesta. Los empates respetan `sortOrder`.

Filtros disponibles y query params:

```text
q          búsqueda
categoria  ID de categoría FAQ
tag        ID estable de tag
linea      ID real de línea del catálogo
```

Ejemplo:

```text
/preguntas-frecuentes?q=secado&linea=decorativa&tag=ficha-tecnica
```

La búsqueda actualiza resultados inmediatamente y sincroniza `q` con una espera de 250 ms para evitar navegaciones por cada pulsación. Los filtros crean entradas navegables para que atrás/adelante restaure el estado. Todas las variantes mantienen canonical en `/preguntas-frecuentes`.

## Relaciones con el catálogo

Cada relación almacena únicamente el ID público real del producto. `repository.js` resuelve el nombre y `/producto/[id]` desde `src/data/productos.js`; ningún nombre se duplica en la FAQ.

La integración funciona en ambos sentidos:

- dentro del centro FAQ, los productos relacionados aparecen como tarjetas compactas con imagen, nombre, línea y subcategoría, enlazadas a `/producto/[id]`;
- dentro de `/productos`, la barra de resultados ofrece una entrada al FAQ usando la búsqueda activa o la línea seleccionada;
- dentro de `/producto/[id]`, se muestran hasta cinco preguntas y accesos al centro FAQ por nombre del producto y por línea.
- la búsqueda FAQ reconoce los 137 nombres del catálogo mediante la misma selección contextual; las tarjetas siguen reservadas para los 24 vínculos editoriales explícitos.

### Selección contextual en la ficha

`selectFaqsForProduct()` aplica este orden estable:

1. `productIds` contiene el ID exacto del producto: relación directa, prioridad 1000.
2. La acción del FAQ coincide con línea y subcategoría: prioridad 700.
3. Un tag coincide con `subcategorie` o `microcategorie`: prioridad 600.
4. `lineIds` contiene la línea del producto: prioridad 400.
5. La acción apunta a la misma línea sin restringir subcategoría: prioridad 300.

Los empates respetan `sortOrder`. El límite predeterminado es cinco. La interfaz identifica las relaciones directas y explica cuándo presenta orientación contextual de línea/subcategoría. Actualmente existen 24 relaciones explícitas repartidas entre 7 productos; el fallback validado da cobertura contextual a los 137 productos sin alterar `faqs.json`.

`npm run verify:faq-data` falla si una FAQ referencia:

- un producto inexistente;
- una categoría, tag o línea inexistente;
- un ID o slug duplicado;
- un estado no admitido;
- una pregunta o respuesta vacía.

El verificador también prueba normalización, acentos, términos distribuidos, búsqueda parcial, texto inexistente, búsqueda de un producto sin vínculo directo y filtros combinados. Además comprueba relaciones duplicadas dentro de cada FAQ, prioridad de relaciones directas, fallback por subcategoría, límite por ficha y cobertura contextual de los 137 productos.

## Proceso editorial y persistencia JSON

`src/data/faqs.json` es la base de datos editorial definitiva del módulo FAQ. Esta es una decisión de arquitectura del proyecto: no se usará una base de datos de otro tipo, ORM ni CMS para este contenido.

Los cambios se realizan mediante revisión de código:

1. Editar `src/data/faqs.json` en UTF-8.
2. Usar un ID y slug únicos y estables.
3. Referenciar categorías, tags, líneas y productos existentes.
4. No inventar respuestas técnicas; incorporar únicamente contenido aprobado por IPESA.
5. Marcar `featured: true` sólo cuando deba aparecer en el drawer global o en la promoción de Home.
6. Usar `draft` para contenido aún no autorizado y `archived` para retirarlo sin destruirlo.
7. Ejecutar `npm run verify:faq-data`, `npm run lint` y `npm run build`.
8. Desplegar la nueva versión; editar el JSON local no modifica por sí solo una instancia ya publicada.

La administración consiste en editar este archivo JSON, validarlo, someterlo a control de versiones y desplegarlo. No existe una segunda fuente de datos ni una sincronización externa. Por seguridad y para conservar este contrato:

- no se crearon rutas `/admin` públicas;
- no se publicaron endpoints POST/PUT/DELETE;
- no se escriben archivos en producción;
- no se usa `localStorage` como base editorial;
- no se incorporó un proveedor SaaS ni credenciales.

El historial y la recuperación de versiones dependen del repositorio Git. No se debe sustituir ni complementar esta persistencia con SQL, NoSQL, un CMS o un ORM salvo que IPESA revoque explícitamente esta decisión en un requerimiento posterior.

## SEO y datos estructurados

La ruta define título, descripción, canonical y Open Graph propios. Los filtros no cambian el canonical, por lo que no crean combinaciones indexables duplicadas.

No se agregó JSON-LD `FAQPage`. Google restringe desde 2023 los resultados enriquecidos FAQ a sitios gubernamentales o de salud reconocidos; para otros sitios el marcado no tiene un efecto visible habitual. Además, FAQ ya no aparece entre las funciones vigentes enumeradas en Search Appearance. IPESA es un sitio comercial, por lo que añadir el marcado sólo por SEO no aportaría elegibilidad y la especificación pidió evitar datos estructurados sin beneficio comprobado.

Referencias oficiales consultadas el 2026-08-07:

- [Changes to HowTo and FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- [Google Search Appearance](https://developers.google.com/search/docs/appearance)
- [General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)

La semántica HTML sí se mantiene: un `h1`, preguntas como `h2`, botones con `aria-expanded`, paneles relacionados mediante `aria-controls`/`aria-labelledby` y estado de resultados con `aria-live`.

## Decisiones de migración de contenido

Se conservaron las respuestas técnicas existentes. Las correcciones se limitaron a errores evidentes y verificables:

- `Prodcutos`, `durabildiad`, `esmlates`, `CENTUTY` y acentos claros.
- `Tropinar` se normalizó a `Tropimar` tras verificar que el catálogo no contiene productos Tropinar y sí contiene Tropimar/Tropimar Sur.
- el enlace inexistente `/tips-tutoriales` se reemplazó por la ruta activa `/tips`.
- los enlaces sociales ahora usan el campo URL; la página anterior utilizaba por error el nombre de la red como `href`.
- los textos extensos de seguridad y valores se estructuraron como listas sin convertirlos en HTML.

## Analítica

No se agregaron eventos FAQ. El proyecto instala Analytics/GTM, pero no dispone de una abstracción de eventos o política de datos para búsquedas internas. Enviar texto de consultas directamente a terceros podría capturar contenido no previsto. La integración queda pendiente hasta definir nombres, consentimiento y campos permitidos sin modificar los IDs actuales.

## Resultados y validación

| Medición | Antes | Después | Diferencia |
| --- | ---: | ---: | ---: |
| `/preguntas-frecuentes` First Load JS | 287 kB | 104 kB | -183 kB (-63.8%) |
| Código propio de la ruta | 1.06 kB | 3.73 kB | +2.67 kB |

La reducción de First Load JS proviene de retirar Material Tailwind, Font Awesome y el catálogo completo del Client Component FAQ. La medición anterior de 98.8 kB sube a 104 kB al incorporar `next/image` en las tarjetas de producto relacionadas. `/producto/[id]` permanece en 327 kB porque su bloque FAQ nuevo se renderiza en servidor sin hidratación propia; `/productos` permanece en 128 kB.

Validaciones ejecutadas:

```text
npm run verify:faq-data  45 publicadas, 5 destacadas, 24 relaciones directas, 137 productos con cobertura contextual
npm run lint             sin errores; permanecen 2 warnings conocidos en Colores.jsx
npm run build            correcto; consulta la medición vigente en docs/PERFORMANCE.md
```

La validación en navegador headless comprobó:

- promoción en Home con el total de 45 publicadas, tres destacadas y acceso visible inmediatamente después del carrusel;
- acceso FAQ en el menú completo y compacto sin desbordamiento en los puntos de quiebre documentados;
- 45 resultados iniciales y ausencia de desbordamiento del `main` en 360, 390, 768, 1024 y 1440 px;
- igualdad de 10 resultados para `vinilica` y `vinílica`;
- búsqueda distribuida `impermeabilizante azotea`;
- filtros combinados de categoría, tag y línea;
- estado vacío para texto inexistente;
- acordeón con `aria-expanded="true"` y panel visible;
- apertura del acordeón con teclado;
- enlace relacionado real `/producto/vintek`;
- tarjeta relacionada con imagen, línea y subcategoría en el acordeón FAQ;
- bloque contextual accesible en `/producto/vintek` con relaciones directas;
- fallback de subcategoría/línea en un producto sin relación editorial directa;
- enlaces producto → FAQ por búsqueda y por línea;
- sincronización de `q=SECADO` en la URL;
- restauración de categoría mediante atrás/adelante;
- navegación a `/productos` conservando `categoria=decorativa` y `microcategoria=esmaltes`;
- canonical, title, omisión intencional de JSON-LD y presencia de destacados globales;
- HTTP 200 para `/`, `/preguntas-frecuentes`, `/productos` y `/producto/vintek`.

`verify:external-assets` no aplica: no se modificaron fichas, hojas de seguridad ni fondos externalizados.

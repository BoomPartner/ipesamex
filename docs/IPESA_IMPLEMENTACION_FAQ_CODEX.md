# IMPLEMENTACIÓN — CENTRO DE PREGUNTAS FRECUENTES / BASE DE CONOCIMIENTO IPESA

## 1. Objetivo

Implementar en el sitio web de **IPESA Pinturas** una sección de Preguntas Frecuentes (FAQ) dinámica y escalable que funcione como una **base de conocimiento técnica y comercial**, permitiendo a clientes actuales y potenciales localizar rápidamente información relacionada con:

- Productos.
- Líneas de producto.
- Aplicaciones.
- Rendimientos.
- Preparación de superficies.
- Procesos de uso y aplicación.
- Compatibilidades.
- Secado.
- Dilución.
- Seguridad.
- Recomendaciones técnicas.
- Sucursales y compra.
- Distribución.
- Fichas técnicas y hojas de seguridad.
- Otros temas recurrentes.

La solución debe aprovechar la estructura y catálogo actuales del sitio, mantener una única fuente de verdad para las FAQ y permitir su crecimiento continuo.

---

# 2. Contexto obligatorio del proyecto

Antes de realizar cualquier cambio, leer y respetar completamente:

```text
AGENTS.md
```

Las instrucciones de `AGENTS.md` aplican a todo el repositorio y tienen prioridad sobre esta especificación cuando se trate de arquitectura, integridad del catálogo, rendimiento, SEO, accesibilidad, seguridad y validación.

El proyecto actualmente utiliza:

- Next.js 14.2.
- App Router.
- React 18.
- JavaScript / JSX.
- Tailwind CSS 3.
- Material Tailwind.
- Alias `@/*` → `src/*`.
- npm y `package-lock.json`.

No realizar refactorizaciones masivas ni cambios fuera del alcance de esta funcionalidad.

---

# 3. Estado actual que debe auditarse

El sitio ya cuenta con contenido de Preguntas Frecuentes y con una ruta pública:

```text
/preguntas-frecuentes
```

También existen bloques/resúmenes de preguntas frecuentes en otras áreas del sitio.

Antes de programar:

1. Localizar la implementación actual de FAQ.
2. Identificar:
   - Página activa.
   - Componentes reutilizados.
   - Contextos relacionados con preguntas.
   - Fuente actual de los datos.
   - Preguntas mostradas en Home u otras páginas.
3. Buscar todos los imports/referencias antes de sustituir, mover o eliminar código.
4. Evitar mantener varias copias independientes de las mismas preguntas.
5. Crear una única fuente de datos/servicio que pueda alimentar:
   - Página completa de FAQ.
   - FAQ resumidas del Home.
   - Otros bloques de FAQ existentes.
   - Futuras integraciones.

No modificar archivos `* copy*.jsx` salvo que se confirme mediante imports que son archivos activos.

---

# 4. Alcance funcional

La implementación final debe cubrir como mínimo:

## 4.1 Buscador interno

Agregar un buscador visible en la parte superior de `/preguntas-frecuentes`.

Debe buscar sobre:

- Pregunta.
- Respuesta.
- Palabras clave.
- Tags.
- Categoría.
- Tema.
- Línea de producto.
- Nombre de productos relacionados.
- Aplicaciones relacionadas.

El buscador debe:

- Ignorar mayúsculas/minúsculas.
- Normalizar acentos para permitir búsquedas como:
  - `vinilica`
  - `vinílica`
- Ignorar espacios duplicados.
- Permitir búsquedas parciales.
- Actualizar resultados de forma inmediata.
- Mostrar número de resultados.
- Tener botón para limpiar búsqueda.
- Mostrar un estado vacío útil cuando no haya coincidencias.

Ejemplo:

```text
Buscar: impermeabilizante azotea
```

Debe encontrar preguntas aunque las palabras estén distribuidas entre:

- título,
- respuesta,
- tags,
- productos relacionados,
- categoría.

No agregar Algolia, Elasticsearch, Meilisearch u otra dependencia/servicio externo para esta primera implementación salvo que ya exista en el proyecto.

Para el volumen inicial de FAQ se debe implementar búsqueda local eficiente.

---

# 5. Categorías y temas

Las preguntas deben poder organizarse por categorías.

Categorías iniciales sugeridas:

```text
Productos
Aplicación
Preparación de superficies
Rendimiento
Secado y tiempos
Dilución
Interiores y exteriores
Impermeabilización
Maderas
Automotriz
Industrial
Seguridad
Fichas técnicas
Compra y sucursales
Distribuidores
Colores
Otros
```

Estas categorías no deben quedar rígidamente programadas en la interfaz.

Deben provenir de la fuente de datos o sistema administrativo para permitir:

- agregar,
- editar,
- ordenar,
- activar/desactivar.

Cada FAQ debe pertenecer al menos a una categoría principal.

Opcionalmente puede relacionarse con varias categorías secundarias si la arquitectura seleccionada lo permite sin complicación innecesaria.

---

# 6. Líneas de producto

Permitir asociar preguntas con las líneas reales del catálogo IPESA.

No inventar categorías del catálogo ni modificar IDs existentes.

Las asociaciones deben construirse reutilizando los valores reales existentes en el catálogo.

Entre las líneas que actualmente se observan en el sitio están, entre otras:

```text
Decorativa
Automotriz
Industrial
Ferretera
Maderas
```

Y subcategorías como:

```text
Acrílicas / Vinílicas
Selladores
Esmaltes
Primarios
Aerosoles
Impermeabilizantes
Adhesivos
Lacas
Base Color
Primers
Rellenadores
Perlas
Transparentes
Endurecedores y Aditivos
Reductores
Pulimentos / Abrillantadores
Tintas
Barnices
Poliuretanos
```

Codex debe obtener los valores definitivos directamente de los datos actuales del proyecto.

---

# 7. Tags / etiquetas

Cada FAQ podrá contener múltiples etiquetas.

Ejemplos:

```text
interior
exterior
muro
metal
madera
automotriz
baño
cocina
humedad
impermeabilización
rendimiento
secado
dilución
brocha
rodillo
aspersión
sellador
primer
anticorrosivo
ficha técnica
hoja de seguridad
```

Los tags deben:

- ser reutilizables;
- permitir filtrar contenido;
- participar en el buscador;
- mostrarse de forma discreta en cada resultado;
- poder agregarse posteriormente sin modificar componentes;
- tener un slug o identificador estable.

Al seleccionar un tag se debe poder visualizar únicamente contenido relacionado.

---

# 8. Relación FAQ ↔ productos

Una FAQ podrá relacionarse con uno o varios productos existentes.

Ejemplo:

```text
Pregunta:
¿Qué pintura recomiendan para interiores?

Productos relacionados:
- Vintek
- Realtek
- Vinipesa
```

IMPORTANTE:

Los identificadores de producto son contratos públicos del sitio.

No modificar:

```text
articulos[].id
categorie
subcategorie
microcategorie
```

Las relaciones deben almacenar/referenciar el `id` real del producto.

La interfaz debe resolver posteriormente el nombre y URL desde el catálogo actual.

En una FAQ relacionada con productos, mostrar una sección:

```text
Productos relacionados
```

con enlaces internos hacia:

```text
/producto/[id]
```

Usar `next/link`.

No duplicar dentro de la FAQ todos los datos del producto si ya existen en el catálogo.

---

# 9. Modelo de datos recomendado

La arquitectura final debe permitir al menos la siguiente estructura lógica.

## FAQ

```js
{
  id: "faq-0001",
  slug: "durabilidad-pinturas-vinilicas",
  question: "¿Cuál es la durabilidad de sus pinturas vinílicas?",
  answer: "...",
  categoryId: "productos",
  topicIds: [],
  tags: ["vinilicas", "durabilidad", "exterior"],
  productIds: ["..."],
  lineIds: ["decorativa"],
  keywords: [
    "duración",
    "años",
    "vida útil"
  ],
  featured: true,
  sortOrder: 10,
  status: "published",
  createdAt: "...",
  updatedAt: "..."
}
```

## Categoría

```js
{
  id: "productos",
  name: "Productos",
  slug: "productos",
  description: "",
  sortOrder: 10,
  active: true
}
```

## Tag

```js
{
  id: "impermeabilizacion",
  name: "Impermeabilización",
  slug: "impermeabilizacion",
  active: true
}
```

El modelo concreto puede variar para integrarse correctamente con la arquitectura existente.

No introducir una abstracción excesiva.

---

# 10. Fuente única de verdad

La solución debe evitar el problema actual de mantener preguntas repetidas en varios componentes.

Crear una única capa de acceso a FAQ.

Arquitectura conceptual:

```text
Fuente persistente de FAQ
        ↓
servicio/repositorio FAQ
        ↓
 ┌───────────────────────┐
 │ /preguntas-frecuentes │
 │ Home FAQ              │
 │ Productos             │
 │ búsquedas relacionadas│
 └───────────────────────┘
```

Los componentes visuales NO deben contener arrays independientes con preguntas y respuestas hardcodeadas.

---

# 11. Persistencia y administración — auditoría previa obligatoria

La solicitud requiere que IPESA pueda agregar y actualizar contenido constantemente.

Por lo tanto debe existir persistencia real.

ANTES DE IMPLEMENTAR EL ADMINISTRADOR:

1. Inspeccionar el repositorio para determinar si ya existe:
   - base de datos;
   - API;
   - CMS;
   - autenticación;
   - panel administrativo;
   - ORM;
   - backend externo;
   - servicio interno reutilizable.

2. Reutilizar infraestructura existente si existe.

3. No incorporar por iniciativa propia:
   - Supabase;
   - Firebase;
   - Strapi;
   - Sanity;
   - Contentful;
   - Algolia;
   - servicios SaaS;
   - nuevos proveedores externos.

4. No colocar credenciales en código ni variables `NEXT_PUBLIC_*`.

5. Si el repositorio no dispone actualmente de persistencia/autenticación suficiente:
   - dejar desacoplada la capa de almacenamiento;
   - implementar el esquema/API compatible con una futura base persistente;
   - documentar con precisión qué infraestructura falta;
   - NO simular un administrador “funcional” escribiendo archivos locales desde producción;
   - NO guardar cambios administrativos en `localStorage`.

El administrador sólo se considerará terminado si los cambios persisten correctamente en el entorno de producción.

---

# 12. API / capa de servicio

Si la arquitectura actual permite API dentro del proyecto, utilizar Route Handlers del App Router.

Estructura orientativa:

```text
src/app/api/faqs/route.js
src/app/api/faqs/[id]/route.js
src/app/api/faq-categories/route.js
src/app/api/faq-tags/route.js
```

Operaciones requeridas:

```text
GET    /api/faqs
GET    /api/faqs/:id
POST   /api/faqs
PUT    /api/faqs/:id
DELETE /api/faqs/:id
```

El borrado preferentemente debe ser lógico:

```text
status = archived
```

en lugar de destruir contenido, si la infraestructura disponible lo permite.

Debe existir validación del lado servidor.

Nunca confiar solamente en validaciones del formulario.

---

# 13. Panel de administración

Crear o integrar un módulo administrativo para gestionar las FAQ.

No exponer la administración públicamente.

La ruta final deberá adaptarse al mecanismo de administración/autenticación existente.

Ejemplo conceptual:

```text
/admin/faqs
```

Sólo utilizar esta ruta si es coherente con el proyecto.

## Funciones administrativas

### Listado

Mostrar:

- pregunta;
- categoría;
- estado;
- productos relacionados;
- fecha de actualización;
- destacado;
- orden;
- acciones.

Permitir búsqueda administrativa.

Permitir filtros por:

- categoría;
- estado;
- línea;
- tag.

### Crear FAQ

Campos mínimos:

```text
Pregunta *
Respuesta *
Categoría *
Tags
Palabras clave
Líneas de producto
Productos relacionados
Destacada
Orden
Estado
```

Estados:

```text
draft
published
archived
```

### Editar FAQ

Permitir editar todos los campos.

### Publicar / despublicar

Una pregunta `draft` no debe mostrarse públicamente.

### Archivar

Las preguntas archivadas no deben mostrarse públicamente.

### Ordenar

Permitir definir `sortOrder`.

No es obligatorio implementar drag-and-drop si un campo numérico resuelve correctamente el requerimiento.

---

# 14. Editor de respuesta

La respuesta debe permitir contenido suficientemente rico para documentación técnica:

- párrafos;
- saltos de línea;
- listas;
- texto destacado;
- enlaces internos.

No introducir un editor WYSIWYG pesado salvo que ya exista una dependencia compatible.

No aceptar HTML arbitrario sin sanitizar.

Priorizar un formato seguro y controlado.

---

# 15. Página pública

Ruta:

```text
/preguntas-frecuentes
```

Debe conservar la identidad visual actual de IPESA.

Propuesta de layout:

```text
-------------------------------------------------
              PREGUNTAS FRECUENTES
 Encuentra respuestas, aplicaciones y recomendaciones
-------------------------------------------------

[ 🔎 Buscar una pregunta, producto o aplicación... ]

[Todos] [Productos] [Aplicación] [Rendimiento] [...]

Tags / filtros relevantes

-------------------------------------------------
23 resultados

▾ ¿Qué pintura recomiendan para interiores?
  respuesta...

  Productos relacionados:
  Vintek | Realtek | Vinipesa

  #interior #vinilica #aplicacion
-------------------------------------------------
```

La estructura exacta debe adaptarse al diseño existente.

No crear un micrositio visualmente separado del resto de IPESA.

---

# 16. Comportamiento de filtros

El usuario podrá combinar:

```text
texto de búsqueda
+
categoría
+
línea de producto
+
tag
```

Ejemplo:

```text
Búsqueda: secado
Categoría: Aplicación
Línea: Automotriz
```

Todos los filtros activos deben ser visibles.

Agregar acción:

```text
Limpiar filtros
```

El estado vacío debe explicar que no existen resultados y ofrecer limpiar filtros.

---

# 17. URL y navegación compartible

Cuando sea razonablemente posible sin degradar la UX, representar los filtros/búsqueda en query params:

```text
/preguntas-frecuentes?q=impermeabilizante
/preguntas-frecuentes?categoria=aplicacion
/preguntas-frecuentes?tag=madera
```

Esto permitirá:

- compartir búsquedas;
- volver atrás sin perder contexto;
- crear enlaces internos específicos;
- mejorar descubrimiento.

No es obligatorio indexar todas las combinaciones de filtros.

---

# 18. Accordion accesible

Las preguntas podrán presentarse como acordeones.

Requisitos:

- utilizables con teclado;
- foco visible;
- `aria-expanded`;
- asociación correcta entre trigger y panel;
- no depender exclusivamente de animaciones;
- respetar `prefers-reduced-motion`.

Si existe un componente accesible ya utilizado en el proyecto, reutilizarlo.

---

# 19. Preguntas destacadas

Permitir marcar FAQ como:

```text
featured: true
```

Estas podrán utilizarse para:

- Home.
- resumen FAQ.
- secciones de productos.
- bloques promocionales.

El Home no debe mantener otra copia independiente de las preguntas.

Ejemplo:

```js
getFeaturedFaqs({ limit: 5 })
```

---

# 20. Relación con páginas de producto

Preparar la arquitectura para que una página:

```text
/producto/[id]
```

pueda consultar:

```text
FAQ relacionadas con productId = id
```

No es obligatorio rediseñar las páginas de producto completas.

Si la integración es sencilla y no aumenta de forma importante el bundle, se podrá mostrar un bloque:

```text
Preguntas frecuentes sobre este producto
```

con un máximo razonable de preguntas.

Evitar importar el dataset completo de FAQ en cada Client Component.

---

# 21. SEO

La página FAQ debe mejorar su SEO.

Mantener o mejorar:

- `title`;
- `description`;
- canonical;
- Open Graph;
- estructura semántica;
- headings.

Propuesta:

```text
Title:
Preguntas Frecuentes | IPESA Pinturas

Description:
Consulta respuestas sobre productos IPESA, aplicaciones, rendimiento, preparación de superficies, secado, seguridad y recomendaciones técnicas.
```

Adaptar el texto si ya existe metadata mejor definida.

---

# 22. Structured Data FAQ

Evaluar la incorporación de datos estructurados `FAQPage`.

Generar JSON-LD solamente con preguntas que estén:

```text
status = published
```

No incluir contenido administrativo.

IMPORTANTE:

Antes de implementarlo, verificar las directrices vigentes de Google para `FAQPage` y documentar si actualmente aporta o no elegibilidad para resultados enriquecidos.

Aunque no genere rich results, la estructura semántica de la página debe mantenerse correcta.

No añadir datos estructurados incorrectos únicamente “por SEO”.

---

# 23. SEO de búsqueda interna

Las combinaciones dinámicas:

```text
?q=
?tag=
?categoria=
```

no deben generar páginas duplicadas indexables de manera accidental.

Mantener canonical hacia:

```text
https://ipesamex.com/preguntas-frecuentes
```

salvo que la estrategia SEO existente indique expresamente otra cosa.

---

# 24. Contenido inicial

Migrar las FAQ existentes a la nueva fuente de datos.

NO reescribir ni “corregir” silenciosamente el contenido técnico.

Preservar los textos actuales salvo correcciones claramente tipográficas que puedan realizarse con seguridad.

Ejemplos de temas que actualmente existen y deben conservarse durante la migración:

- durabilidad de pinturas;
- tipos de esmaltes;
- pinturas para interior/exterior;
- productos anticorrosivos;
- portafolio de productos;
- fichas de seguridad;
- productos para madera;
- recomendaciones para interiores;
- preparación de superficies;
- acabados mate/satinado/brillante;
- asesoramiento de colores;
- cobertura/rendimiento;
- tiempos de secado;
- seguridad;
- compra;
- distribuidores;
- automotriz.

Primero localizar el contenido fuente dentro del repositorio y migrarlo desde ahí.

La web pública puede utilizarse como verificación secundaria, no como sustituto de los datos originales del repositorio.

---

# 25. Correcciones de contenido

Durante la auditoría pueden encontrarse errores tipográficos existentes.

Ejemplos visibles actualmente:

```text
Prodcutos
durabildiad
esmlates
vinilica
```

No realizar reemplazos globales.

Las correcciones deberán limitarse exclusivamente al contenido FAQ afectado y no modificar descripciones técnicas sin validación.

---

# 26. Escalabilidad

La arquitectura debe soportar sin rediseño fundamental:

```text
50 FAQ
100 FAQ
500 FAQ
1000 FAQ
```

Para la escala inicial, no es necesario incorporar un motor externo de búsqueda.

Mantener desacoplado:

```text
UI
↓
servicio de búsqueda
↓
repositorio/datos
```

para permitir cambiar el motor en el futuro.

---

# 27. Normalización para búsqueda

Crear una utilidad compartida similar a:

```js
normalizeSearchText(value)
```

Debe:

1. convertir a minúsculas;
2. normalizar Unicode;
3. remover diacríticos;
4. recortar espacios;
5. compactar espacios repetidos.

Ejemplo esperado:

```text
"  PINTURA Vinílica  "
→
"pintura vinilica"
```

Generar un índice textual por FAQ compuesto conceptualmente por:

```text
question
answer
category
tags
keywords
product names
line names
```

Evitar recalcular innecesariamente ese texto en cada render.

---

# 28. Ranking básico de búsqueda

No mostrar resultados únicamente en el orden original.

Aplicar una puntuación sencilla.

Prioridad sugerida:

```text
coincidencia exacta en pregunta     100
pregunta contiene término            60
producto relacionado                 50
tag                                   40
keyword                               35
categoría                             25
respuesta                             15
```

No es necesario introducir una librería.

El algoritmo debe mantenerse pequeño, documentado y probado.

---

# 29. Sin resultados

Cuando no exista coincidencia mostrar:

```text
No encontramos una respuesta relacionada con tu búsqueda.
```

Acciones:

```text
Limpiar búsqueda
Ver todas las preguntas
```

Opcionalmente, si el sitio ya dispone de un canal de contacto adecuado:

```text
¿No encontraste lo que necesitabas?
Contáctanos
```

Reutilizar la ruta/mecanismo actual.

No agregar servicios de terceros.

---

# 30. Analítica

Si la infraestructura actual de Analytics/GTM permite eventos sin modificar IDs ni agregar trackers, registrar eventos de manera no invasiva.

Eventos sugeridos:

```text
faq_search
faq_open
faq_filter
faq_product_click
faq_no_results
```

Ejemplo conceptual:

```text
faq_search
{
  query: "...",
  results: 12
}
```

No enviar información personal.

No enviar texto potencialmente sensible a servicios externos si la política vigente no lo permite.

No modificar IDs existentes de Analytics/GTM.

Si no existe una abstracción clara para eventos, dejar esta integración documentada como mejora posterior en lugar de ampliar el alcance innecesariamente.

---

# 31. Rendimiento

La nueva funcionalidad no debe incrementar injustificadamente el First Load JS.

Respetar las métricas y línea base documentadas en `AGENTS.md` y `docs/PERFORMANCE.md`.

Evitar:

- importar todo `server.js` en nuevos Client Components;
- duplicar catálogo;
- bibliotecas de búsqueda pesadas;
- editores pesados;
- nuevas dependencias sin necesidad;
- listeners globales innecesarios.

Preferir:

- Server Components para carga inicial;
- Client Component pequeño únicamente para búsqueda/filtros/acordeones;
- datasets específicos;
- memoización únicamente donde tenga beneficio real;
- carga diferida de elementos secundarios.

---

# 32. Arquitectura recomendada de componentes

La estructura definitiva debe seguir las convenciones reales del repositorio.

Referencia conceptual:

```text
src/
├─ app/
│  └─ preguntas-frecuentes/
│     └─ page.jsx
│
├─ components/
│  └─ faq/
│     ├─ FaqExplorer.jsx
│     ├─ FaqSearch.jsx
│     ├─ FaqFilters.jsx
│     ├─ FaqList.jsx
│     ├─ FaqItem.jsx
│     ├─ FaqTags.jsx
│     ├─ RelatedProducts.jsx
│     └─ FaqEmptyState.jsx
│
├─ lib/
│  └─ faq/
│     ├─ repository.js
│     ├─ search.js
│     ├─ normalize.js
│     └─ selectors.js
│
└─ ...
```

No crear todos estos archivos si componentes más simples son suficientes.

Evitar un componente monolítico.

---

# 33. Renderizado Server / Client

Preferencia:

## Server

Resolver del lado servidor:

- metadata;
- carga inicial de FAQ publicadas;
- categorías;
- relaciones necesarias;
- JSON-LD si aplica.

## Client

Usar cliente únicamente para:

- input de búsqueda;
- filtros interactivos;
- acordeones;
- sincronización de query params;
- interacciones dinámicas.

No convertir toda la página a `'use client'` por comodidad.

---

# 34. Seguridad

Cumplir estrictamente `AGENTS.md`.

Especial atención:

- no exponer secretos;
- no usar `NEXT_PUBLIC_*` para credenciales;
- validar datos en servidor;
- sanitizar entradas;
- no usar `dangerouslySetInnerHTML` con contenido no sanitizado;
- no usar `eval`;
- no mostrar errores internos;
- proteger endpoints administrativos;
- verificar autorización en servidor, no sólo ocultar botones.

Si la administración no puede protegerse correctamente con la infraestructura actual, NO publicar endpoints de escritura abiertos.

---

# 35. Accesibilidad

Validar:

- navegación completa por teclado;
- foco visible;
- labels en buscador;
- botones semánticos;
- acordeones accesibles;
- heading hierarchy;
- contraste;
- lector de pantalla;
- `aria-live` discreto para número de resultados si es útil;
- móvil y escritorio.

No comunicar estados sólo por color.

---

# 36. Responsive

Probar como mínimo:

```text
360px
390px
768px
1024px
1440px
```

En móvil:

- buscador a ancho completo;
- filtros utilizables;
- tags con wrap;
- botones con área táctil adecuada;
- acordeones sin overflow;
- productos relacionados adaptables.

---

# 37. Compatibilidad con localStorage existente

`AGENTS.md` establece como contrato:

```text
categoria
microcategoria
```

No modificar su formato o significado durante esta tarea.

Si se usan para enlazar desde FAQ hacia `/productos`, respetar exactamente la implementación existente.

No introducir colisiones con dichas claves.

---

# 38. Enlaces internos

Ejemplos:

```text
/productos
/producto/[id]
/sucursales
/contacto
/distribuidor
```

Antes de crear cada enlace confirmar las rutas reales del repositorio.

Usar:

```js
import Link from "next/link";
```

para navegación interna.

---

# 39. Funciones mínimas sugeridas

Crear funciones pequeñas y testeables según necesidad.

Ejemplos conceptuales:

```js
normalizeSearchText()
buildFaqSearchIndex()
searchFaqs()
scoreFaqMatch()
filterFaqsByCategory()
filterFaqsByTag()
filterFaqsByLine()
getPublishedFaqs()
getFeaturedFaqs()
getFaqsByProductId()
getRelatedFaqs()
getFaqCategories()
getFaqTags()
```

No es obligatorio conservar exactamente estos nombres.

---

# 40. Pruebas de lógica

`AGENTS.md` indica que actualmente no existe suite automatizada.

La lógica de búsqueda es suficientemente aislada para justificar pruebas enfocadas si pueden incorporarse sin introducir un framework nuevo.

Como mínimo validar manualmente:

## Búsqueda

```text
vinilica
vinílica
madera
automotriz
secado
rendimiento
impermeabilizante
anticorrosivo
```

## Combinaciones

```text
"secado" + automotriz
"madera" + aplicación
"interior" + productos
```

## Casos especiales

```text
""
"   "
texto inexistente
acentos
mayúsculas
palabras parciales
```

---

# 41. Migración

La migración debe realizarse de forma controlada.

## Paso 1

Inventariar todas las FAQ actuales.

## Paso 2

Identificar duplicados.

## Paso 3

Crear fuente única.

## Paso 4

Migrar contenido existente sin pérdida.

## Paso 5

Cambiar componentes actuales para consumir la nueva fuente.

## Paso 6

Comprobar Home y `/preguntas-frecuentes`.

## Paso 7

Eliminar únicamente datos duplicados que hayan quedado comprobablemente sin referencias.

Nunca borrar archivos o componentes sólo porque parezcan antiguos.

Buscar imports/referencias primero.

---

# 42. Fases de implementación

## Fase 1 — Auditoría

- leer `AGENTS.md`;
- inspeccionar estructura;
- localizar FAQ actual;
- localizar datos;
- identificar bloques FAQ reutilizados;
- revisar infraestructura de persistencia/admin/auth;
- revisar catálogo y relaciones de producto.

Entregar primero un resumen corto de hallazgos en la salida de Codex antes de modificar.

## Fase 2 — Modelo y fuente única

- crear modelo;
- migrar FAQ;
- preparar categorías;
- tags;
- keywords;
- relaciones con productos.

## Fase 3 — Página pública

- buscador;
- filtros;
- acordeones;
- tags;
- productos relacionados;
- estados vacíos;
- responsive.

## Fase 4 — SEO

- metadata;
- canonical;
- semántica;
- structured data sólo si corresponde.

## Fase 5 — Administración

Si existe infraestructura segura y persistente:

- listado;
- alta;
- edición;
- publicación;
- archivado;
- categorías;
- tags;
- relaciones.

Si no existe infraestructura suficiente, implementar hasta el límite seguro descrito en la sección 11 y documentar el bloqueo exacto.

## Fase 6 — Integraciones

- Home FAQ;
- destacados;
- enlaces de productos;
- analítica si es segura y ya soportada.

## Fase 7 — Validación

- lint;
- build;
- pruebas manuales;
- performance;
- git diff.

---

# 43. Criterios de aceptación

La implementación se considera correcta cuando:

- [ ] Existe una única fuente de FAQ.
- [ ] `/preguntas-frecuentes` funciona correctamente.
- [ ] El usuario puede buscar por palabras.
- [ ] La búsqueda funciona con y sin acentos.
- [ ] Se puede filtrar por categoría.
- [ ] Se puede filtrar por tags.
- [ ] Se pueden asociar líneas de producto.
- [ ] Se pueden relacionar productos existentes.
- [ ] Los enlaces de productos usan IDs reales.
- [ ] Existe estado sin resultados.
- [ ] Se pueden limpiar filtros.
- [ ] La URL conserva razonablemente el estado mediante query params.
- [ ] Las FAQ destacadas pueden reutilizarse en Home.
- [ ] No quedan arrays duplicados de FAQ en componentes activos.
- [ ] No se modifican IDs del catálogo.
- [ ] No se rompen `categoria` ni `microcategoria`.
- [ ] No se agregan dependencias innecesarias.
- [ ] No se exponen secretos.
- [ ] La administración no queda públicamente accesible.
- [ ] Los datos administrativos persisten realmente cuando dicha infraestructura está disponible.
- [ ] La página funciona con teclado.
- [ ] Funciona correctamente en móvil y escritorio.
- [ ] Metadata y canonical son correctos.
- [ ] No existen errores nuevos de lint.
- [ ] `npm run build` termina correctamente.
- [ ] No existen cambios accidentales fuera del alcance.

---

# 44. Validación obligatoria antes de finalizar

Ejecutar:

```bash
git status
git diff
npm run lint
npm run build
```

Si durante el trabajo se modifican referencias pertenecientes a los activos externos definidos por IPESA:

```bash
npm run verify:external-assets
```

Probar manualmente:

```text
/
/preguntas-frecuentes
/productos
/producto/[id]
```

Y cualquier otra ruta modificada.

Para el flujo FAQ probar:

1. carga inicial;
2. búsqueda;
3. búsqueda sin acentos;
4. filtros;
5. combinación de filtros;
6. limpiar;
7. abrir/cerrar FAQ;
8. productos relacionados;
9. navegación atrás/adelante;
10. URL directa con filtros;
11. móvil;
12. escritorio;
13. teclado;
14. FAQ destacadas del Home;
15. estados vacíos.

---

# 45. Performance

Después de implementar, comparar la ruta de FAQ antes/después si existe línea base disponible.

Reportar como mínimo:

```text
Route
First Load JS antes
First Load JS después
Diferencia
```

No afirmar mejoras de rendimiento sin medición.

La implementación NO debe importar innecesariamente todo el catálogo a un Client Component sólo para resolver nombres de productos.

Resolver datos relacionados en servidor o crear un dataset mínimo.

---

# 46. Entregables

Al terminar, Codex deberá entregar:

## Código

Todos los cambios necesarios para la funcionalidad.

## Resumen

```text
Qué se implementó
```

## Arquitectura

```text
Cómo se almacenan las FAQ
Cómo funciona búsqueda
Cómo funcionan categorías/tags
Cómo se relacionan productos
Cómo funciona administración
```

## Archivos

Lista de archivos:

```text
creados
modificados
eliminados
```

## Validaciones

Resultado de:

```text
npm run lint
npm run build
npm run verify:external-assets
```

Este último sólo cuando aplique.

## Pruebas manuales

Indicar qué flujos se probaron.

## Pendientes

Cualquier dependencia externa, credencial, autenticación, base de datos o contenido que deba proporcionar IPESA.

No ocultar limitaciones.

---

# 47. Requerimientos de información por parte de IPESA

La implementación técnica debe quedar preparada aun cuando el contenido inicial sea limitado.

Para alimentar correctamente la base, IPESA deberá proporcionar posteriormente:

```text
Pregunta
Respuesta oficial
Categoría
Línea de producto
Producto(s) relacionado(s)
Aplicación
Tags
Palabras clave/sinónimos
Orden
Destacada sí/no
Estado
```

Formato recomendado para carga masiva:

```text
Excel / CSV
```

Columnas sugeridas:

```text
ID
Pregunta
Respuesta
Categoría
Tema
Línea
Productos
Tags
Keywords
Destacada
Orden
Estado
```

No inventar respuestas técnicas para completar registros faltantes.

---

# 48. Preparación para carga masiva

Si el sistema administrativo/persistencia existente lo permite sin ampliar excesivamente el alcance, diseñar el servicio de datos para admitir posteriormente importaciones CSV/Excel.

NO es requisito crear el importador Excel dentro de esta primera implementación salvo que ya exista infraestructura reutilizable.

La prioridad es que el modelo no impida agregarlo después.

---

# 49. Posibles mejoras futuras — NO implementar salvo que ya sean triviales

Dejar la arquitectura lista pero no aumentar innecesariamente el alcance con:

- autocompletado;
- sugerencias mientras se escribe;
- sinónimos administrables;
- métricas de preguntas sin respuesta;
- votación “¿Te fue útil?”;
- preguntas relacionadas automáticas;
- IA generativa;
- chatbot conectado a FAQ;
- búsqueda semántica;
- embeddings;
- motor vectorial;
- importación Excel;
- versionado editorial;
- workflow de aprobación;
- historial de cambios.

Estas funciones pertenecen a fases posteriores.

---

# 50. Preparación para futura IA

Aunque NO se implementará IA en esta fase, estructurar los datos de manera que una futura integración pueda consumir:

```text
question
answer
category
tags
keywords
products
lines
status
updatedAt
```

No almacenar todo como HTML opaco.

Esto permitirá en el futuro:

```text
FAQ
+
fichas técnicas
+
productos
+
documentación
↓
buscador semántico / asistente IPESA
```

sin volver a reconstruir la base de conocimiento.

---

# 51. Restricciones explícitas

NO:

- cambiar IDs de producto;
- modificar estructuras del catálogo sin necesidad;
- cambiar Analytics/GTM;
- exponer API keys;
- agregar un CMS SaaS por iniciativa propia;
- agregar un motor externo de búsqueda;
- agregar dependencias grandes para búsqueda;
- duplicar FAQ;
- modificar masivamente `server.js`;
- convertir toda la página en Client Component;
- guardar administración en `localStorage`;
- implementar endpoints POST/PUT/DELETE sin autorización;
- usar HTML no sanitizado;
- refactorizar áreas no relacionadas;
- alterar documentos técnicos;
- eliminar backups sin autorización;
- modificar activos externos fuera del alcance.

---

# 52. Instrucción final para Codex

Implementa esta funcionalidad directamente sobre el repositorio actual de IPESA.

Trabaja de forma incremental.

Antes de editar:

1. lee `AGENTS.md`;
2. inspecciona la implementación actual;
3. identifica la fuente actual de FAQ;
4. encuentra todas sus referencias;
5. revisa la infraestructura disponible para persistencia y administración;
6. revisa cómo se representan productos/categorías.

Después implementa la solución siguiendo los contratos existentes.

No asumas estructuras que puedas verificar en el repositorio.

Cuando exista conflicto entre esta especificación y una realidad comprobable del proyecto, adapta la implementación conservando el objetivo funcional y documenta la decisión.

Prioridades, en orden:

```text
1. Integridad del sitio
2. Seguridad
3. Contenido técnico correcto
4. Funcionalidad
5. SEO
6. Accesibilidad
7. Rendimiento
8. Mantenibilidad
```

Al finalizar, no respondas únicamente “implementado”.

Entrega:

- resumen de cambios;
- arquitectura resultante;
- archivos modificados;
- validaciones ejecutadas;
- resultados;
- limitaciones o pendientes;
- requerimientos que deba proporcionar IPESA.

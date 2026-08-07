# Catálogo de productos IPESA

Fecha de actualización: 2026-08-07.

## Alcance

La ruta `/productos` presenta un catálogo buscable, clasificado y paginado. La actualización reemplaza el filtro monolítico anterior por una taxonomía única, reduce la cabecera visual, elimina el preloader de pantalla completa y limita cada página a 12 tarjetas organizadas como 4 columnas por 3 filas en escritorio.

## Arquitectura de datos

```text
src/data/productos.js
  ├─ catalogoVersion
  ├─ categoriasCatalogo
  ├─ categorias (tarjetas de Home)
  ├─ productos (colección canónica)
  └─ articulos (alias histórico, sin copia de datos)

src/lib/products/catalog.mjs
  ├─ normalización
  ├─ índice de búsqueda
  ├─ búsqueda y ranking
  ├─ filtros
  └─ modelo de paginación
```

El catálogo dejó de residir en `src/components/server.js`. `productos[].id` es el identificador público usado por `/producto/[id]`; no se cambió ningún ID público válido. Los campos históricos `categorie`, `subcategorie` y `microcategorie` se conservan para mantener navegación y `localStorage`. `categoriasCatalogo` define las etiquetas y asociaciones válidas para cinco líneas y 29 subcategorías.

`id_number` se conserva como dato legado, pero no identifica rutas ni relaciones. Los valores 18 y 109 ya estaban repetidos; ningún consumidor activo depende ahora de ese campo. La integridad pública se valida sobre `productos[].id`.

## Correcciones de clasificación

- `color-para-cemento` pasó de una clasificación vacía a `decorativa > complementos`.
- `fosfatizante` y `desengrasante` dejaron de aparecer como industriales; ahora pertenecen a `automotriz > preparación de superficies`.
- Se retiró la segunda entrada idéntica `esponja-premium-roja`, que repetía el mismo ID público, nombre, imagen y clasificación. El catálogo pasa de 138 registros a 137 productos con IDs públicos únicos.

No se modificaron descripciones técnicas, fichas, hojas de seguridad, presentaciones ni IDs públicos restantes.

## Actualización comercial de Acritek 360

La ficha pública `/producto/acritek` se actualizó con la información aprobada por el cliente:

- se retiraron los bloques `Acabados` y `Colores` eliminando exclusivamente `acabados`, `acabados2` y `gama` de Acritek;
- se retiró el acceso interactivo al archivo/paleta de colores eliminando su campo `color`;
- se retiró `Ficha de Colores` y la referencia remota `fichas_colores/acritek.pdf`;
- se conservan sin cambios la Ficha Técnica, Hoja de Seguridad, descripción, atributos, capacidades y rendimiento;
- se agregó el campo estructurado `disponible_en` con `7000 Color Blanco` y `7081 Base V1`.

`Producto.jsx` sólo muestra el bloque `Disponible en` cuando el arreglo existe y contiene elementos. Los demás productos continúan usando sus campos históricos. `verify:product-data` fija esta configuración para evitar que el contenido retirado reaparezca accidentalmente en Acritek. El cambio y sus comprobaciones están detallados en `docs/ACRITEK-360.md`.

## Consumidores afectados

- `/productos` importa la colección y taxonomía desde `src/data/productos.js`.
- `/producto/[id]` busca el producto en el Server Component y entrega sólo ese registro a `Producto.jsx`; el navegador ya no recibe todo el catálogo para mostrar una ficha.
- Home resuelve en servidor las cuatro tarjetas de línea y `vintek` para la calculadora; `Inicio.jsx` ya no importa los 137 productos.
- El repositorio FAQ resuelve `productIds` desde la nueva colección exclusivamente en servidor.
- `/producto/[id]` obtiene desde el repositorio FAQ hasta cinco respuestas: primero vínculos editoriales exactos y después coincidencias controladas por subcategoría/línea.
- `/productos` enlaza su búsqueda activa o línea seleccionada con `/preguntas-frecuentes`; el FAQ devuelve tarjetas enriquecidas sólo para los productos relacionados.
- Los verificadores FAQ y de documentos externos leen la nueva ubicación.

## Búsqueda

El buscador aparece antes de filtros y cabecera. Desde dos caracteres muestra hasta seis sugerencias con:

- imagen;
- nombre;
- línea;
- subcategoría;
- extracto de descripción.

Admite ratón, tacto y teclado. Flecha arriba/abajo cambia la sugerencia activa, Escape cierra la lista y Enter aplica la búsqueda al grid. El botón `Buscar` ejecuta el mismo flujo.

La normalización convierte a minúsculas, elimina acentos y compacta signos/espacios. El índice incluye nombre, nombre secundario, línea, subcategoría, IDs históricos de clasificación y descripción. El ranking prioriza nombre exacto, inicio del nombre, coincidencia dentro del nombre y después clasificación/descripción. Una búsqueda confirmada es global; al elegir una línea o subcategoría se limpia y vuelve al modo clasificado.

## Presentación y carga

- La cabecera usa el fondo de la línea con una altura observada de 160 px en escritorio y 140 px en móvil, en lugar del bloque proporcional anterior de aproximadamente 44.25 % del ancho.
- El sidebar de escritorio ocupa 270 px; en móvil se sustituye por dos selects compactos.
- El grid usa una, dos, tres o cuatro columnas según el espacio; desde `xl` mantiene cuatro columnas y `ITEMS_PER_PAGE = 12`, equivalente a 4 × 3.
- Las 12 imágenes usan `next/image`, espacio cuadrado reservado, `loading="lazy"`, `sizes` responsivo y skeleton hasta `onLoad`.
- Las tarjetas entran con una transición escalonada de 480 ms. `prefers-reduced-motion` desactiva la animación.
- Se eliminó el preloader de pantalla completa, su espera de 600 ms y su salida de seguridad de 8 segundos. La interfaz y el texto están disponibles inmediatamente.
- El paginador aparece una sola vez, usa botones nativos, estados deshabilitados, `aria-current`, anterior/siguiente, páginas cercanas y elipsis.

## Persistencia

Se mantienen exactamente las claves:

```text
categoria
microcategoria
```

Al entrar directamente a `/productos`, los valores se validan contra `categoriasCatalogo`. Una subcategoría ajena a la línea almacenada se descarta. Cambiar línea elimina `microcategoria`; cambiar subcategoría guarda ambos valores. La búsqueda no sobrescribe preferencias del catálogo.

## Validación y mantenimiento

`npm run verify:product-data` comprueba:

- versión 2;
- 137 productos e IDs públicos únicos;
- cinco líneas y 29 subcategorías válidas;
- pertenencia correcta de cada producto;
- existencia exacta de 151 imágenes locales referenciadas;
- fondos de las cinco líneas;
- normalización con y sin acentos;
- búsqueda por nombre y descripción;
- las clasificaciones corregidas.

Flujo obligatorio después de editar el catálogo:

```text
npm run verify:product-data
npm run verify:faq-data
npm run lint
npm run build
npm run verify:external-assets  # si cambian URLs técnicas o categorías
```

La validación en navegador cubrió 1440 × 1000 y 390 × 844, búsqueda `fosfatizante`, sugerencias enriquecidas, Enter, filtros, persistencia después de recargar, paginación, 12 tarjetas, cuatro columnas de escritorio, una columna móvil, lazy loading, animación, ausencia del preloader, navegación a `/producto/vintek`, Home y enlaces de producto desde FAQ. Después de retirar la carta de colores de Acritek, `verify:external-assets` confirma HTTP 200 para 211 URLs remotas: 206 PDF y cinco imágenes JPEG.

## Rendimiento medido

| Ruta | Antes | Después | Diferencia |
| --- | ---: | ---: | ---: |
| `/productos` First Load JS | 294 kB | 128 kB | -166 kB (-56.5 %) |
| `/` First Load JS | 319 kB | 299 kB | -20 kB (-6.3 %) |
| `/producto/[id]` First Load JS | 348 kB | 327 kB | -21 kB (-6.0 %) |

El código propio de `/productos` aumenta de 6.49 kB a 27.6 kB porque ahora incluye búsqueda, sugerencias, clasificación, tarjetas y paginación propias; aun así, el First Load JS cae al retirar Material Tailwind, Font Awesome, Swiper y el preloader de esta ruta. No se agregaron dependencias.

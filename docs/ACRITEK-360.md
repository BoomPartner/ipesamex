# Actualización de Acritek 360

Fecha de implementación: 2026-08-07.

## Solicitud aplicada

La ruta `/producto/acritek` deja de presentar la información general de acabados y catálogo de colores que ya no corresponde al producto:

- `Acabados`: “31 colores brillantes” y “Mate solo blanco”.
- `Colores`: “32 colores de línea y 3,454 colores en sistema Infinite Color”.
- botón y modal `Colores`, antes alimentados por la paleta compartida `vintek`.
- enlace `Ficha de Colores` hacia `https://tecknum.com/ipesa_public/fichas_colores/acritek.pdf`.

En su lugar, la ficha muestra:

```text
DISPONIBLE EN
7000 Color Blanco
7081 Base V1
```

## Implementación

La colección canónica `src/data/productos.js` conserva el mismo ID público `acritek` y agrega:

```js
disponible_en: [
  '7000 Color Blanco',
  '7081 Base V1',
]
```

Sólo para este registro se retiraron `color`, `gama`, `acabados`, `acabados2` y `fichas_colores`. No se modificaron nombre, descripción, atributos, capacidades, rendimiento, imagen, Ficha Técnica, Hoja de Seguridad, categoría, subcategoría ni relaciones FAQ.

`src/components/Producto.jsx` renderiza `Disponible en` de manera condicional cuando `disponible_en` es un arreglo con elementos. La lógica histórica permanece intacta para el resto del catálogo.

## Integridad y verificación

`scripts/verify-product-data.mjs` valida expresamente:

- los dos valores y su orden exacto;
- la ausencia de los cinco campos retirados;
- los 137 IDs y la taxonomía completa del catálogo;
- las imágenes locales referenciadas.

La carta retirada reduce el inventario técnico a 215 referencias y 211 URLs únicas. No se eliminó ni alteró el archivo alojado en Tecknum; simplemente dejó de publicarse desde la ficha de Acritek.

Comandos obligatorios para este cambio:

```text
npm run verify:product-data
npm run verify:faq-data
npm run verify:external-assets
npm run lint
npm run build
```

Resultados de esta implementación:

```text
verify:product-data       correcto: 137 productos y 151 imágenes locales
verify:faq-data           correcto: 45 FAQ y cobertura contextual para 137 productos
verify:external-assets    correcto: 211/211 HTTP 200; 206 PDF y 5 JPEG
lint                      sin errores; permanecen 2 warnings conocidos en Colores.jsx
build                     correcto; /producto/[id] conserva 327 kB de First Load JS
```

La revisión de producción local confirmó HTTP 200 en `/producto/acritek`, presencia de `7000 Color Blanco` y `7081 Base V1`, y ausencia de los dos textos de acabados, el conteo anterior de colores, `Ficha de Colores` y la URL retirada. También se verificó `/producto/vintek` como control: conserva sus acabados y carta de color, por lo que el cambio está aislado a Acritek. Las vistas de 1440 × 1100 y 390 × 2200 muestran el nuevo bloque dentro de la información principal.

# Navegación responsive y promoción FAQ en Home

Fecha de implementación: 2026-08-07.

## Problema corregido

El encabezado combinaba dos puntos de quiebre incompatibles: la navegación completa se ocultaba hasta 1640 px mediante `.ocultar`, mientras el botón hamburguesa se ocultaba desde 1536 px con `2xl:hidden`. Entre 1536 y 1640 px podían desaparecer ambos controles. El logo, todos los enlaces y cinco iconos sociales también competían por el ancho disponible.

## Comportamiento responsive

- Menos de 1440 px: se presenta el logo y un botón de menú compacto.
- Desde 1440 px: se presenta la navegación completa y desaparece el botón compacto.
- Desde 1800 px: se añaden los accesos sociales al encabezado. En anchos menores siguen disponibles en el footer.
- El panel compacto limita su altura al viewport y permite desplazamiento vertical, por lo que ningún enlace queda cortado.
- El drawer FAQ mantiene un ancho máximo del 100 % del viewport.
- Se eliminó la clase global `.ocultar`; la visibilidad ahora depende de un único contrato de breakpoint en `Navbar.jsx`.

El botón compacto es un `button` real con `aria-label`, `aria-expanded`, `aria-controls` y foco visible. El logo usa navegación interna con `next/link`.

## Acceso a preguntas frecuentes

La navegación completa incluye una acción visible `FAQ`. El menú compacto incluye `Preguntas frecuentes` como acción destacada. Ambas llevan a `/preguntas-frecuentes`; el drawer de preguntas destacadas continúa disponible desde los accesos que ya lo utilizaban.

Home incorpora `HomeFaqSection.jsx` inmediatamente después del carrusel principal. La sección anuncia el centro de ayuda, muestra el número real de preguntas publicadas, ofrece tres preguntas destacadas y enlaza al buscador con cada pregunta precargada.

## Fuente y límite de datos

`src/app/page.jsx` obtiene `getHomeFaqSummary()` en el servidor. El resumen contiene sólo:

```text
total
faqs[].id
faqs[].question
```

La fuente permanece exclusivamente en `src/data/faqs.json`. No se duplica contenido editorial ni se envía el dataset FAQ completo a Home.

## Mantenimiento

1. Mantener sincronizados el `matchMedia('(max-width: 1439px)')` de `Navbar.jsx` y el `@media (min-width: 1440px)` de `globals.css` si se cambia el punto de quiebre.
2. No volver a crear reglas globales que dejen un intervalo sin menú completo ni botón compacto.
3. Controlar la presencia en Home con `featured` y `sortOrder` dentro de `faqs.json`.
4. Ejecutar `npm run verify:faq-data`, `npm run lint` y `npm run build`.
5. Revisar `/` y una ruta interior en móvil, tablet, escritorio y el intervalo cercano a 1440 px; comprobar apertura, cierre, scroll, foco y enlaces FAQ.

## Validación

Se ejecutaron:

```text
npm run verify:faq-data  correcto: 45 publicadas y 5 destacadas
npm run lint             sin errores; permanecen 2 warnings conocidos en Colores.jsx
npm run build            correcto; / permanece en 319 kB de First Load JS
```

La prueba de navegador comprobó 390, 1439, 1440 y 1800 px. En todos los anchos se mantuvo `scrollWidth <= innerWidth`, aparecieron exactamente tres preguntas en Home y el total correspondió a las 45 publicadas. El botón compacto estuvo disponible por debajo de 1440 px; el menú completo apareció desde 1440 px con todos sus enlaces dentro del viewport; las redes se incorporaron a 1800 px. También se verificaron la apertura y estado `aria-expanded` del panel, su enlace FAQ y las vistas de Home en móvil y escritorio.

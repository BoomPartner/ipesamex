# Carrusel principal de inicio

Fecha de integración local: 2026-08-07.

## Objetivo

El carrusel principal de `/` se ejecuta dentro de la aplicación Next.js. Sustituye el `iframe` que cargaba `https://tecknum.com/slider_ipesa/index_01.php` y elimina de este flujo la dependencia de un documento PHP externo, Bootstrap, jQuery y los CDN utilizados por ese documento.

La fuente entregada para la migración fue `C:\xampp\htdocs\slider_ipesa\index_01.php`. Se conservan el orden de las diez diapositivas y el intervalo original de 4 segundos.

## Implementación

- `src/components/Carrusel.jsx` contiene el inventario y la lógica del carrusel con React, sin agregar ni cargar una biblioteca de carrusel en la ruta inicial.
- `public/home/slider-principal/` contiene únicamente los diez JPG referenciados por `index_01.php`; no se copiaron las imágenes sin uso del proyecto fuente.
- La primera imagen se marca como prioritaria por ser candidata a LCP. Las demás mantienen la carga diferida de `next/image`.
- El contenedor reserva la proporción del banner antes de cargar para reducir cambios de layout. `object-fit: contain` evita recortar texto o condiciones impresas, incluida la pieza panorámica de la Ruta del Color.
- Las flechas funcionan con teclado, tienen mensajes en español para tecnologías de asistencia y un foco visible.
- La reproducción automática se detiene mientras el puntero o el foco están sobre el carrusel y se desactiva cuando el sistema solicita movimiento reducido. En pantallas táctiles se puede navegar con un gesto horizontal.

No se modificaron los archivos de respaldo `Carrusel copy*.jsx`; no forman parte de la implementación importada por `Inicio.jsx`.

## Inventario y orden

1. `banner_03062026.jpg`
2. `banner_20260410.jpg`
3. `banner_20260410_2.jpg`
4. `banner_20260410_3.jpg`
5. `banner_20260410_4.jpg`
6. `banner_01_2026.jpg`
7. `banner_04.jpg`
8. `banner_05.jpg`
9. `banner_06.jpg`
10. `banner_01.jpg`

## Mantenimiento

Para cambiar una campaña:

1. Copiar el nuevo recurso a `public/home/slider-principal/` sin sobrescribir otro archivo con contenido distinto.
2. Añadir, retirar o reordenar su entrada en `slides` dentro de `src/components/Carrusel.jsx`.
3. Declarar sus dimensiones reales y un texto alternativo que comunique la oferta o el producto principal.
4. Buscar todas las referencias antes de retirar un banner. No conservar archivos que ya no estén referenciados.
5. Ejecutar `npm run lint` y `npm run build`, y revisar `/` en móvil y escritorio, con teclado y con `prefers-reduced-motion`.

Estos banners no pertenecen a las familias técnicas externalizadas (`fichas`, `fichas_colores`, `FICHAS_TECNICAS`, `fondo-producto` y `seguridad`), por lo que permanecen como recursos locales del sitio.

## Resultado de compilación

La compilación de producción posterior a la migración deja `/` en 7.12 kB de código propio y 322 kB de First Load JS. Frente a la línea base documentada de 332 kB, la ruta reduce 10 kB y ya no depende de la latencia, disponibilidad ni JavaScript del iframe externo. Los diez JPG locales suman aproximadamente 5.05 MiB antes de la optimización y negociación de formato que realiza `next/image`.

La validación local incluyó `npm run lint`, `npm run build`, respuesta HTTP 200 de `/` y de cada banner, revisión del HTML sin el `iframe` anterior y capturas de la portada en tamaños de escritorio (1440 × 900) y móvil (390 × 844). Se mantienen las dos advertencias de Hooks ya conocidas en `Colores.jsx`; el carrusel no agregó advertencias.

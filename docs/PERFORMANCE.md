# Rendimiento y despliegue

Fecha de la revisión: 2026-08-04.

## Objetivo y alcance

Esta fase mejora carga inicial, navegación, caché, renderizado y seguridad sin comprimir, sustituir ni eliminar imágenes. También preserva los cambios de catálogo y documentos realizados en paralelo.

## Diagnóstico

Los principales problemas estructurales encontrados fueron:

- `Cache-Control: no-store` se aplicaba globalmente, incluso sobre chunks con hash y recursos estáticos. Esto obligaba al navegador y a la infraestructura a descargar contenido repetido.
- El shell ocultaba toda la aplicación durante 1.3 segundos y solo mostraba un preloader. Además de empeorar la percepción, ocultaba errores de prerenderizado.
- El chatbot y Metricool se cargaban durante la fase inicial aunque no fueran necesarios para mostrar o usar la navegación.
- `/sucursales` importaba de inicio unas 11,500 líneas de ubicaciones y creaba más de mil tarjetas durante la hidratación.
- Varias rutas que solo muestran un `iframe` cargaban estado, listeners y dependencias que no utilizaban.
- `react-player` se incluía desde el inicio en la ficha de producto aunque el diálogo de video estuviera cerrado.
- La portada cargaba el carrusel secundario antes de entrar al viewport y la limpieza de GSAP eliminaba instancias globales ajenas.
- Navbar, footer y los cuatro submenús escuchaban cada evento `resize` y actualizaban React solo para aplicar estilos responsivos.
- El chatbot exponía una credencial `NEXT_PUBLIC_*` en el navegador.
- El documento declaraba `lang="en"`, no tenía `metadataBase` y cargaba una fuente remota que estaba anulada por el CSS global.

## Cambios aplicados

### Caché y shell

- Se retiró el encabezado global `no-store`; Next.js vuelve a administrar correctamente el caché de navegación y de `/_next/static`.
- No se marcó todo `public` como inmutable porque el catálogo reemplaza algunos documentos conservando la URL. Una política de largo plazo requiere versionar nombres o usar un CDN con invalidación.
- Se eliminó la espera fija de 1.3 segundos. Navbar y contenido se renderizan inmediatamente.
- `Provider.jsx` vuelve a ser una composición de servidor; cada consumidor interactivo declara su frontera cliente.
- Se memorizó el valor y los callbacks del contexto global para evitar notificaciones por identidades nuevas sin cambios reales.

### Carga diferida

- El chatbot se monta después del evento `load` y cuando el navegador queda libre.
- Metricool usa `lazyOnload`.
- El carrusel secundario de la portada se importa al entrar en su zona visible.
- `react-player/lazy` solo se monta al abrir el diálogo de video del producto.
- El dataset de sucursales se descarga únicamente al realizar la primera búsqueda.

### Menos JavaScript y trabajo del navegador

- Contacto, lealtad, nueva generación y tips eliminaron estado, listeners y dependencias que no utilizaban.
- Tips dejó de importar datos, ReactPlayer y Material Tailwind que no utilizaba.
- Sucursales dejó de renderizar más de mil tarjetas al entrar; ahora muestra instrucciones, busca por código postal/estado y renderiza únicamente resultados.
- Navbar y footer usan CSS responsivo. Navbar conserva un único `matchMedia`, compartido con los cuatro submenús, que solo reacciona cuando se cruza el breakpoint del menú.
- Se corrigieron accesos a `localStorage` durante renderizado y un handler que se ejecutaba al construir la portada. `/` y `/productos` vuelven a prerenderizarse de forma estática sin depender del preloader.
- Los iframes conservan sus contenedores responsivos originales de styled-components. Se restauraron después de comprobar que las alturas de Tailwind y `loading="lazy"` alteraban su presentación. El resto de las simplificaciones permanece.

### Carrusel principal local

- El carrusel principal de `/` dejó de cargar `https://tecknum.com/slider_ipesa/index_01.php` mediante un `iframe`.
- Las diez imágenes utilizadas por ese documento se integraron en `public/home/slider-principal/`; no se copiaron los recursos sin referencia del proyecto fuente.
- La implementación nativa usa React y `next/image`, conserva el ciclo de 4 segundos sin cargar una biblioteca de carrusel en la ruta inicial y elimina para este flujo el documento PHP, Bootstrap, jQuery y sus solicitudes a CDN.
- El carrusel reserva su proporción para evitar CLS, conserva completa cada pieza con `object-fit: contain`, ofrece controles accesibles y desactiva la reproducción automática con `prefers-reduced-motion`.
- El inventario y el procedimiento de mantenimiento están en `docs/HOME-SLIDER.md`.
- `npm run build` deja `/` en 7.12 kB de código propio y 322 kB de First Load JS: 10 kB menos que la línea base anterior de 332 kB. Los diez JPG agregan aproximadamente 5.05 MiB al contenido estático y elevan el inventario actual de `public/` a 447 archivos y 297.2 MiB.

### Integridad, seguridad y SEO

- El navegador ahora llama a `/api/chat`; la credencial y el identificador del agente se usan en el servidor.
- Se validan longitud y tipo del mensaje, se limita la espera a 20 segundos y no se devuelven detalles internos del proveedor.
- Se recomiendan `CODEGPT_API_KEY` y `CODEGPT_AGENT_ID`. Los nombres `NEXT_PUBLIC_*` anteriores siguen aceptándose temporalmente en el servidor para permitir una migración sin interrupción; deben retirarse del entorno después de configurar los nombres privados.
- Se definió `metadataBase`, el idioma del documento cambió a español y se retiró una fuente externa no utilizada.
- La búsqueda de sucursales tiene formulario, label, estado de carga, región `aria-live` y enlaces externos protegidos.

### Externalización de fichas y fondos

- Las referencias a `fichas`, `fichas_colores`, `FICHAS_TECNICAS`, `fondo-producto` y `seguridad` ahora apuntan directamente a `https://tecknum.com/ipesa_public/`, conservando cada subruta y nombre de archivo.
- Se retiraron esas cinco carpetas de `public`; `HOJAS_SEGURIDAD` permanece local porque no formó parte de la migración solicitada.
- Se añadió `npm run verify:external-assets` para comprobar todo el inventario remoto sin descargar los cuerpos de los PDF. La validación obtuvo HTTP 200 para las 212 URLs únicas, con 207 respuestas `application/pdf`, cinco `image/jpeg` y sin políticas que bloqueen su incrustación.
- Dos artículos usaban `Automotriz` con una mayúscula incompatible con el nombre real `automotriz.jpg`; se normalizó la categoría para conservar el fondo y la clasificación del catálogo en entornos sensibles al caso.
- La ficha de producto ya no genera temporalmente `fondo-producto/undefined.jpg` durante el render inicial; espera a disponer de una categoría antes de asignar el fondo externo.
- El contrato, mapa y procedimiento de mantenimiento están en `docs/EXTERNAL-ASSETS.md`.

## Resultados de compilación

Medición comparable con `npm run build`, antes y después de esta fase:

| Ruta | First Load JS antes | Después | Reducción |
| --- | ---: | ---: | ---: |
| `/` | 358 kB | 332 kB | 26 kB (7.3%) |
| `/producto/[id]` | 358 kB | 351 kB | 7 kB (2.0%) |
| `/sucursales` | 309 kB | 124 kB | 185 kB (59.9%) |
| `/tips` | 282 kB | 104 kB | 178 kB (63.1%) |
| `/contacto` | 103 kB | 104 kB | +1 kB (1.0%) |
| `/lealtad` | 103 kB | 104 kB | +1 kB (1.0%) |
| `/nueva-generacion` | 103 kB | 104 kB | +1 kB (1.0%) |
| `/productos` | 298 kB | 298 kB | Sin cambio |

El JS compartido cambia de 87.8 kB a 88.3 kB (+0.5 kB) por la infraestructura global diferida. Los módulos pesados retirados del camino inicial quedan en chunks bajo demanda.

La compilación posterior a la externalización conserva `/producto/[id]` en 351 kB, `/productos` en 298 kB y el compartido en 88.3 kB. `/` pasa de la medición intermedia de 331 kB a 332 kB por las URLs absolutas incluidas en el catálogo cliente; el costo aproximado de 1 kB queda ampliamente separado de la reducción de 1,842.2 MB en el contenido que se publica desde `public`.

El lint pasó y las advertencias existentes bajaron de 12 a 2. La compilación pasó, agregó `/api/chat` como ruta dinámica y mantuvo las páginas de contenido como estáticas. Ya no aparece la advertencia de `metadataBase`.

## Corrección de carga inicial de `/productos`

Después de hacer seguro el acceso a `localStorage` para el prerenderizado, el estado inicial de categoría quedó en `null`. Como el catálogo solo se renderiza cuando existe una categoría, una visita directa a `/productos` con almacenamiento vacío mostraba únicamente navbar y footer; además, el fondo se construía con un valor `undefined`.

La ruta ahora usa `decorativa` como valor predeterminado estable tanto en servidor como en cliente, deriva desde el primer render sus productos, fondo, acordeón y paginación, y después de montar aplica las preferencias guardadas en `categoria` y `microcategoria`. Si no existe una categoría persistida, crea el mismo valor predeterminado en `localStorage`. Esto evita diferencias de hidratación, conserva los filtros guardados y elimina la solicitud de un fondo `undefined`.

La corrección se comprobó con una sesión limpia, sin datos previos de `localStorage`: se mostraron el menú de categorías, el fondo decorativo, las tarjetas y la paginación. No se modificaron imágenes, fichas, PDFs ni los datos comerciales del catálogo.

### Preloader y limpieza de consola

`/productos` conserva el catálogo prerenderizado detrás de un preloader de pantalla completa. El preloader permanece visible mientras React aplica la categoría persistida y el navegador carga y decodifica el fondo correspondiente y las primeras tres imágenes visibles del catálogo; después espera 600 ms y dos cuadros de renderizado antes de mostrar el contenido. Las demás imágenes mantienen carga diferida. Existe una salida de seguridad de 8 segundos ante un recurso ausente o una conexión interrumpida. No se reintrodujo el temporizador global que retrasaba todas las rutas.

La medición posterior con `npm run build` mantiene el JS compartido en 88.3 kB y deja `/productos` en 298 kB de First Load JS. El preloader específico aumentó aproximadamente 1 kB frente a la medición inmediatamente anterior de 297 kB, pero la ruta sigue igual que la línea base original y las demás páginas no cambian.

También se corrigieron los avisos locales observados en consola: el logo declara una proporción coherente con su SVG, los fragmentos repetidos tienen claves estables, las tarjetas usan el ID público del producto y los filtros controlados cuentan con `onChange` sin ejecutar dos veces el clic del contenedor. Los registros de depuración de Vercel Analytics y Fast Refresh son informativos; `ERR_BLOCKED_BY_CLIENT` al solicitar DoubleClick depende normalmente de extensiones o políticas del navegador y no representa un fallo del catálogo.

## Peso del despliegue

Después de retirar las cinco familias migradas, el directorio `public` mide aproximadamente 292.2 MB y contiene 437 archivos. La distribución observada es:

| Tipo | Archivos | Tamaño aproximado |
| --- | ---: | ---: |
| PNG | 207 | 157.1 MB |
| WebP | 98 | 48.1 MB |
| PDF | 55 | 43.8 MB |
| JPG/JPEG | 57 | 23.7 MB |
| MP4 | 1 | 19.3 MB |

La comparación con la medición anterior de 2,134.4 MB representa 1,842.2 MB menos en `public`, una reducción aproximada de 86.3%. Los PDF bajaron de 486 archivos y 1,886.6 MB a 55 archivos y 43.8 MB. El peso PDF restante corresponde a `public/HOJAS_SEGURIDAD`, que no se migró.

La reducción no modifica los bundles JavaScript, pero sí elimina estos archivos del inventario y transferencia del despliegue. A cambio, la disponibilidad de fichas y fondos depende ahora del origen Tecknum; por eso el verificador HTTP forma parte del flujo obligatorio cuando cambian las referencias.

## Siguientes fases recomendadas

1. Mantener el origen Tecknum con caché, versionado o redirects estables, y ejecutar `npm run verify:external-assets` antes de cada cambio de inventario.
2. Dividir `server.js` por dominio y resolver la ficha individual en el servidor para que `/producto/[id]` no envíe el catálogo completo.
3. Reemplazar gradualmente Material Tailwind en navbar y componentes globales por elementos accesibles y estilos locales; es la siguiente oportunidad importante para rutas que aún rondan 230–351 kB.
4. Consolidar listeners de scroll/resize restantes con CSS, `matchMedia` e IntersectionObserver, empezando por `Inicio`, `Nosotros`, `Tintometrico` y menús.
5. Ampliar las pruebas de integridad para IDs únicos, categorías válidas y existencia/caso exacto de los recursos que todavía permanecen en `public`.
6. Incorporar Lighthouse móvil y Web Vitals reales en producción. Las cifras de Next miden JavaScript, no latencia de iframes, terceros, red o peso visual.
7. Ejecutar la fase de optimización de imágenes cuando estén disponibles los originales y los criterios de calidad.

## Validación operativa

Para cada cambio de rendimiento:

```bash
npm run lint
npm run build
```

No ejecutes `next dev` y `next build` simultáneamente sobre el mismo `.next`; ambos procesos escriben allí y pueden producir errores falsos de páginas faltantes. Detén desarrollo durante la compilación y vuelve a iniciarlo al terminar.

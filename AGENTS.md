# AGENTS.md

## Alcance

Estas instrucciones aplican a todo el repositorio. Este proyecto es el sitio público de IPESA; prioriza estabilidad, integridad del catálogo, SEO, accesibilidad y rendimiento percibido. Haz cambios pequeños, verificables y directamente relacionados con la solicitud. No aproveches una tarea puntual para hacer refactorizaciones masivas.

## Stack y comandos

- Next.js 14.2 con App Router (`src/app`), React 18 y JavaScript/JSX.
- Tailwind CSS 3 y Material Tailwind; también se usan GSAP, Swiper, styled-components, Font Awesome, React Player y Vercel Analytics.
- Alias de importación: `@/*` apunta a `src/*`.
- Gestor de paquetes: npm. `package-lock.json` es la fuente de verdad.
- Desarrollo: `npm run dev`.
- Lint: `npm run lint`.
- Compilación de producción: `npm run build`.
- Producción local, después de compilar: `npm run start`.
- Integridad de documentos externos: `npm run verify:external-assets` (requiere acceso de red y comprueba las URLs con solicitudes `HEAD`).
- No hay suite de pruebas automatizadas configurada. Si una tarea agrega lógica no trivial, considera añadir pruebas enfocadas sin introducir un framework nuevo salvo que la tarea lo justifique.

## Mapa del proyecto

- `src/app/layout.jsx`: layout raíz, metadata global, proveedor de UI, Analytics, GTM y Google Analytics.
- `src/app/Provider.jsx`: shell global; monta navbar, chatbot diferido y footer. El preloader visual de `/productos` pertenece a `Productos.jsx` porque espera recursos propios del catálogo sin bloquear las demás rutas.
- `src/app/**/page.jsx`: rutas del App Router. Mantén las páginas como Server Components cuando no necesiten APIs del navegador, estado o efectos.
- `src/components/`: componentes visuales y de dominio. Muchos son Client Components y algunos son grandes; evita ampliar componentes monolíticos.
- `src/app/context/`: estado global compartido por navegación, producto, preguntas, calculadora y contacto.
- `src/components/server.js`: catálogo y contenido estático principal. A pesar del nombre, no es código exclusivo del servidor y actualmente se importa desde componentes cliente.
- `src/components/dataMapas.js`: conjunto grande de sucursales/ubicaciones, también enviado al cliente cuando se usa.
- `src/app/globals.css`: estilos globales y animaciones existentes.
- `public/`: imágenes, SVG, videos y las hojas que todavía permanecen bajo `HOJAS_SEGURIDAD`. Las familias `fichas`, `fichas_colores`, `FICHAS_TECNICAS`, `fondo-producto` y `seguridad` se sirven desde `https://tecknum.com/ipesa_public/` y no deben volver a agregarse al despliegue local.

## Contratos de integridad

- Trata los identificadores de productos y categorías como contratos públicos. `articulos[].id` alimenta `/producto/[id]`; `categorie`, `subcategorie` y `microcategorie` controlan filtros y navegación.
- Conserva la compatibilidad de las claves de `localStorage` `categoria` y `microcategoria`. Si cambias su formato o significado, actualiza de forma coordinada navbar, inicio, productos, novedades, tips y preguntas frecuentes.
- Al modificar `src/components/server.js`, valida IDs únicos, categorías válidas y existencia exacta de cada archivo referenciado. Respeta mayúsculas y minúsculas: producción puede usar un sistema de archivos sensible al caso.
- Conserva como contrato el origen `https://tecknum.com/ipesa_public/` para `fichas`, `fichas_colores`, `FICHAS_TECNICAS`, `fondo-producto` y `seguridad`. Mantén el nombre y la subruta exactos; ejecuta `npm run verify:external-assets` cuando agregues, retires o cambies una de estas referencias.
- `HOJAS_SEGURIDAD` no forma parte de esa migración y continúa bajo `public/HOJAS_SEGURIDAD`. No la conviertas a URL externa sin una solicitud y una verificación específicas.
- No renombres, muevas, reemplaces ni elimines archivos de `public/` sin buscar todas sus referencias. No comprimas PDF técnicos o de seguridad si eso pudiera alterar legibilidad, metadatos o validez documental.
- Mantén el contenido comercial, nombres, fichas, hojas de seguridad, teléfonos, enlaces y textos legales tal como fueron proporcionados, salvo que la solicitud exija cambiarlos.
- No edites archivos de respaldo con nombres `* copy*.jsx` como si fueran la implementación activa. Primero confirma mediante importaciones cuál archivo usa la aplicación. No los borres sin autorización explícita.
- Preserva UTF-8 y los acentos del contenido en español. No hagas reemplazos globales para corregir texto dañado sin revisar el origen y el alcance.
- No cambies IDs de Analytics/GTM, URLs de formularios/iframes, enlaces de redes sociales ni endpoints externos como parte de una optimización no relacionada.

## Reglas de implementación

- Respeta el límite Server/Client de Next.js. Añade `'use client'` solo donde sea imprescindible y evita convertir una página o un subárbol completo en cliente por conveniencia.
- No accedas a `window`, `document`, `localStorage` o `navigator` durante renderizado de servidor. Encapsula su uso en componentes cliente y efectos/eventos seguros.
- Todo `useEffect` que registre listeners, timers, GSAP/ScrollTrigger u otros recursos debe limpiar exactamente lo que creó. Evita listeners duplicados por render y cierres con estado obsoleto.
- No uses `ScrollTrigger.getAll().forEach(kill)` desde un componente: puede destruir animaciones ajenas. Conserva y limpia únicamente las instancias creadas por ese componente.
- Usa `next/link` para navegación interna y `next/image` para imágenes cuando sea compatible. Proporciona `alt` útil o `alt=""` si la imagen es decorativa, dimensiones estables y `priority` solo para recursos LCP realmente visibles al inicio.
- No agregues dependencias para resolver algo que pueda implementarse claramente con React, Next.js o utilidades ya instaladas. Si agregas o eliminas una dependencia, actualiza y entrega también `package-lock.json`.
- Sigue el estilo del archivo tocado, pero en código nuevo prefiere nombres descriptivos, comparación estricta (`===`), punto y coma de forma consistente y componentes pequeños con una responsabilidad clara.
- No dejes `console.log`, código comentado, variables/importaciones sin uso ni nuevas copias de archivos en código de producción.
- No silencies reglas de ESLint para ocultar problemas. Una excepción local requiere una razón concreta junto al código.

## Rendimiento

- Mide antes y después. Para cambios relevantes registra al menos salida de `npm run build`, tamaño de la ruta afectada y, cuando aplique, Lighthouse/Core Web Vitals en móvil.
- La línea base actual tiene First Load JS aproximado de 358 kB en `/` y `/producto/[id]`, 309 kB en `/sucursales`, 311 kB en `/decorador` y `/sistema-tintometrico`, y 298 kB en `/productos`. Evita aumentos injustificados.
- Tras externalizar los documentos indicados, `public/` contiene alrededor de 437 archivos y 292.2 MB. No dupliques activos remotos dentro del repositorio; antes de agregar un recurso local, confirma que no pertenezca a una de las cinco familias alojadas en Tecknum.
- `server.js` (~6,500 líneas), `dataMapas.js` (~11,500 líneas), `Producto.jsx`, `Productos.jsx` e `Inicio.jsx` son puntos calientes. No importes datasets completos en más Client Components. Prefiere dividir datos por dominio, cargar bajo demanda y usar imports dinámicos cuando reduzcan JavaScript real sin degradar UX o SEO.
- Reduce renders, estados duplicados y múltiples listeners de `resize`/`scroll`. Prefiere CSS responsivo, `matchMedia`, IntersectionObserver o una abstracción compartida cuando la medición confirme el beneficio.
- Lazy-load mapas, reproductores, chat, carruseles y widgets de terceros si están fuera del viewport. Reserva espacio para evitar CLS y comprueba que la interacción siga disponible.
- `next.config.js` aplica actualmente `Cache-Control: no-store` a todas las rutas. Es un objetivo potencial de mejora, pero no cambies la política global sin clasificar HTML, assets inmutables y documentos, y sin validar revalidación/despliegue.
- Evita cambios cosméticos que empeoren LCP, CLS, INP, navegación por teclado o consumo de datos móviles.

## Seguridad y privacidad

- Nunca muestres, copies, registres ni confirmes valores de `.env`. No agregues secretos al repositorio.
- Toda variable `NEXT_PUBLIC_*` queda expuesta en el bundle del navegador. No coloques credenciales privadas allí. El chatbot actualmente usa `NEXT_PUBLIC_API_KEY_CODE`; si se toca esa integración, trátala como deuda crítica y mueve la autenticación a una ruta/API del servidor antes de ampliar funcionalidad.
- No confíes solo en validación del cliente. Sanitiza y valida entradas en el límite que procesa o reenvía datos; no expongas mensajes internos de error al usuario.
- Para enlaces externos abiertos en otra pestaña usa `rel="noopener noreferrer"`.
- No introduzcas HTML sin sanitizar, `eval`, URLs construidas con entrada sin validar ni excepciones amplias de CSP/CORS.
- Los scripts de métricas, chat, formularios e iframes externos afectan privacidad y rendimiento. No agregues rastreadores ni nuevos terceros sin solicitud explícita.

## SEO, accesibilidad y experiencia

- Conserva o mejora metadata, canonical, Open Graph y semántica por ruta. Si trabajas en metadata, define correctamente `metadataBase` y verifica URLs absolutas de producción.
- El idioma principal es español; mantén copy, labels y mensajes consistentes y revisa `lang` del documento cuando la tarea abarque SEO/accesibilidad.
- Toda interacción debe funcionar con teclado, foco visible y lector de pantalla. Modales/drawers deben gestionar foco, Escape y bloqueo de fondo de manera apropiada.
- No bases información o estado únicamente en color o animación. Respeta `prefers-reduced-motion` al crear o modificar animaciones.
- Verifica al menos vista móvil y escritorio en cualquier cambio visual. Evita hidratar con una estructura distinta solo por depender de `window.innerWidth`.

## Validación obligatoria

Antes de terminar una modificación:

1. Revisa `git diff` y confirma que no haya archivos ajenos, secretos, artefactos de `.next` ni cambios accidentales de contenido/assets.
2. Ejecuta `npm run lint`.
3. Ejecuta `npm run build` para cambios en runtime, rutas, configuración, dependencias, datos o assets referenciados. Para documentación solamente, lint/build pueden omitirse si indicas que no eran necesarios.
4. Para cambios en documentos externos o fondos de producto, ejecuta `npm run verify:external-assets` y corrige cualquier respuesta distinta de HTTP 2xx antes de desplegar.
5. Prueba manualmente las rutas y flujos afectados. Para catálogo/navegación incluye `/`, `/productos`, `/producto/[id]`, persistencia de filtros y regreso/navegación directa. Para layout global revisa además navbar, footer, chatbot y una ruta estática.
6. Reporta con claridad comandos ejecutados, resultado y advertencias que sigan presentes. No declares una mejora de rendimiento sin una medición comparable.

## Línea base conocida

- Al crear este archivo, `npm run lint` terminaba con 12 advertencias. Después de la fase estructural y de la corrección de `/productos` documentadas en `docs/PERFORMANCE.md`, quedan 2 advertencias de dependencias de Hooks en `Colores`.
- `npm run build` termina correctamente. `metadataBase` ya está definido; permanece el aviso de `caniuse-lite` desactualizado.
- La línea base posterior a la optimización, la restauración visual de iframes, el preloader del catálogo y la externalización de activos es 332 kB en `/`, 351 kB en `/producto/[id]`, 124 kB en `/sucursales`, 298 kB en `/productos` y 104 kB en `/tips`. Usa `docs/PERFORMANCE.md` para la comparación completa.
- En desarrollo, los mensajes de depuración de Vercel Analytics y Fast Refresh son informativos. Un `ERR_BLOCKED_BY_CLIENT` de DoubleClick suele provenir de un bloqueador del navegador; sepáralo de errores propios de React, Next.js o de la aplicación antes de corregir código.
- No conviertas estas advertencias conocidas en errores ajenos a una tarea, pero no agregues nuevas. Si tocas uno de los archivos implicados, corrige de forma segura las advertencias dentro del alcance o explica por qué permanecen.
- No existe una suite automatizada ni un comando `test` en `package.json`.
- La migración de activos técnicos deja 216 referencias externas en código y 212 URLs únicas verificables; el procedimiento y el mapa exacto están en `docs/EXTERNAL-ASSETS.md`.

Actualiza este documento cuando cambien de forma material la arquitectura, los comandos, la estrategia de pruebas o los contratos de datos.

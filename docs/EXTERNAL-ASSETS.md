# Activos externos del catálogo

Fecha de la migración: 2026-08-04.

## Objetivo

Las fichas, cartas de color, hojas de seguridad y fondos de producto más pesados dejaron de formar parte del despliegue de Next.js. El navegador los solicita directamente a Tecknum, sin proxy, redirect ni copia local, para reducir el tamaño que debe enumerarse, transferirse y publicar en cada despliegue.

El origen contratado es:

```text
https://tecknum.com/ipesa_public/
```

## Mapa de rutas

La migración conserva literalmente cada subruta y nombre de archivo:

| Ruta local anterior | Ruta externa actual |
| --- | --- |
| `/fichas/...` | `https://tecknum.com/ipesa_public/fichas/...` |
| `/fichas_colores/...` | `https://tecknum.com/ipesa_public/fichas_colores/...` |
| `/FICHAS_TECNICAS/...` | `https://tecknum.com/ipesa_public/FICHAS_TECNICAS/...` |
| `/fondo-producto/...` | `https://tecknum.com/ipesa_public/fondo-producto/...` |
| `/seguridad/...` | `https://tecknum.com/ipesa_public/seguridad/...` |

`/HOJAS_SEGURIDAD/...` no fue incluida: sus 55 PDF siguen en `public/HOJAS_SEGURIDAD` y conservan rutas locales.

## Implementación

- `src/components/server.js` contiene URLs absolutas para fichas, cartas de color y hojas de seguridad, incluidas las entradas anidadas de `ficha_personalizable`.
- `src/components/Producto.jsx` construye el fondo como URL absoluta usando la categoría del artículo.
- Mientras la ficha todavía no ha resuelto el artículo, el fondo queda en `none`; así el HTML inicial no solicita `fondo-producto/undefined.jpg`. La URL válida se aplica en cuanto existe la categoría.
- Se normalizaron dos valores `categorie: 'Automotriz'` a `automotriz`. El servidor remoto y los despliegues Linux distinguen mayúsculas; el único archivo válido es `fondo-producto/automotriz.jpg`. La corrección también alinea esos artículos con la categoría ya utilizada por el catálogo.
- No se agregó `remotePatterns` a Next Image porque estos recursos se consumen como enlaces, iframes PDF o `background-image`, no mediante `next/image`.

El inventario en código es de 216 referencias: 67 `fichas`, 41 `fichas_colores`, 55 `FICHAS_TECNICAS`, 52 `seguridad` y un constructor de `fondo-producto`. Al descontar documentos repetidos y expandir los cinco fondos de categorías usados, la comprobación cubre 212 URLs únicas.

## Verificación

Ejecuta:

```bash
npm run verify:external-assets
```

El script `scripts/verify-external-assets.mjs` extrae las URLs del catálogo, genera los fondos correspondientes a sus categorías y envía solicitudes `HEAD` con redirecciones, timeout y reintentos. Termina con código distinto de cero si una URL no responde con HTTP 2xx, devuelve un tipo MIME incompatible o impide incrustar los PDF mediante `X-Frame-Options`/`frame-ancestors`. Requiere conexión a Internet y no descarga el cuerpo de los PDF.

Resultado de la migración:

```text
Activos externos verificados: 212
Estados HTTP: 200=212
Tipos MIME: application/pdf=207, image/jpeg=5
```

También se auditaron los fuentes para confirmar que no permanecieran referencias locales a las cinco carpetas eliminadas.

## Reglas de mantenimiento

1. Usa siempre la URL absoluta y conserva el caso, espacios, signos y nombre exacto del archivo remoto.
2. No vuelvas a copiar estas cinco familias a `public`; eso reintroduciría el peso que se retiró del despliegue.
3. Ejecuta la verificación después de modificar `server.js`, una categoría de producto o el inventario remoto.
4. Sube primero el archivo al origen remoto y comprueba HTTP 2xx antes de publicar una referencia nueva.
5. Si cambia el dominio o una carpeta, actualiza código, script, `AGENTS.md` y este documento en el mismo cambio.

La disponibilidad de estos recursos ahora depende de Tecknum. El origen debe mantener HTTPS, nombres sensibles a mayúsculas, soporte para `HEAD` y acceso público a los archivos. Las URLs ya publicadas deben considerarse permanentes o sustituirse con redirects administrados en ese servidor.

# IPESA México

Sitio público de IPESA construido con Next.js 14, React 18 y App Router. Incluye catálogo de productos, fichas técnicas y de seguridad, sucursales, contenidos comerciales, formularios externos y asistente virtual.

## Requisitos

- Node.js 18 o superior.
- npm y el `package-lock.json` incluido en el repositorio.

## Desarrollo

```bash
npm install
npm run dev
```

El sitio queda disponible en `http://localhost:3000`.

## Variables de entorno

Copia `.env.example` a un archivo local de entorno y configura las credenciales del asistente virtual:

```text
CODEGPT_API_KEY=
CODEGPT_AGENT_ID=
```

Estas variables son privadas y solo deben existir en el servidor o en la configuración del proveedor de despliegue. No uses el prefijo `NEXT_PUBLIC_` para credenciales.

## Validación

```bash
npm run lint
npm run build
npm run verify:external-assets
npm run start
```

Actualmente no existe una suite de pruebas automatizadas. Consulta `AGENTS.md` antes de modificar código; contiene los contratos del catálogo, reglas de integridad y validaciones requeridas.

## Estructura principal

- `src/app`: rutas, layout, contexto global y endpoints del servidor.
- `src/components`: navegación, catálogo y componentes de contenido.
- `src/components/server.js`: catálogo y contenido estático actual.
- `src/components/dataMapas.js`: datos de sucursales, cargados bajo demanda.
- `public`: recursos visuales locales y las hojas aún conservadas en `HOJAS_SEGURIDAD`.
- `docs/PERFORMANCE.md`: diagnóstico, mejoras aplicadas y métricas comparables.
- `docs/EXTERNAL-ASSETS.md`: contrato y verificación de fichas, hojas de seguridad y fondos alojados en Tecknum.

## Rendimiento

La aplicación restaura el caché administrado por Next.js, difiere componentes no críticos y evita cargar/renderizar todas las sucursales al entrar a la ruta. Los resultados y las siguientes fases están documentados en [docs/PERFORMANCE.md](docs/PERFORMANCE.md).

Las familias `fichas`, `fichas_colores`, `FICHAS_TECNICAS`, `fondo-producto` y `seguridad` se sirven directamente desde `https://tecknum.com/ipesa_public/`; no deben duplicarse dentro de `public`. Los recursos que permanecen locales sí forman parte del contrato del catálogo y no deben eliminarse o renombrarse sin auditar sus referencias.

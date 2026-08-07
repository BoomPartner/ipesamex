import { readFile } from 'node:fs/promises';

const externalBaseUrl = 'https://tecknum.com/ipesa_public';
const dataSource = await readFile('src/data/productos.js', 'utf8');
const documentUrlPattern =
  /https:\/\/tecknum\.com\/ipesa_public\/(?:fichas_colores|FICHAS_TECNICAS|fichas|seguridad)\/[^'"\r\n]+/g;
const categoryPattern = /\bcategorie:\s*'([^']+)'/g;

const urls = new Set(dataSource.match(documentUrlPattern) ?? []);

for (const match of dataSource.matchAll(categoryPattern)) {
  urls.add(`${externalBaseUrl}/fondo-producto/${match[1]}.jpg`);
}

const pendingUrls = [...urls].sort();
const failures = [];
const statuses = new Map();
const contentTypes = new Map();
let nextIndex = 0;

function validateResponse(response, url) {
  const contentType = (response.headers.get('content-type') ?? 'sin content-type')
    .split(';')[0]
    .trim()
    .toLowerCase();
  const isPdf = new URL(url).pathname.toLowerCase().endsWith('.pdf');
  const hasExpectedType = isPdf
    ? ['application/pdf', 'application/octet-stream'].includes(contentType)
    : contentType.startsWith('image/');

  contentTypes.set(contentType, (contentTypes.get(contentType) ?? 0) + 1);

  if (!hasExpectedType) {
    failures.push({ status: 'MIME', url, detail: contentType });
  }

  if (isPdf) {
    const xFrameOptions = response.headers.get('x-frame-options')?.toLowerCase();
    const contentSecurityPolicy = response.headers
      .get('content-security-policy')
      ?.toLowerCase();
    const blocksExternalEmbedding =
      xFrameOptions === 'deny' ||
      xFrameOptions === 'sameorigin' ||
      /frame-ancestors\s+(?:'none'|'self')(?:\s*;|\s*$)/.test(
        contentSecurityPolicy ?? '',
      );

    if (blocksExternalEmbedding) {
      failures.push({
        status: 'EMBED',
        url,
        detail: xFrameOptions ?? contentSecurityPolicy,
      });
    }
  }
}

async function verify(url) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        method: 'HEAD',
        redirect: 'follow',
        signal: AbortSignal.timeout(45_000),
      });

      if (response.ok || attempt === 3) {
        statuses.set(response.status, (statuses.get(response.status) ?? 0) + 1);

        if (!response.ok) {
          failures.push({ status: response.status, url });
        } else {
          validateResponse(response, url);
        }
        return;
      }
    } catch (error) {
      if (attempt === 3) {
        failures.push({
          status: 'ERROR',
          url,
          detail: error.cause?.code ?? error.message,
        });
        return;
      }
    }

    await new Promise((resolve) => setTimeout(resolve, attempt * 750));
  }
}

async function worker() {
  while (nextIndex < pendingUrls.length) {
    const url = pendingUrls[nextIndex];
    nextIndex += 1;
    await verify(url);
  }
}

await Promise.all(Array.from({ length: 5 }, worker));

console.log(`Activos externos verificados: ${pendingUrls.length}`);
console.log(
  `Estados HTTP: ${[...statuses.entries()]
    .sort(([left], [right]) => left - right)
    .map(([status, total]) => `${status}=${total}`)
    .join(', ') || 'sin respuestas'}`,
);
console.log(
  `Tipos MIME: ${[...contentTypes.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([contentType, total]) => `${contentType}=${total}`)
    .join(', ') || 'sin respuestas'}`,
);

if (failures.length > 0) {
  console.error(`Referencias con error: ${failures.length}`);
  for (const failure of failures) {
    console.error(
      `${failure.status} ${failure.url}${failure.detail ? ` (${failure.detail})` : ''}`,
    );
  }
  process.exitCode = 1;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            // Aplica a todos los archivos
            source: '/:path*',
            headers: [
              {
                key: 'Cache-Control',
                value: 'no-store, max-age=0',
              },
            ],
          },
        ]
      },
}

module.exports = nextConfig

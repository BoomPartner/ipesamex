import { Provider } from './Provider'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import MetricolScript from '@/components/Metricol'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
export const metadata = {
  metadataBase: new URL('https://www.ipesamex.com'),

  title: {
    default: "Ipesa Pinturas - Vinilicas, Esmaltes, Impermeabilizantes...",
    template: "%s - Ipesa Pinturas",
  },
 
  alternates: {
    canonical: "https://www.ipesamex.com/",
  },
  openGraph: {
    title: "Ipesa Pinturas",
    description: "Ipesa pinturas, lo mejor en pinturas para tu hogar",
    url: "https://www.ipesamex.com/",
    siteName: "Ipesa",
    images: '/og-image.png',
  },
  description: 'Dale color a tu vida, tenemos pinturas vinílicas, impermeabilizantes, recubrimientos y toda una linea de productos para el repintado automotriz.',
  creator: 'Luis Nava',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Provider>{children}</Provider>
        <Analytics />
        <MetricolScript />
        <GoogleTagManager gtmId="AW-11377757851" />
        <GoogleTagManager gtmId="GTM-K6RWN36J" />
        <GoogleAnalytics gaId="G-8JXVZPPZ83" />
      </body>
    </html>
  )
}

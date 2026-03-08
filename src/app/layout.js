import { montserrat } from './fonts'
import './globals.css'

export const metadata = {
  title: {
    default: 'QM Fest | Queer Music Festival Barcelona',
    template: '%s | QM Fest',
  },
  description:
    'The biggest queer music festival in Barcelona. Celebrating diversity through music. Sala Apolo.',
  openGraph: {
    title: 'QM Fest | Queer Music Festival Barcelona',
    description:
      'Celebrating diversity through music. A unique experience for the LGTBIQ+ community.',
    type: 'website',
    images: [{ url: '/icon', width: 32, height: 32, alt: 'QM Fest' }],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app',
  ),
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7758d4',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} bg-festival-cream font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

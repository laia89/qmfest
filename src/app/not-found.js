'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const locales = ['es', 'ca', 'en']
const defaultLocale = 'es'

const messages = {
  es: { notFound: 'Esta página no existe.', backToHome: 'Volver al inicio' },
  ca: {
    notFound: 'Aquesta pàgina no existeix.',
    backToHome: "Tornar a l'inici",
  },
  en: { notFound: "This page doesn't exist.", backToHome: 'Back to home' },
}

export default function NotFound() {
  const pathname = usePathname() ?? ''
  const segment = pathname.split('/').filter(Boolean)[0]
  const locale = locales.includes(segment) ? segment : defaultLocale
  const homeHref = `/${locale}`
  const t = messages[locale] ?? messages[defaultLocale]

  return (
    <div className="min-h-screen bg-festival-cream flex flex-col items-center justify-center px-4 py-12">
      <p className="text-festival-purple/70 text-lg mb-10">{t.notFound}</p>
      <Link
        href={homeHref}
        className="inline-flex items-center gap-3 text-festival-purple font-heading font-bold hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-festival-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-festival-cream rounded"
      >
        <Image
          src="/images/logo-mascota-no-fil.png"
          alt=""
          width={80}
          height={80}
          className="h-20 w-auto object-contain -mt-4"
          unoptimized
        />
        <span className="text-2xl">QM Fest</span>
      </Link>
      <p className="mt-6 text-festival-purple/60 text-sm">{t.backToHome}</p>
    </div>
  )
}

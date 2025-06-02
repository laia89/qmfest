'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const t = useTranslations('navigation')
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1]

  const languages = [
    { code: 'ca', name: 'Català' },
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-festival-purple">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href={`/${currentLocale}`}
            className="text-festival-yellow text-xl font-bold font-heading"
          >
            QM Fest
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href={`/${currentLocale}`}
              className={`text-white hover:text-festival-yellow transition-colors ${
                pathname === `/${currentLocale}` ? 'text-festival-yellow' : ''
              }`}
            >
              {t('home')}
            </Link>
            <Link
              href={`/${currentLocale}/lineup`}
              className={`text-white hover:text-festival-yellow transition-colors ${
                pathname === `/${currentLocale}/lineup`
                  ? 'text-festival-yellow'
                  : ''
              }`}
            >
              {t('lineup')}
            </Link>
            <Link
              href={`/${currentLocale}/tickets`}
              className={`text-white hover:text-festival-yellow transition-colors ${
                pathname === `/${currentLocale}/tickets`
                  ? 'text-festival-yellow'
                  : ''
              }`}
            >
              {t('tickets')}
            </Link>
            <Link
              href={`/${currentLocale}/about`}
              className={`text-white hover:text-festival-yellow transition-colors ${
                pathname === `/${currentLocale}/about`
                  ? 'text-festival-yellow'
                  : ''
              }`}
            >
              {t('about')}
            </Link>

            <div className="flex items-center gap-2 ml-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={pathname.replace(`/${currentLocale}`, `/${lang.code}`)}
                  className={`text-sm ${
                    currentLocale === lang.code
                      ? 'text-festival-yellow font-bold'
                      : 'text-white hover:text-festival-yellow'
                  } transition-colors`}
                >
                  {lang.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

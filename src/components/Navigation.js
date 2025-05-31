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
    <nav className="bg-black/50 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link
              href={`/${currentLocale}`}
              className="text-white font-bold text-xl"
            >
              QMFest
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link
                href={`/${currentLocale}`}
                className="text-white hover:text-pink-400 transition-colors"
              >
                {t('home')}
              </Link>
              <Link
                href={`/${currentLocale}/lineup`}
                className="text-white hover:text-pink-400 transition-colors"
              >
                {t('lineup')}
              </Link>
              <Link
                href={`/${currentLocale}/tickets`}
                className="text-white hover:text-pink-400 transition-colors"
              >
                {t('tickets')}
              </Link>
              <Link
                href={`/${currentLocale}/about`}
                className="text-white hover:text-pink-400 transition-colors"
              >
                {t('about')}
              </Link>
              <Link
                href={`/${currentLocale}/contact`}
                className="text-white hover:text-pink-400 transition-colors"
              >
                {t('contact')}
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={pathname.replace(`/${currentLocale}`, `/${lang.code}`)}
                className={`text-sm ${
                  currentLocale === lang.code
                    ? 'text-pink-400 font-bold'
                    : 'text-white hover:text-pink-400'
                } transition-colors`}
              >
                {lang.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

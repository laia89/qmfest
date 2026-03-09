'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

const navLinks = [
  { href: '/tickets', key: 'tickets' },
  { href: '/merch', key: 'merch' },
  { href: '/lineup', key: 'lineup' },
  { href: '/program', key: 'program' },
  { href: '/about', key: 'about' },
  { href: '/faq', key: 'faq' },
  { href: '/contact', key: 'contact' },
]

const languages = [
  { code: 'ca', name: 'Català' },
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
]

export default function Navigation() {
  const t = useTranslations('navigation')
  const pathname = usePathname()
  const locale = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)

  const basePath = `/${locale}`
  const isActive = (href) => {
    const path = href ? `${basePath}${href}` : basePath
    return pathname === path || (href !== '' && pathname.startsWith(path))
  }

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const getMobileLangClass = (langCode) =>
    locale === langCode
      ? 'text-festival-yellow bg-white/10'
      : 'text-white/80 hover:text-festival-yellow hover:bg-white/5'

  useEffect(() => {
    if (!menuOpen) return
    const handleEscape = (e) => e.key === 'Escape' && closeMenu()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [menuOpen, closeMenu])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-festival-purple shadow-lg"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href={basePath}
            className="inline-flex items-center gap-1.5 text-festival-yellow text-xl font-bold font-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-festival-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-festival-purple rounded transition-[text-shadow] duration-200 hover:[text-shadow:0_0_18px_rgba(255,197,52,0.85)] hover:[animation:logo-pop_0.45s_ease-out] active:scale-95"
          >
            <Image
              src="/images/logo-mascota-no-fil.png"
              alt=""
              width={64}
              height={64}
              className="h-16 w-auto object-contain shrink-0 -mt-5"
              unoptimized
            />
            <span>QM Fest</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ href, key }) => {
              const isTickets = href === '/tickets'
              const active = isActive(href)
              return (
                <Link
                  key={key}
                  href={href ? `${basePath}${href}` : basePath}
                  className={`rounded px-2 py-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-festival-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-festival-purple ${
                    isTickets
                      ? `hover:text-festival-yellow lg:ring-2 lg:ring-festival-yellow lg:ring-offset-2 lg:ring-offset-festival-purple ${active ? 'text-festival-yellow font-semibold' : 'text-white'}`
                      : active
                        ? 'text-festival-yellow font-semibold underline underline-offset-4 decoration-2 hover:text-festival-yellow/90'
                        : 'text-white hover:text-festival-yellow'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {t(key)}
                </Link>
              )
            })}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/30">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={pathname.replace(`/${locale}`, `/${lang.code}`)}
                  className={`text-sm focus:outline-none focus:ring-2 focus:ring-festival-yellow focus:ring-offset-2 focus:ring-offset-festival-purple rounded px-2 py-1 ${
                    locale === lang.code
                      ? 'text-festival-yellow font-bold'
                      : 'text-white hover:text-festival-yellow'
                  } transition-colors`}
                  aria-label={`Switch to ${lang.name}`}
                >
                  <span className="lg:inline xl:hidden">
                    {lang.code.toUpperCase()}
                  </span>
                  <span className="hidden xl:inline">{lang.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile: idiomes a la barra + botó menú (amagat a desktop) */}
          <div className="lg:hidden flex items-center gap-1">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={pathname.replace('/' + locale, '/' + lang.code)}
                className={
                  'text-sm font-medium py-2 px-2.5 rounded focus:outline-none focus:ring-2 focus:ring-festival-yellow focus:ring-offset-2 focus:ring-offset-festival-purple min-w-[2.25rem] text-center ' +
                  getMobileLangClass(lang.code)
                }
                aria-label={'Switch to ' + lang.name}
              >
                {lang.code.toUpperCase()}
              </Link>
            ))}
            <button
              type="button"
              className="p-2 text-white hover:text-festival-yellow focus:outline-none focus:ring-2 focus:ring-festival-yellow rounded"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Tancar menú' : 'Obrir menú'}
            >
              <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            menuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2 pb-4">
            {navLinks.map(({ href, key }) => {
              const isTickets = href === '/tickets'
              const active = isActive(href)
              return (
                <Link
                  key={key}
                  href={href ? `${basePath}${href}` : basePath}
                  onClick={closeMenu}
                  className={`py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-festival-yellow ${
                    isTickets
                      ? `hover:bg-white/10 lg:ring-2 lg:ring-festival-yellow lg:ring-offset-2 lg:ring-offset-festival-purple lg:bg-white/5 ${active ? 'bg-white/10 text-festival-yellow font-semibold' : 'text-white'}`
                      : active
                        ? 'bg-white/10 text-festival-yellow font-semibold'
                        : 'text-white hover:bg-white/10'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {t(key)}
                </Link>
              )
            })}
            <div className="flex gap-3 pt-4 mt-2 border-t border-white/30">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={pathname.replace(`/${locale}`, `/${lang.code}`)}
                  onClick={closeMenu}
                  className={`text-sm py-2 px-3 rounded ${
                    locale === lang.code
                      ? 'text-festival-yellow font-bold'
                      : 'text-white hover:text-festival-yellow'
                  }`}
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

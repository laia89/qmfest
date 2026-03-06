'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

const navLinks = [
  { href: '', key: 'home' },
  { href: '/lineup', key: 'lineup' },
  { href: '/tickets', key: 'tickets' },
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
            className="text-festival-yellow text-xl font-bold font-heading focus:outline-none focus:ring-2 focus:ring-festival-yellow focus:ring-offset-2 focus:ring-offset-festival-purple rounded"
          >
            QM Fest
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, key }) => (
              <Link
                key={key}
                href={href ? `${basePath}${href}` : basePath}
                className={`text-white hover:text-festival-yellow transition-colors focus:outline-none focus:ring-2 focus:ring-festival-yellow focus:ring-offset-2 focus:ring-offset-festival-purple rounded px-2 py-1 ${
                  isActive(href) ? 'text-festival-yellow font-semibold' : ''
                }`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {t(key)}
              </Link>
            ))}
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
                  {lang.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-white hover:text-festival-yellow focus:outline-none focus:ring-2 focus:ring-festival-yellow rounded"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            menuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2 pb-4">
            {navLinks.map(({ href, key }) => (
              <Link
                key={key}
                href={href ? `${basePath}${href}` : basePath}
                onClick={closeMenu}
                className={`py-3 px-4 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-festival-yellow ${
                  isActive(href)
                    ? 'bg-white/10 text-festival-yellow font-semibold'
                    : ''
                }`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {t(key)}
              </Link>
            ))}
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

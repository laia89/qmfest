'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const footerLinksCol1 = [
  { href: '/tickets', key: 'tickets' },
  { href: '/merch', key: 'merch' },
  { href: '/lineup', key: 'lineup' },
  { href: '/playlist', key: 'playlist' },
  { href: '/program', key: 'program' },
]
const footerLinksCol2 = [
  { href: '/about', key: 'about' },
  { href: '/faq', key: 'faq' },
  { href: '/past-events', key: 'pastEvents' },
  { href: '/accessibility', key: 'accessibility' },
]
const footerLinksContact = [
  { href: '/sponsors', key: 'sponsors' },
  { href: '/press', key: 'press' },
  { href: '/volunteers', key: 'volunteers' },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/queer_musicfest',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@queer_musicfest',
    icon: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z',
  },
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/playlist/5BYt5SEkq0myuIumK0NcNS',
    icon: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
  },
]

const linkClass =
  'text-festival-cream/80 hover:text-festival-yellow transition-colors'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('navigation')
  const locale = useLocale()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = async (e) => {
    e.preventDefault()
    const value = email.trim()
    if (!value) return
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      })
      if (res.ok) setSubscribed(true)
    } catch {
      setSubscribed(true)
    }
  }

  return (
    <footer className="bg-festival-purple text-festival-cream pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.7fr_0.7fr_1fr_1.6fr] gap-8 lg:gap-6 mb-8">
          {/* Columna 1: Logo + enllaços */}
          <div>
            <div className="min-h-[2.5rem] flex items-end mb-4">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-1.5 text-festival-yellow font-heading font-bold text-xl leading-tight hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-festival-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-festival-purple rounded"
              >
                <Image
                  src="/images/logo-mascota-no-fil.png"
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-auto object-contain shrink-0 -mt-5 self-end"
                  unoptimized
                />
                <span className="leading-tight">QM Fest</span>
              </Link>
            </div>
            <nav
              aria-label="Footer navigation"
              className="flex flex-col gap-2 text-sm"
            >
              {footerLinksCol1.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={linkClass}
                >
                  {tNav(item.key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 2: enllaços */}
          <div className="lg:pl-3">
            <div className="min-h-[2.5rem] mb-4" aria-hidden="true" />
            <nav
              aria-label="Footer navigation"
              className="flex flex-col gap-2 text-sm"
            >
              {footerLinksCol2.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={linkClass}
                >
                  {tNav(item.key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 3: Contacte + Col·laboradors, Premsa, Voluntariat */}
          <div className="lg:pl-4 lg:border-l border-white/20">
            <div className="min-h-[2.5rem] flex items-end mb-4">
              <Link
                href={`/${locale}/contact`}
                className="text-xl font-heading font-bold text-festival-yellow leading-tight hover:opacity-90 transition-opacity"
              >
                {t('contact')}
              </Link>
            </div>
            <nav
              aria-label="Footer navigation"
              className="flex flex-col gap-2 text-sm"
            >
              <Link href={`/${locale}/contact`} className={linkClass}>
                {t('contactLink')}
              </Link>
              {footerLinksContact.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={linkClass}
                >
                  {tNav(item.key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 4: Newsletter + socials */}
          <div className="lg:pl-4 lg:border-l border-white/20">
            <div className="min-h-[2.5rem] flex items-end mb-4">
              <h3 className="text-xl font-heading font-bold text-festival-yellow leading-tight">
                {t('newsletterTitle')}
              </h3>
            </div>
            {subscribed ? (
              <p className="text-festival-cream/90">{t('newsletterSuccess')}</p>
            ) : (
              <form
                onSubmit={handleNewsletter}
                className="flex gap-2 flex-nowrap"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletterPlaceholder')}
                  className="flex-1 min-w-0 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-festival-cream placeholder:text-festival-cream/60 focus:outline-none focus:ring-2 focus:ring-festival-yellow"
                  aria-label={t('newsletterPlaceholder')}
                />
                <button
                  type="submit"
                  className="shrink-0 px-6 py-2 rounded-full bg-festival-yellow text-festival-purple font-semibold hover:bg-festival-yellow/90 transition-colors cursor-pointer"
                >
                  {t('newsletterCta')}
                </button>
              </form>
            )}
            <div className="flex gap-4 mt-6" aria-label={t('socialTitle')}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                  aria-label={social.name}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-festival-cream/70 text-sm flex items-center gap-2">
            <Image
              src="/images/logo-mascota-no-fil.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-auto object-contain opacity-90 shrink-0 -mt-2.5"
              unoptimized
            />
            © {new Date().getFullYear()} QM Fest
          </p>
          <div className="flex gap-6 text-sm">
            <Link href={`/${locale}/privacy`} className={linkClass}>
              {t('privacy')}
            </Link>
            <Link href={`/${locale}/cookies`} className={linkClass}>
              {t('cookies')}
            </Link>
            <Link href={`/${locale}/contact`} className={linkClass}>
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

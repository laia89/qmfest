'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const footerNavLinks = [
  { href: '/past-events', key: 'pastEvents' },
  { href: '/accessibility', key: 'accessibility' },
  { href: '/sponsors', key: 'sponsors' },
  { href: '/press', key: 'press' },
  { href: '/volunteers', key: 'volunteers' },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
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
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-end gap-10 mb-16">
          <div className="md:min-w-[280px]">
            <h3 className="text-xl font-heading font-bold text-festival-yellow mb-4">
              {t('newsletterTitle')}
            </h3>
            {subscribed ? (
              <p className="text-festival-cream/90">{t('newsletterSuccess')}</p>
            ) : (
              <form
                onSubmit={handleNewsletter}
                className="flex gap-2 flex-wrap"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletterPlaceholder')}
                  className="flex-1 min-w-[200px] px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-festival-cream placeholder:text-festival-cream/60 focus:outline-none focus:ring-2 focus:ring-festival-yellow"
                  aria-label={t('newsletterPlaceholder')}
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-festival-yellow text-festival-purple font-semibold hover:bg-festival-yellow/90 transition-colors cursor-pointer"
                >
                  {t('newsletterCta')}
                </button>
              </form>
            )}
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:flex-1 md:justify-end">
            <nav
              aria-label="Secondary"
              className="flex flex-wrap gap-x-6 gap-y-1 text-sm"
            >
              {footerNavLinks.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={linkClass}
                >
                  {tNav(item.key)}
                </Link>
              ))}
            </nav>
            <div className="flex gap-4">
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

        <div className="border-t border-white/20 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-festival-cream/70 text-sm flex items-center gap-2">
            <Image
              src="/images/logo-mascota.png"
              alt=""
              width={28}
              height={34}
              className="h-7 w-auto object-contain opacity-90"
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

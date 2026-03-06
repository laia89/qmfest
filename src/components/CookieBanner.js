'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const CONSENT_KEY = 'qmfest-cookie-consent'

export default function CookieBanner() {
  const t = useTranslations('cookiesBanner')
  const locale = useLocale()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({
          essential: true,
          analytics: true,
          timestamp: Date.now(),
        }),
      )
    } catch {}
    setVisible(false)
  }

  const decline = () => {
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({
          essential: true,
          analytics: false,
          timestamp: Date.now(),
        }),
      )
    } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] bg-festival-purple text-festival-cream shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-festival-cream/90 flex-1">
            {t('message')}{' '}
            <Link
              href={`/${locale}/cookies`}
              className="underline hover:text-festival-yellow"
            >
              {t('link')}
            </Link>
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={decline}
              className="px-4 py-2 rounded-lg border border-festival-cream/40 text-festival-cream hover:bg-white/10 transition-colors text-sm font-medium"
            >
              {t('decline')}
            </button>
            <button
              type="button"
              onClick={accept}
              className="px-4 py-2 rounded-lg bg-festival-yellow text-festival-purple hover:bg-festival-yellow/90 font-semibold text-sm transition-colors"
            >
              {t('accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

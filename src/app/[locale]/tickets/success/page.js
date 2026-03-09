'use client'

import confetti from 'canvas-confetti'
import { CheckCircle, Mail, Music2 } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

function SuccessContent() {
  const t = useTranslations('tickets')
  const locale = useLocale()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    const colors = ['#7c3aed', '#facc15', '#fef3c7', '#a78bfa']
    const duration = 2500
    const end = Date.now() + duration
    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0.2, y: 0.8 },
        colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 0.8, y: 0.8 },
        colors,
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()
  }, [])

  return (
    <main className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-linear-to-b from-festival-purple/4 via-transparent to-festival-yellow/4">
      <section className="container mx-auto px-4 text-center max-w-xl">
        <div className="bg-festival-cream rounded-2xl shadow-xl p-12 border-2 border-festival-yellow/50">
          <CheckCircle
            className="w-14 h-14 mx-auto mb-4 text-festival-purple"
            aria-hidden
          />
          <h1 className="text-3xl md:text-4xl text-festival-purple font-heading mb-4">
            {t('successTitle')}
          </h1>
          <p className="text-festival-purple/80 mb-2">
            {t('successDescription')}
          </p>
          {sessionId && (
            <p className="text-festival-purple/50 text-xs mb-6 font-mono">
              {t('successOrder')} {sessionId.slice(0, 20)}…
            </p>
          )}

          <div className="border-t border-festival-purple/15 pt-6 mb-6 text-left">
            <h2 className="text-festival-purple font-heading font-semibold text-sm uppercase tracking-wide mb-3">
              {t('successNextTitle')}
            </h2>
            <ul className="space-y-2 text-festival-purple/85 text-sm">
              <li className="flex items-center gap-2">
                <Mail
                  className="w-4 h-4 shrink-0 text-festival-purple/70"
                  aria-hidden
                />
                {t('successNextEmail')}
              </li>
              <li className="flex items-center gap-2">
                <Music2
                  className="w-4 h-4 shrink-0 text-festival-purple/70"
                  aria-hidden
                />
                {t('successNextPlaylist')}
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/${locale}/playlist`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-festival-yellow text-festival-purple font-semibold hover:bg-festival-yellow/90 transition-colors"
            >
              <Music2 className="w-4 h-4" aria-hidden />
              {t('successCtaPlaylist')}
            </Link>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-festival-purple/30 text-festival-purple font-semibold hover:border-festival-purple/50 hover:bg-festival-purple/5 transition-colors"
            >
              {t('successCtaHome')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function LoadingFallback() {
  const t = useTranslations('tickets')
  return (
    <main className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <p className="text-festival-purple/80">{t('loading')}</p>
    </main>
  )
}

export default function TicketsSuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SuccessContent />
    </Suspense>
  )
}

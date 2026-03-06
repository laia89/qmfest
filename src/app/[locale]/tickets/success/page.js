'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessContent() {
  const locale = useLocale()
  const tCommon = useTranslations('common')
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <main className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <section className="container mx-auto px-4 text-center max-w-xl">
        <div className="bg-festival-cream rounded-2xl shadow-xl p-12 border-2 border-festival-yellow/50">
          <div className="text-6xl mb-4">🎫</div>
          <h1 className="text-3xl md:text-4xl text-festival-purple font-heading mb-4">
            Thank you!
          </h1>
          <p className="text-festival-purple/80 mb-6">
            Your ticket purchase was successful. Check your email for the
            confirmation and your e-ticket.
          </p>
          {sessionId && (
            <p className="text-festival-purple/60 text-sm mb-6 font-mono">
              Order: {sessionId.slice(0, 20)}…
            </p>
          )}
          <Link
            href={`/${locale}`}
            className="inline-block bg-festival-purple text-festival-cream hover:bg-festival-purple/90 font-bold py-3 px-8 rounded-full transition-colors"
          >
            {tCommon('backToHome')}
          </Link>
        </div>
      </section>
    </main>
  )
}

export default function TicketsSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen pt-24 pb-16 flex items-center justify-center">
          <p className="text-festival-purple/80">Loading…</p>
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}

'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

export default function LineupPage() {
  const t = useTranslations('lineup')
  const locale = useLocale()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl text-festival-purple mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 max-w-2xl mx-auto mb-12">
            {t('subtitle')}
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-festival-purple/70 mb-8">
              Full lineup coming soon. Stay tuned!
            </p>
            <Link
              href={`/${locale}`}
              className="inline-block bg-festival-purple text-festival-cream hover:bg-festival-purple/90 font-semibold py-3 px-8 rounded-full transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

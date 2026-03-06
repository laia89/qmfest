'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

export default function AboutFallbackView() {
  const t = useTranslations('about')
  const locale = useLocale()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-festival-purple text-center mb-12">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
            {t('description')}
          </p>

          <h2 className="text-2xl text-festival-purple text-center mb-10 font-heading">
            {t('values.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/70 p-8 rounded-xl shadow-sm backdrop-blur-sm border border-festival-purple/10">
              <h3 className="text-2xl text-festival-purple mb-4 font-heading">
                {t('values.diversity')}
              </h3>
              <p className="text-festival-purple/80 leading-relaxed">
                {t('values.diversityDesc')}
              </p>
            </div>
            <div className="bg-white/70 p-8 rounded-xl shadow-sm backdrop-blur-sm border border-festival-purple/10">
              <h3 className="text-2xl text-festival-purple mb-4 font-heading">
                {t('values.inclusion')}
              </h3>
              <p className="text-festival-purple/80 leading-relaxed">
                {t('values.inclusionDesc')}
              </p>
            </div>
            <div className="bg-white/70 p-8 rounded-xl shadow-sm backdrop-blur-sm border border-festival-purple/10">
              <h3 className="text-2xl text-festival-purple mb-4 font-heading">
                {t('values.art')}
              </h3>
              <p className="text-festival-purple/80 leading-relaxed">
                {t('values.artDesc')}
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
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

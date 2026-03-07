'use client'

import { useTranslations } from 'next-intl'

export default function AboutFallbackView() {
  const t = useTranslations('about')

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-20 bg-festival-cream">
        <div className="container mx-auto px-4">
          <h1 className="page-title mb-12">{t('title')}</h1>
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
        </div>
      </section>
    </main>
  )
}

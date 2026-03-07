'use client'

import { useTranslations } from 'next-intl'

export default function PressPage() {
  const t = useTranslations('press')

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-20 bg-festival-cream">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="page-title">{t('title')}</h1>
          <p className="page-subtitle">{t('subtitle')}</p>
          <div className="page-subtitle-line" />

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-heading font-bold text-festival-purple mb-2">
                {t('kitTitle')}
              </h2>
              <p className="text-festival-purple/80 mb-4">{t('kitDesc')}</p>
              <p className="text-sm text-festival-purple/70">
                (Add a download link or PDF when you have the press pack ready.)
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-festival-purple mb-2">
                {t('contactTitle')}
              </h2>
              <a
                href={`mailto:${t('contactEmail')}?subject=Press%20QM%20Fest`}
                className="text-festival-purple font-semibold hover:underline"
              >
                {t('contactEmail')}
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-festival-purple mb-2">
                {t('logosTitle')}
              </h2>
              <p className="text-festival-purple/80">{t('logosDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

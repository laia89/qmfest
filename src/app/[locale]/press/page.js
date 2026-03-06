'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

export default function PressPage() {
  const t = useTranslations('press')
  const tCommon = useTranslations('common')
  const locale = useLocale()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl text-festival-purple text-center mb-4 font-heading">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 text-center mb-16">
            {t('subtitle')}
          </p>

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

          <div className="text-center mt-12">
            <Link
              href={`/${locale}`}
              className="inline-block text-festival-purple/80 hover:text-festival-purple font-medium"
            >
              ← {tCommon('backToHome')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

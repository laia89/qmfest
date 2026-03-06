'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

export default function AccessibilityPage() {
  const t = useTranslations('accessibility')
  const locale = useLocale()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-festival-purple text-center mb-4 font-heading">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 text-center mb-16">
            {t('subtitle')}
          </p>

          <div className="space-y-10">
            <div className="bg-white p-6 rounded-xl border border-festival-purple/10">
              <h2 className="text-xl font-heading font-bold text-festival-purple mb-2">
                {t('gettingThere')}
              </h2>
              <p className="text-festival-purple/80">{t('gettingThereDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-festival-purple/10">
              <h2 className="text-xl font-heading font-bold text-festival-purple mb-2">
                {t('tickets')}
              </h2>
              <p className="text-festival-purple/80">{t('ticketsDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-festival-purple/10">
              <h2 className="text-xl font-heading font-bold text-festival-purple mb-2">
                {t('toilets')}
              </h2>
              <p className="text-festival-purple/80">{t('toiletsDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-festival-purple/10">
              <h2 className="text-xl font-heading font-bold text-festival-purple mb-2">
                {t('support')}
              </h2>
              <p className="text-festival-purple/80">{t('supportDesc')}</p>
            </div>
          </div>

          <p className="mt-12 text-center text-festival-purple/80">
            <Link
              href={`/${locale}/contact`}
              className="text-festival-purple font-semibold hover:underline"
            >
              {t('contactLink')}
            </Link>{' '}
            {t('contactOrEmail')}{' '}
            <a
              href="mailto:hola@qmfest.com?subject=Accessibility%20QM%20Fest"
              className="text-festival-purple font-semibold hover:underline"
            >
              hola@qmfest.com
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

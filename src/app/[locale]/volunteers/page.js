'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

export default function VolunteersPage() {
  const t = useTranslations('volunteers')
  const tCommon = useTranslations('common')
  const locale = useLocale()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl text-festival-purple mb-4 font-heading">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 mb-12">
            {t('subtitle')}
          </p>
          <p className="text-festival-purple/80 mb-10 text-left">
            {t('description')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-festival-purple text-festival-cream hover:bg-festival-purple/90 font-bold py-3 px-8 rounded-full transition-colors cursor-pointer"
          >
            {t('cta')}
          </Link>
          <div className="mt-12">
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

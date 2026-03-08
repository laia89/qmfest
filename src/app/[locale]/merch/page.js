'use client'

import { CONTACT_EMAIL } from '@/lib/contact'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function MerchPage() {
  const t = useTranslations('merch')

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-20 bg-festival-cream">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="page-title">{t('title')}</h1>
          <p className="page-subtitle">{t('subtitle')}</p>
          <div className="page-subtitle-line" />
          <p className="text-festival-purple/80 text-lg leading-relaxed mb-12">
            {t('description')}
          </p>
          <p className="text-festival-purple/70 text-sm">
            {t('comingSoonBefore')}
            <Link
              href={`mailto:${CONTACT_EMAIL}?subject=Merch%20QM%20Fest`}
              className="text-festival-purple font-semibold hover:underline"
            >
              {CONTACT_EMAIL}
            </Link>
            {t('comingSoonAfter')}
          </p>
        </div>
      </section>
    </main>
  )
}

'use client'

import { useTranslations } from 'next-intl'

export default function PrivacyPage() {
  const t = useTranslations('legal')
  const sections = t.raw('privacySections')
  const list = Array.isArray(sections) ? sections : []

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-20 bg-festival-cream">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="page-title mb-6">{t('privacyTitle')}</h1>
          <p className="text-xl text-festival-purple/80 mb-8">
            {t('privacyIntro')}
          </p>
          <ul className="space-y-4 text-festival-purple/80 list-disc list-inside">
            {list.map((paragraph, i) => (
              <li key={i}>{paragraph}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

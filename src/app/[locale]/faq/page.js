'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'

export default function FAQPage() {
  const t = useTranslations('faq')
  const locale = useLocale()
  const [openIndex, setOpenIndex] = useState(null)

  const items = t.raw('items')
  const faqItems = Array.isArray(items) ? items : []

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-festival-purple text-center mb-4 font-heading">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 text-center mb-12">
            {t('subtitle')}
          </p>

          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-festival-purple/20 rounded-xl overflow-hidden bg-white/50"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 font-semibold text-festival-purple hover:bg-white/70 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  {item.q}
                  <span className="text-festival-purple/60 shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pt-4 pb-4 text-festival-purple/80 border-t border-festival-purple/10">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
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

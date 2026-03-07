'use client'

import ScrollReveal from '@/components/ScrollReveal'
import sponsors from '@/content/sponsors.json'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function SponsorsPage() {
  const t = useTranslations('sponsors')
  const locale = useLocale()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-20 bg-festival-cream">
        <div className="container mx-auto px-4">
          <h1 className="page-title">{t('title')}</h1>
          <p className="page-subtitle">{t('subtitle')}</p>
          <div className="page-subtitle-line" />

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {sponsors.map((sponsor) => (
              <ScrollReveal key={sponsor.id} delay={0.1}>
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-8 border-2 border-festival-purple/10 hover:border-festival-purple/30 transition-all duration-300 hover:shadow-lg min-w-[200px] text-center cursor-pointer"
                >
                  {sponsor.logo ? (
                    <div className="relative w-32 h-12 mx-auto mb-2">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <span className="text-lg font-heading font-bold text-festival-purple">
                      {sponsor.name}
                    </span>
                  )}
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-20 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold text-festival-purple mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-festival-purple/80 mb-8">{t('ctaText')}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-festival-purple text-festival-cream hover:bg-festival-purple/90 font-bold py-3 px-8 rounded-full transition-colors cursor-pointer"
            >
              {t('ctaLabel')}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

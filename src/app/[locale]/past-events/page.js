'use client'

import ScrollReveal from '@/components/ScrollReveal'
import pastEditions from '@/content/past-events.json'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function PastEventsPage() {
  const t = useTranslations('pastEvents')
  const locale = useLocale()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-festival-purple text-center mb-4 font-heading">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 text-center max-w-2xl mx-auto mb-16">
            {t('subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pastEditions.map((edition) => (
              <ScrollReveal key={edition.year} delay={0.1}>
                <Link
                  href={`/${locale}/past-events/${edition.year}`}
                  className="block group"
                >
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-festival-purple/10 group-hover:border-festival-purple/40 transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                    <div className="aspect-video relative shrink-0 overflow-hidden">
                      <Image
                        src={edition.image}
                        alt={`QM Fest ${edition.year}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-festival-purple/90 via-festival-purple/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-festival-yellow text-2xl font-heading font-bold block">
                          QM Fest {edition.year}
                        </span>
                        <p className="text-festival-cream/90 text-sm mt-0.5">
                          {t(edition.dateKey)}
                        </p>
                      </div>
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <span className="text-festival-purple font-semibold group-hover:text-festival-purple/80 transition-colors">
                        {t('seeEdition')} →
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

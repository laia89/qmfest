'use client'

import ScrollReveal from '@/components/ScrollReveal'
import pastEditions from '@/content/past-events.json'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function PastEventsPage() {
  const t = useTranslations('pastEvents')

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

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {pastEditions.map((edition) => (
              <ScrollReveal key={edition.year} delay={0.1}>
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-festival-purple/10 hover:border-festival-purple/30 transition-all duration-300 hover:shadow-xl flex flex-col">
                  <div className="aspect-video relative shrink-0">
                    <Image
                      src={edition.image}
                      alt={`QM Fest ${edition.year}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-festival-purple/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-festival-yellow text-2xl font-heading font-bold">
                        QM Fest {edition.year}
                      </span>
                      <p className="text-festival-cream/90 text-sm mt-0.5">
                        {t(edition.dateKey)}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-festival-purple/80 text-sm flex-1">
                      {t(`description${edition.year}`)}
                    </p>
                    {edition.recapUrl ? (
                      <a
                        href={edition.recapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-festival-purple font-semibold hover:text-festival-purple/80 transition-colors cursor-pointer"
                      >
                        See recap →
                      </a>
                    ) : null}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function TicketsPage() {
  const t = useTranslations('tickets')

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-festival-cream to-festival-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl text-festival-purple mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 max-w-2xl mx-auto mb-16">
            {t('subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-festival-yellow/30 hover:border-festival-yellow transition-colors">
              <h2 className="text-2xl text-festival-purple mb-2 font-heading">
                {t('earlyBird')}
              </h2>
              <p className="text-4xl font-bold text-festival-purple mb-6">
                {t('earlyBirdPrice')}
              </p>
              <p className="text-festival-purple/70 text-sm mb-6">
                Limited availability
              </p>
              <Link
                href="#"
                className="block w-full bg-festival-yellow hover:bg-festival-yellow/90 text-festival-purple font-bold py-3 px-8 rounded-full text-center transition-colors"
              >
                {t('cta')}
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-festival-purple/30 hover:border-festival-purple transition-colors">
              <h2 className="text-2xl text-festival-purple mb-2 font-heading">
                {t('regular')}
              </h2>
              <p className="text-4xl font-bold text-festival-purple mb-6">
                {t('regularPrice')}
              </p>
              <p className="text-festival-purple/70 text-sm mb-6">
                Standard entry
              </p>
              <Link
                href="#"
                className="block w-full bg-festival-purple hover:bg-festival-purple/90 text-festival-cream font-bold py-3 px-8 rounded-full text-center transition-colors"
              >
                {t('cta')}
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-festival-yellow/50 hover:border-festival-yellow transition-colors">
              <h2 className="text-2xl text-festival-purple mb-2 font-heading">
                {t('vip')}
              </h2>
              <p className="text-4xl font-bold text-festival-purple mb-6">
                {t('vipPrice')}
              </p>
              <p className="text-festival-purple/70 text-sm mb-6">
                Backstage + perks
              </p>
              <Link
                href="#"
                className="block w-full bg-festival-yellow hover:bg-festival-yellow/90 text-festival-purple font-bold py-3 px-8 rounded-full text-center transition-colors"
              >
                {t('cta')}
              </Link>
            </div>
          </div>

          <p className="mt-12 text-festival-purple/60 text-sm">
            Ticket sales open soon.
          </p>
        </div>
      </section>
    </main>
  )
}

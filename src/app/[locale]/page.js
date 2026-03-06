'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Home() {
  const t = useTranslations()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-festival-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-festival-purple to-festival-purple/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${t('hero.image')}')`,
          }}
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-festival-yellow text-6xl md:text-8xl mb-4 animate-fade-in">
            Queer Music Fest
          </h1>
          <p className="text-2xl md:text-4xl mb-6 animate-fade-in-delay-1">
            {t('hero.subtitle')}
          </p>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay-2">
            {t('hero.description')}
          </p>
          <p className="text-xl mb-12 animate-fade-in-delay-3">
            {t('hero.date')}
          </p>
          <Link
            href={`/${t('locale')}/tickets`}
            className="inline-block bg-festival-yellow hover:bg-festival-yellow/80 text-festival-purple font-bold py-4 px-12 rounded-full text-xl transition-colors animate-fade-in-delay-4"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-festival-cream">
        <ScrollReveal className="container mx-auto px-4">
          <h2 className="text-4xl text-festival-purple text-center mb-16">
            {t('about.title')}
          </h2>
          <p className="text-xl text-festival-purple/80 max-w-3xl mx-auto text-center mb-16">
            {t('about.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/50 p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <h3 className="text-2xl text-festival-purple mb-4">
                {t('about.values.diversity')}
              </h3>
              <p className="text-festival-purple/80">
                {t('about.values.diversityDesc')}
              </p>
            </div>
            <div className="bg-white/50 p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <h3 className="text-2xl text-festival-purple mb-4">
                {t('about.values.inclusion')}
              </h3>
              <p className="text-festival-purple/80">
                {t('about.values.inclusionDesc')}
              </p>
            </div>
            <div className="bg-white/50 p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <h3 className="text-2xl text-festival-purple mb-4">
                {t('about.values.art')}
              </h3>
              <p className="text-festival-purple/80">
                {t('about.values.artDesc')}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Line-up Preview */}
      <section className="py-20 bg-gradient-to-b from-festival-purple to-festival-yellow text-festival-cream">
        <ScrollReveal
          className="container mx-auto px-4 text-center"
          delay={0.1}
        >
          <h2 className="text-4xl mb-4">{t('lineup.title')}</h2>
          <p className="text-xl mb-12">{t('lineup.subtitle')}</p>
          <Link
            href={`/${t('locale')}/lineup`}
            className="inline-block bg-festival-cream text-festival-purple hover:bg-festival-cream/90 font-bold py-3 px-8 rounded-full transition-colors"
          >
            {t('lineup.cta')}
          </Link>
        </ScrollReveal>
      </section>

      {/* Location */}
      <section className="py-20 bg-festival-cream">
        <ScrollReveal
          className="container mx-auto px-4 text-center"
          delay={0.1}
        >
          <h2 className="text-4xl text-festival-purple mb-4">
            {t('location.title')}
          </h2>
          <p className="text-2xl text-festival-purple/80 mb-4">
            {t('location.subtitle')}
          </p>
          <p className="text-xl text-festival-purple/60 mb-6">
            {t('location.description')}
          </p>
          <p className="text-festival-purple/80 font-medium mb-2">
            {t('location.gettingThere')}
          </p>
          <p className="text-festival-purple/70 text-sm mb-4">
            {t('location.transport')}
          </p>
          <a
            href={t('location.mapLink')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-festival-purple text-festival-cream hover:bg-festival-purple/90 font-semibold py-2 px-6 rounded-full transition-colors"
          >
            {t('location.mapCta')}
          </a>
        </ScrollReveal>
      </section>

      {/* Tickets */}
      <section className="py-20 bg-gradient-to-b from-festival-yellow to-festival-purple text-festival-cream">
        <ScrollReveal className="container mx-auto px-4" delay={0.1}>
          <h2 className="text-4xl text-center mb-4">{t('tickets.title')}</h2>
          <p className="text-xl text-center mb-16">{t('tickets.subtitle')}</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] hover:shadow-xl">
              <h3 className="text-2xl mb-4">{t('tickets.earlyBird')}</h3>
              <p className="text-4xl mb-8">{t('tickets.earlyBirdPrice')}</p>
              <Link
                href={`/${t('locale')}/tickets`}
                className="block w-full bg-festival-cream text-festival-purple hover:bg-festival-cream/90 font-bold py-3 px-8 rounded-full text-center transition-colors cursor-pointer"
              >
                {t('tickets.cta')}
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] hover:shadow-xl">
              <h3 className="text-2xl mb-4">{t('tickets.regular')}</h3>
              <p className="text-4xl mb-8">{t('tickets.regularPrice')}</p>
              <Link
                href={`/${t('locale')}/tickets`}
                className="block w-full bg-festival-cream text-festival-purple hover:bg-festival-cream/90 font-bold py-3 px-8 rounded-full text-center transition-colors cursor-pointer"
              >
                {t('tickets.cta')}
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] hover:shadow-xl">
              <h3 className="text-2xl mb-4">{t('tickets.vip')}</h3>
              <p className="text-4xl mb-8">{t('tickets.vipPrice')}</p>
              <Link
                href={`/${t('locale')}/tickets`}
                className="block w-full bg-festival-cream text-festival-purple hover:bg-festival-cream/90 font-bold py-3 px-8 rounded-full text-center transition-colors cursor-pointer"
              >
                {t('tickets.cta')}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}

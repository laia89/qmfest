'use client'

import FloatingMascot from '@/components/FloatingMascot'
import LineupPreview from '@/components/LineupPreview'
import LocationBlock from '@/components/LocationBlock'
import ScrollReveal from '@/components/ScrollReveal'
import WavyDivider from '@/components/WavyDivider'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRef } from 'react'

export default function Home() {
  const t = useTranslations()
  const heroRef = useRef(null)
  const mascotHandlersRef = useRef(null)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        onMouseMove={(e) => mascotHandlersRef.current?.onMouseMove(e)}
        onMouseLeave={() => mascotHandlersRef.current?.onMouseLeave?.()}
        className="relative h-screen flex items-center justify-center text-festival-cream overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-festival-purple/95 via-festival-purple/85 to-festival-purple/75 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${t('hero.image')}')`,
          }}
        />
        <FloatingMascot
          mascotSrc="/images/logo-mascota.png"
          heroRef={heroRef}
          handlersRef={mascotHandlersRef}
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-festival-yellow text-5xl md:text-7xl mb-4 animate-fade-in leading-relaxed md:leading-tight">
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

      <WavyDivider className="bg-festival-cream" />

      {/* Tickets — CTA compra just després del hero */}
      <section className="py-20 bg-festival-cream">
        <ScrollReveal className="container mx-auto px-4" delay={0.1}>
          <h2 className="text-4xl text-festival-purple text-center mb-4">
            {t('tickets.title')}
          </h2>
          <p className="text-xl text-festival-purple/80 text-center mb-16">
            {t('tickets.subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 p-8 rounded-xl shadow-lg border-2 border-festival-yellow/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden">
              <h3 className="text-2xl text-festival-purple mb-4">
                {t('tickets.earlyBird')}
              </h3>
              <p className="text-4xl text-festival-purple mb-8">
                {t('tickets.earlyBirdPrice')}
              </p>
              <Link
                href={`/${t('locale')}/tickets`}
                className="block w-full bg-festival-yellow text-festival-purple hover:bg-festival-yellow/90 font-bold py-3 px-8 rounded-full text-center transition-colors cursor-pointer"
              >
                {t('tickets.cta')}
              </Link>
            </div>
            <div className="bg-white/80 p-8 rounded-xl shadow-lg border-2 border-festival-purple/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden">
              <h3 className="text-2xl text-festival-purple mb-4">
                {t('tickets.regular')}
              </h3>
              <p className="text-4xl text-festival-purple mb-8">
                {t('tickets.regularPrice')}
              </p>
              <Link
                href={`/${t('locale')}/tickets`}
                className="block w-full bg-festival-purple text-festival-cream hover:bg-festival-purple/90 font-bold py-3 px-8 rounded-full text-center transition-colors cursor-pointer"
              >
                {t('tickets.cta')}
              </Link>
            </div>
            <div className="bg-white/80 p-8 rounded-xl shadow-lg border-2 border-festival-yellow/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden">
              <h3 className="text-2xl text-festival-purple mb-4">
                {t('tickets.vip')}
              </h3>
              <p className="text-4xl text-festival-purple mb-8">
                {t('tickets.vipPrice')}
              </p>
              <Link
                href={`/${t('locale')}/tickets`}
                className="block w-full bg-festival-yellow text-festival-purple hover:bg-festival-yellow/90 font-bold py-3 px-8 rounded-full text-center transition-colors cursor-pointer"
              >
                {t('tickets.cta')}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Line-up Preview — artistes + CTA */}
      <section className="py-20 bg-gradient-to-b from-festival-purple via-festival-purple/95 to-festival-yellow/90 text-festival-cream">
        <ScrollReveal delay={0.1}>
          <LineupPreview />
        </ScrollReveal>
      </section>

      {/* About — context i valors */}
      <section className="py-20 bg-gradient-to-b from-festival-cream to-festival-purple/10">
        <ScrollReveal className="container mx-auto px-4">
          <h2 className="text-4xl text-festival-purple text-center mb-16">
            {t('about.title')}
          </h2>
          <p className="text-xl text-festival-purple/80 max-w-3xl mx-auto text-center mb-16">
            {t('about.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/50 p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden">
              <h3 className="text-2xl text-festival-purple mb-4">
                {t('about.values.diversity')}
              </h3>
              <p className="text-festival-purple/80">
                {t('about.values.diversityDesc')}
              </p>
            </div>
            <div className="bg-white/50 p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden">
              <h3 className="text-2xl text-festival-purple mb-4">
                {t('about.values.inclusion')}
              </h3>
              <p className="text-festival-purple/80">
                {t('about.values.inclusionDesc')}
              </p>
            </div>
            <div className="bg-white/50 p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden">
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

      {/* Location — on i com arribar */}
      <section className="py-20 bg-festival-cream">
        <ScrollReveal className="container mx-auto px-4" delay={0.1}>
          <LocationBlock />
        </ScrollReveal>
      </section>
    </main>
  )
}

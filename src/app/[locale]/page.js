'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Home() {
  const t = useTranslations()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-pink-900/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-7xl md:text-9xl font-bold mb-4 animate-fade-in">
            {t('hero.title')}
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
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-colors animate-fade-in-delay-4"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-16">
            {t('about.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                {t('about.values.diversity')}
              </h3>
              <p className="text-gray-700">{t('about.values.diversityDesc')}</p>
            </div>
            <div className="bg-pink-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">
                {t('about.values.inclusion')}
              </h3>
              <p className="text-gray-700">{t('about.values.inclusionDesc')}</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                {t('about.values.art')}
              </h3>
              <p className="text-gray-700">{t('about.values.artDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Line-up Preview */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{t('lineup.title')}</h2>
          <p className="text-xl mb-12">{t('lineup.subtitle')}</p>
          <Link
            href={`/${t('locale')}/lineup`}
            className="inline-block bg-white text-purple-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors"
          >
            {t('lineup.cta')}
          </Link>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{t('location.title')}</h2>
          <p className="text-2xl text-gray-700 mb-4">
            {t('location.subtitle')}
          </p>
          <p className="text-xl text-gray-600">{t('location.description')}</p>
        </div>
      </section>

      {/* Tickets */}
      <section className="py-20 bg-gradient-to-b from-pink-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t('tickets.title')}
          </h2>
          <p className="text-xl text-center mb-16">{t('tickets.subtitle')}</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                {t('tickets.earlyBird')}
              </h3>
              <p className="text-4xl font-bold mb-8">
                {t('tickets.earlyBirdPrice')}
              </p>
              <Link
                href={`/${t('locale')}/tickets`}
                className="block w-full bg-white text-purple-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-center transition-colors"
              >
                {t('tickets.cta')}
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                {t('tickets.regular')}
              </h3>
              <p className="text-4xl font-bold mb-8">
                {t('tickets.regularPrice')}
              </p>
              <Link
                href={`/${t('locale')}/tickets`}
                className="block w-full bg-white text-purple-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-center transition-colors"
              >
                {t('tickets.cta')}
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">{t('tickets.vip')}</h3>
              <p className="text-4xl font-bold mb-8">{t('tickets.vipPrice')}</p>
              <Link
                href={`/${t('locale')}/tickets`}
                className="block w-full bg-white text-purple-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-center transition-colors"
              >
                {t('tickets.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

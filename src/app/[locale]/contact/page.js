'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl text-festival-purple text-center mb-4 font-heading">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 text-center mb-12">
            {t('subtitle')}
          </p>

          {sent ? (
            <p className="text-center text-festival-purple text-lg py-8">
              {t('formSuccess')}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-festival-purple mb-2"
                >
                  {t('formName')}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-festival-purple/20 bg-white focus:ring-2 focus:ring-festival-purple focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-festival-purple mb-2"
                >
                  {t('formEmail')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-festival-purple/20 bg-white focus:ring-2 focus:ring-festival-purple focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-festival-purple mb-2"
                >
                  {t('formMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-festival-purple/20 bg-white focus:ring-2 focus:ring-festival-purple focus:border-transparent resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full bg-festival-purple text-festival-cream font-bold hover:bg-festival-purple/90 transition-colors focus:outline-none focus:ring-2 focus:ring-festival-yellow"
              >
                {t('formSend')}
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-festival-purple/20 text-center">
            <p className="text-festival-purple/80 mb-2">{t('socialTitle')}</p>
            <a
              href={`mailto:${t('email')}`}
              className="text-festival-purple font-semibold hover:underline"
            >
              {t('email')}
            </a>
          </div>

          <div className="text-center mt-8">
            <Link
              href={`/${locale}`}
              className="inline-block text-festival-purple/80 hover:text-festival-purple font-medium"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

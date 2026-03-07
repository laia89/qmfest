'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function ContactPage() {
  const t = useTranslations('contact')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    if (!name || !email || !message) return

    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setSent(true)
        return
      }
      throw new Error(data.error || 'Send failed')
    } catch {
      const subject = encodeURIComponent(`[QM Fest] Contact from ${name}`)
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      )
      window.location.href = `mailto:${t('email')}?subject=${subject}&body=${body}`
      setSent(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-20 bg-festival-cream">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="page-title">{t('title')}</h1>
          <p className="page-subtitle">{t('subtitle')}</p>
          <div className="page-subtitle-line" />

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
                disabled={sending}
                className="w-full py-3 px-6 rounded-full bg-festival-purple text-festival-cream font-bold hover:bg-festival-purple/90 transition-colors focus:outline-none focus:ring-2 focus:ring-festival-yellow disabled:opacity-70 cursor-pointer"
              >
                {sending ? '…' : t('formSend')}
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
        </div>
      </section>
    </main>
  )
}

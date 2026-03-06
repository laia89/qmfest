'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

const INTEREST_KEYS = [
  'interestAccreditation',
  'interestInfo',
  'interestAudience',
  'interestOther',
]

export default function VolunteersPage() {
  const t = useTranslations('volunteers')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const interest = form.interest.value
    const message = form.message?.value?.trim() || ''

    if (!name || !email) return

    setSending(true)
    try {
      const res = await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          interest: interest || undefined,
          message,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setSent(true)
        return
      }
      throw new Error(data.error || 'Send failed')
    } catch {
      const subject = encodeURIComponent('[QM Fest] Volunteer sign-up')
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      )
      window.location.href = `mailto:hola@qmfest.com?subject=${subject}&body=${body}`
      setSent(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl text-festival-purple text-center mb-4 font-heading">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 text-center mb-4">
            {t('subtitle')}
          </p>
          <p className="text-festival-purple/80 text-center mb-12">
            {t('description')}
          </p>

          {sent ? (
            <p className="text-center text-festival-purple text-lg py-8 bg-white rounded-2xl border border-festival-purple/10 px-6">
              {t('formSuccess')}
            </p>
          ) : (
            <div className="bg-white rounded-2xl border border-festival-purple/10 shadow-sm p-8 md:p-10">
              <h2 className="text-xl font-heading font-bold text-festival-purple mb-6">
                {t('formTitle')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="vol-name"
                    className="block text-sm font-medium text-festival-purple mb-2"
                  >
                    {t('formName')}
                  </label>
                  <input
                    id="vol-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-festival-purple/20 bg-festival-cream/30 focus:ring-2 focus:ring-festival-purple focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="vol-email"
                    className="block text-sm font-medium text-festival-purple mb-2"
                  >
                    {t('formEmail')}
                  </label>
                  <input
                    id="vol-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-festival-purple/20 bg-festival-cream/30 focus:ring-2 focus:ring-festival-purple focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="vol-interest"
                    className="block text-sm font-medium text-festival-purple mb-2"
                  >
                    {t('formInterest')}
                  </label>
                  <select
                    id="vol-interest"
                    name="interest"
                    className="w-full px-4 py-3 rounded-lg border border-festival-purple/20 bg-festival-cream/30 focus:ring-2 focus:ring-festival-purple focus:border-transparent text-festival-purple"
                  >
                    <option value="">{t('interestPlaceholder')}</option>
                    {INTEREST_KEYS.map((key) => (
                      <option
                        key={key}
                        value={key.replace('interest', '').toLowerCase()}
                      >
                        {t(key)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="vol-message"
                    className="block text-sm font-medium text-festival-purple mb-2"
                  >
                    {t('formMessage')}
                  </label>
                  <textarea
                    id="vol-message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-festival-purple/20 bg-festival-cream/30 focus:ring-2 focus:ring-festival-purple focus:border-transparent resize-y"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 px-6 rounded-full bg-festival-purple text-festival-cream font-bold hover:bg-festival-purple/90 transition-colors focus:outline-none focus:ring-2 focus:ring-festival-yellow disabled:opacity-70 cursor-pointer"
                >
                  {sending ? '…' : t('formSubmit')}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

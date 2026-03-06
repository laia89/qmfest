'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'

const PRICE_IDS = {
  earlyBird: process.env.NEXT_PUBLIC_STRIPE_EARLY_BIRD_PRICE_ID,
  regular: process.env.NEXT_PUBLIC_STRIPE_REGULAR_PRICE_ID,
  vip: process.env.NEXT_PUBLIC_STRIPE_VIP_PRICE_ID,
}

function TicketsContent() {
  const t = useTranslations('tickets')
  const locale = useLocale()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(null)
  const canceled = searchParams.get('canceled') === '1'

  const handleCheckout = async (type) => {
    const priceId = PRICE_IDS[type]
    if (!priceId) return
    setLoading(type)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, quantity: 1, locale: locale || 'en' }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else throw new Error(data.error || 'Checkout failed')
    } catch (err) {
      console.error(err)
      setLoading(null)
    }
  }

  const hasStripe = PRICE_IDS.earlyBird || PRICE_IDS.regular || PRICE_IDS.vip

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl text-festival-purple mb-4 font-heading">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 max-w-2xl mx-auto mb-16">
            {t('subtitle')}
          </p>

          {canceled && (
            <p className="mb-8 mx-auto max-w-xl px-4 py-3 rounded-xl bg-festival-purple/10 text-festival-purple border border-festival-purple/20">
              {t('canceledMessage')}
            </p>
          )}

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-festival-yellow/30 hover:border-festival-yellow transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h2 className="text-2xl text-festival-purple mb-2 font-heading">
                {t('earlyBird')}
              </h2>
              <p className="text-4xl font-bold text-festival-purple mb-6">
                {t('earlyBirdPrice')}
              </p>
              <p className="text-festival-purple/70 text-sm mb-6">
                Limited availability
              </p>
              {PRICE_IDS.earlyBird ? (
                <button
                  type="button"
                  onClick={() => handleCheckout('earlyBird')}
                  disabled={!!loading}
                  className="block w-full bg-festival-yellow hover:bg-festival-yellow/90 text-festival-purple font-bold py-3 px-8 rounded-full text-center transition-colors disabled:opacity-70 cursor-pointer"
                >
                  {loading === 'earlyBird' ? '…' : t('cta')}
                </button>
              ) : (
                <span className="block w-full bg-festival-purple/20 text-festival-purple/70 font-bold py-3 px-8 rounded-full text-center cursor-not-allowed">
                  {t('cta')}
                </span>
              )}
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-festival-purple/30 hover:border-festival-purple transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h2 className="text-2xl text-festival-purple mb-2 font-heading">
                {t('regular')}
              </h2>
              <p className="text-4xl font-bold text-festival-purple mb-6">
                {t('regularPrice')}
              </p>
              <p className="text-festival-purple/70 text-sm mb-6">
                Standard entry
              </p>
              {PRICE_IDS.regular ? (
                <button
                  type="button"
                  onClick={() => handleCheckout('regular')}
                  disabled={!!loading}
                  className="block w-full bg-festival-purple hover:bg-festival-purple/90 text-festival-cream font-bold py-3 px-8 rounded-full text-center transition-colors disabled:opacity-70 cursor-pointer"
                >
                  {loading === 'regular' ? '…' : t('cta')}
                </button>
              ) : (
                <span className="block w-full bg-festival-purple/20 text-festival-purple/70 font-bold py-3 px-8 rounded-full text-center cursor-not-allowed">
                  {t('cta')}
                </span>
              )}
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-festival-yellow/50 hover:border-festival-yellow transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h2 className="text-2xl text-festival-purple mb-2 font-heading">
                {t('vip')}
              </h2>
              <p className="text-4xl font-bold text-festival-purple mb-6">
                {t('vipPrice')}
              </p>
              <p className="text-festival-purple/70 text-sm mb-6">
                Backstage + perks
              </p>
              {PRICE_IDS.vip ? (
                <button
                  type="button"
                  onClick={() => handleCheckout('vip')}
                  disabled={!!loading}
                  className="block w-full bg-festival-yellow hover:bg-festival-yellow/90 text-festival-purple font-bold py-3 px-8 rounded-full text-center transition-colors disabled:opacity-70 cursor-pointer"
                >
                  {loading === 'vip' ? '…' : t('cta')}
                </button>
              ) : (
                <span className="block w-full bg-festival-purple/20 text-festival-purple/70 font-bold py-3 px-8 rounded-full text-center cursor-not-allowed">
                  {t('cta')}
                </span>
              )}
            </div>
          </div>

          {!hasStripe && (
            <p className="mt-12 text-festival-purple/60 text-sm">
              Ticket sales open soon. Configure Stripe price IDs in .env to
              enable checkout.
            </p>
          )}
        </div>
      </section>
    </main>
  )
}

export default function TicketsPage() {
  return (
    <Suspense fallback={null}>
      <TicketsContent />
    </Suspense>
  )
}

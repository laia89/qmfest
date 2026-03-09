'use client'

import WavyDivider from '@/components/WavyDivider'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, Info } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

const MESSAGE_DURATION_MS = 5000

const PRICE_IDS = {
  earlyBird: process.env.NEXT_PUBLIC_STRIPE_EARLY_BIRD_PRICE_ID,
  regular: process.env.NEXT_PUBLIC_STRIPE_REGULAR_PRICE_ID,
  vip: process.env.NEXT_PUBLIC_STRIPE_VIP_PRICE_ID,
}

const MIN_QUANTITY = 1
const MAX_QUANTITY = 10

function TicketsContent() {
  const t = useTranslations('tickets')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const [showCanceled, setShowCanceled] = useState(false)
  const [quantities, setQuantities] = useState({
    earlyBird: 1,
    regular: 1,
    vip: 1,
  })
  const canceled = searchParams.get('canceled') === '1'

  const setQuantity = (type, value) => {
    const n = Math.max(
      MIN_QUANTITY,
      Math.min(MAX_QUANTITY, Number(value) || MIN_QUANTITY),
    )
    setQuantities((prev) => ({ ...prev, [type]: n }))
  }

  useEffect(() => {
    if (canceled) setShowCanceled(true)
  }, [canceled])

  useEffect(() => {
    if (!showCanceled && !error) return
    const tId = setTimeout(() => {
      if (showCanceled) {
        setShowCanceled(false)
        router.replace(pathname)
      }
      setError(null)
    }, MESSAGE_DURATION_MS)
    return () => clearTimeout(tId)
  }, [showCanceled, error, pathname, router])

  const handleCheckout = async (type) => {
    const priceId = PRICE_IDS[type]
    if (!priceId) {
      setError(t('checkoutError'))
      return
    }
    const qty = quantities[type] ?? 1
    setError(null)
    setLoading(type)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId,
          quantity: qty,
          locale: locale || 'en',
        }),
      })
      const data = await res.json()
      if (res.ok && data.url) {
        window.location.href = data.url
        return
      }
      throw new Error(data.error || 'Checkout failed')
    } catch (err) {
      console.error(err)
      setError(t('checkoutError'))
      setLoading(null)
    }
  }

  const hasStripe = PRICE_IDS.earlyBird || PRICE_IDS.regular || PRICE_IDS.vip

  return (
    <main className="min-h-screen pt-24 pb-16">
      <WavyDivider className="bg-festival-cream" />
      <section className="py-20 bg-festival-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="page-title">{t('title')}</h1>
          <p className="page-subtitle">{t('subtitle')}</p>
          <div className="page-subtitle-line" />

          <AnimatePresence mode="wait">
            {showCanceled && (
              <motion.div
                key="canceled"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="mb-8 mx-auto max-w-xl px-4 py-3 rounded-xl bg-festival-purple/10 text-festival-purple border border-festival-purple/20 flex items-center justify-center gap-3"
              >
                <Info className="w-5 h-5 shrink-0" aria-hidden />
                <p>{t('canceledMessage')}</p>
              </motion.div>
            )}
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="mb-8 mx-auto max-w-xl px-4 py-3 rounded-xl bg-festival-purple/10 text-festival-purple border border-festival-purple/20 flex items-center justify-center gap-3"
              >
                <AlertCircle className="w-5 h-5 shrink-0" aria-hidden />
                <p>{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-festival-yellow/30 hover:border-festival-yellow transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h2 className="text-2xl text-festival-purple mb-2 font-heading">
                {t('earlyBird')}
              </h2>
              <p className="text-4xl font-bold text-festival-purple mb-6">
                {t('earlyBirdPrice')}
              </p>
              <p className="text-festival-purple/70 text-sm mb-4">
                {t('earlyBirdDesc')}
              </p>
              <div className="flex items-center justify-center gap-2 mb-6">
                <label
                  htmlFor="qty-earlyBird"
                  className="text-festival-purple/80 text-sm font-medium"
                >
                  {t('quantity')}
                </label>
                <input
                  id="qty-earlyBird"
                  type="number"
                  min={MIN_QUANTITY}
                  max={MAX_QUANTITY}
                  value={quantities.earlyBird}
                  onChange={(e) => setQuantity('earlyBird', e.target.value)}
                  className="w-14 rounded-lg border-2 border-festival-purple/20 bg-white px-2 py-1.5 text-center text-festival-purple font-semibold focus:border-festival-yellow focus:outline-none focus:ring-2 focus:ring-festival-yellow/30"
                />
              </div>
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
              <p className="text-festival-purple/70 text-sm mb-4">
                {t('regularDesc')}
              </p>
              <div className="flex items-center justify-center gap-2 mb-6">
                <label
                  htmlFor="qty-regular"
                  className="text-festival-purple/80 text-sm font-medium"
                >
                  {t('quantity')}
                </label>
                <input
                  id="qty-regular"
                  type="number"
                  min={MIN_QUANTITY}
                  max={MAX_QUANTITY}
                  value={quantities.regular}
                  onChange={(e) => setQuantity('regular', e.target.value)}
                  className="w-14 rounded-lg border-2 border-festival-purple/20 bg-white px-2 py-1.5 text-center text-festival-purple font-semibold focus:border-festival-purple focus:outline-none focus:ring-2 focus:ring-festival-purple/30"
                />
              </div>
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
              <p className="text-festival-purple/70 text-sm mb-4">
                {t('vipDesc')}
              </p>
              <div className="flex items-center justify-center gap-2 mb-6">
                <label
                  htmlFor="qty-vip"
                  className="text-festival-purple/80 text-sm font-medium"
                >
                  {t('quantity')}
                </label>
                <input
                  id="qty-vip"
                  type="number"
                  min={MIN_QUANTITY}
                  max={MAX_QUANTITY}
                  value={quantities.vip}
                  onChange={(e) => setQuantity('vip', e.target.value)}
                  className="w-14 rounded-lg border-2 border-festival-purple/20 bg-white px-2 py-1.5 text-center text-festival-purple font-semibold focus:border-festival-yellow focus:outline-none focus:ring-2 focus:ring-festival-yellow/30"
                />
              </div>
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

          <p className="mt-12 text-center text-festival-purple/80 text-sm md:text-base max-w-xl mx-auto">
            {t('contactHelp')}
            <Link
              href={`/${locale}/contact`}
              className="text-festival-purple font-semibold underline underline-offset-2 hover:text-festival-purple/90 transition-colors"
            >
              {t('contactPage')}
            </Link>
            .
          </p>
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

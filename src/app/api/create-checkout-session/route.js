import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(request) {
  try {
    const { priceId, quantity = 1, locale = 'en' } = await request.json()

    const secretKey = process.env.STRIPE_SECRET_KEY
    if (!priceId || !secretKey) {
      return NextResponse.json(
        { error: 'Missing priceId or STRIPE_SECRET_KEY' },
        { status: 400 },
      )
    }

    const stripe = new Stripe(secretKey, { apiVersion: '2024-11-20.acacia' })
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin
    const successUrl = `${baseUrl}/${locale}/tickets/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${baseUrl}/${locale}/tickets?canceled=1`

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      locale: locale === 'ca' ? 'ca' : locale === 'es' ? 'es' : 'en',
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: err.message || 'Checkout session failed' },
      { status: 500 },
    )
  }
}

import CookieBanner from '@/components/CookieBanner'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import '../globals.css'

const locales = ['en', 'es', 'ca']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = {
    en: 'QM Fest | Queer Music Festival Barcelona',
    es: 'QM Fest | Festival de Música Queer Barcelona',
    ca: 'QM Fest | Festival de Música Queer Barcelona',
  }
  return {
    title: titles[locale] || titles.en,
    description:
      'Celebrating diversity through music. Parc del Fòrum, Barcelona.',
    openGraph: {
      locale: locale === 'ca' ? 'ca_ES' : locale === 'es' ? 'es_ES' : 'en_US',
    },
  }
}

export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await Promise.resolve(params)
  const locale = resolvedParams?.locale

  if (!locale || !locales.includes(locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navigation />
      <div className="flex flex-col">{children}</div>
      <Footer />
      <CookieBanner />
    </NextIntlClientProvider>
  )
}

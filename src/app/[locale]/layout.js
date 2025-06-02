import Navigation from '@/components/Navigation'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import '../globals.css'

// Import all locale files
import caMessages from '@/i18n/locales/ca.json'
import enMessages from '@/i18n/locales/en.json'
import esMessages from '@/i18n/locales/es.json'

const messages = {
  en: enMessages,
  es: esMessages,
  ca: caMessages,
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'ca' }]
}

export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await Promise.resolve(params)
  const locale = resolvedParams.locale

  if (!messages[locale]) {
    notFound()
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      <Navigation />
      {children}
    </NextIntlClientProvider>
  )
}

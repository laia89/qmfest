import Navigation from '@/components/Navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import '../globals.css'

const locales = ['en', 'es', 'ca']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
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
      {children}
    </NextIntlClientProvider>
  )
}

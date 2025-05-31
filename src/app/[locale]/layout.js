import Navigation from '@/components/Navigation'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import '../globals.css'

export const metadata = {
  title: 'QM Fest',
  description: 'The biggest music festival in Mallorca',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'ca' }]
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages
  try {
    messages = (await import(`@/i18n/locales/${locale}.json`)).default
  } catch {
    notFound()
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navigation />
      {children}
    </NextIntlClientProvider>
  )
}

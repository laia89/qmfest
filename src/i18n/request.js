import { getRequestConfig } from 'next-intl/server'
import { defaultLocale, locales } from './config'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale
  }

  // Content from JSON: src/content/site/[locale].json (fallback: i18n/locales)
  let messages
  try {
    messages = (await import(`../content/site/${locale}.json`)).default
  } catch {
    messages = (await import(`./locales/${locale}.json`)).default
  }

  return {
    locale,
    messages,
  }
})

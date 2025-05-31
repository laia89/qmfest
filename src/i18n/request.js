import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    locale = 'es' // Default to Spanish if no locale is provided
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  }
})

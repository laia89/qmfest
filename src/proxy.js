import createMiddleware from 'next-intl/middleware'
import { defaultLocale, locales } from './i18n/config'

const proxy = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
})

export default proxy

export const config = {
  matcher: ['/', '/(es|ca|en)/:path*'],
}

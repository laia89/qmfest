/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js')

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withNextIntl(nextConfig)

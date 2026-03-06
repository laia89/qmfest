const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.com'
const locales = ['en', 'es', 'ca']
const paths = [
  '',
  '/lineup',
  '/tickets',
  '/program',
  '/about',
  '/faq',
  '/contact',
  '/privacy',
  '/cookies',
]

function buildUrls() {
  const urls = []
  for (const locale of locales) {
    for (const path of paths) {
      urls.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.8,
      })
    }
  }
  return urls
}

export default function sitemap() {
  return buildUrls()
}

import pastEditions from '@/content/past-events.json'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app'
const locales = ['es', 'ca', 'en']
const paths = [
  '',
  '/lineup',
  '/tickets',
  '/merch',
  '/playlist',
  '/program',
  '/about',
  '/past-events',
  ...pastEditions.map((e) => `/past-events/${e.year}`),
  '/accessibility',
  '/sponsors',
  '/press',
  '/volunteers',
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

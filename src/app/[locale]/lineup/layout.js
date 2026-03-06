const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.com'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = { en: 'Lineup', es: 'Artistas', ca: 'Artistes' }
  const path = 'lineup'
  return {
    title: titles[locale] || titles.en,
    description: 'Discover the artists of QM Fest. Barcelona.',
    openGraph: {
      title: `${titles[locale] || titles.en} | QM Fest`,
      description: 'Discover the artists of QM Fest.',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/${path}`,
      languages: { en: `${baseUrl}/en/${path}`, es: `${baseUrl}/es/${path}`, ca: `${baseUrl}/ca/${path}` },
    },
  }
}

export default function LineupLayout({ children }) {
  return children
}

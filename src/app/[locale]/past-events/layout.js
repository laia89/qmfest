const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = {
    en: 'Past events',
    es: 'Ediciones anteriores',
    ca: 'Edicions anteriors',
  }
  const path = 'past-events'
  return {
    title: titles[locale] || titles.en,
    description: 'Previous editions of QM Fest. Barcelona.',
    openGraph: {
      title: `${titles[locale] || titles.en} | QM Fest`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/${path}`,
      languages: {
        en: `${baseUrl}/en/${path}`,
        es: `${baseUrl}/es/${path}`,
        ca: `${baseUrl}/ca/${path}`,
      },
    },
  }
}

export default function PastEventsLayout({ children }) {
  return children
}

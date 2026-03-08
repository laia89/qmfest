const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = {
    en: 'Merch',
    es: 'Merch',
    ca: 'Merch',
  }
  const path = 'merch'
  return {
    title: titles[locale] || titles.en,
    description: 'Official QM Fest merchandise. Order online.',
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

export default function MerchLayout({ children }) {
  return children
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = { en: 'Press', es: 'Prensa', ca: 'Premsa' }
  const path = 'press'
  return {
    title: titles[locale] || titles.en,
    description: 'Press kit and media contact for QM Fest.',
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

export default function PressLayout({ children }) {
  return children
}

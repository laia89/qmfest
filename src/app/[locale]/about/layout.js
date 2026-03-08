const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = {
    en: 'About',
    es: 'Sobre el Festival',
    ca: 'Sobre el Festival',
  }
  const path = 'about'
  return {
    title: titles[locale] || titles.en,
    description:
      'About QM Fest. Celebrating diversity through music in Barcelona.',
    openGraph: {
      title: `${titles[locale] || titles.en} | QM Fest`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/${path}`,
      languages: { en: `${baseUrl}/en/${path}`, es: `${baseUrl}/es/${path}`, ca: `${baseUrl}/ca/${path}` },
    },
  }
}

export default function AboutLayout({ children }) {
  return children
}

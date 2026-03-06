const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.com'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = { en: 'Tickets', es: 'Entradas', ca: 'Entrades' }
  const path = 'tickets'
  return {
    title: titles[locale] || titles.en,
    description:
      'Get your tickets for QM Fest. Early Bird, Regular and VIP. Barcelona.',
    openGraph: {
      title: `${titles[locale] || titles.en} | QM Fest`,
      description: 'Get your tickets for QM Fest. Barcelona.',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/${path}`,
      languages: { en: `${baseUrl}/en/${path}`, es: `${baseUrl}/es/${path}`, ca: `${baseUrl}/ca/${path}` },
    },
  }
}

export default function TicketsLayout({ children }) {
  return children
}

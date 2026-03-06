const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.com'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = {
    en: 'Accessibility',
    es: 'Accesibilidad',
    ca: 'Accessibilitat',
  }
  const path = 'accessibility'
  return {
    title: titles[locale] || titles.en,
    description:
      'Accessibility at QM Fest. Getting there, adapted tickets, facilities.',
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

export default function AccessibilityLayout({ children }) {
  return children
}

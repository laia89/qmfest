const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = { en: 'Programme', es: 'Programa', ca: 'Programa' }
  const path = 'program'
  return {
    title: titles[locale] || titles.en,
    description: 'Schedule and stages. QM Fest Barcelona.',
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

export default function ProgramLayout({ children }) {
  return children
}

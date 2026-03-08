const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = {
    en: 'Sponsors',
    es: 'Colaboradores',
    ca: 'Col·laboradors',
  }
  const path = 'sponsors'
  return {
    title: titles[locale] || titles.en,
    description: 'Sponsors and collaborators of QM Fest.',
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

export default function SponsorsLayout({ children }) {
  return children
}

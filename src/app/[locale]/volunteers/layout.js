const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = {
    en: 'Volunteers',
    es: 'Voluntariado',
    ca: 'Voluntariat',
  }
  const path = 'volunteers'
  return {
    title: titles[locale] || titles.en,
    description: 'Join the QM Fest volunteer team.',
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

export default function VolunteersLayout({ children }) {
  return children
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = { en: 'Contact', es: 'Contacto', ca: 'Contacte' }
  const path = 'contact'
  return {
    title: titles[locale] || titles.en,
    description: 'Get in touch with QM Fest.',
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

export default function ContactLayout({ children }) {
  return children
}

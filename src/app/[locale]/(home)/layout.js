const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.com'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  return {
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
        ca: `${baseUrl}/ca`,
      },
    },
  }
}

export default function HomeLayout({ children }) {
  return children
}

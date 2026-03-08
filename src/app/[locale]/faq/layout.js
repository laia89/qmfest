const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const path = 'faq'
  return {
    title: 'FAQ',
    description:
      'Frequently asked questions about QM Fest. Tickets, access, refunds.',
    openGraph: {
      title: 'FAQ | QM Fest',
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

export default function FAQLayout({ children }) {
  return children
}

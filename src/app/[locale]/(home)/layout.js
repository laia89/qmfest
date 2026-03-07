const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.com'

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'QM Fest — Queer Music Festival Barcelona',
  description:
    'The biggest queer music festival in Barcelona. Celebrating diversity through music.',
  startDate: '2026-05-25T16:00:00+02:00',
  endDate: '2026-05-26T02:00:00+02:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Sala Apolo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer Nou de la Rambla 113',
      addressLocality: 'Barcelona',
      addressCountry: 'ES',
    },
  },
  image: `${baseUrl}/opengraph-image`,
  url: baseUrl,
}

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      {children}
    </>
  )
}

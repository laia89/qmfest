export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = { en: 'Tickets', es: 'Entradas', ca: 'Entrades' }
  return {
    title: titles[locale] || titles.en,
    description:
      'Get your tickets for QM Fest. Early Bird, Regular and VIP. Barcelona.',
    openGraph: {
      title: `${titles[locale] || titles.en} | QM Fest`,
      description: 'Get your tickets for QM Fest. Barcelona.',
    },
  }
}

export default function TicketsLayout({ children }) {
  return children
}

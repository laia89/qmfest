export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = {
    en: 'About',
    es: 'Sobre el Festival',
    ca: 'Sobre el Festival',
  }
  return {
    title: titles[locale] || titles.en,
    description:
      'About QM Fest. Celebrating diversity through music in Barcelona.',
    openGraph: {
      title: `${titles[locale] || titles.en} | QM Fest`,
    },
  }
}

export default function AboutLayout({ children }) {
  return children
}

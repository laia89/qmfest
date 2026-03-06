export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = { en: 'Lineup', es: 'Artistas', ca: 'Artistes' }
  return {
    title: titles[locale] || titles.en,
    description: 'Discover the artists of QM Fest. Barcelona.',
    openGraph: {
      title: `${titles[locale] || titles.en} | QM Fest`,
      description: 'Discover the artists of QM Fest.',
    },
  }
}

export default function LineupLayout({ children }) {
  return children
}

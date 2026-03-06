export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = { en: 'Programme', es: 'Programa', ca: 'Programa' }
  return {
    title: titles[locale] || titles.en,
    description: 'Schedule and stages. QM Fest Barcelona.',
    openGraph: {
      title: `${titles[locale] || titles.en} | QM Fest`,
    },
  }
}

export default function ProgramLayout({ children }) {
  return children
}

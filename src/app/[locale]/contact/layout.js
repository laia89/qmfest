export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = { en: 'Contact', es: 'Contacto', ca: 'Contacte' }
  return {
    title: titles[locale] || titles.en,
    description: 'Get in touch with QM Fest.',
    openGraph: {
      title: `${titles[locale] || titles.en} | QM Fest`,
    },
  }
}

export default function ContactLayout({ children }) {
  return children
}

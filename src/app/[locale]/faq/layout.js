export async function generateMetadata({ params }) {
  await Promise.resolve(params)
  return {
    title: 'FAQ',
    description:
      'Frequently asked questions about QM Fest. Tickets, access, refunds.',
    openGraph: {
      title: 'FAQ | QM Fest',
    },
  }
}

export default function FAQLayout({ children }) {
  return children
}

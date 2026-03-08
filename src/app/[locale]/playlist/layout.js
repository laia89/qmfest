const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params)
  const titles = {
    en: 'Playlist',
    es: 'Playlist',
    ca: 'Playlist',
  }
  const path = 'playlist'
  return {
    title: titles[locale] || titles.en,
    description: 'Official QM Fest playlist on Spotify.',
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

export default function PlaylistLayout({ children }) {
  return children
}

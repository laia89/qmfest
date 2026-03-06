'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const artists = [
  {
    id: 'artist-1',
    name: 'DJ Rainbow',
    image:
      'https://images.unsplash.com/photo-1571266028243-d220e8d4a2a4?w=400&h=400&fit=crop',
    bio: "Electronic music producer and DJ. Resident at Barcelona's best queer parties.",
    spotifyUrl: 'https://open.spotify.com',
    instagramUrl: 'https://instagram.com',
  },
  {
    id: 'artist-2',
    name: 'Soul Collective',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
    bio: 'Live band blending soul, funk and disco. Five-piece from Barcelona.',
    spotifyUrl: 'https://open.spotify.com',
    instagramUrl: 'https://instagram.com',
  },
  {
    id: 'artist-3',
    name: 'Luna Pop',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    bio: 'Singer-songwriter. Indie pop with queer anthems.',
    spotifyUrl: 'https://open.spotify.com',
    instagramUrl: 'https://instagram.com',
  },
  {
    id: 'artist-4',
    name: 'Bass Queen',
    image:
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=400&fit=crop',
    bio: 'Bass music and drum & bass. International tours and local pride.',
    spotifyUrl: 'https://open.spotify.com',
    instagramUrl: 'https://instagram.com',
  },
]

export default function LineupPage() {
  const t = useTranslations('lineup')
  const locale = useLocale()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-festival-purple text-center mb-4 font-heading">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 max-w-2xl mx-auto text-center mb-12">
            {t('subtitle')}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {artists.map((artist) => (
              <article
                key={artist.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-festival-purple/10 hover:shadow-xl hover:border-festival-purple/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square relative bg-festival-purple/10">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-heading font-bold text-festival-purple mb-2">
                    {artist.name}
                  </h2>
                  <p className="text-festival-purple/80 text-sm mb-4 line-clamp-3">
                    {artist.bio}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={artist.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-festival-purple/70 hover:text-festival-purple text-sm font-medium"
                    >
                      Spotify
                    </a>
                    <a
                      href={artist.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-festival-purple/70 hover:text-festival-purple text-sm font-medium"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${locale}`}
              className="inline-block bg-festival-purple text-festival-cream hover:bg-festival-purple/90 font-semibold py-3 px-8 rounded-full transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

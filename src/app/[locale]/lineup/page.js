'use client'

import artists from '@/content/lineup/artists.json'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function LineupPage() {
  const t = useTranslations('lineup')
  const locale = useLocale()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-20 bg-festival-cream">
        <div className="container mx-auto px-4">
          <h1 className="page-title">{t('title')}</h1>
          <p className="page-subtitle">{t('subtitle')}</p>
          <div className="page-subtitle-line" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {artists.map((artist) => (
              <article
                key={artist.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-festival-purple/10 hover:shadow-xl hover:border-festival-purple/20 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-square relative bg-festival-purple/10 shrink-0">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 min-h-0">
                  <h2 className="text-xl font-heading font-bold text-festival-purple mb-2">
                    {artist.name}
                  </h2>
                  <p className="text-festival-purple/80 text-sm mb-4 line-clamp-3 flex-1 min-h-0">
                    {artist.bio}
                  </p>
                  <div className="flex gap-4 text-sm mt-auto pt-2">
                    <a
                      href={artist.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-festival-purple/70 hover:text-festival-purple border-b border-festival-purple/30 hover:border-festival-purple transition-colors duration-200 cursor-pointer"
                      aria-label={`${artist.name} on Spotify`}
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                      Spotify
                    </a>
                    <a
                      href={artist.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-festival-purple/70 hover:text-festival-purple border-b border-festival-purple/30 hover:border-festival-purple transition-colors duration-200 cursor-pointer"
                      aria-label={`${artist.name} on Instagram`}
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center mt-14 mb-4">
            <Link
              href={`/${locale}/past-events`}
              className="inline-block text-festival-purple/80 hover:text-festival-purple font-medium border-b-2 border-festival-purple/40 hover:border-festival-purple transition-colors pb-0.5"
            >
              {t('pastEditionsLink')} →
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

'use client'

import { useTranslations } from 'next-intl'

const SPOTIFY_PLAYLIST_ID = '5BYt5SEkq0myuIumK0NcNS'
const SPOTIFY_OPEN_URL = `https://open.spotify.com/playlist/${SPOTIFY_PLAYLIST_ID}`

export default function PlaylistPage() {
  const t = useTranslations('playlist')

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Header: títol, dates, CTA - estil Mad Cool */}
      <section className="bg-festival-cream py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-festival-purple tracking-tight leading-tight">
                {t('heading')}
              </h1>
            </div>
            <a
              href={SPOTIFY_OPEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-festival-yellow text-festival-purple font-semibold py-3 px-6 rounded-full hover:bg-festival-yellow/90 transition-colors cursor-pointer border-2 border-festival-purple/20 shrink-0 w-fit"
            >
              <svg
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              {t('cta')}
            </a>
          </div>
        </div>
      </section>

      {/* Reproductor Spotify incrustat */}
      <section className="py-10 md:py-14 bg-festival-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div
            className="rounded-xl overflow-hidden bg-[#1a1a1a] shadow-lg"
            style={{ borderRadius: '12px' }}
          >
            <iframe
              title="QM Fest 2026 Official Playlist"
              src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="650"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
              style={{ borderRadius: '12px', minHeight: '650px' }}
            />
          </div>
          <p className="mt-6 text-center text-festival-purple/70 text-sm">
            {t('description')}
          </p>
        </div>
      </section>
    </main>
  )
}

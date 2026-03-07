'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

const VENUE_IMAGE =
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'

export default function LocationBlock() {
  const t = useTranslations('location')

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-5xl mx-auto">
      <div>
        <h2 className="text-3xl md:text-4xl font-heading text-festival-purple mb-2">
          {t('title')}
        </h2>
        <p className="text-xl text-festival-purple/90 font-medium mb-3">
          {t('subtitle')}
        </p>
        <p className="text-festival-purple/70 mb-6">{t('description')}</p>

        <p className="text-festival-purple font-semibold text-sm uppercase tracking-wide mb-3">
          {t('gettingThere')}
        </p>
        <ul className="space-y-2 text-festival-purple/80 text-sm mb-8">
          <li className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-festival-purple/10 text-festival-purple font-bold text-xs shrink-0">
              M
            </span>
            {t('metro')}
          </li>
          <li className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-festival-purple/10 text-festival-purple font-bold text-xs shrink-0">
              T
            </span>
            {t('tram')}
          </li>
          <li className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-festival-purple/10 text-festival-purple font-bold text-xs shrink-0">
              B
            </span>
            {t('bus')}
          </li>
        </ul>

        <a
          href={t('mapLink')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-festival-purple text-festival-cream hover:bg-festival-purple/90 font-semibold py-3 px-6 rounded-full transition-colors"
        >
          <MapPinIcon />
          {t('mapCta')}
        </a>
      </div>

      <a
        href={t('mapLink')}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl overflow-hidden shadow-xl border-2 border-festival-purple/10 hover:border-festival-purple/30 transition-all hover:shadow-2xl group"
      >
        <div className="aspect-[4/3] relative">
          <Image
            src={VENUE_IMAGE}
            alt="Parc del Fòrum, Barcelona"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-festival-purple/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-2 rounded-lg bg-festival-cream/90 text-festival-purple font-semibold text-sm">
            <MapPinIcon />
            {t('mapCta')}
          </div>
        </div>
      </a>
    </div>
  )
}

function MapPinIcon() {
  return (
    <svg
      className="w-5 h-5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )
}

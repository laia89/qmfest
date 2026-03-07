'use client'

import artists from '@/content/lineup/artists.json'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function LineupPreview() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-heading text-festival-cream text-center mb-2">
        {t('lineup.title')}
      </h2>
      <p className="text-xl text-festival-cream/90 text-center mb-12 max-w-2xl mx-auto">
        {t('lineup.subtitle')}
      </p>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-14">
        {artists.map((artist) => (
          <Link
            key={artist.id}
            href={`/${locale}/lineup`}
            className="group flex flex-col items-center text-center"
          >
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-festival-cream/30 group-hover:ring-festival-yellow transition-all duration-300 shadow-lg group-hover:scale-105">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 112px"
              />
            </div>
            <span className="mt-3 text-festival-cream font-semibold text-sm md:text-base group-hover:text-festival-yellow transition-colors">
              {artist.name}
            </span>
          </Link>
        ))}
      </div>

      <p className="text-center">
        <Link
          href={`/${locale}/lineup`}
          className="inline-block bg-festival-cream text-festival-purple hover:bg-festival-yellow font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl"
        >
          {t('lineup.cta')}
        </Link>
      </p>
    </div>
  )
}

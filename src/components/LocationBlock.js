'use client'

import { Bus, MapPin, TrainFrontTunnel } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

// Imatge per defecte del lloc. Es pot canviar des del contingut (location.image).
const DEFAULT_VENUE_IMAGE =
  'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80'

const iconClass = 'w-5 h-5 text-festival-purple/60 shrink-0'

export default function LocationBlock() {
  const t = useTranslations('location')
  const imageUrl = t('image') || DEFAULT_VENUE_IMAGE

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
            <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full bg-festival-purple/5">
              <TrainFrontTunnel className={iconClass} />
            </span>
            {t('metro')}
          </li>
          <li className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full bg-festival-purple/5">
              <Bus className={iconClass} />
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
          <MapPin className="w-5 h-5 shrink-0" />
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
            src={imageUrl}
            alt={t('subtitle')}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-festival-purple/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-2 rounded-lg bg-festival-cream/90 text-festival-purple font-semibold text-sm">
            <MapPin className="w-5 h-5 shrink-0" />
            {t('mapCta')}
          </div>
        </div>
      </a>
      {imageUrl.includes('wikimedia') && (
        <p className="text-right text-festival-purple/50 text-xs mt-2">
          <a
            href="https://commons.wikimedia.org/wiki/File:Nou_de_la_Rambla_107-113.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-festival-purple/70"
          >
            Foto: Xavier Badia Castellà, CC BY-SA 3.0
          </a>
        </p>
      )}
    </div>
  )
}

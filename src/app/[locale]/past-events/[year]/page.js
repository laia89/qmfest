import pastEditions from '@/content/past-events.json'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return pastEditions.map((e) => ({ year: String(e.year) }))
}

export async function generateMetadata({ params }) {
  const { locale, year } = await Promise.resolve(params)
  const edition = pastEditions.find((e) => String(e.year) === year)
  if (!edition) return { title: 'QM Fest' }
  const titles = {
    en: `QM Fest ${year}`,
    es: `QM Fest ${year}`,
    ca: `QM Fest ${year}`,
  }
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qmfest.vercel.app'
  return {
    title: titles[locale] || titles.en,
    description: `Edition ${year} of QM Fest. Barcelona.`,
    openGraph: {
      title: `${titles[locale] || titles.en} | QM Fest`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/past-events/${year}`,
      languages: {
        en: `${baseUrl}/en/past-events/${year}`,
        es: `${baseUrl}/es/past-events/${year}`,
        ca: `${baseUrl}/ca/past-events/${year}`,
      },
    },
  }
}

export default async function PastEventYearPage({ params }) {
  const { locale, year } = await Promise.resolve(params)
  setRequestLocale(locale)
  const edition = pastEditions.find((e) => String(e.year) === year)
  if (!edition) notFound()

  const t = await getTranslations('pastEvents')
  const photos = edition.images?.length ? edition.images : [edition.image]

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-20 bg-festival-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="mb-6">
            <Link
              href={`/${locale}/past-events`}
              className="text-festival-purple/80 hover:text-festival-purple font-medium"
            >
              {t('backToPastEvents')}
            </Link>
          </p>

          <h1 className="page-title">QM Fest {edition.year}</h1>
          <p className="page-subtitle">{t(edition.dateKey)}</p>
          <div className="page-subtitle-line" />

          <p className="text-festival-purple/80 text-lg text-center max-w-2xl mx-auto mb-14">
            {t(`description${edition.year}`)}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {photos.map((url, i) => (
              <div
                key={i}
                className="aspect-video relative rounded-xl overflow-hidden bg-festival-purple/10"
              >
                <Image
                  src={url}
                  alt={`QM Fest ${edition.year} — ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          {edition.recapUrl ? (
            <p className="text-center">
              <a
                href={edition.recapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-festival-purple font-semibold hover:text-festival-purple/80 transition-colors border-b-2 border-festival-purple/40 hover:border-festival-purple"
              >
                {t('recapLink')} →
              </a>
            </p>
          ) : null}
        </div>
      </section>
    </main>
  )
}

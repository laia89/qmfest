import scheduleData from '@/content/schedule.json'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Link from 'next/link'

export default async function ProgramPage({ params }) {
  const { locale } = await Promise.resolve(params)
  setRequestLocale(locale)
  const t = await getTranslations('program')
  const tCommon = await getTranslations('common')

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-festival-purple text-center mb-4 font-heading">
            {t('title')}
          </h1>
          <p className="text-xl text-festival-purple/80 text-center mb-12">
            {t('subtitle')}
          </p>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white/70 rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-festival-purple text-festival-cream">
                  <th className="px-4 py-3 text-left font-heading">
                    {t('time')}
                  </th>
                  <th className="px-4 py-3 text-left font-heading">
                    {t('stage')}
                  </th>
                  <th className="px-4 py-3 text-left font-heading">
                    {t('artist')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-festival-purple/10 hover:bg-white/90 transition-colors"
                  >
                    <td className="px-4 py-3 text-festival-purple font-medium">
                      {row.time}
                    </td>
                    <td className="px-4 py-3 text-festival-purple/80">
                      {row.stage}
                    </td>
                    <td className="px-4 py-3 text-festival-purple font-semibold">
                      {row.artistName}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-festival-purple/60 text-sm mt-6">
            {t('day')} 1 — 25 May 2026 · Parc del Fòrum, Barcelona
          </p>

          <div className="text-center mt-12">
            <Link
              href={`/${locale}`}
              className="inline-block bg-festival-purple text-festival-cream hover:bg-festival-purple/90 font-semibold py-3 px-8 rounded-full transition-colors"
            >
              ← {tCommon('backToHome')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

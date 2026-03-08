import ProgramSchedule from '@/components/ProgramSchedule'
import scheduleData from '@/content/schedule.json'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function ProgramPage({ params }) {
  const { locale } = await Promise.resolve(params)
  setRequestLocale(locale)
  const t = await getTranslations('program')

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-20 bg-festival-cream">
        <div className="container mx-auto px-4">
          <h1 className="page-title mb-16">{t('title')}</h1>

          <ProgramSchedule
            schedule={scheduleData}
            timeLabel={t('time')}
            artistLabel={t('artist')}
            dateVenue={t('dateVenue')}
          />
        </div>
      </section>
    </main>
  )
}

import ProgramSchedule from '@/components/ProgramSchedule'
import scheduleData from '@/content/schedule.json'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function ProgramPage({ params }) {
  const { locale } = await Promise.resolve(params)
  setRequestLocale(locale)
  const t = await getTranslations('program')

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

          <ProgramSchedule
            schedule={scheduleData}
            timeLabel={t('time')}
            stageLabel={t('stage')}
            artistLabel={t('artist')}
            allStagesLabel={t('allStages')}
            dayLabel={t('day')}
          />
        </div>
      </section>
    </main>
  )
}

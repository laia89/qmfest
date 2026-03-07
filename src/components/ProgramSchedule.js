'use client'

import { useMemo, useState } from 'react'

export default function ProgramSchedule({
  schedule,
  timeLabel,
  stageLabel,
  artistLabel,
  allStagesLabel,
  dayLabel,
}) {
  const stages = useMemo(() => {
    const set = new Set(schedule.map((row) => row.stage))
    return ['All', ...Array.from(set).sort()]
  }, [schedule])

  const [stageFilter, setStageFilter] = useState('All')
  const filtered =
    stageFilter === 'All'
      ? schedule
      : schedule.filter((row) => row.stage === stageFilter)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-2">
        {stages.map((stage) => (
          <button
            key={stage}
            type="button"
            onClick={() => setStageFilter(stage)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              stageFilter === stage
                ? 'bg-festival-purple text-festival-cream'
                : 'bg-white/70 text-festival-purple/80 hover:bg-white border border-festival-purple/20'
            }`}
          >
            {stage === 'All' ? allStagesLabel : stage}
          </button>
        ))}
      </div>

      {/* Desktop: table */}
      <div className="max-w-4xl mx-auto overflow-x-auto hidden md:block">
        <table className="w-full border-collapse bg-white/70 rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-festival-purple text-festival-cream">
              <th className="px-4 py-3 text-left font-heading">{timeLabel}</th>
              <th className="px-4 py-3 text-left font-heading">{stageLabel}</th>
              <th className="px-4 py-3 text-left font-heading">
                {artistLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
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

      {/* Mobile: cards */}
      <div className="md:hidden space-y-3">
        {filtered.map((row, i) => (
          <div
            key={i}
            className="bg-white/80 rounded-xl p-4 border border-festival-purple/10 shadow-sm"
          >
            <p className="text-festival-purple font-bold text-lg">
              {row.artistName}
            </p>
            <p className="text-festival-purple/80 text-sm mt-1">
              {row.time} · {row.stage}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-festival-purple/60 text-sm">
        {dayLabel} 1 — 25 May 2026 · Sala Apolo, Barcelona
      </p>
    </div>
  )
}

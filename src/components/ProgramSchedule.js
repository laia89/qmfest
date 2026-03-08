'use client'

export default function ProgramSchedule({
  schedule,
  timeLabel,
  artistLabel,
  dateVenue,
}) {
  return (
    <div className="space-y-6">
      {/* Desktop: table */}
      <div className="max-w-4xl mx-auto overflow-x-auto hidden md:block">
        <table className="w-full border-collapse bg-white/70 rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-festival-purple text-festival-cream">
              <th className="px-4 py-3 text-left font-heading">{timeLabel}</th>
              <th className="px-4 py-3 text-left font-heading">
                {artistLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, i) => (
              <tr
                key={i}
                className="border-b border-festival-purple/10 hover:bg-white/90 transition-colors"
              >
                <td className="px-4 py-3 text-festival-purple font-medium">
                  {row.time}
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
        {schedule.map((row, i) => (
          <div
            key={i}
            className="bg-white/80 rounded-xl p-4 border border-festival-purple/10 shadow-sm"
          >
            <p className="text-festival-purple font-bold text-lg">
              {row.artistName}
            </p>
            <p className="text-festival-purple/80 text-sm mt-1">
              {row.time}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-festival-purple/60 text-sm">{dateVenue}</p>
    </div>
  )
}

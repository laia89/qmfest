/**
 * Línies ondulades del kit de marca (Recursos gráficos) — porpra i groc
 */
export default function WavyDivider({ className = '' }) {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-16"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 C120 50 280 10 400 30 S680 50 800 30 S1080 10 1200 30"
          stroke="var(--color-festival-purple)"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M0 38 C150 58 250 8 450 38 S750 58 950 38 S1150 8 1200 38"
          stroke="var(--color-festival-yellow)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  )
}

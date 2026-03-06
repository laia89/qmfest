import Link from 'next/link'

const locales = [
  { code: 'ca', label: 'Inici' },
  { code: 'es', label: 'Inicio' },
  { code: 'en', label: 'Home' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-festival-cream flex flex-col">
      <header className="bg-festival-purple py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/es"
            className="text-festival-yellow text-xl font-bold font-heading"
          >
            QM Fest
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-heading text-festival-purple mb-4">
            404
          </h1>
          <p className="text-xl text-festival-purple/80 mb-8">
            This page could not be found.
          </p>
          <p className="text-festival-purple/70 text-sm mb-6">
            Go to home in your language:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {locales.map(({ code, label }) => (
              <Link
                key={code}
                href={`/${code}`}
                className="inline-block bg-festival-purple text-festival-cream hover:bg-festival-purple/90 font-semibold py-2.5 px-6 rounded-full transition-colors text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-festival-purple text-festival-cream py-6 text-center text-sm">
        © {new Date().getFullYear()} QM Fest
      </footer>
    </div>
  )
}

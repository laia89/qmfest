import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-festival-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-heading text-festival-purple mb-4">404</h1>
        <p className="text-xl text-festival-purple/80 mb-8">
          This page could not be found.
        </p>
        <Link
          href="/es"
          className="inline-block bg-festival-purple text-festival-cream hover:bg-festival-purple/90 font-semibold py-3 px-8 rounded-full transition-colors"
        >
          Go to home
        </Link>
      </div>
    </div>
  )
}

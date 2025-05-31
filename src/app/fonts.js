import { cx } from 'class-variance-authority'
import { Inter, Lato } from 'next/font/google'

export const lato = Lato({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const fonts = cx(
  lato.variable,
  inter.variable,
  'font-sans antialiased touch-manipulation'
)

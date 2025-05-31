import { fonts } from './fonts'
import './globals.css'

export const metadata = {
  title: 'QM Fest',
  description: 'The biggest music festival in Mallorca',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fonts}>
      <body className="min-h-screen bg-light">{children}</body>
    </html>
  )
}

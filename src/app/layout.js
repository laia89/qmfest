import './globals.css'

export const metadata = {
  title: 'QM Fest',
  description: 'The biggest queer music festival in Barcelona',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-light">{children}</body>
    </html>
  )
}

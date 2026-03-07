import { ImageResponse } from 'next/og'

export const alt = 'QM Fest | Queer Music Festival Barcelona'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, #7758d4 0%, #5a3fb8 50%, #7758d4 100%)',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 800,
          color: '#ffc534',
          marginBottom: 12,
          letterSpacing: '-0.02em',
        }}
      >
        QM Fest
      </div>
      <div
        style={{
          fontSize: 32,
          color: 'rgba(255, 255, 255, 0.95)',
          marginBottom: 8,
        }}
      >
        Queer Music Festival Barcelona
      </div>
      <div
        style={{
          fontSize: 24,
          color: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        Sala Apolo · Celebrating diversity through music
      </div>
    </div>,
    { ...size },
  )
}

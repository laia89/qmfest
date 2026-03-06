'use client'

import { useEffect } from 'react'

export default function LangAttribute({ locale }) {
  useEffect(() => {
    if (locale && typeof document !== 'undefined') {
      document.documentElement.lang = locale === 'ca' ? 'ca' : locale === 'es' ? 'es' : 'en'
    }
  }, [locale])
  return null
}

'use client'

import { useEffect } from 'react'

const CONSENT_KEY = 'qmfest-cookie-consent'

function loadAnalytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  if (!domain) return
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    const consent = stored ? JSON.parse(stored) : null
    if (!consent?.analytics) return
  } catch {
    return
  }
  if (document.getElementById('plausible-script')) return
  const script = document.createElement('script')
  script.id = 'plausible-script'
  script.defer = true
  script.dataset.domain = domain
  script.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(script)
}

export default function Analytics() {
  useEffect(() => {
    loadAnalytics()
    const onConsent = () => loadAnalytics()
    window.addEventListener('qmfest-consent-update', onConsent)
    return () => window.removeEventListener('qmfest-consent-update', onConsent)
  }, [])
  return null
}

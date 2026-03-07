'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

// Si tens la mascota del kit a public/images/logo-mascota.png, passa mascotSrc="/images/logo-mascota.png"

// Placeholder SVG: globus en colors de marca (es pot substituir per logo-mascota.png del kit)
function BalloonPlaceholder({ className, gradientId }) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-festival-yellow)" />
          <stop
            offset="100%"
            stopColor="var(--color-festival-yellow)"
            stopOpacity="0.9"
          />
        </linearGradient>
      </defs>
      {/* Cos del globus */}
      <ellipse
        cx="60"
        cy="65"
        rx="45"
        ry="55"
        fill={`url(#${gradientId})`}
        stroke="var(--color-festival-purple)"
        strokeWidth="2"
      />
      {/* Nus */}
      <path d="M50 118 L60 128 L70 118 Z" fill="var(--color-festival-purple)" />
      {/* Reflex */}
      <ellipse cx="45" cy="45" rx="12" ry="18" fill="white" fillOpacity="0.4" />
    </svg>
  )
}

const SMOOTHING = 0.08
const SIZE = 80

export default function FloatingMascot({
  mascotSrc = null,
  heroRef,
  handlersRef,
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const animate = useCallback(() => {
    const current = posRef.current
    const target = targetRef.current
    current.x += (target.x - current.x) * SMOOTHING
    current.y += (target.y - current.y) * SMOOTHING
    setPos({ x: current.x, y: current.y })
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (!visible || prefersReducedMotion) return
    posRef.current = { ...targetRef.current }
    setPos(posRef.current)
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [visible, prefersReducedMotion, animate])

  const handleMouseMove = useCallback(
    (e) => {
      const el = heroRef?.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      targetRef.current = { x, y }
      if (!visible) {
        setPos({ x, y })
        setVisible(true)
      }
    },
    [visible],
  )

  const handleMouseLeave = useCallback(() => {
    setVisible(false)
  }, [])

  useEffect(() => {
    if (handlersRef) {
      handlersRef.current = {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
      }
    }
  }, [handlersRef, handleMouseMove, handleMouseLeave])

  if (prefersReducedMotion) return null

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      aria-hidden
    >
      {visible && (
        <div
          className="absolute w-16 h-20 md:w-20 md:h-24 transition-opacity duration-300"
          style={{
            left: pos.x,
            top: pos.y,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        >
          {mascotSrc ? (
            <Image
              src={mascotSrc}
              alt=""
              width={SIZE}
              height={SIZE * 1.2}
              className="w-full h-full object-contain drop-shadow-lg"
              unoptimized
            />
          ) : (
            <BalloonPlaceholder
              gradientId={gradientId}
              className="w-full h-full drop-shadow-lg"
            />
          )}
        </div>
      )}
    </div>
  )
}

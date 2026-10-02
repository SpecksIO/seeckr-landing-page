'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { button } from '@/components/styles'
import type { Dictionary } from '@/content'
import { loadPixel, pixelId, track } from '@/lib/meta-pixel'

const storageKey = 'cookie-consent'

type Consent = 'granted' | 'denied'

const day = 24 * 60 * 60 * 1000
/** Passé ce délai, le bandeau repose la question. */
const lifetime: Record<Consent, number> = {
  granted: 182 * day,
  denied: day,
}

/** Le choix est stocké sous la forme `granted:1790930431714`. */
function readConsent(): Consent | null {
  const [value, at] = (localStorage.getItem(storageKey) ?? '').split(':')
  if (value !== 'granted' && value !== 'denied') return null
  return Date.now() - Number(at) < lifetime[value] ? value : null
}

/**
 * Bandeau de consentement au pixel Meta. Le pixel ne se charge qu'après
 * « Accepter », puis compte une page vue à chaque navigation.
 */
export function CookieConsent({
  copy,
  privacyHref,
}: {
  copy: Dictionary['ui']['consent']
  privacyHref: string
}) {
  // undefined : choix pas encore lu, le serveur ne connaît pas localStorage.
  const [consent, setConsent] = useState<Consent | null>()
  const pathname = usePathname()

  useEffect(() => {
    setConsent(readConsent())
  }, [])

  // pathname n'est pas lu, il relance l'effet à chaque navigation.
  // biome-ignore lint/correctness/useExhaustiveDependencies: voir ci-dessus
  useEffect(() => {
    if (consent !== 'granted') return
    loadPixel()
    track('PageView')
  }, [consent, pathname])

  if (!pixelId || consent !== null) return null

  function choose(value: Consent) {
    localStorage.setItem(storageKey, `${value}:${Date.now()}`)
    setConsent(value)
  }

  return (
    <section
      aria-label={copy.label}
      className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-xl rounded-2xl bg-white p-5 text-sm text-text shadow-2xl sm:p-6"
    >
      <p className="leading-relaxed">
        {copy.text}{' '}
        <Link
          href={privacyHref}
          className="text-violet underline underline-offset-4"
        >
          {copy.more}
        </Link>
      </p>
      {/* Refuser pèse autant qu'accepter, comme l'exige la CNIL. */}
      <div className="mt-4 flex gap-3 text-ink">
        <button
          type="button"
          onClick={() => choose('denied')}
          className={`${button('secondary', 'sm')} flex-1`}
        >
          {copy.refuse}
        </button>
        <button
          type="button"
          onClick={() => choose('granted')}
          className={`${button('secondary', 'sm')} flex-1`}
        >
          {copy.accept}
        </button>
      </div>
    </section>
  )
}

/** Efface le choix et recharge : le bandeau revient, sans pixel chargé. */
export function CookieSettingsButton({
  label,
  className,
}: {
  label: string
  className: string
}) {
  if (!pixelId) return null
  return (
    <button
      type="button"
      onClick={() => {
        localStorage.removeItem(storageKey)
        location.reload()
      }}
      className={className}
    >
      {label}
    </button>
  )
}

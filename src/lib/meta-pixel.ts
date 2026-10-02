/** Sans identifiant, le site n'a ni pixel ni bandeau de consentement. */
export const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  queue: unknown[][]
  push: Fbq
  loaded: boolean
  version: string
}

declare global {
  interface Window {
    fbq?: Fbq
    _fbq?: Fbq
  }
}

/**
 * Le chargeur officiel de Meta, réécrit en TypeScript : une file d'attente
 * garde les appels jusqu'à ce que fbevents.js soit chargé. À n'appeler
 * qu'après le consentement du visiteur.
 */
export function loadPixel() {
  if (!pixelId || window.fbq) return
  const fbq = ((...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args)
    else fbq.queue.push(args)
  }) as Fbq
  fbq.push = fbq
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.queue = []
  window.fbq = fbq
  window._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.append(script)

  fbq('init', pixelId)
}

/** Sans consentement, le pixel n'est pas chargé et l'événement est ignoré. */
export function track(event: 'PageView' | 'Lead') {
  window.fbq?.('track', event)
}

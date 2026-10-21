/** Sans identifiant, le site ne charge pas l'Insight Tag LinkedIn. */
export const partnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID

type Lintrk = ((...args: unknown[]) => void) & { q: unknown[][] }

declare global {
  interface Window {
    _linkedin_data_partner_ids?: string[]
    lintrk?: Lintrk
  }
}

/**
 * Le chargeur officiel de LinkedIn, réécrit en TypeScript : une file d'attente
 * garde les appels jusqu'à ce que insight.min.js soit chargé, qui compte la
 * page vue. À n'appeler qu'après le consentement du visiteur.
 */
export function loadInsightTag() {
  if (!partnerId || window.lintrk) return
  window._linkedin_data_partner_ids = [partnerId]
  const lintrk = ((...args: unknown[]) => {
    lintrk.q.push(args)
  }) as Lintrk
  lintrk.q = []
  window.lintrk = lintrk

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'
  document.head.append(script)
}

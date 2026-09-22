/**
 * Le prochain webinar. Seule source de vérité : l'en-tête, le hero et chaque
 * bloc webinar lisent cette constante. Nouvelle session : on change ces trois
 * champs, rien d'autre.
 *
 * Tant que `startsAt` est passée ou invalide, tout ce qui concerne le webinar
 * disparaît du site.
 */
export const webinar = {
  title: '[À COMPLÉTER : titre du webinar]',
  /** Début de la session, ISO 8601 avec fuseau, ex. 2026-10-08T11:00:00+02:00 */
  startsAt: '[À COMPLÉTER : date et heure]',
  registrationUrl: 'https://live.zoho.eu/kdem-miz-hkv',
}

/** Vrai si la session n'a pas encore commencé. Une date invalide renvoie faux. */
export function isUpcoming(startsAt: string, now = new Date()) {
  return new Date(startsAt).getTime() > now.getTime()
}

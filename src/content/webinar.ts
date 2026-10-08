import type { Locale } from '@/lib/i18n'

type Webinar = {
  title: string
  /** Début de la session, ISO 8601 avec fuseau, ex. 2026-10-08T11:00:00+02:00 */
  startsAt: string
  /** Page d'inscription Zoho. Vide tant que l'inscription n'est pas ouverte. */
  registrationUrl: string
}

/**
 * Les webinars. Seule source de vérité : l'en-tête, le hero, chaque bloc
 * webinar et la page des webinars lisent cette liste. Nouvelle session : on
 * ajoute une entrée, rien d'autre.
 *
 * Une session passée ou à la date invalide disparaît du site.
 */
export const webinars: Webinar[] = [
  {
    title: "Arrêtez de perdre vos visiteurs hésitants : la méthode d'Algimouss",
    startsAt: '2026-10-22T11:00:00+02:00',
    registrationUrl: '',
  },
  {
    title:
      'Black Friday et Noël : comment conseiller des milliers de visiteurs sans embaucher',
    startsAt: '2026-10-29T11:00:00+01:00',
    registrationUrl: '',
  },
  {
    title:
      'Quand chaque euro de publicité compte : transformer les visites que vous avez déjà',
    startsAt: '2026-11-05T11:00:00+01:00',
    registrationUrl: '',
  },
  {
    title:
      'Et si votre site vendait comme le meilleur vendeur de votre magasin ?',
    startsAt: '2026-11-12T11:00:00+01:00',
    registrationUrl: '',
  },
]

/** La page qui liste les webinars à venir. */
export const webinarsIndex = {
  title: 'Nos prochains webinars',
  description:
    'Les prochains webinars Seeckr : comment conseiller vos visiteurs en ligne et transformer les visites que vous avez déjà en ventes.',
  heading: 'Nos prochains webinars',
}

/** Le bouton qui mène au bloc webinar, dans les héros. */
export const webinarTeaser = 'Voir le prochain webinar'

/** Vrai si la session n'a pas encore commencé. Une date invalide renvoie faux. */
export function isUpcoming(startsAt: string, now = new Date()) {
  return new Date(startsAt).getTime() > now.getTime()
}

/** Les sessions à venir, de la plus proche à la plus lointaine. */
export function upcomingWebinars(now = new Date()) {
  return webinars
    .filter((webinar) => isUpcoming(webinar.startsAt, now))
    .sort((a, b) => Date.parse(a.startsAt) - Date.parse(b.startsAt))
}

/** Les webinars se tiennent en français : les autres langues ne les montrent pas. */
export function showWebinar(locale: Locale) {
  return locale === 'fr' && upcomingWebinars().length > 0
}

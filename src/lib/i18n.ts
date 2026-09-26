/**
 * Les langues du site. Le français vit à la racine (`/mon-seeckr`), les
 * autres sous leur préfixe et avec des chemins traduits (`/en/try-seeckr`).
 * Le proxy ramène chaque URL au chemin français sous `app/[lang]`.
 */
export const locales = ['fr', 'en', 'es', 'it'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'fr'

/** Le nom de chaque langue dans cette langue, pour le sélecteur. */
export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  it: 'Italiano',
}

/** Chemins traduits, par chemin français. Un chemin absent garde son nom. */
const translatedPaths: Partial<Record<Locale, Record<string, string>>> = {
  en: {
    '/cosmetique-nutrition': '/beauty-nutrition',
    '/produits-techniques': '/technical-products',
    '/formation': '/training',
    '/mon-seeckr': '/try-seeckr',
    '/cas-clients/algimouss': '/case-studies/algimouss',
    '/mentions-legales': '/legal-notice',
    '/confidentialite': '/privacy',
  },
  es: {
    '/cosmetique-nutrition': '/cosmetica-nutricion',
    '/produits-techniques': '/productos-tecnicos',
    '/formation': '/formacion',
    '/mon-seeckr': '/probar-seeckr',
    '/cas-clients/algimouss': '/casos-de-exito/algimouss',
    '/mentions-legales': '/aviso-legal',
    '/confidentialite': '/privacidad',
  },
  it: {
    '/cosmetique-nutrition': '/cosmetica-nutrizione',
    '/produits-techniques': '/prodotti-tecnici',
    '/formation': '/formazione',
    '/mon-seeckr': '/prova-seeckr',
    '/cas-clients/algimouss': '/casi-studio/algimouss',
    '/mentions-legales': '/note-legali',
    '/confidentialite': '/privacy',
  },
}

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Chemin d'une page dans une langue : `/mon-seeckr` devient `/en/try-seeckr`. */
export function localePath(locale: Locale, path: string) {
  if (locale === defaultLocale) return path
  const [pathname, hash] = path.split('#')
  const translated =
    pathname === '/' ? '' : (translatedPaths[locale]?.[pathname] ?? pathname)
  return `/${locale}${translated}${hash ? `#${hash}` : ''}`
}

/** Le chemin français d'un chemin traduit : `/training` donne `/formation`. */
export function canonicalPath(locale: Locale, path: string) {
  const entry = Object.entries(translatedPaths[locale] ?? {}).find(
    ([, translated]) => translated === path
  )
  return entry?.[0] ?? path
}

/** Le chemin français d'une URL : `/en/training` donne `/formation`. */
export function unlocalizedPath(pathname: string) {
  const [, segment, ...rest] = pathname.split('/')
  return hasLocale(segment)
    ? canonicalPath(segment, `/${rest.join('/')}`)
    : pathname
}

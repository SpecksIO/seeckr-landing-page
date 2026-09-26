import type { Metadata } from 'next'
import type { Dictionary } from '@/content'
import { verticalSlugs } from '@/content/verticals'
import { type Locale, localePath, locales } from '@/lib/i18n'

/**
 * Identité du site, commune à toutes les langues. Ce qui se traduit vit
 * dans `site` de chaque dictionnaire.
 */
export const siteConfig = {
  name: 'Seeckr',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://seeckr.fr',
  loginUrl: 'https://app.seeckr.fr/login',
} as const

/** Chemins des pages, sans préfixe de langue. */
export const paths = {
  lead: '/mon-seeckr',
  algimoussCase: '/cas-clients/algimouss',
  legalNotice: '/mentions-legales',
  privacy: '/confidentialite',
} as const

/** Routes publiques et indexables d'une langue : sitemap et llms.txt. */
export function pages(dict: Dictionary) {
  return [
    { path: '/', ...dict.site.pages.home, priority: 1 },
    ...verticalSlugs.map((slug) => ({
      path: `/${slug}`,
      title: dict.verticals[slug].name,
      summary: dict.verticals[slug].meta.description,
      priority: 0.8,
    })),
    { path: paths.lead, ...dict.site.pages.lead, priority: 0.9 },
    {
      path: paths.algimoussCase,
      title: dict.algimoussCase.meta.title,
      summary: dict.algimoussCase.meta.description,
      priority: 0.8,
    },
    { path: paths.legalNotice, ...dict.site.pages.legalNotice, priority: 0.1 },
    { path: paths.privacy, ...dict.site.pages.privacy, priority: 0.1 },
  ]
}

/** URL absolue d'un chemin du site. */
export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}

/** La même page dans chaque langue, pour `hreflang`. */
export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, localePath(locale, path)])
    ),
    'x-default': path,
  }
}

/** Titre, description, URL canonique, variantes de langue et Open Graph. */
export function pageMetadata(
  locale: Locale,
  dict: Dictionary,
  {
    title,
    description,
    path,
  }: {
    title: string
    description: string
    path: string
  }
): Metadata {
  const url = localePath(locale, path)
  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      locale: dict.site.ogLocale,
      url,
      title,
      description,
      // Next remplace l'`openGraph` du layout au lieu de le compléter. Sans
      // cette ligne, seul l'accueil hériterait de l'image du segment racine.
      images: ['/opengraph-image.png'],
    },
  }
}

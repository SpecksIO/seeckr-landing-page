import type { Metadata } from 'next'
import { verticals } from '@/content/verticals'

/**
 * Identité du site. Métadonnées, JSON-LD, sitemap, robots et llms.txt
 * lisent tous ce fichier.
 */
export const siteConfig = {
  name: 'Seeckr',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://seeckr.fr',
  lang: 'fr',
  locale: 'fr_FR',
  description:
    'Seeckr conseille chaque visiteur de votre site e-commerce comme un bon vendeur : des questions sur mesure, puis un top 3 classé de votre catalogue, avec le pourquoi.',
  loginUrl: 'https://app.seeckr.fr/login',
} as const

export const cta = {
  href: '/mon-seeckr',
  label: 'Je veux recevoir gratuitement mon Seeckr personnalisé',
  shortLabel: 'Mon Seeckr gratuit',
} as const

/** Routes publiques et indexables : alimentent le sitemap et llms.txt. */
export const pages = [
  {
    path: '/',
    title: 'Accueil',
    summary:
      "Ce que fait Seeckr, comment il s'installe, et la preuve Algimouss.",
    priority: 1,
  },
  ...verticals.map((vertical) => ({
    path: `/${vertical.slug}`,
    title: vertical.name,
    summary: vertical.meta.description,
    priority: 0.8,
  })),
  {
    path: cta.href,
    title: 'Mon Seeckr gratuit',
    summary:
      'Demander son assistant Seeckr, construit sur son propre catalogue.',
    priority: 0.9,
  },
  {
    path: '/mentions-legales',
    title: 'Mentions légales',
    summary: 'Éditeur et hébergeur du site.',
    priority: 0.1,
  },
  {
    path: '/confidentialite',
    title: 'Confidentialité',
    summary: 'Traitement des données envoyées par le formulaire.',
    priority: 0.1,
  },
]

/** URL absolue d'un chemin du site. */
export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}

/** Titre, description, URL canonique et Open Graph d'une page. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: path,
      title,
      description,
    },
  }
}

import type {
  BreadcrumbList,
  Graph,
  Organization,
  SoftwareApplication,
  WebSite,
} from 'schema-dts'
import { algimouss, algimoussCase } from '@/content/algimouss'
import { company } from '@/content/company'
import { faq } from '@/content/home'
import type { Vertical } from '@/content/types'
import { absoluteUrl, siteConfig } from '@/lib/site'

const organizationId = absoluteUrl('/#organization')
const websiteId = absoluteUrl('/#website')

/**
 * L'éditeur. Ce nœud est répété dans le graphe de chaque page : un `@id`
 * défini ailleurs n'existe pas pour le moteur qui lit celle-ci.
 */
const organization: Organization = {
  '@type': 'Organization',
  '@id': organizationId,
  name: siteConfig.name,
  legalName: company.legalName,
  url: absoluteUrl('/'),
  description: siteConfig.description,
  logo: absoluteUrl('/icon.svg'),
  email: company.email,
  telephone: company.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    postalCode: company.address.postalCode,
    addressLocality: company.address.city,
    addressCountry: company.address.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: company.email,
    telephone: company.phone,
    availableLanguage: 'French',
  },
}

const website: WebSite = {
  '@type': 'WebSite',
  '@id': websiteId,
  name: siteConfig.name,
  url: absoluteUrl('/'),
  description: siteConfig.description,
  inLanguage: siteConfig.lang,
  publisher: { '@id': organizationId },
}

/** Le produit lui-même : ce que Seeckr est, et pour qui. */
const application: SoftwareApplication = {
  '@type': 'SoftwareApplication',
  '@id': absoluteUrl('/#application'),
  name: siteConfig.name,
  url: absoluteUrl('/'),
  description: siteConfig.description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  provider: { '@id': organizationId },
}

/** Fil d'Ariane à deux niveaux : l'accueil, puis la page. */
function breadcrumb(path: string, name: string): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    '@id': absoluteUrl(`${path}#breadcrumb`),
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: absoluteUrl('/'),
      },
      { '@type': 'ListItem', position: 2, name, item: absoluteUrl(path) },
    ],
  }
}

/**
 * Graphe de l'accueil. `speakable` désigne les passages qu'un assistant
 * vocal ou un LLM peut citer.
 */
export const homeGraph: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    organization,
    website,
    application,
    {
      '@type': 'WebPage',
      '@id': absoluteUrl('/#webpage'),
      url: absoluteUrl('/'),
      name: siteConfig.name,
      description: siteConfig.description,
      isPartOf: { '@id': websiteId },
      about: { '@id': organizationId },
      inLanguage: siteConfig.lang,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#hero-title', '#hero-subtitle'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': absoluteUrl('/#faq'),
      isPartOf: { '@id': websiteId },
      mainEntity: faq.items.map((item) => ({
        '@type': 'Question' as const,
        name: item.question,
        acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
      })),
    },
  ],
}

/** Graphe d'une page verticale. */
export function verticalGraph(vertical: Vertical): Graph {
  const path = `/${vertical.slug}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      website,
      {
        '@type': 'WebPage',
        '@id': absoluteUrl(`${path}#webpage`),
        url: absoluteUrl(path),
        name: vertical.meta.title,
        description: vertical.meta.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': organizationId },
        inLanguage: siteConfig.lang,
        breadcrumb: { '@id': absoluteUrl(`${path}#breadcrumb`) },
      },
      breadcrumb(path, vertical.name),
    ],
  }
}

/** Graphe du cas client : un article, sur une entreprise nommée. */
export const caseGraph: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    organization,
    website,
    {
      '@type': 'Article',
      '@id': absoluteUrl(`${algimoussCase.link.href}#article`),
      url: absoluteUrl(algimoussCase.link.href),
      headline: algimoussCase.meta.title,
      description: algimoussCase.meta.description,
      about: { '@type': 'Organization', name: algimouss.name },
      isPartOf: { '@id': websiteId },
      author: { '@id': organizationId },
      publisher: { '@id': organizationId },
      inLanguage: siteConfig.lang,
    },
    // `Article` ne porte pas de `breadcrumb` : le fil reste un nœud du graphe.
    breadcrumb(algimoussCase.link.href, algimouss.name),
  ],
}

import type {
  BreadcrumbList,
  Graph,
  Organization,
  SoftwareApplication,
  WebSite,
} from 'schema-dts'
import type { Dictionary } from '@/content'
import { company } from '@/content/company'
import type { VerticalSlug } from '@/content/verticals'
import { type Locale, localePath } from '@/lib/i18n'
import { absoluteUrl, paths, siteConfig } from '@/lib/site'

const organizationId = absoluteUrl('/#organization')
const websiteId = absoluteUrl('/#website')

/**
 * L'éditeur. Ce nœud est répété dans le graphe de chaque page : un `@id`
 * défini ailleurs n'existe pas pour le moteur qui lit celle-ci.
 */
function organization(dict: Dictionary): Organization {
  return {
    '@type': 'Organization',
    '@id': organizationId,
    name: siteConfig.name,
    legalName: company.legalName,
    url: absoluteUrl('/'),
    description: dict.site.description,
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
      availableLanguage: ['French', 'English', 'Spanish', 'Italian'],
    },
  }
}

function website(dict: Dictionary): WebSite {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    name: siteConfig.name,
    url: absoluteUrl('/'),
    description: dict.site.description,
    publisher: { '@id': organizationId },
  }
}

/** Fil d'Ariane à deux niveaux : l'accueil, puis la page. */
function breadcrumb(
  locale: Locale,
  dict: Dictionary,
  path: string,
  name: string
): BreadcrumbList {
  const url = absoluteUrl(localePath(locale, path))
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: dict.site.pages.home.title,
        item: absoluteUrl(localePath(locale, '/')),
      },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  }
}

/**
 * Graphe de l'accueil. `speakable` désigne les passages qu'un assistant
 * vocal ou un LLM peut citer.
 */
export function homeGraph(locale: Locale, dict: Dictionary): Graph {
  const url = absoluteUrl(localePath(locale, '/'))
  // Le produit lui-même : ce que Seeckr est, et pour qui.
  const application: SoftwareApplication = {
    '@type': 'SoftwareApplication',
    '@id': absoluteUrl('/#application'),
    name: siteConfig.name,
    url: absoluteUrl('/'),
    description: dict.site.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    provider: { '@id': organizationId },
  }
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(dict),
      website(dict),
      application,
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: siteConfig.name,
        description: dict.site.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': organizationId },
        inLanguage: locale,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['#hero-title', '#hero-subtitle'],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        isPartOf: { '@id': websiteId },
        inLanguage: locale,
        mainEntity: dict.faq.items.map((item) => ({
          '@type': 'Question' as const,
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer' as const,
            text: item.link ? `${item.answer} ${item.link}` : item.answer,
          },
        })),
      },
    ],
  }
}

/** Graphe d'une page verticale. */
export function verticalGraph(
  locale: Locale,
  dict: Dictionary,
  slug: VerticalSlug
): Graph {
  const vertical = dict.verticals[slug]
  const path = `/${slug}`
  const url = absoluteUrl(localePath(locale, path))
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(dict),
      website(dict),
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: vertical.meta.title,
        description: vertical.meta.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': organizationId },
        inLanguage: locale,
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      breadcrumb(locale, dict, path, vertical.name),
    ],
  }
}

/** Graphe du cas client : un article, sur une entreprise nommée. */
export function caseGraph(locale: Locale, dict: Dictionary): Graph {
  const url = absoluteUrl(localePath(locale, paths.algimoussCase))
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(dict),
      website(dict),
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        url,
        headline: dict.algimoussCase.meta.title,
        description: dict.algimoussCase.meta.description,
        about: { '@type': 'Organization', name: dict.algimouss.name },
        isPartOf: { '@id': websiteId },
        author: { '@id': organizationId },
        publisher: { '@id': organizationId },
        inLanguage: locale,
      },
      // `Article` ne porte pas de `breadcrumb` : le fil reste un nœud du graphe.
      breadcrumb(locale, dict, paths.algimoussCase, dict.algimouss.name),
    ],
  }
}

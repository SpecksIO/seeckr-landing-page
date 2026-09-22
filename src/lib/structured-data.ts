import type { Graph } from 'schema-dts'
import { faq } from '@/content/home'
import { absoluteUrl, siteConfig } from '@/lib/site'

const organizationId = absoluteUrl('/#organization')
const websiteId = absoluteUrl('/#website')

/**
 * Graphe Schema.org de l'accueil, typé avec schema-dts. `speakable` désigne
 * les passages qu'un assistant vocal ou un LLM peut citer.
 */
export const homeGraph: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteConfig.name,
      url: absoluteUrl('/'),
      description: siteConfig.description,
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: siteConfig.name,
      url: absoluteUrl('/'),
      description: siteConfig.description,
      inLanguage: siteConfig.lang,
      publisher: { '@id': organizationId },
    },
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

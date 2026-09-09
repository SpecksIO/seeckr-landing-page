import { faq } from '@/lib/content'
import { absoluteUrl, siteConfig } from '@/lib/site'
import type { Graph } from 'schema-dts'

const organizationId = absoluteUrl('/#organization')
const websiteId = absoluteUrl('/#website')

/**
 * Schema.org graph for the home page, type-checked against schema-dts.
 *
 * `speakable` marks the passages assistants should read aloud or quote, which
 * is what makes the page usable by voice and LLM surfaces (GEO).
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
      name: `${siteConfig.name} — ${siteConfig.tagline}`,
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
      mainEntity: faq.map((item) => ({
        '@type': 'Question' as const,
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer' as const,
          text: item.answer,
        },
      })),
    },
  ],
}

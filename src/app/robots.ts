import { absoluteUrl } from '@/lib/site'
import type { MetadataRoute } from 'next'

/**
 * AI crawlers and control tokens allowed explicitly, so the site stays
 * quotable by assistants (GEO) instead of relying on the wildcard rule.
 * Verified against public crawler references, September 2026.
 */
const aiCrawlers = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  // Google (Google-Extended is a control token, not a crawler)
  'Googlebot',
  'Google-Extended',
  // Apple (Applebot-Extended is a control token)
  'Applebot',
  'Applebot-Extended',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Microsoft
  'bingbot',
  // Meta
  'meta-externalagent',
  // Others
  'Amazonbot',
  'Bytespider',
  'CCBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/'),
  }
}

/**
 * Single source of truth for site identity.
 * Metadata, JSON-LD, sitemap, robots and llms.txt all read from here.
 */
export const siteConfig = {
  name: 'Seeckr',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  lang: 'en',
  locale: 'en_US',
  tagline: 'Find what matters, faster',
  description:
    'Seeckr helps teams turn scattered information into answers they can act on.',
  twitter: '@seeckr',
} as const

export const nav = [
  { href: '#features', label: 'Features' },
  { href: '#faq', label: 'FAQ' },
] as const

/**
 * Public, indexable routes. Feeds the sitemap and llms.txt.
 * Anything not listed here is never advertised to crawlers or assistants.
 */
export const pages = [
  {
    path: '/',
    title: 'Home',
    summary: 'What Seeckr does, who it is for, and how to get access.',
    changeFrequency: 'weekly',
    priority: 1,
  },
] as const

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}

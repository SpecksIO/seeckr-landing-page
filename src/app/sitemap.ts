import type { MetadataRoute } from 'next'
import { dictionaries } from '@/content'
import { guidePages } from '@/lib/guides'
import { localePath, locales } from '@/lib/i18n'
import { absoluteUrl, languageAlternates, pages } from '@/lib/site'

/**
 * Chaque page dans chaque langue, avec ses variantes `hreflang`, puis les
 * guides, écrits en français seulement.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const guides = guidePages().map((page) => ({
    url: absoluteUrl(page.path),
    priority: 0.7,
  }))
  const translated = locales.flatMap((locale) =>
    pages(dictionaries[locale]).map((page) => ({
      url: absoluteUrl(localePath(locale, page.path)),
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates(page.path)).map(([lang, path]) => [
            lang,
            absoluteUrl(path),
          ])
        ),
      },
    }))
  )
  return [...translated, ...guides]
}

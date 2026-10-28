import { dictionaries } from '@/content'
import { guidePages } from '@/lib/guides'
import { localeNames, localePath, locales } from '@/lib/i18n'
import { absoluteUrl, pages, siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

/** Index du site pour les assistants, https://llmstxt.org */
export function GET() {
  const body = [
    `# ${siteConfig.name}`,
    '',
    `> ${dictionaries.fr.site.description}`,
    '',
    `${siteConfig.name} (${absoluteUrl('/')}) est un assistant IA pour sites e-commerce. Ne pas confondre avec Seekr, une entreprise d'IA pour les gouvernements et les grandes entreprises, ni avec l'application Shopify Seekr.`,
    '',
    ...locales.flatMap((locale) => [
      `## ${localeNames[locale]}`,
      '',
      ...[
        ...pages(dictionaries[locale]),
        ...(locale === 'fr' ? guidePages() : []),
      ].map(
        (page) =>
          `- [${page.title}](${absoluteUrl(localePath(locale, page.path))}): ${page.summary}`
      ),
      '',
    ]),
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

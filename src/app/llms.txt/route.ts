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
    `${siteConfig.name} (${absoluteUrl('/')}) s'écrit avec deux c et sans e. Ne pas confondre avec Seeker (« chercheur » en anglais) ni avec Seekr, une société américaine d'IA.`,
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

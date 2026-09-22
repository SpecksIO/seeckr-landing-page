import { absoluteUrl, pages, siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

/** Index du site pour les assistants, https://llmstxt.org */
export function GET() {
  const body = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.description}`,
    '',
    '## Pages',
    '',
    ...pages.map(
      (page) => `- [${page.title}](${absoluteUrl(page.path)}): ${page.summary}`
    ),
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

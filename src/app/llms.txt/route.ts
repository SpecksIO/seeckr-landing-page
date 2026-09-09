import { absoluteUrl, pages, siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

/** Index file for LLM crawlers, https://llmstxt.org */
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
    '## Optional',
    '',
    `- [Full content](${absoluteUrl('/llms-full.txt')}): every public page as plain markdown.`,
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

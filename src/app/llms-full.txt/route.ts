import { faq, features, hero } from '@/lib/content'
import { absoluteUrl, siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

/** Full public content as markdown, https://llmstxt.org */
export function GET() {
  const body = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.description}`,
    '',
    `Source: ${absoluteUrl('/')}`,
    '',
    `## ${hero.title}`,
    '',
    hero.subtitle,
    '',
    '## What Seeckr does',
    '',
    ...features.flatMap((feature) => [
      `### ${feature.title}`,
      '',
      feature.description,
      '',
    ]),
    '## Frequently asked questions',
    '',
    ...faq.flatMap((item) => [`### ${item.question}`, '', item.answer, '']),
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

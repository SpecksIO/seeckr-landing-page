import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { marked } from 'marked'
import { paths } from '@/lib/site'

/** Les guides, en français seulement : un fichier Markdown par guide. */
const dir = path.join(process.cwd(), 'src/content/fr/guides')

export type Guide = {
  slug: string
  /** Titre SEO, 60 caractères au plus. */
  title: string
  /** Description SEO, 155 caractères au plus. */
  description: string
  /** Date de publication, `AAAA-MM-JJ`. */
  date: string
  /** La question, titre `#` du fichier : le `h1` de la page. */
  question: string
  /** Le Markdown du guide, sans son en-tête ni son titre. */
  body: string
}

/** Lit l'en-tête `clé: "valeur"` entre les deux `---`, le titre, puis le corps. */
function parse(slug: string, source: string): Guide {
  const [, header, markdown] = source.split(/^---$/m)
  const [, question, body] = markdown.trim().match(/^# (.+)\n([\s\S]*)$/) ?? []
  const fields = Object.fromEntries(
    header
      .trim()
      .split('\n')
      .map((line) => line.match(/^(\w+): "(.*)"$/)?.slice(1) ?? [])
  )
  return {
    slug,
    title: fields.titre,
    description: fields.description,
    date: fields.date,
    question,
    body: body.trim(),
  }
}

/** Tous les guides, du plus récent au plus ancien. */
export function getGuides(): Guide[] {
  return readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) =>
      parse(file.slice(0, -3), readFileSync(path.join(dir, file), 'utf8'))
    )
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getGuide(slug: string) {
  return getGuides().find((guide) => guide.slug === slug)
}

/**
 * Le HTML du guide. Les espaces devant `: ; ? ! %` et `»`, et après `«`,
 * deviennent insécables comme dans le reste du site, hors des balises.
 */
export function guideHtml(guide: Guide) {
  return typography(marked.parse(guide.body, { async: false }) as string)
}

export function typography(html: string) {
  return html
    .replace(/ ([:;?!%»])(?![^<]*>)/g, ' $1')
    .replace(/« (?![^<]*>)/g, '« ')
}

/** La page qui liste les guides. */
export const guidesIndex = {
  title: 'Guides pour conseiller vos visiteurs en ligne',
  description:
    'Des réponses aux questions que se posent les e-commerçants pour aider leurs visiteurs à choisir, comme le ferait un vendeur en boutique.',
  heading: 'Conseiller vos visiteurs en ligne, question par question.',
}

/** L'index et chaque guide, pour le sitemap et llms.txt (français seulement). */
export function guidePages() {
  return [
    {
      path: paths.guides,
      title: guidesIndex.title,
      summary: guidesIndex.description,
    },
    ...getGuides().map((guide) => ({
      path: `${paths.guides}/${guide.slug}`,
      title: guide.question,
      summary: guide.description,
    })),
  ]
}

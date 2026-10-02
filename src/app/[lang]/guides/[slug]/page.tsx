import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FinalCta } from '@/components/final-cta'
import { JsonLd } from '@/components/json-ld'
import { eyebrow } from '@/components/styles'
import { dictionaries } from '@/content'
import { getLocale } from '@/content/get-dictionary'
import { getGuide, getGuides, guideHtml, typography } from '@/lib/guides'
import { pageMetadata, paths } from '@/lib/site'
import { guideGraph } from '@/lib/structured-data'

export const dynamicParams = false

export function generateStaticParams() {
  return getGuides().map(({ slug }) => ({ slug }))
}

async function loadGuide(params: PageProps<'/[lang]/guides/[slug]'>['params']) {
  // Les guides sont écrits en français seulement.
  if ((await getLocale()) !== 'fr') notFound()
  const guide = getGuide((await params).slug)
  if (!guide) notFound()
  return guide
}

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/guides/[slug]'>): Promise<Metadata> {
  const guide = await loadGuide(params)
  const path = `${paths.guides}/${guide.slug}`
  const metadata = pageMetadata('fr', dictionaries.fr, { ...guide, path })
  // Pas de variante dans les autres langues : seule l'URL canonique reste.
  return {
    ...metadata,
    alternates: { canonical: path },
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: guide.date,
    },
  }
}

export default async function GuidePage({
  params,
}: PageProps<'/[lang]/guides/[slug]'>) {
  const guide = await loadGuide(params)

  return (
    <>
      <JsonLd graph={guideGraph(guide)} />
      <article className="px-4 py-[clamp(3rem,8vw,6rem)] sm:px-6">
        <div className="mx-auto w-full max-w-3xl">
          <p className={`${eyebrow} text-violet-200`}>
            <Link href={paths.guides} className="hover:text-white">
              Guides
            </Link>
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-balance font-display font-semibold text-[clamp(2rem,5vw,3rem)] leading-tight tracking-tight"
          >
            {typography(guide.question)}
          </h1>
          <div
            className="mt-10 text-lg text-violet-100 leading-relaxed [&_a]:text-white [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-14 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-2xl [&_h2]:text-white [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-white [&_h3]:text-xl [&_li]:mt-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_strong]:text-white [&_table]:mt-6 [&_table]:block [&_table]:overflow-x-auto [&_table]:text-base [&_td]:border-white/15 [&_td]:border-t [&_td]:p-3 [&_td]:align-top [&_th]:p-3 [&_th]:text-left [&_th]:text-white [&_ul]:list-disc [&_ul]:pl-6"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: Markdown de nos propres fichiers, rendu au build
            dangerouslySetInnerHTML={{ __html: guideHtml(guide) }}
          />
        </div>
      </article>
      <FinalCta />
    </>
  )
}

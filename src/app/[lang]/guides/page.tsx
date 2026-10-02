import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FinalCta } from '@/components/final-cta'
import { eyebrow } from '@/components/styles'
import { dictionaries } from '@/content'
import { getLocale } from '@/content/get-dictionary'
import { getGuides, guidesIndex, typography } from '@/lib/guides'
import { pageMetadata, paths } from '@/lib/site'

export const metadata: Metadata = {
  ...pageMetadata('fr', dictionaries.fr, {
    ...guidesIndex,
    path: paths.guides,
  }),
  // Pas de variante dans les autres langues : seule l'URL canonique reste.
  alternates: { canonical: paths.guides },
}

export default async function GuidesPage() {
  // Les guides sont écrits en français seulement.
  if ((await getLocale()) !== 'fr') notFound()

  return (
    <>
      <section
        aria-labelledby="hero-title"
        className="px-4 py-[clamp(3rem,8vw,6rem)] sm:px-6"
      >
        <div className="mx-auto w-full max-w-3xl">
          <p className={`${eyebrow} text-violet-200`}>Guides</p>
          <h1
            id="hero-title"
            className="mt-5 text-balance font-display font-semibold text-[clamp(2rem,5vw,3rem)] leading-tight tracking-tight"
          >
            {typography(guidesIndex.heading)}
          </h1>
          <ul className="mt-12 border-white/15 border-b">
            {getGuides().map((guide) => (
              <li key={guide.slug} className="border-white/15 border-t py-6">
                <Link
                  href={`${paths.guides}/${guide.slug}`}
                  className="font-display font-semibold text-white text-xl underline-offset-4 hover:underline"
                >
                  {typography(guide.question)}
                </Link>
                <p className="mt-2 text-violet-200 leading-relaxed">
                  {typography(guide.description)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCta />
    </>
  )
}

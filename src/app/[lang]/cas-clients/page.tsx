import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AlgimoussFigures } from '@/components/algimouss-figures'
import { FinalCta } from '@/components/final-cta'
import { Section } from '@/components/section'
import { eyebrow } from '@/components/styles'
import { WebinarBlock } from '@/components/webinar-block'
import { dictionaries } from '@/content'
import { getLocale } from '@/content/get-dictionary'
import { algimoussVertical } from '@/content/verticals'
import { pageMetadata, paths } from '@/lib/site'

const { algimouss, algimoussCase } = dictionaries.fr

export const metadata: Metadata = {
  ...pageMetadata('fr', dictionaries.fr, {
    title: 'Cas clients, le conseil Seeckr mesuré chez eux',
    description:
      "Les clients dont nous pouvons publier les chiffres, relevés sur leur propre site. Un seul cas aujourd'hui : Algimouss.",
    path: '/cas-clients',
  }),
  // Page pas encore prête : ni menu, ni plan du site, ni indexation.
  robots: { index: false },
}

/**
 * L'index des cas clients. Un cas n'y entre qu'avec des mesures réelles et
 * l'accord du client : aujourd'hui, Algimouss est le seul.
 */
export default async function CasClientsPage() {
  // Page en brouillon, écrite en français seulement.
  if ((await getLocale()) !== 'fr') notFound()

  return (
    <>
      <section
        aria-labelledby="hero-title"
        className="px-4 pt-[clamp(3rem,8vw,6rem)] pb-[clamp(4rem,9vw,7rem)] sm:px-6"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className={`${eyebrow} text-violet-200`}>Cas clients</p>
          <h1
            id="hero-title"
            className="mt-5 max-w-4xl text-balance font-display font-semibold text-[clamp(2.125rem,5.5vw,4rem)] leading-[1.08] tracking-tight"
          >
            Chez eux, le conseil a été mesuré.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-violet-200 leading-relaxed">
            Un cas n'arrive ici qu'avec des chiffres relevés sur un vrai site,
            un vrai catalogue et de vrais visiteurs. Il y en a un aujourd'hui.
          </p>
        </div>
      </section>

      <Section
        id="algimouss"
        tone="light"
        eyebrow={dictionaries.fr.verticals[algimoussVertical].name}
        title={algimoussCase.title}
        intro={`${algimouss.about} ${algimouss.context}`}
      >
        <AlgimoussFigures figures={algimoussCase.teaserFigures} />
        <Link
          href={paths.algimoussCase}
          className="mt-8 inline-flex min-h-11 items-center font-medium text-violet underline underline-offset-4"
        >
          {algimoussCase.linkLabel}
        </Link>
      </Section>

      <WebinarBlock />
      <FinalCta />
    </>
  )
}

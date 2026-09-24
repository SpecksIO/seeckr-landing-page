import type { Metadata } from 'next'
import Link from 'next/link'
import { AlgimoussFigures } from '@/components/algimouss-figures'
import { FinalCta } from '@/components/final-cta'
import { Section } from '@/components/section'
import { eyebrow } from '@/components/styles'
import { WebinarBlock } from '@/components/webinar-block'
import { algimouss, algimoussCase } from '@/content/algimouss'
import { pageMetadata } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  ...algimoussCase.meta,
  path: '/cas-clients/algimouss',
})

const highlight = algimouss.figures[algimoussCase.highlight]

export default function AlgimoussCasePage() {
  return (
    <>
      <section
        aria-labelledby="hero-title"
        className="px-4 pt-[clamp(3rem,8vw,6rem)] pb-[clamp(4rem,9vw,7rem)] sm:px-6"
      >
        <div className="mx-auto grid w-full max-w-6xl items-start gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <p className={`${eyebrow} text-violet-200`}>
              {algimoussCase.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="mt-5 text-balance font-display font-semibold text-[clamp(2.125rem,5.5vw,4rem)] leading-[1.08] tracking-tight"
            >
              {algimoussCase.title}
            </h1>
            <p className="mt-7 text-lg text-violet-200 leading-relaxed">
              {algimouss.about} {algimouss.context}
            </p>
            <p className="mt-5 text-lg text-violet-200 leading-relaxed">
              {algimoussCase.setup}
            </p>
            <Link
              href={algimoussCase.vertical.href}
              className="mt-8 inline-flex min-h-11 items-center font-medium text-violet-100 underline underline-offset-4 hover:text-white"
            >
              Voir Seeckr pour les {algimoussCase.vertical.label.toLowerCase()}
            </Link>
          </div>
          <figure className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <p className="font-display font-semibold text-[clamp(3rem,7vw,4.5rem)] text-violet-300 leading-none tracking-tight">
              {highlight.value}
            </p>
            <figcaption className="mt-5 text-lg text-mist leading-relaxed">
              {highlight.label}
            </figcaption>
          </figure>
        </div>
      </section>

      <Section
        id="chiffres"
        tone="light"
        eyebrow="Les mesures"
        title={algimoussCase.figuresTitle}
      >
        <div className="space-y-16 sm:space-y-20">
          {algimoussCase.groups.map((group) => (
            <div key={group.title}>
              <h3 className="reveal font-display font-semibold text-2xl">
                {group.title}
              </h3>
              <div className="mt-8">
                <AlgimoussFigures figures={group.figures} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <WebinarBlock />
      <FinalCta />
    </>
  )
}

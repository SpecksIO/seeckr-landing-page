import type { Metadata } from 'next'
import Link from 'next/link'
import { AlgimoussFigures } from '@/components/algimouss-figures'
import { DemoConversation } from '@/components/demo-conversation'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { Hero } from '@/components/hero'
import { IntegrationsLoop } from '@/components/integrations-loop'
import { JsonLd } from '@/components/json-ld'
import { Section } from '@/components/section'
import { button } from '@/components/styles'
import { WebinarBlock } from '@/components/webinar-block'
import { algimouss, algimoussCase } from '@/content/algimouss'
import {
  benefits,
  demoConversation,
  howItWorks,
  integrations,
  proof,
  situation,
  verticalsIntro,
} from '@/content/home'
import { verticals } from '@/content/verticals'
import { cta, pageMetadata, siteConfig } from '@/lib/site'
import { homeGraph } from '@/lib/structured-data'

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Seeckr, le vendeur que votre site e-commerce n'a jamais eu",
    description: siteConfig.description,
    path: '/',
  }),
  title: {
    absolute: "Seeckr, le vendeur que votre site e-commerce n'a jamais eu",
  },
}

export default function Home() {
  return (
    <>
      <JsonLd graph={homeGraph} />
      <Hero />

      <Section
        id="comment-ca-marche"
        eyebrow={howItWorks.eyebrow}
        title={howItWorks.title}
      >
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {howItWorks.steps.map((step, index) => (
            <li
              key={step.title}
              className="reveal border-white/15 border-t pt-6"
            >
              <span className="font-display font-light text-5xl text-violet-300">
                {index + 1}
              </span>
              <h3 className="mt-5 font-display font-semibold text-xl">
                {step.title}
              </h3>
              <p className="mt-3 text-violet-200 leading-relaxed">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="integrations"
        eyebrow={integrations.eyebrow}
        title={integrations.title}
        intro={integrations.text}
      >
        <IntegrationsLoop
          placements={integrations.placements}
          question={integrations.question}
          start={integrations.start}
        />
        <div className="reveal mt-14 flex flex-col gap-6 border-white/15 border-t pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display font-semibold text-xl">
              {integrations.cta.title}
            </p>
            <p className="mt-2 text-violet-200">{integrations.cta.text}</p>
          </div>
          <Link href={cta.href} className={`${button('primary')} shrink-0`}>
            {integrations.cta.label}
          </Link>
        </div>
      </Section>

      <Section
        id="demonstration"
        tone="light"
        eyebrow={situation.eyebrow}
        title={situation.title}
        intro={situation.text}
      >
        <div className="reveal mx-auto w-full max-w-md">
          <DemoConversation conversation={demoConversation} />
        </div>
      </Section>

      <Section id="benefices" eyebrow={benefits.eyebrow} title={benefits.title}>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="reveal">
            <p className="font-medium text-sm text-violet-300">
              {benefits.visitor.label}
            </p>
            <h3 className="mt-3 font-display font-semibold text-2xl">
              {benefits.visitor.title}
            </h3>
            {benefits.visitor.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-violet-200 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <p className="reveal font-medium text-sm text-violet-300">
              {benefits.merchant.label}
            </p>
            <ul className="mt-3">
              {benefits.merchant.items.map((item) => (
                <li
                  key={item.title}
                  className="reveal border-white/15 border-t py-6 first:border-t-0 first:pt-0"
                >
                  <h3 className="font-display font-semibold text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-violet-200 leading-relaxed">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="preuve"
        tone="light"
        eyebrow={proof.eyebrow}
        title={proof.title}
        intro={`${algimouss.about} ${algimouss.context}`}
      >
        <AlgimoussFigures figures={algimoussCase.teaserFigures} />
        <Link
          href={algimoussCase.link.href}
          className="mt-8 inline-flex min-h-11 items-center font-medium text-violet underline underline-offset-4"
        >
          {algimoussCase.link.label}
        </Link>
      </Section>

      <Section
        id="verticales"
        eyebrow={verticalsIntro.eyebrow}
        title={verticalsIntro.title}
      >
        <ul className="border-white/15 border-b">
          {verticals.map((vertical) => (
            <li key={vertical.slug} className="reveal border-white/15 border-t">
              <Link
                href={`/${vertical.slug}`}
                className="group flex flex-col gap-2 py-8 transition-colors hover:bg-white/5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-4"
              >
                <span className="font-display font-semibold text-2xl sm:text-3xl">
                  {vertical.name}
                </span>
                <span className="flex items-center gap-4 text-violet-200">
                  {vertical.teaser}
                  <span
                    aria-hidden="true"
                    className="text-violet-300 text-xl transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <WebinarBlock />
      <Faq />
      <FinalCta />
    </>
  )
}

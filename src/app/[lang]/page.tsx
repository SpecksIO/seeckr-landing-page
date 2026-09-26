import type { Metadata } from 'next'
import Link from 'next/link'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { Hero } from '@/components/hero'
import { IntegrationsLoop } from '@/components/integrations-loop'
import { JsonLd } from '@/components/json-ld'
import { Section } from '@/components/section'
import { button } from '@/components/styles'
import { WebinarBlock } from '@/components/webinar-block'
import { getDictionary, getLocale } from '@/content/get-dictionary'
import { verticalSlugs } from '@/content/verticals'
import { localePath } from '@/lib/i18n'
import { pageMetadata, paths } from '@/lib/site'
import { homeGraph } from '@/lib/structured-data'

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary()
  return {
    ...pageMetadata(await getLocale(), dict, {
      title: dict.hero.metaTitle,
      description: dict.site.description,
      path: '/',
    }),
    title: { absolute: dict.hero.metaTitle },
  }
}

export default async function Home() {
  const locale = await getLocale()
  const dict = await getDictionary()
  const { howItWorks, integrations, benefits, verticalsIntro, verticals } = dict

  return (
    <>
      <JsonLd graph={homeGraph(locale, dict)} />
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
          video={integrations.video}
          toggleLabels={dict.ui.animation}
        />
        <div className="reveal mt-14 flex flex-col gap-6 border-white/15 border-t pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display font-semibold text-xl">
              {integrations.cta.title}
            </p>
            <p className="mt-2 text-violet-200">{integrations.cta.text}</p>
          </div>
          <Link
            href={localePath(locale, paths.lead)}
            className={`${button('primary')} shrink-0`}
          >
            {integrations.cta.label}
          </Link>
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
        id="verticales"
        eyebrow={verticalsIntro.eyebrow}
        title={verticalsIntro.title}
      >
        <ul className="border-white/15 border-b">
          {verticalSlugs.map((slug) => (
            <li key={slug} className="reveal border-white/15 border-t">
              <Link
                href={localePath(locale, `/${slug}`)}
                className="group flex flex-col gap-2 py-8 transition-colors hover:bg-white/5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-4"
              >
                <span className="font-display font-semibold text-2xl sm:text-3xl">
                  {verticals[slug].name}
                </span>
                <span className="flex items-center gap-4 text-violet-200">
                  {verticals[slug].teaser}
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
      <Faq faq={dict.faq} leadHref={localePath(locale, paths.lead)} />
      <FinalCta />
    </>
  )
}

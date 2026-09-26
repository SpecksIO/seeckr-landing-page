import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AlgimoussFigures } from '@/components/algimouss-figures'
import { ConversationTranscript } from '@/components/conversation-card'
import { FinalCta } from '@/components/final-cta'
import { JsonLd } from '@/components/json-ld'
import { Section } from '@/components/section'
import { button, eyebrow } from '@/components/styles'
import { WebinarBlock } from '@/components/webinar-block'
import { getDictionary, getLocale } from '@/content/get-dictionary'
import {
  algimoussVertical,
  type VerticalSlug,
  verticalSlugs,
} from '@/content/verticals'
import { showWebinar, webinarTeaser } from '@/content/webinar'
import { localePath } from '@/lib/i18n'
import { pageMetadata, paths } from '@/lib/site'
import { verticalGraph } from '@/lib/structured-data'

export const dynamicParams = false

export function generateStaticParams() {
  return verticalSlugs.map((vertical) => ({ vertical }))
}

async function getSlug(params: PageProps<'/[lang]/[vertical]'>['params']) {
  const { vertical } = await params
  if (!(verticalSlugs as readonly string[]).includes(vertical)) notFound()
  return vertical as VerticalSlug
}

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/[vertical]'>): Promise<Metadata> {
  const slug = await getSlug(params)
  const dict = await getDictionary()
  return pageMetadata(await getLocale(), dict, {
    ...dict.verticals[slug].meta,
    path: `/${slug}`,
  })
}

export default async function VerticalPage({
  params,
}: PageProps<'/[lang]/[vertical]'>) {
  const slug = await getSlug(params)
  const locale = await getLocale()
  const dict = await getDictionary()
  const { ui, algimouss, algimoussCase } = dict
  const vertical = dict.verticals[slug]

  return (
    <>
      <JsonLd graph={verticalGraph(locale, dict, slug)} />
      <section
        aria-labelledby="hero-title"
        className="px-4 pt-[clamp(3rem,8vw,6rem)] pb-[clamp(4rem,9vw,7rem)] sm:px-6"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className={`${eyebrow} text-violet-200`}>{vertical.name}</p>
          <h1
            id="hero-title"
            className="mt-5 max-w-4xl text-balance font-display font-semibold text-[clamp(2.125rem,5.5vw,4rem)] leading-[1.08] tracking-tight"
          >
            {vertical.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-violet-200 leading-relaxed">
            {vertical.hero.intro}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={localePath(locale, paths.lead)}
              className={button('primary')}
            >
              {dict.site.cta.label}
            </Link>
            {showWebinar(locale) && (
              <Link href="#webinar" className={button('secondary')}>
                {webinarTeaser}
              </Link>
            )}
          </div>
        </div>
      </section>

      <Section
        id="traduction"
        tone="light"
        eyebrow={ui.vertical.translationEyebrow}
        title={ui.vertical.translationTitle}
      >
        <div className="hidden grid-cols-2 gap-10 pb-4 font-medium text-sm text-violet md:grid">
          <p>{ui.vertical.visitor}</p>
          <p>{ui.vertical.sheet}</p>
        </div>
        <ul className="space-y-4">
          {vertical.contrast.pairs.map((pair) => (
            <li
              key={pair.visitor}
              className="reveal grid gap-4 md:grid-cols-2 md:items-center md:gap-10"
            >
              <p className="rounded-2xl rounded-bl-md bg-white p-5 font-display text-ink text-lg leading-snug">
                <span className="sr-only">{ui.vertical.visitorSays}</span>
                {ui.quote(pair.visitor)}
              </p>
              <p className="px-5 text-ink/75 md:px-0">
                <span className="mb-1 block font-medium text-violet text-xs uppercase tracking-[0.2em] md:sr-only">
                  {ui.vertical.sheet}
                </span>
                {pair.sheet}
              </p>
            </li>
          ))}
        </ul>
        <p className="reveal mt-12 max-w-2xl font-display font-medium text-ink text-xl">
          {vertical.contrast.closing}
        </p>
      </Section>

      <Section
        id="exemple"
        eyebrow={ui.vertical.exampleEyebrow}
        title={vertical.conversation.title}
      >
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_minmax(0,34rem)] lg:gap-20">
          <ol className="border-white/15 border-b">
            {dict.doctrine.map((point) => (
              <li
                key={point.title}
                className="reveal border-white/15 border-t py-6"
              >
                <h3 className="font-display font-semibold text-xl">
                  {point.title}
                </h3>
                <p className="mt-2 text-violet-200 leading-relaxed">
                  {point.text}
                </p>
              </li>
            ))}
          </ol>
          <div className="reveal">
            <ConversationTranscript conversation={vertical.conversation} />
          </div>
        </div>
      </Section>

      <Section
        id="benefices"
        eyebrow={ui.vertical.benefitsEyebrow}
        title={vertical.benefitsTitle}
      >
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {vertical.benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="reveal border-white/15 border-t pt-6"
            >
              <h3 className="font-display font-semibold text-xl">
                {benefit.title}
              </h3>
              <p className="mt-3 text-violet-200 leading-relaxed">
                {benefit.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {vertical.compliance && (
        <Section
          id="conformite"
          tone="light"
          eyebrow={vertical.compliance.eyebrow}
          title={vertical.compliance.title}
          intro={vertical.compliance.intro}
        >
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {vertical.compliance.items.map((item) => (
              <li
                key={item.title}
                className="reveal border-ink/15 border-t pt-6"
              >
                <h3 className="font-display font-semibold text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink/80 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {slug === algimoussVertical && (
        <Section
          id="algimouss"
          tone="light"
          eyebrow={algimoussCase.eyebrow}
          title={algimoussCase.title}
          intro={`${algimouss.about} ${algimouss.context}`}
        >
          <AlgimoussFigures figures={algimoussCase.teaserFigures} />
          <Link
            href={localePath(locale, paths.algimoussCase)}
            className="mt-8 inline-flex min-h-11 items-center font-medium text-violet underline underline-offset-4"
          >
            {algimoussCase.linkLabel}
          </Link>
        </Section>
      )}

      <WebinarBlock />
      <FinalCta />
    </>
  )
}

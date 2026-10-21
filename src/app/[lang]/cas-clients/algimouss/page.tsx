import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlgimoussFigures } from '@/components/algimouss-figures'
import { FinalCta } from '@/components/final-cta'
import { JsonLd } from '@/components/json-ld'
import { Section } from '@/components/section'
import { eyebrow } from '@/components/styles'
import { WebinarBlock } from '@/components/webinar-block'
import { getDictionary, getLocale } from '@/content/get-dictionary'
import { algimoussVertical } from '@/content/verticals'
import { localePath } from '@/lib/i18n'
import { pageMetadata, paths } from '@/lib/site'
import { caseGraph } from '@/lib/structured-data'

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary()
  return pageMetadata(await getLocale(), dict, {
    ...dict.algimoussCase.meta,
    path: paths.algimoussCase,
  })
}

export default async function AlgimoussCasePage() {
  const locale = await getLocale()
  const dict = await getDictionary()
  const { algimouss, algimoussCase } = dict
  const { problem, setup, results, data, voices } = algimoussCase
  const { testimonial, team } = algimoussCase

  return (
    <>
      <JsonLd graph={caseGraph(locale, dict)} />
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
              {algimoussCase.intro}
            </p>
            <Link
              href={localePath(locale, `/${algimoussVertical}`)}
              className="mt-8 inline-flex min-h-11 items-center font-medium text-violet-100 underline underline-offset-4 hover:text-white"
            >
              {algimoussCase.verticalLink}
            </Link>
          </div>
          <figure className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <Image
              src={testimonial.photo}
              alt={testimonial.photoAlt}
              width={388}
              height={391}
              className="size-20 rounded-full object-cover"
            />
            <blockquote className="mt-6 font-display text-[clamp(1.375rem,2.6vw,1.75rem)] text-violet-100 leading-snug">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6">
              <span className="block font-medium text-white">
                {testimonial.name}
              </span>
              <span className="text-sm text-violet-200">
                {testimonial.role}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <SplitSection
        id="cas-particulier"
        light
        {...problem}
        caption={algimoussCase.quoteCaption}
        moreLabel={algimoussCase.moreLabel}
      />

      <Section
        id="visiteurs"
        eyebrow={voices.eyebrow}
        title={voices.title}
        intro={voices.intro}
      >
        <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
          {voices.quotes.map((quote) => (
            <li key={quote} className="reveal border-white/15 border-t pt-6">
              <blockquote className="font-display text-mist text-xl leading-snug">
                {quote}
              </blockquote>
            </li>
          ))}
        </ul>
        <p className="reveal mt-16 max-w-3xl text-balance font-display font-semibold text-[clamp(1.75rem,3.5vw,2.5rem)] text-violet-300 leading-tight tracking-tight">
          {voices.closing}
        </p>
      </Section>

      <SplitSection
        id="mise-en-place"
        light
        stacked
        {...setup}
        caption={algimoussCase.quoteCaption}
        moreLabel={algimoussCase.moreLabel}
      />

      <section
        aria-labelledby="equipe-title"
        className="px-4 py-[clamp(4rem,10vw,7rem)] sm:px-6"
      >
        <div className="reveal mx-auto grid w-full max-w-6xl gap-12 rounded-3xl bg-violet px-6 py-14 text-white sm:px-14 sm:py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className={`${eyebrow} text-mist`}>{team.eyebrow}</p>
            <h2
              id="equipe-title"
              className="mt-4 text-balance font-display font-semibold text-[clamp(2.125rem,5vw,3.5rem)] leading-[1.05] tracking-tight"
            >
              {team.title}
            </h2>
            <p className="mt-6 text-lg text-mist leading-relaxed">
              {team.text}
            </p>
          </div>
          <figure className="lg:self-center">
            <blockquote className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug">
              {team.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <Image
                src={testimonial.photo}
                alt={testimonial.photoAlt}
                width={388}
                height={391}
                className="size-14 rounded-full object-cover"
              />
              <span>
                <span className="block font-medium">{testimonial.name}</span>
                <span className="text-mist text-sm">{testimonial.role}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <Section
        id="chiffres"
        tone="light"
        eyebrow={results.eyebrow}
        title={results.title}
      >
        <AlgimoussFigures figures={results.figures} />
        <p className="reveal mt-12 text-ink/70 text-sm">{algimouss.period}</p>
      </Section>

      <SplitSection
        id="data"
        {...data}
        caption={algimoussCase.quoteCaption}
        moreLabel={algimoussCase.moreLabel}
      />

      <WebinarBlock />
      <FinalCta title={algimoussCase.ctaTitle} />
    </>
  )
}

/**
 * Une section du récit : le grand titre et la parole d'un visiteur, le texte
 * à côté, et le détail à déplier pour qui veut tout lire. Par défaut, titre et
 * citation restent à gauche pendant la lecture ; `stacked` les pose en haut et
 * range les points en grille, pour varier d'une section à l'autre.
 */
function SplitSection({
  id,
  light = false,
  stacked = false,
  eyebrow: label,
  title,
  quote,
  caption,
  intro,
  items,
  more,
  moreQuote,
  moreLabel,
}: {
  id: string
  light?: boolean
  stacked?: boolean
  eyebrow: string
  title: string
  quote: string
  caption: string
  intro?: string
  items: { title: string; text: string }[]
  more: string[]
  moreQuote?: string
  moreLabel: string
}) {
  const soft = light ? 'text-ink/80' : 'text-violet-200'
  const rule = light ? 'border-ink/15' : 'border-white/15'
  const accent = light ? 'text-violet' : 'text-violet-300'

  const heading = (
    <div>
      <p className={`${eyebrow} ${light ? 'text-violet' : 'text-violet-200'}`}>
        {label}
      </p>
      <h2
        id={`${id}-title`}
        className="mt-4 text-balance font-display font-semibold text-[clamp(2.125rem,5vw,3.5rem)] leading-[1.05] tracking-tight"
      >
        {title}
      </h2>
    </div>
  )
  const visitorQuote = (text: string) => (
    <figure
      className={`border-l-4 pl-6 ${light ? 'border-violet' : 'border-violet-300'}`}
    >
      <blockquote
        className={`font-display text-[clamp(1.375rem,2.6vw,1.875rem)] leading-snug ${light ? 'text-violet' : 'text-violet-100'}`}
      >
        {text}
      </blockquote>
      <figcaption className={`mt-4 text-sm ${soft}`}>{caption}</figcaption>
    </figure>
  )
  const number = (index: number) => (
    <span className={`font-display text-lg ${accent}`}>
      {String(index + 1).padStart(2, '0')}
    </span>
  )
  const details = (
    <details className={`group reveal mt-10 border-t pt-6 ${rule}`}>
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 font-medium [&::-webkit-details-marker]:hidden">
        <span
          aria-hidden="true"
          className={`grid size-8 place-items-center rounded-full border text-lg transition-transform group-open:rotate-45 ${rule} ${accent}`}
        >
          +
        </span>
        {moreLabel}
      </summary>
      <div className={`mt-6 max-w-2xl space-y-4 leading-relaxed ${soft}`}>
        {more.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {moreQuote && <div className="pt-4">{visitorQuote(moreQuote)}</div>}
      </div>
    </details>
  )

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`px-4 py-[clamp(4.5rem,11vw,8rem)] sm:px-6 ${light ? 'bg-mist text-ink' : ''}`}
    >
      {stacked ? (
        <div className="mx-auto w-full max-w-6xl">
          <div className="reveal grid items-end gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            {heading}
            {visitorQuote(quote)}
          </div>
          {intro && (
            <p className="reveal mt-12 max-w-3xl font-medium text-xl leading-relaxed">
              {intro}
            </p>
          )}
          <ul className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => (
              <li key={item.title} className={`reveal border-t pt-6 ${rule}`}>
                {number(index)}
                <h3 className="mt-3 font-display font-semibold text-xl">
                  {item.title}
                </h3>
                <p className={`mt-2 leading-relaxed ${soft}`}>{item.text}</p>
              </li>
            ))}
          </ul>
          {details}
        </div>
      ) : (
        <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="reveal space-y-10 lg:sticky lg:top-28 lg:self-start">
            {heading}
            {visitorQuote(quote)}
          </div>
          <div>
            {intro && (
              <p className="reveal font-medium text-xl leading-relaxed">
                {intro}
              </p>
            )}
            <ul className={intro ? 'mt-10' : ''}>
              {items.map((item, index) => (
                <li
                  key={item.title}
                  className={`reveal grid grid-cols-[2.5rem_1fr] border-t py-7 ${rule}`}
                >
                  {number(index)}
                  <div>
                    <h3 className="font-display font-semibold text-xl">
                      {item.title}
                    </h3>
                    <p className={`mt-2 leading-relaxed ${soft}`}>
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            {details}
          </div>
        </div>
      )}
    </section>
  )
}

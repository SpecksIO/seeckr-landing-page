import Link from 'next/link'
import { Section } from '@/components/section'
import type { AlgimoussFigure } from '@/content/fr/algimouss'
import { getDictionary, getLocale } from '@/content/get-dictionary'
import { localePath } from '@/lib/i18n'
import { paths } from '@/lib/site'

/** Les chiffres mesurés chez Algimouss, tels que le site les publie. */
export async function AlgimoussFigures({
  figures,
  compact = false,
}: {
  figures: AlgimoussFigure[]
  /** Une ligne de chiffres à lire d'un coup d'œil, sans le détail. */
  compact?: boolean
}) {
  const { algimouss } = await getDictionary()
  return (
    <figure>
      <dl
        className={`grid gap-x-12 gap-y-10 sm:grid-cols-2 ${compact ? 'lg:grid-cols-4 lg:gap-x-8' : ''}`}
      >
        {figures.map((key) => {
          const figure = algimouss.figures[key]
          return (
            <div
              key={key}
              className="reveal flex flex-col-reverse justify-end border-ink/15 border-t pt-5"
            >
              <dt
                className={`mt-3 max-w-md text-ink/85 leading-snug ${compact ? 'font-medium text-lg' : ''}`}
              >
                {figure.label}
                {!compact && (
                  <span className="mt-1 block text-ink/70 text-sm leading-relaxed">
                    {figure.detail}
                  </span>
                )}
              </dt>
              <dd className="font-display font-semibold text-[clamp(2.25rem,5vw,3.5rem)] text-violet leading-none tracking-tight">
                {figure.value}
              </dd>
            </div>
          )
        })}
      </dl>
    </figure>
  )
}

/** Le cas Algimouss en quatre chiffres, avec le lien vers la page entière. */
export async function AlgimoussTeaser() {
  const locale = await getLocale()
  const { algimoussCase } = await getDictionary()
  return (
    <Section
      id="algimouss"
      tone="light"
      eyebrow={algimoussCase.eyebrow}
      title={algimoussCase.teaser.title}
      intro={algimoussCase.teaser.intro}
    >
      <AlgimoussFigures figures={algimoussCase.teaserFigures} compact />
      <Link
        href={localePath(locale, paths.algimoussCase)}
        className="mt-8 inline-flex min-h-11 items-center font-medium text-violet underline underline-offset-4"
      >
        {algimoussCase.linkLabel}
      </Link>
    </Section>
  )
}

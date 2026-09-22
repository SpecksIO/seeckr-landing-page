import type { ReactNode } from 'react'
import { eyebrow as eyebrowClass, sectionTitle } from '@/components/styles'

/**
 * Une section de page : une idée, un titre, beaucoup d'air.
 * `light` pose la section sur le violet très clair pour rythmer la page.
 */
export function Section({
  id,
  tone = 'dark',
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string
  tone?: 'dark' | 'light'
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
}) {
  const light = tone === 'light'
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`px-4 py-[clamp(4.5rem,11vw,8rem)] sm:px-6 ${light ? 'bg-mist text-ink' : ''}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="reveal max-w-3xl">
          <p
            className={`${eyebrowClass} ${light ? 'text-violet' : 'text-violet-200'}`}
          >
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className={`mt-4 ${sectionTitle}`}>
            {title}
          </h2>
          {intro && (
            <p
              className={`mt-5 text-lg leading-relaxed ${light ? 'text-ink/80' : 'text-violet-200'}`}
            >
              {intro}
            </p>
          )}
        </header>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  )
}

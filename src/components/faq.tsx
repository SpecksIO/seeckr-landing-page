'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Section } from '@/components/section'
import type { Dictionary } from '@/content'

/** `leadHref` : le formulaire de coordonnées, cible du lien d'une réponse. */
export function Faq({
  faq,
  leadHref,
}: {
  faq: Dictionary['faq']
  leadHref: string
}) {
  // Le lien « Tarifs » du menu pointe sur #prix : la question visée s'ouvre.
  useEffect(() => {
    const openTarget = () => {
      const target = document.getElementById(window.location.hash.slice(1))
      if (target instanceof HTMLDetailsElement) target.open = true
    }
    openTarget()
    window.addEventListener('hashchange', openTarget)
    return () => window.removeEventListener('hashchange', openTarget)
  }, [])

  return (
    <Section id="faq" tone="light" eyebrow={faq.eyebrow} title={faq.title}>
      <div className="max-w-3xl border-ink/15 border-b">
        {faq.items.map((item) => (
          <details
            key={item.id}
            id={item.id}
            className="group border-ink/15 border-t"
          >
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display font-medium text-lg focus-visible:outline-2 focus-visible:outline-violet [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="text-2xl text-violet transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-prose pb-6 text-ink/80 leading-relaxed">
              {item.answer}
              {item.link && (
                <>
                  {' '}
                  <Link
                    href={leadHref}
                    className="font-medium text-violet underline underline-offset-4"
                  >
                    {item.link}
                  </Link>
                </>
              )}
            </p>
          </details>
        ))}
      </div>
    </Section>
  )
}

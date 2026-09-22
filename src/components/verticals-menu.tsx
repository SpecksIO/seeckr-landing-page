'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { verticals } from '@/content/verticals'

/**
 * Le menu « Par métier » de l'en-tête, sur grand écran. Un <details> natif :
 * il s'ouvre au clic comme au clavier, et se referme quand on suit un lien,
 * qu'on appuie sur Échap, ou qu'on clique ailleurs dans la page.
 */
export function VerticalsMenu() {
  const menu = useRef<HTMLDetailsElement>(null)
  const close = () => menu.current?.removeAttribute('open')

  useEffect(() => {
    const closeIfOutside = (event: PointerEvent) => {
      const open = menu.current
      if (open && !open.contains(event.target as Node)) {
        open.removeAttribute('open')
      }
    }
    document.addEventListener('pointerdown', closeIfOutside)
    return () => document.removeEventListener('pointerdown', closeIfOutside)
  }, [])

  return (
    <details
      ref={menu}
      onKeyDown={(event) => {
        if (event.key === 'Escape') close()
      }}
      className="group relative"
    >
      <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-md text-violet-100 hover:text-white focus-visible:outline-2 focus-visible:outline-violet-300 [&::-webkit-details-marker]:hidden">
        Par métier
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-4 transition-transform group-open:-scale-y-100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <ul className="absolute top-full left-1/2 mt-4 w-88 -translate-x-1/2 rounded-2xl border border-white/10 bg-night p-2 shadow-[0_40px_80px_-40px_#07051c]">
        {verticals.map((vertical) => (
          <li key={vertical.slug}>
            <Link
              href={`/${vertical.slug}`}
              onClick={close}
              className="block rounded-xl px-4 py-3 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-violet-300"
            >
              <span className="block font-medium text-mist">
                {vertical.name}
              </span>
              <span className="mt-1 block text-violet-200 leading-snug">
                {vertical.teaser}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  )
}

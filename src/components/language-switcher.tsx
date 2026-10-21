'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import {
  type Locale,
  localeNames,
  localePath,
  locales,
  unlocalizedPath,
} from '@/lib/i18n'

const linkClass =
  'flex min-h-11 min-w-9 items-center justify-center rounded-md text-violet-200 uppercase hover:text-white focus-visible:outline-2 focus-visible:outline-violet-300 aria-[current=page]:font-semibold aria-[current=page]:text-white'

/**
 * La page en cours, dans chaque langue du site. Replié (en-tête des grands
 * écrans), seule la langue courante s'affiche : un clic déroule les autres
 * dans une bande horizontale en dessous. Un <details> natif, refermé quand on
 * suit un lien ou qu'on clique ailleurs.
 */
export function LanguageSwitcher({
  locale,
  label,
  collapsed = false,
  className = '',
}: {
  locale: Locale
  label: string
  collapsed?: boolean
  className?: string
}) {
  const path = unlocalizedPath(usePathname())
  const menu = useRef<HTMLDetailsElement>(null)
  const close = () => menu.current?.removeAttribute('open')

  useEffect(() => {
    if (!collapsed) return
    const onPointerDown = (event: PointerEvent) => {
      if (!menu.current?.contains(event.target as Node))
        menu.current?.removeAttribute('open')
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [collapsed])

  const list = (items: readonly Locale[], extra = '') => (
    <ul className={`flex items-center gap-1 ${extra}`}>
      {items.map((item) => (
        <li key={item}>
          <Link
            href={localePath(item, path)}
            hrefLang={item}
            lang={item}
            onClick={close}
            aria-label={localeNames[item]}
            aria-current={item === locale ? 'page' : undefined}
            className={linkClass}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  )

  if (!collapsed) {
    return (
      <nav aria-label={label} className={className}>
        {list(locales, 'text-sm')}
      </nav>
    )
  }

  return (
    <nav aria-label={label} className={className}>
      <details ref={menu} className="group relative text-xs">
        <summary
          aria-label={localeNames[locale]}
          className={`${linkClass} cursor-pointer list-none gap-1 font-semibold text-white [&::-webkit-details-marker]:hidden`}
        >
          {locale}
          <svg
            viewBox="0 0 12 12"
            aria-hidden="true"
            className="size-2.5 transition-transform group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M3 4.5l3 3 3-3" />
          </svg>
        </summary>
        {list(
          locales.filter((item) => item !== locale),
          'absolute top-full right-0 mt-1 rounded-lg border border-white/10 bg-night px-1'
        )}
      </details>
    </nav>
  )
}

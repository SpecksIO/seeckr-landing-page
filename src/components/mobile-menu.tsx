'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { eyebrow } from '@/components/styles'
import { verticals } from '@/content/verticals'

/**
 * Menu des petits écrans. Un <details> natif : il s'ouvre sans JavaScript,
 * et se referme quand on suit un lien. Les verticales y sont regroupées sous
 * « Par métier », comme dans le menu déroulant des grands écrans.
 */
export function MobileMenu({
  links,
  loginUrl,
}: {
  links: { href: string; label: string }[]
  loginUrl: string
}) {
  const menu = useRef<HTMLDetailsElement>(null)
  const close = () => menu.current?.removeAttribute('open')

  return (
    <details ref={menu} className="group lg:hidden">
      <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 focus-visible:outline-2 focus-visible:outline-violet-300 [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Menu</span>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        >
          <path d="M4 8h16M4 16h16" className="group-open:hidden" />
          <path d="M6 6l12 12M18 6L6 18" className="hidden group-open:block" />
        </svg>
      </summary>
      <nav
        aria-label="Principal"
        className="absolute inset-x-0 top-16 border-white/10 border-b bg-night px-4 pt-2 pb-6"
      >
        <p className={`${eyebrow} py-3 text-violet-300`}>Par métier</p>
        <ul>
          {verticals.map((vertical) => (
            <li key={vertical.slug}>
              <Link
                href={`/${vertical.slug}`}
                onClick={close}
                className="flex min-h-12 items-center border-white/10 border-b text-lg"
              >
                {vertical.name}
              </Link>
            </li>
          ))}
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={close}
                className="flex min-h-12 items-center border-white/10 border-b text-lg"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={loginUrl}
              className="flex min-h-12 items-center text-lg text-violet-200"
            >
              Se connecter
            </a>
          </li>
        </ul>
      </nav>
    </details>
  )
}

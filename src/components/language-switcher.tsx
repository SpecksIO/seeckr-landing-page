'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  type Locale,
  localeNames,
  localePath,
  locales,
  unlocalizedPath,
} from '@/lib/i18n'

/** La page en cours, dans chaque langue du site. */
export function LanguageSwitcher({
  locale,
  label,
  className = '',
}: {
  locale: Locale
  label: string
  className?: string
}) {
  const path = unlocalizedPath(usePathname())

  return (
    <nav aria-label={label} className={className}>
      <ul className="flex items-center gap-1 text-sm">
        {locales.map((item) => (
          <li key={item}>
            <Link
              href={localePath(item, path)}
              hrefLang={item}
              lang={item}
              aria-label={localeNames[item]}
              aria-current={item === locale ? 'page' : undefined}
              className="flex min-h-11 min-w-9 items-center justify-center rounded-md text-violet-200 uppercase hover:text-white focus-visible:outline-2 focus-visible:outline-violet-300 aria-[current=page]:font-semibold aria-[current=page]:text-white"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

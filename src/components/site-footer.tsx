import Link from 'next/link'
import { Logo } from '@/components/logo'
import { verticals } from '@/content/verticals'
import { cta, siteConfig } from '@/lib/site'

const linkClass = 'text-violet-200 hover:text-white'

export function SiteFooter() {
  return (
    <footer className="border-white/10 border-t px-4 py-14 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-10 text-sm sm:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-violet-200 leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
        <nav aria-label="Verticales">
          <ul className="space-y-3">
            {verticals.map((vertical) => (
              <li key={vertical.slug}>
                <Link href={`/${vertical.slug}`} className={linkClass}>
                  {vertical.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Seeckr">
          <ul className="space-y-3">
            <li>
              <Link href={cta.href} className={linkClass}>
                {cta.shortLabel}
              </Link>
            </li>
            <li>
              <a href={siteConfig.loginUrl} className={linkClass}>
                Se connecter
              </a>
            </li>
            <li>
              <Link href="/mentions-legales" className={linkClass}>
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className={linkClass}>
                Confidentialité
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-12 w-full max-w-6xl text-violet-300 text-xs">
        © {new Date().getFullYear()} Seeckr
      </p>
    </footer>
  )
}

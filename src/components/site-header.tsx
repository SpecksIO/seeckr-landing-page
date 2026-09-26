import Link from 'next/link'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Logo } from '@/components/logo'
import { MobileMenu } from '@/components/mobile-menu'
import { button } from '@/components/styles'
import { VerticalsMenu } from '@/components/verticals-menu'
import { getDictionary, getLocale } from '@/content/get-dictionary'
import { verticalSlugs } from '@/content/verticals'
import { showWebinar } from '@/content/webinar'
import { localePath } from '@/lib/i18n'
import { paths, siteConfig } from '@/lib/site'

export async function SiteHeader() {
  const locale = await getLocale()
  const { ui, site, verticals } = await getDictionary()
  // Les verticales vivent dans le menu « Par métier », jamais à plat ici.
  const links = [
    { href: localePath(locale, '/#prix'), label: ui.nav.pricing },
    ...(showWebinar(locale) ? [{ href: '/#webinar', label: 'Webinar' }] : []),
  ]
  const verticalLinks = verticalSlugs.map((slug) => ({
    href: localePath(locale, `/${slug}`),
    name: verticals[slug].name,
    teaser: verticals[slug].teaser,
  }))

  return (
    <header className="sticky top-0 z-30 border-white/10 border-b bg-night">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-2 px-3 sm:gap-3 sm:px-6">
        <Link
          href={localePath(locale, '/')}
          aria-label={ui.nav.home}
          className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-violet-300"
        >
          <Logo />
        </Link>
        <nav aria-label={ui.nav.main} className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7 text-sm">
            <li>
              <VerticalsMenu label={ui.nav.byTrade} verticals={verticalLinks} />
            </li>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-violet-100 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={siteConfig.loginUrl}
          className="hidden text-sm text-violet-200 hover:text-white lg:ml-4 lg:inline"
        >
          {ui.nav.login}
        </a>
        <LanguageSwitcher
          locale={locale}
          label={ui.nav.language}
          className="hidden lg:ml-2 lg:flex"
        />
        <Link
          href={localePath(locale, paths.lead)}
          className={`${button('primary', 'sm')} ml-auto lg:ml-2`}
        >
          {site.cta.shortLabel}
        </Link>
        <MobileMenu
          locale={locale}
          labels={ui.nav}
          verticals={verticalLinks}
          links={links}
          loginUrl={siteConfig.loginUrl}
        />
      </div>
    </header>
  )
}

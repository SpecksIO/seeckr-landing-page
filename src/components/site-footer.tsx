import Link from 'next/link'
import { CookieSettingsButton } from '@/components/cookie-consent'
import { Logo } from '@/components/logo'
import { getDictionary, getLocale } from '@/content/get-dictionary'
import { verticalSlugs } from '@/content/verticals'
import { localePath } from '@/lib/i18n'
import { paths, siteConfig } from '@/lib/site'

const linkClass = 'text-violet-200 hover:text-white'

export async function SiteFooter() {
  const locale = await getLocale()
  const { site, ui, verticals } = await getDictionary()

  return (
    <footer className="border-white/10 border-t px-4 py-14 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-10 text-sm sm:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-violet-200 leading-relaxed">
            {site.description}
          </p>
        </div>
        <nav aria-label={ui.nav.verticals}>
          <ul className="space-y-3">
            {verticalSlugs.map((slug) => (
              <li key={slug}>
                <Link
                  href={localePath(locale, `/${slug}`)}
                  className={linkClass}
                >
                  {verticals[slug].name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={siteConfig.name}>
          <ul className="space-y-3">
            <li>
              <Link href={localePath(locale, paths.lead)} className={linkClass}>
                {site.cta.shortLabel}
              </Link>
            </li>
            {locale === 'fr' && (
              <li>
                <Link href={paths.guides} className={linkClass}>
                  Guides
                </Link>
              </li>
            )}
            <li>
              <a href={siteConfig.loginUrl} className={linkClass}>
                {ui.nav.login}
              </a>
            </li>
            <li>
              <Link
                href={localePath(locale, paths.legalNotice)}
                className={linkClass}
              >
                {site.pages.legalNotice.title}
              </Link>
            </li>
            <li>
              <Link
                href={localePath(locale, paths.privacy)}
                className={linkClass}
              >
                {site.pages.privacy.title}
              </Link>
            </li>
            <li>
              <CookieSettingsButton
                label={ui.consent.settings}
                className={linkClass}
              />
            </li>
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-12 w-full max-w-6xl text-violet-300 text-xs">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  )
}

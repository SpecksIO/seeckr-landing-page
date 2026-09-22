import Link from 'next/link'
import { Logo } from '@/components/logo'
import { MobileMenu } from '@/components/mobile-menu'
import { button } from '@/components/styles'
import { verticals } from '@/content/verticals'
import { isUpcoming, webinar } from '@/content/webinar'
import { cta, siteConfig } from '@/lib/site'

export function SiteHeader() {
  const links = verticals.map((vertical) => ({
    href: `/${vertical.slug}`,
    label: vertical.name,
  }))
  if (isUpcoming(webinar.startsAt)) {
    links.push({ href: '/#webinar', label: 'Webinar' })
  }

  return (
    <header className="sticky top-0 z-30 border-white/10 border-b bg-night">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-2 px-3 sm:gap-3 sm:px-6">
        <Link
          href="/"
          aria-label="Seeckr, accueil"
          className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-violet-300"
        >
          <Logo />
        </Link>
        <nav aria-label="Principal" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7 text-sm">
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
          Se connecter
        </a>
        <Link
          href={cta.href}
          className={`${button('primary', 'sm')} ml-auto lg:ml-2`}
        >
          {cta.shortLabel}
        </Link>
        <MobileMenu links={links} loginUrl={siteConfig.loginUrl} />
      </div>
    </header>
  )
}

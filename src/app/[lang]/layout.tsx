import type { Metadata, Viewport } from 'next'
import { Inter, Pacifico, Poppins } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getDictionary, getLocale } from '@/content/get-dictionary'
import { locales } from '@/lib/i18n'
import { siteConfig } from '@/lib/site'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '500', '600', '700'],
})
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const pacifico = Pacifico({
  variable: '--font-pacifico',
  subsets: ['latin'],
  weight: '400',
})

// Les pages restent statiques, régénérées toutes les 10 minutes : le bloc
// webinar disparaît ainsi peu après le début de la session.
export const revalidate = 600
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary()
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
    description: dict.site.description,
    applicationName: siteConfig.name,
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      locale: dict.site.ogLocale,
    },
    twitter: { card: 'summary_large_image' },
  }
}

export const viewport: Viewport = {
  themeColor: '#16113a',
}

export default async function RootLayout({ children }: LayoutProps<'/[lang]'>) {
  const dict = await getDictionary()
  return (
    <html
      lang={await getLocale()}
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${inter.variable} ${pacifico.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col font-sans">
        <a
          href="#contenu"
          className="sr-only rounded-full bg-white px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
          {dict.ui.skipLink}
        </a>
        <SiteHeader />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}

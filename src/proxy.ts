import { type NextRequest, NextResponse } from 'next/server'
import { canonicalPath, defaultLocale, hasLocale, localePath } from '@/lib/i18n'

/**
 * Ramène chaque URL publique à `app/[lang]` et au chemin français :
 * `/formation` est servi comme `/fr/formation`, `/en/training` comme
 * `/en/formation`. Une page n'a qu'une URL : `/fr/formation` et
 * `/en/formation` redirigent vers `/formation` et `/en/training`.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const segment = url.pathname.split('/')[1]

  if (segment === defaultLocale) {
    url.pathname = url.pathname.slice(defaultLocale.length + 1) || '/'
    return NextResponse.redirect(url, 308)
  }

  if (hasLocale(segment)) {
    const path = url.pathname.slice(segment.length + 1) || '/'
    const canonical = canonicalPath(segment, path)
    if (canonical !== path) {
      url.pathname = `/${segment}${canonical}`
      return NextResponse.rewrite(url)
    }
    const translated = localePath(segment, path)
    if (translated !== url.pathname) {
      url.pathname = translated
      return NextResponse.redirect(url, 308)
    }
    return
  }

  url.pathname = `/${defaultLocale}${url.pathname === '/' ? '' : url.pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Ni les fichiers (`/llms.txt`, `/media/…`), ni les ressources de Next.
  matcher: ['/((?!_next|.*\\..*).*)'],
}

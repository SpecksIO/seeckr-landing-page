import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FinalCta } from '@/components/final-cta'
import { eyebrow } from '@/components/styles'
import { WebinarCta, WebinarDate } from '@/components/webinar-block'
import { dictionaries } from '@/content'
import { getLocale } from '@/content/get-dictionary'
import { upcomingWebinars, webinarsIndex } from '@/content/webinar'
import { pageMetadata, paths } from '@/lib/site'

export const metadata: Metadata = {
  ...pageMetadata('fr', dictionaries.fr, {
    ...webinarsIndex,
    path: paths.webinars,
  }),
  // Pas de variante dans les autres langues : seule l'URL canonique reste.
  alternates: { canonical: paths.webinars },
}

export default async function WebinarsPage() {
  // Les webinars se tiennent en français seulement.
  if ((await getLocale()) !== 'fr') notFound()
  const sessions = upcomingWebinars()

  return (
    <>
      <section
        aria-labelledby="hero-title"
        className="px-4 py-[clamp(3rem,8vw,6rem)] sm:px-6"
      >
        <div className="mx-auto w-full max-w-4xl">
          <p className={`${eyebrow} text-violet-200`}>Webinars</p>
          <h1
            id="hero-title"
            className="mt-5 text-balance font-display font-semibold text-[clamp(2rem,5vw,3rem)] leading-tight tracking-tight"
          >
            {webinarsIndex.heading}
          </h1>
          {sessions.length === 0 ? (
            <p className="mt-12 text-violet-200">
              Aucun webinar programmé pour le moment.
            </p>
          ) : (
            <ul className="mt-12 border-white/15 border-b">
              {sessions.map((webinar) => (
                <li
                  key={webinar.startsAt}
                  className="flex flex-col gap-5 border-white/15 border-t py-8 md:flex-row md:items-center md:justify-between"
                >
                  <div className="max-w-2xl">
                    <h2 className="text-balance font-display font-semibold text-white text-xl">
                      {webinar.title}
                    </h2>
                    <WebinarDate startsAt={webinar.startsAt} />
                  </div>
                  <WebinarCta registrationUrl={webinar.registrationUrl} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <FinalCta />
    </>
  )
}

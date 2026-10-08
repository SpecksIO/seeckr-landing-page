import Link from 'next/link'
import { button, eyebrow } from '@/components/styles'
import { getLocale } from '@/content/get-dictionary'
import { showWebinar, upcomingWebinars } from '@/content/webinar'
import { paths } from '@/lib/site'

const dateFormat = new Intl.DateTimeFormat('fr-FR', {
  dateStyle: 'full',
  timeStyle: 'short',
  timeZone: 'Europe/Paris',
})

/** La date d'une session, en toutes lettres. */
export function WebinarDate({ startsAt }: { startsAt: string }) {
  return (
    <p className="mt-3 text-violet-200 first-letter:uppercase">
      <time dateTime={startsAt}>{dateFormat.format(new Date(startsAt))}</time>
    </p>
  )
}

/** Le bouton d'inscription Zoho, ou une mention tant qu'il n'existe pas. */
export function WebinarCta({ registrationUrl }: { registrationUrl: string }) {
  if (!registrationUrl) {
    return (
      <p className="shrink-0 text-violet-200 text-sm">
        Inscriptions bientôt ouvertes
      </p>
    )
  }
  return (
    <a
      href={registrationUrl}
      target="_blank"
      rel="noopener"
      className={`${button('primary')} shrink-0`}
    >
      Je m'inscris
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  )
}

/** Le prochain webinar. Rien du tout si aucune session n'est à venir. */
export async function WebinarBlock() {
  if (!showWebinar(await getLocale())) return null
  const [next] = upcomingWebinars()

  return (
    <section
      id="webinar"
      aria-labelledby="webinar-title"
      className="px-4 py-[clamp(3rem,8vw,5rem)] sm:px-6"
    >
      <div className="reveal mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className={`${eyebrow} text-violet-200`}>Prochain webinar</p>
          <h2
            id="webinar-title"
            className="mt-4 text-balance font-display font-semibold text-2xl sm:text-3xl"
          >
            {next.title}
          </h2>
          <WebinarDate startsAt={next.startsAt} />
          <Link
            href={paths.webinars}
            className="mt-4 inline-block text-sm text-violet-100 underline underline-offset-4 hover:text-white"
          >
            Voir tous les webinars
          </Link>
        </div>
        <WebinarCta registrationUrl={next.registrationUrl} />
      </div>
    </section>
  )
}

import { button, eyebrow } from '@/components/styles'
import { isUpcoming, webinar } from '@/content/webinar'

const dateFormat = new Intl.DateTimeFormat('fr-FR', {
  dateStyle: 'full',
  timeStyle: 'short',
  timeZone: 'Europe/Paris',
})

/** Le prochain webinar. Rien du tout si la session est passée. */
export function WebinarBlock() {
  if (!isUpcoming(webinar.startsAt)) return null

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
            {webinar.title}
          </h2>
          <p className="mt-3 text-violet-200 first-letter:uppercase">
            <time dateTime={webinar.startsAt}>
              {dateFormat.format(new Date(webinar.startsAt))}
            </time>
          </p>
        </div>
        <a
          href={webinar.registrationUrl}
          target="_blank"
          rel="noopener"
          className={`${button('primary')} shrink-0`}
        >
          Je m'inscris au webinar
          <span className="sr-only"> (nouvel onglet)</span>
        </a>
      </div>
    </section>
  )
}

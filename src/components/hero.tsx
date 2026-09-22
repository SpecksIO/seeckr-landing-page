import Link from 'next/link'
import { button } from '@/components/styles'
import { hero } from '@/content/home'
import { isUpcoming, webinar } from '@/content/webinar'
import { cta } from '@/lib/site'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="px-4 pt-[clamp(3rem,8vw,6rem)] pb-[clamp(4rem,9vw,7rem)] sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <h1
            id="hero-title"
            className="text-balance font-display text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.05] tracking-tight"
          >
            <span className="block font-light text-[0.62em] leading-tight">
              {hero.titleLead}
            </span>
            <span className="block font-bold">{hero.titleStrong}</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-7 max-w-xl text-lg text-violet-200 leading-relaxed"
          >
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={cta.href} className={button('primary')}>
              {cta.label}
            </Link>
            {isUpcoming(webinar.startsAt) && (
              <Link href="#webinar" className={button('secondary')}>
                {hero.webinarLabel}
              </Link>
            )}
          </div>
        </div>
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <video
            controls
            muted
            playsInline
            preload="none"
            poster="/media/demo-produit.jpg"
            aria-label={hero.videoLabel}
            className="aspect-square w-full rounded-3xl bg-paper"
          >
            <source src="/media/demo-produit.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

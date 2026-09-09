import { hero } from '@/lib/content'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto w-full max-w-3xl px-6 py-24 sm:py-32"
    >
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">
        {hero.eyebrow}
      </p>
      <h1
        id="hero-title"
        className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl"
      >
        {hero.title}
      </h1>
      <p id="hero-subtitle" className="mt-6 text-lg text-pretty text-muted">
        {hero.subtitle}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={hero.primaryCta.href}
          className="rounded-md bg-primary px-5 py-3 text-base font-semibold text-on-primary hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {hero.primaryCta.label}
        </a>
        <a
          href={hero.secondaryCta.href}
          className="rounded-md border border-line px-5 py-3 text-base font-semibold hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {hero.secondaryCta.label}
        </a>
      </div>
    </section>
  )
}

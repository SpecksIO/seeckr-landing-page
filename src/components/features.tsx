import { features } from '@/lib/content'

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="mx-auto w-full max-w-3xl scroll-mt-20 border-t border-line px-6 py-20"
    >
      <h2 id="features-title" className="text-2xl font-bold tracking-tight">
        What Seeckr does
      </h2>
      <ul className="mt-10 grid gap-8 sm:grid-cols-3">
        {features.map((feature) => (
          <li key={feature.id}>
            <h3 className="text-base font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

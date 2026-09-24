import { type AlgimoussFigure, algimouss } from '@/content/algimouss'

/** Les chiffres mesurés chez Algimouss, tels que le site les publie. */
export function AlgimoussFigures({ figures }: { figures: AlgimoussFigure[] }) {
  return (
    <figure>
      <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {figures.map((key) => {
          const figure = algimouss.figures[key]
          return (
            <div
              key={key}
              className="reveal flex flex-col-reverse justify-end border-ink/15 border-t pt-5"
            >
              <dt className="mt-3 max-w-md text-ink/85 leading-relaxed">
                {figure.label}
                {'detail' in figure && (
                  <span className="mt-1 block text-ink/70 text-sm">
                    {figure.detail}
                  </span>
                )}
              </dt>
              <dd className="font-display font-semibold text-[clamp(2.25rem,5vw,3.5rem)] text-violet leading-none tracking-tight">
                {figure.value}
              </dd>
            </div>
          )
        })}
      </dl>
    </figure>
  )
}

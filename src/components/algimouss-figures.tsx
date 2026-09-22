import { type AlgimoussFigure, algimouss } from '@/content/algimouss'

/**
 * Chiffres Algimouss, toujours suivis du client et de la période. Seule une
 * page qui rappelle elle-même la source, une fois pour toutes ses séries,
 * passe `showSource={false}`.
 */
export function AlgimoussFigures({
  figures,
  showSource = true,
}: {
  figures: AlgimoussFigure[]
  showSource?: boolean
}) {
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
      {showSource && (
        <figcaption className="mt-10 text-ink/70 text-sm">
          {algimouss.source}
        </figcaption>
      )}
    </figure>
  )
}

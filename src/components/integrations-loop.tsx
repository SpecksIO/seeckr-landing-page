import { LoopVideo } from '@/components/loop-video'
import type { Placement } from '@/content/types'

/** La boucle des maquettes du lab, doublée par la liste des emplacements. */
export function IntegrationsLoop({
  placements,
  video,
  toggleLabels,
}: {
  placements: Placement[]
  video: { src: string; poster: string; label: string }
  toggleLabels: { pause: string; resume: string }
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
      <div className="reveal">
        <LoopVideo
          {...video}
          toggleLabels={toggleLabels}
          className="aspect-1160/928 w-full rounded-2xl"
        />
      </div>

      <ol className="border-white/15 border-b">
        {placements.map((placement) => (
          <li
            key={placement.id}
            className="reveal flex gap-4 border-white/15 border-t px-3 py-4"
          >
            <span aria-hidden="true" className="text-violet-300">
              ♥
            </span>
            <div>
              <h3 className="font-display font-semibold">{placement.name}</h3>
              <p className="mt-1.5 text-sm text-violet-200 leading-relaxed">
                {placement.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

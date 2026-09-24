'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimationToggle } from '@/components/animation-toggle'
import type { Placement } from '@/content/types'
import { useReducedMotion } from '@/lib/reduced-motion'

/**
 * La boucle des maquettes du lab, muette et sans commande, doublée par la
 * liste des emplacements. Sous mouvement réduit, elle reste sur son affiche
 * et le bouton propose de la lancer.
 */
export function IntegrationsLoop({
  placements,
  video,
}: {
  placements: Placement[]
  video: { src: string; poster: string; label: string }
}) {
  const reducedMotion = useReducedMotion()
  const player = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)

  // La lecture démarre seule : on aligne le bouton sur l'état réel du lecteur,
  // qui ne joue pas encore tant que la section n'est pas à l'écran.
  useEffect(() => {
    const current = player.current
    if (!current) return
    if (reducedMotion) current.pause()
    setPaused(current.paused)
  }, [reducedMotion])

  const toggle = () => {
    const current = player.current
    if (!current) return
    if (current.paused) current.play()
    else current.pause()
  }

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
      <figure className="reveal">
        <video
          ref={player}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
          poster={video.poster}
          aria-label={video.label}
          className="aspect-1160/928 w-full rounded-2xl"
        >
          <source src={video.src} type="video/mp4" />
        </video>
        <AnimationToggle
          paused={paused}
          onToggle={toggle}
          className="text-violet-200 focus-visible:outline-violet-300"
        />
      </figure>

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

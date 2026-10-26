'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimationToggle } from '@/components/animation-toggle'
import { useReducedMotion } from '@/lib/reduced-motion'

/**
 * Une maquette animée, muette et en boucle, avec son bouton pause. Sous
 * mouvement réduit, elle reste sur son affiche et le bouton propose de la lancer.
 */
export function LoopVideo({
  src,
  poster,
  label,
  toggleLabels,
  className,
}: {
  src: string
  poster: string
  label: string
  toggleLabels: { pause: string; resume: string }
  /** Classes du lecteur, dont son ratio. */
  className: string
}) {
  const reducedMotion = useReducedMotion()
  const player = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)

  // La lecture démarre seule : on aligne le bouton sur l'état réel du lecteur,
  // qui ne joue pas encore tant que la vidéo n'est pas à l'écran.
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
    <figure>
      <video
        ref={player}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        poster={poster}
        aria-label={label}
        className={className}
      >
        <source src={src} type="video/mp4" />
      </video>
      <AnimationToggle
        paused={paused}
        onToggle={toggle}
        labels={toggleLabels}
        className="text-violet-200 focus-visible:outline-violet-300"
      />
    </figure>
  )
}

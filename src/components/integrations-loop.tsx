'use client'

import { useEffect, useState } from 'react'
import { AnimationToggle } from '@/components/animation-toggle'
import { HeartMark } from '@/components/logo'
import type { Placement } from '@/content/types'
import { useReducedMotion } from '@/lib/reduced-motion'

const PLACEMENT_MS = 3400

/** Où l'assistant se pose dans la page factice, et la place qu'il y prend. */
const zones: Record<Placement['id'], { box: string; card: string }> = {
  bandeau: { box: 'inset-x-0 top-0', card: 'rounded-t-none' },
  fenetre: {
    box: 'inset-0 grid place-items-center bg-night/60 p-4',
    card: 'w-3/5 flex-col items-start gap-3',
  },
  bulle: { box: 'right-3 bottom-3 w-1/2', card: 'flex-col items-start gap-2' },
  encart: { box: 'inset-x-5 top-[46%]', card: '' },
}

/** L'assistant tel qu'il apparaît, identique d'un emplacement à l'autre. */
function Assistant({
  question,
  start,
  className,
}: {
  question: string
  start: string
  className: string
}) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-2 rounded-xl bg-violet px-3 py-2.5 text-white shadow-[0_18px_40px_-20px_#07051c] ${className}`}
    >
      <p className="flex items-center gap-2 text-[11px] leading-snug">
        <HeartMark className="size-4 shrink-0 text-violet-100" />
        {question}
      </p>
      <span className="rounded-full bg-white px-2.5 py-1 font-medium text-[10px] text-violet">
        {start}
      </span>
    </div>
  )
}

/** La fiche produit du marchand, en aplats : l'œil doit aller à l'assistant. */
function MockPage() {
  return (
    <div className="h-full p-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square rounded-xl bg-paper" />
        <div className="space-y-2.5 pt-1">
          <div className="h-3 w-4/5 rounded-full bg-paper" />
          <div className="h-2 w-full rounded-full bg-paper" />
          <div className="h-2 w-5/6 rounded-full bg-paper" />
          <div className="mt-6 h-6 w-1/2 rounded-full bg-paper" />
        </div>
      </div>
      <div className="mt-6 space-y-2.5">
        <div className="h-2 w-full rounded-full bg-paper" />
        <div className="h-2 w-11/12 rounded-full bg-paper" />
        <div className="h-2 w-3/4 rounded-full bg-paper" />
      </div>
    </div>
  )
}

/**
 * Le même assistant qui se pose tour à tour aux quatre emplacements, dans une
 * fenêtre de navigateur factice. Sous mouvement réduit, seul le premier
 * emplacement s'affiche, sans animation.
 */
export function IntegrationsLoop({
  placements,
  question,
  start,
}: {
  placements: Placement[]
  question: string
  start: string
}) {
  const reducedMotion = useReducedMotion()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reducedMotion || paused) return
    const timer = setTimeout(
      () => setCurrent((current + 1) % placements.length),
      PLACEMENT_MS
    )
    return () => clearTimeout(timer)
  }, [current, paused, placements.length, reducedMotion])

  const shown = reducedMotion ? 0 : current

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      <figure className="reveal">
        <div
          aria-hidden="true"
          className="overflow-hidden rounded-2xl bg-white shadow-[0_40px_80px_-40px_#07051c]"
        >
          <div className="flex items-center gap-1.5 border-line/60 border-b bg-paper px-3 py-2.5">
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-line" />
            <span className="ml-2 truncate rounded-full bg-white px-2.5 py-0.5 text-[10px] text-text-soft">
              votre-boutique.fr
            </span>
          </div>
          <div className="relative aspect-4/3">
            <MockPage />
            {placements.map((placement, index) => (
              <div
                key={placement.id}
                className={`absolute inset-0 transition duration-500 ease-out ${index === shown ? '' : 'invisible translate-y-2 opacity-0'}`}
              >
                <div className={`absolute ${zones[placement.id].box}`}>
                  <Assistant
                    question={question}
                    start={start}
                    className={zones[placement.id].card}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {!reducedMotion && (
          <AnimationToggle
            paused={paused}
            onToggle={() => setPaused(!paused)}
            className="text-violet-200 focus-visible:outline-violet-300"
          />
        )}
      </figure>

      <ol className="border-white/15 border-b">
        {placements.map((placement, index) => (
          <li
            key={placement.id}
            className={`reveal flex gap-4 border-white/15 border-t px-3 py-5 transition-colors duration-500 ${index === shown ? 'bg-white/5' : ''}`}
          >
            <span
              aria-hidden="true"
              className={
                index === shown
                  ? 'text-violet-300'
                  : 'text-white/30 transition-colors duration-500'
              }
            >
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

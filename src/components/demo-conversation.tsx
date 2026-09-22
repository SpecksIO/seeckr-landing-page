'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import { CardFrame, StepView, TopThree } from '@/components/conversation-card'
import type { Conversation } from '@/content/types'

const QUESTION_MS = 1900
const PICK_MS = 1100
const TOP_MS = 5500

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

function subscribeToReducedMotion(onChange: () => void) {
  const query = matchMedia(REDUCED_MOTION)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

/**
 * La conversation du hero, qui se joue seule en boucle : une question, un
 * choix, la question suivante, puis le top 3.
 *
 * Chaque question occupe deux images (posée, puis répondue), le top 3 la
 * dernière. Sous mouvement réduit, seul le top 3 s'affiche, sans animation.
 */
export function DemoConversation({
  conversation,
}: {
  conversation: Conversation
}) {
  const { steps, top } = conversation
  const lastFrame = steps.length * 2
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    () => matchMedia(REDUCED_MOTION).matches,
    () => false
  )
  const [frame, setFrame] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reducedMotion || paused) return
    const delay =
      frame === lastFrame ? TOP_MS : frame % 2 === 0 ? QUESTION_MS : PICK_MS
    const timer = setTimeout(
      () => setFrame(frame === lastFrame ? 0 : frame + 1),
      delay
    )
    return () => clearTimeout(timer)
  }, [frame, lastFrame, paused, reducedMotion])

  const shown = reducedMotion ? lastFrame : frame
  const current = Math.floor(shown / 2)
  const done = shown === lastFrame
  const progress = done ? 1 : (current + 0.5) / (steps.length + 1)

  // Toutes les étapes sont empilées dans la même case de grille : la carte
  // prend la hauteur de la plus haute et ne bouge jamais pendant la boucle.
  const layer = (visible: boolean) =>
    `col-start-1 row-start-1 transition duration-500 ease-out ${visible ? '' : 'invisible translate-y-3 opacity-0'}`

  return (
    <figure>
      <figcaption className="sr-only">
        Exemple de conversation : l'assistant pose au visiteur des questions sur
        mesure sur sa routine du matin, puis conclut sur un top 3 classé, chaque
        produit avec son score de compatibilité.
      </figcaption>
      <div aria-hidden="true">
        <CardFrame
          progress={progress}
          stage={done ? "C'est prêt" : steps[current].stage}
        >
          <div className="grid">
            {steps.map((step, index) => (
              <div
                key={step.question}
                className={layer(!done && index === current)}
              >
                <StepView
                  step={step}
                  showPick={index === current && shown % 2 === 1}
                />
              </div>
            ))}
            <div className={layer(done)}>
              <TopThree top={top} />
            </div>
          </div>
        </CardFrame>
      </div>
      {!reducedMotion && (
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          className="mt-3 min-h-11 text-sm text-violet-200 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-violet-300"
        >
          {paused ? "Reprendre l'animation" : "Mettre l'animation en pause"}
        </button>
      )}
    </figure>
  )
}

import type { ReactNode } from 'react'
import { HeartMark } from '@/components/logo'
import type {
  Conversation,
  ConversationStep,
  Recommendation,
} from '@/content/types'

/**
 * La fenêtre de l'assistant telle que le visiteur la voit, d'après la vidéo
 * de démonstration : carte blanche, barre de progression, « Votre marque ».
 */
export function CardFrame({
  progress,
  stage,
  children,
}: {
  /** Avancement, de 0 à 1. */
  progress: number
  stage: string
  children: ReactNode
}) {
  return (
    <div className="rounded-2xl bg-white p-5 text-text shadow-[0_40px_80px_-40px_#07051c] sm:p-6">
      <div className="flex items-center gap-3">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-paper">
          <div
            className="h-full origin-left rounded-full bg-text transition-transform duration-700 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
        <HeartMark className="size-4 text-violet-300" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 text-xs">
        <span className="flex items-center gap-1.5 text-text-soft">
          <HeartMark className="size-4 text-text" />
          Votre marque
        </span>
        <span className="font-medium">{stage}</span>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  )
}

/** Une question et ses choix en pastilles. */
export function StepView({
  step,
  showPick,
}: {
  step: ConversationStep
  showPick: boolean
}) {
  return (
    <div>
      {step.intro && (
        <p className="mb-1.5 text-[13px] text-text-soft leading-snug">
          {step.intro}
        </p>
      )}
      <p className="font-medium text-[15px] leading-snug">{step.question}</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-[13px]">
        {step.choices.map((choice, index) => {
          const picked = showPick && index === step.picked
          return (
            <li
              key={choice}
              className={`rounded-full px-3 py-1.5 transition-colors duration-300 ${picked ? 'bg-violet text-white' : 'bg-paper'}`}
            >
              {choice}
              {picked && <span className="sr-only"> (réponse choisie)</span>}
            </li>
          )
        })}
        <li className="rounded-full border border-line px-3 py-1.5">+ Autre</li>
      </ul>
    </div>
  )
}

const score = (value: number) => `${value} % compatible`

/** Le top 3 classé : le premier avec son pourquoi, les autres en dessous. */
export function TopThree({ top }: { top: Recommendation[] }) {
  const [first, ...others] = top
  return (
    <div>
      <p className="font-semibold text-[11px] text-violet uppercase tracking-[0.2em]">
        Votre top 3
      </p>
      <div className="mt-3 rounded-xl border border-violet-100 bg-mist/50 p-4">
        <p className="font-semibold text-[11px] text-violet uppercase tracking-[0.15em]">
          Recommandé
        </p>
        <p className="mt-1 flex flex-wrap items-baseline justify-between gap-x-3">
          <span className="font-semibold">1 · {first.name}</span>
          <span className="text-[13px] text-violet">{score(first.score)}</span>
        </p>
        {first.why && (
          <p className="mt-2 text-[13px] text-text-soft leading-relaxed">
            {first.why}
          </p>
        )}
      </div>
      {others.length > 0 && (
        <div className="mt-3 rounded-xl bg-paper p-4">
          <p className="text-[11px] text-text-soft uppercase tracking-[0.15em]">
            Autres choix
          </p>
          <ul className="mt-2 space-y-1.5 text-[13px]">
            {others.map((item, index) => (
              <li
                key={item.name}
                className="flex flex-wrap justify-between gap-x-3"
              >
                <span>
                  {index + 2} · {item.name}
                </span>
                <span className="text-violet">{score(item.score)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

/** La conversation entière, figée : chaque question, la réponse, le top 3. */
export function ConversationTranscript({
  conversation,
}: {
  conversation: Conversation
}) {
  return (
    <CardFrame progress={1} stage="C'est prêt">
      <ol className="space-y-7">
        {conversation.steps.map((step) => (
          <li key={step.question}>
            <StepView step={step} showPick />
          </li>
        ))}
      </ol>
      <div className="mt-7 border-paper border-t-2 pt-6">
        <TopThree top={conversation.top} />
      </div>
    </CardFrame>
  )
}

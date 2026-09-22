'use client'

/** Le bouton qui suspend une animation en boucle, exigé par le critère 2.2.2. */
export function AnimationToggle({
  paused,
  onToggle,
  className = '',
}: {
  paused: boolean
  onToggle: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`mt-3 min-h-11 text-sm underline-offset-4 hover:underline focus-visible:outline-2 ${className}`}
    >
      {paused ? "Reprendre l'animation" : "Mettre l'animation en pause"}
    </button>
  )
}

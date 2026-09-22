/** Le cœur dans son rond (brand/logo-coeur.svg), à la couleur du texte. */
export function HeartMark({ className }: { className?: string }) {
  return (
    <svg viewBox="16 31 48 48" aria-hidden="true" className={className}>
      <circle
        cx="40"
        cy="55"
        r="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M29,53 Q29,44 40,51 Q51,44 51,53 Q51,62 40,65 Q29,62 29,53Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Logo sur fond sombre : le cœur, puis le wordmark en Pacifico. */
export function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <HeartMark className="size-8 text-violet-200" />
      <span className="pb-1 font-script text-2xl text-mist leading-none">
        seeckr
      </span>
    </span>
  )
}

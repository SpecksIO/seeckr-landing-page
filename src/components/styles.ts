const variants = {
  /** Action principale : violet plein. */
  primary:
    'bg-violet text-white hover:-translate-y-px hover:shadow-[0_12px_30px_-12px_#7f77dd]',
  /** Action secondaire : contour, hérite de la couleur du texte. */
  secondary: 'border border-current/30 hover:border-current/70',
  /** Sur fond violet : blanc plein. */
  inverted: 'bg-white text-ink hover:-translate-y-px',
}

const sizes = {
  md: 'min-h-12 px-6 py-3',
  sm: 'min-h-11 px-4 py-2 text-sm',
}

export function button(
  variant: keyof typeof variants,
  size: keyof typeof sizes = 'md'
) {
  return `inline-flex items-center justify-center rounded-full text-center font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 active:scale-[0.98] ${sizes[size]} ${variants[variant]}`
}

/** Petite étiquette au-dessus d'un titre, comme dans la charte. Sans couleur. */
export const eyebrow = 'font-medium text-xs uppercase tracking-[0.25em]'

export const sectionTitle =
  'font-display font-semibold text-[clamp(1.875rem,4.5vw,3rem)] leading-[1.1] tracking-tight text-balance'

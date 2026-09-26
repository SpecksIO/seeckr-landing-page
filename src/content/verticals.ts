/**
 * Les verticales, dans l'ordre du menu. Leurs slugs sont les mêmes dans
 * toutes les langues : chaque dictionnaire les traduit, sans les renommer.
 */
export const verticalSlugs = [
  'cosmetique-nutrition',
  'produits-techniques',
  'formation',
] as const

export type VerticalSlug = (typeof verticalSlugs)[number]

/** La verticale d'Algimouss : elle affiche leur cas complet. */
export const algimoussVertical: VerticalSlug = 'produits-techniques'

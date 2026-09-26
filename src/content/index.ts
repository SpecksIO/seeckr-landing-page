import { en } from '@/content/en'
import { es } from '@/content/es'
import { fr } from '@/content/fr'
import { it } from '@/content/it'
import type { VerticalSlug } from '@/content/verticals'
import type { Locale } from '@/lib/i18n'
import type { Vertical } from './types'

/** La forme de chaque dictionnaire, calquée sur le français. */
export type Dictionary = Omit<typeof fr, 'verticals'> & {
  verticals: Record<VerticalSlug, Vertical>
}

export const dictionaries: Record<Locale, Dictionary> = { fr, en, es, it }

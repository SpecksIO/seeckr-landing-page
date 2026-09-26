import type { Dictionary } from '@/content'
import { algimouss, algimoussCase } from './algimouss'
import { doctrine } from './doctrine'
import {
  benefits,
  faq,
  finalCta,
  hero,
  howItWorks,
  integrations,
  verticalsIntro,
} from './home'
import { lead } from './lead'
import { legalNotice, privacy } from './legal'
import { site, ui } from './ui'
import { cosmetiqueNutrition } from './verticals/cosmetique-nutrition'
import { formation } from './verticals/formation'
import { produitsTechniques } from './verticals/produits-techniques'

/** Le dictionnaire espagnol (Espagne), calqué sur le français. */
export const es: Dictionary = {
  site,
  ui,
  hero,
  howItWorks,
  integrations,
  benefits,
  verticalsIntro,
  faq,
  finalCta,
  doctrine,
  verticals: {
    'cosmetique-nutrition': cosmetiqueNutrition,
    'produits-techniques': produitsTechniques,
    formation,
  },
  algimouss,
  algimoussCase,
  lead,
  legalNotice,
  privacy,
}

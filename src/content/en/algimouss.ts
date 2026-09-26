/**
 * Le cas Algimouss, seul client que le site peut nommer.
 *
 * Leur site ne vend pas en ligne : ces chiffres mesurent le conseil, jamais
 * des ventes. Aucun chiffre ne s'ajoute à cette liste sans mesure réelle.
 *
 * Mêmes chiffres que `@/content/fr/algimouss`, seule leur écriture change.
 */
export const algimouss = {
  name: 'Algimouss',
  about: 'Algimouss makes treatments for roofs, facades, patios and driveways.',
  context:
    'Their site doesn’t sell online: their customers buy from stockists. So these figures measure advice, not sales.',
  figures: {
    trend: {
      value: 'from 39% to 48%',
      label:
        'share of visitors taken through to a recommendation, from the first week to the third',
    },
    firstAnswer: {
      value: '9 in 10',
      label:
        'visitors who answer the first question go on to the recommendation',
      detail:
        'It ranged from 85% to 92% across measurements: the questions hit the mark.',
    },
    productPage: {
      value: '180 of 297',
      label:
        'conversations started from a product page ended with a recommendation',
      detail: 'or 61%',
    },
    exitIntent: {
      value: '229',
      label:
        'visitors who were leaving the page clicked “Start” in the exit pop-up',
    },
    otherProduct: {
      value: '55%',
      label:
        'of conversations started from a product page recommended a different product from the one on that page',
      detail:
        'across 147 conversations. Without advice, one visitor in two would have left with a product less suited to their situation.',
    },
  },
}

export type AlgimoussFigure = keyof typeof algimouss.figures

/**
 * La page `/cas-clients/algimouss`. Elle ne fait que mettre en scène les
 * chiffres ci-dessus : aucune affirmation qui ne s'y lise déjà.
 */
export const algimoussCase = {
  meta: {
    title: 'Algimouss case study: 19 days of advice, measured',
    description: `${algimouss.about} ${algimouss.context}`,
  },
  eyebrow: 'Case study',
  title: 'Algimouss: 19 days of advice, measured.',
  /** Lien vers leur verticale, `@/content/verticals`. */
  verticalLink: 'See Seeckr for technical products',
  measuresEyebrow: 'The measurements',
  setup:
    'The measurements cover two placements: a banner on product pages, and a pop-up when the visitor leaves the page. That’s all that was added to their site.',
  figuresTitle: 'What the advice delivered, figure by figure.',
  /** Le chiffre mis en avant dès le haut de la page. */
  highlight: 'otherProduct' as AlgimoussFigure,
  /** Les chiffres que les autres pages montrent avant de renvoyer ici. */
  teaserFigures: ['firstAnswer', 'otherProduct'] satisfies AlgimoussFigure[],
  linkLabel: 'Read the full Algimouss case study',
  groups: [
    {
      title: 'What visitors do with it',
      figures: ['trend', 'firstAnswer'],
    },
    {
      title: 'Where the conversation starts',
      figures: ['exitIntent', 'productPage'],
    },
    {
      title: 'What the advice changes',
      figures: ['otherProduct'],
    },
  ] satisfies { title: string; figures: AlgimoussFigure[] }[],
}

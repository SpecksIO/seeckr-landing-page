/**
 * Le cas Algimouss, seul client que le site peut nommer.
 *
 * Leur site ne vend pas en ligne : ces chiffres mesurent le conseil, jamais
 * des ventes. Aucun chiffre ne s'ajoute à cette liste sans mesure réelle.
 */
export const algimouss = {
  name: 'Algimouss',
  about:
    'Algimouss fabrique des traitements pour toitures, façades, terrasses et allées.',
  context:
    'Leur site ne vend pas en ligne : leurs clients achètent chez des distributeurs. Ces chiffres mesurent donc le conseil, pas des ventes.',
  source:
    'Source : Algimouss, mesures du 2 au 20 septembre 2026, soit 19 jours depuis la mise en ligne.',
  figures: {
    opened: { value: '537', label: 'conversations ouvertes' },
    advised: {
      value: '238',
      label: "conversations menées jusqu'au conseil",
      detail: 'soit 44 % des conversations ouvertes',
    },
    trend: {
      value: 'de 39 % à 48 %',
      label:
        "part menée jusqu'au conseil, de la première à la troisième semaine",
    },
    firstAnswer: {
      value: '85 à 92 %',
      label:
        "des visiteurs qui répondent à la première question vont jusqu'au conseil",
    },
    productPage: {
      value: '180 sur 297',
      label:
        'conversations ouvertes depuis une fiche produit et conclues par un conseil',
      detail: 'soit 61 %',
    },
    exitIntent: {
      value: '229',
      label:
        'visiteurs qui quittaient la page et ont cliqué « Démarrer » dans la fenêtre de sortie',
    },
    topScore: {
      value: '95 / 100',
      label: 'compatibilité médiane du produit placé en tête',
      detail: 'sur 202 sélections',
    },
    otherProduct: {
      value: '55 %',
      label:
        "des conversations parties d'une fiche produit placent en tête un autre produit que celui de la fiche",
      detail:
        'sur 147 conversations. Sans conseil, un visiteur sur deux serait reparti avec un produit moins adapté à son cas.',
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
    title: 'Cas client Algimouss, 19 jours de conseil mesurés',
    description: `${algimouss.about} ${algimouss.context}`,
  },
  eyebrow: 'Cas client',
  title: 'Algimouss, 19 jours de conseil mesurés.',
  vertical: { href: '/produits-techniques', label: 'Produits techniques' },
  setup:
    "Les mesures distinguent deux emplacements : un bandeau sur les fiches produit, et une fenêtre au moment où le visiteur quitte la page. C'est tout ce qui a été posé sur leur site.",
  figuresTitle: 'Ce que le conseil a produit, chiffre par chiffre.',
  /** Le chiffre mis en avant dès le haut de la page. */
  highlight: 'otherProduct' as AlgimoussFigure,
  /** Les quatre chiffres que les autres pages montrent avant de renvoyer ici. */
  teaserFigures: [
    'opened',
    'advised',
    'topScore',
    'otherProduct',
  ] satisfies AlgimoussFigure[],
  link: {
    href: '/cas-clients/algimouss',
    label: 'Lire le cas Algimouss en entier',
  },
  groups: [
    {
      title: 'Ce que les visiteurs en font',
      figures: ['opened', 'advised', 'trend', 'firstAnswer'],
    },
    {
      title: 'Où la conversation commence',
      figures: ['exitIntent', 'productPage'],
    },
    {
      title: 'Ce que le conseil change',
      figures: ['topScore', 'otherProduct'],
    },
  ] satisfies { title: string; figures: AlgimoussFigure[] }[],
}

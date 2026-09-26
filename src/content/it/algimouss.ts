/**
 * Le cas Algimouss, seul client que le site peut nommer.
 *
 * Leur site ne vend pas en ligne : ces chiffres mesurent le conseil, jamais
 * des ventes. Aucun chiffre ne s'ajoute à cette liste sans mesure réelle.
 *
 * Tous proviennent des mesures Algimouss du 2 au 20 septembre 2026, soit
 * 19 jours depuis la mise en ligne. Le site ne publie plus cette période :
 * elle reste ici pour que personne n'oublie d'où sortent les chiffres.
 */
export const algimouss = {
  name: 'Algimouss',
  about:
    'Algimouss produce trattamenti per tetti, facciate, terrazze e vialetti.',
  context:
    'Il suo sito non vende online: i suoi clienti acquistano presso i rivenditori. Questi numeri misurano quindi le raccomandazioni, non le vendite.',
  figures: {
    trend: {
      value: 'dal 39% al 48%',
      label:
        'dei visitatori è arrivato fino alla raccomandazione: la quota è cresciuta dalla prima alla terza settimana',
    },
    firstAnswer: {
      value: '9 su 10',
      label:
        'visitatori che rispondono alla prima domanda arrivano fino alla raccomandazione',
      detail:
        "tra l'85 e il 92% a seconda delle misurazioni: le domande sono quelle giuste",
    },
    productPage: {
      value: '180 su 297',
      label:
        'conversazioni aperte da una scheda prodotto e concluse con una raccomandazione',
      detail: 'cioè il 61%',
    },
    exitIntent: {
      value: '229',
      label:
        'visitatori che stavano lasciando la pagina e hanno cliccato «Inizia» nel popup di uscita',
    },
    otherProduct: {
      value: '55%',
      label:
        'delle conversazioni partite da una scheda prodotto mettono al primo posto un prodotto diverso da quello della scheda',
      detail:
        'su 147 conversazioni. Senza raccomandazione, un visitatore su due se ne sarebbe andato con un prodotto meno adatto al suo caso.',
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
    title: 'Caso di successo Algimouss: 19 giorni di raccomandazioni in numeri',
    description: `${algimouss.about} ${algimouss.context}`,
  },
  eyebrow: 'Caso di successo',
  title: 'Algimouss, 19 giorni di raccomandazioni in numeri.',
  /** Lien vers leur verticale, `@/content/verticals`. */
  verticalLink: 'Scopri Seeckr per i prodotti tecnici',
  measuresEyebrow: 'Le misurazioni',
  setup:
    'Le misurazioni distinguono due posizioni: un banner sulle schede prodotto e un popup nel momento in cui il visitatore lascia la pagina. È tutto ciò che è stato installato sul suo sito.',
  figuresTitle: 'Cosa hanno prodotto le raccomandazioni, numero per numero.',
  /** Le chiffre mis en avant dès le haut de la page. */
  highlight: 'otherProduct' as AlgimoussFigure,
  /** Les chiffres que les autres pages montrent avant de renvoyer ici. */
  teaserFigures: ['firstAnswer', 'otherProduct'] satisfies AlgimoussFigure[],
  linkLabel: 'Leggi il caso Algimouss completo',
  groups: [
    {
      title: 'Cosa ne fanno i visitatori',
      figures: ['trend', 'firstAnswer'],
    },
    {
      title: 'Dove inizia la conversazione',
      figures: ['exitIntent', 'productPage'],
    },
    {
      title: 'Cosa cambia la raccomandazione',
      figures: ['otherProduct'],
    },
  ] satisfies { title: string; figures: AlgimoussFigure[] }[],
}

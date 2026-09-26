/** Le site lui-même : description, appel principal, pages du plan. */
export const site = {
  /** Langue au format Open Graph. */
  ogLocale: 'it_IT',
  description:
    'I tuoi clienti sanno di cosa hanno bisogno, non come si chiama nel tuo catalogo. Seeckr li ascolta, fa le domande che da soli non si sarebbero mai posti e li porta al prodotto giusto per loro.',
  cta: {
    label: 'Prova Seeckr gratis con il tuo catalogo',
    shortLabel: 'Provalo gratis con il tuo catalogo',
  },
  /** Titres et résumés du plan du site et de llms.txt. */
  pages: {
    home: {
      title: 'Home',
      summary: 'Cosa fa Seeckr, come si installa e cosa cambia.',
    },
    lead: {
      title: 'Prova Seeckr con il tuo catalogo',
      summary: 'Richiedi il tuo assistente Seeckr, costruito sul tuo catalogo.',
    },
    legalNotice: {
      title: 'Note legali',
      summary: 'Editore e hosting del sito.',
    },
    privacy: {
      title: 'Privacy',
      summary: 'Trattamento dei dati inviati tramite il modulo.',
    },
  },
}

/** Les libellés des composants, hors contenu éditorial. */
export const ui = {
  skipLink: 'Vai al contenuto',
  nav: {
    main: 'Principale',
    verticals: 'Settori',
    byTrade: 'Per settore',
    pricing: 'Prezzi',
    home: 'Seeckr, home',
    login: 'Accedi',
    menu: 'Menu',
    language: 'Lingua',
  },
  animation: {
    pause: "Metti in pausa l'animazione",
    resume: "Riprendi l'animazione",
  },
  /** Une parole de visiteur, entre guillemets. */
  quote: (text: string) => `«${text}»`,
  vertical: {
    translationEyebrow: 'Due lingue diverse',
    translationTitle:
      'I tuoi clienti parlano così. Le tue schede prodotto rispondono così.',
    visitor: 'Il tuo cliente',
    /** Préfixe lu par les lecteurs d'écran avant la parole du visiteur. */
    visitorSays: 'Il tuo cliente dice: ',
    sheet: 'La tua scheda prodotto',
    exampleEyebrow: 'Una conversazione di esempio',
    benefitsEyebrow: 'Cosa ci guadagni',
  },
  conversation: {
    brand: 'Il tuo negozio',
    ready: 'Ecco i risultati',
    picked: '(risposta scelta)',
    other: '+ Altro',
    score: (value: number) => `compatibile al ${value}%`,
    top3: 'La tua top 3',
    recommended: 'Consigliato',
    others: 'Altre scelte',
  },
}

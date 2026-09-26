/** Le site lui-même : description, appel principal, pages du plan. */
export const site = {
  /** Langue au format Open Graph. */
  ogLocale: 'en_GB',
  description:
    'Your visitors know their own lives, not your catalogue. Seeckr listens, asks the questions they would never have thought to ask themselves, and leads them to the product that genuinely suits them.',
  cta: {
    label: 'Try Seeckr free with my products',
    shortLabel: 'Try it free with my products',
  },
  /** Titres et résumés du plan du site et de llms.txt. */
  pages: {
    home: {
      title: 'Home',
      summary: 'What Seeckr does, how it installs, and what it changes.',
    },
    lead: {
      title: 'Try Seeckr with my products',
      summary: 'Request a Seeckr assistant built on your own catalogue.',
    },
    legalNotice: {
      title: 'Legal notice',
      summary: 'Site publisher and host.',
    },
    privacy: {
      title: 'Privacy',
      summary: 'How data sent through the form is processed.',
    },
  },
}

/** Les libellés des composants, hors contenu éditorial. */
export const ui = {
  skipLink: 'Skip to content',
  nav: {
    main: 'Main',
    verticals: 'Industries',
    byTrade: 'By industry',
    pricing: 'Pricing',
    home: 'Seeckr, home',
    login: 'Log in',
    menu: 'Menu',
    language: 'Language',
  },
  animation: {
    pause: 'Pause the animation',
    resume: 'Resume the animation',
  },
  /** Une parole de visiteur, entre guillemets. */
  quote: (text: string) => `“${text}”`,
  vertical: {
    translationEyebrow: 'Lost in translation',
    translationTitle:
      'This is how they talk to you. This is how your product page replies.',
    visitor: 'Your visitor',
    /** Préfixe lu par les lecteurs d'écran avant la parole du visiteur. */
    visitorSays: 'Your visitor: ',
    sheet: 'Your product page',
    exampleEyebrow: 'An example conversation',
    benefitsEyebrow: 'What you gain',
  },
  conversation: {
    brand: 'Your brand',
    ready: 'It’s ready',
    picked: '(selected answer)',
    other: '+ Other',
    score: (value: number) => `${value}% match`,
    top3: 'Your top 3',
    recommended: 'Recommended',
    others: 'Other options',
  },
}

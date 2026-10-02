/** Le site lui-même : description, appel principal, pages du plan. */
export const site = {
  /** Langue au format Open Graph. */
  ogLocale: 'fr_FR',
  description:
    "Vos visiteurs connaissent leur vie, pas votre catalogue. Seeckr les écoute, leur pose les questions qu'ils n'auraient jamais formulées seuls, et les conduit au produit qui leur va vraiment.",
  cta: {
    label: 'Tester gratuitement Seeckr sur mon catalogue',
    shortLabel: 'Tester gratuitement sur mon catalogue',
  },
  /** Titres et résumés du plan du site et de llms.txt. */
  pages: {
    home: {
      title: 'Accueil',
      summary: "Ce que fait Seeckr, comment il s'installe, et ce qu'il change.",
    },
    lead: {
      title: 'Tester Seeckr sur mon catalogue',
      summary:
        'Demander son assistant Seeckr, construit sur son propre catalogue.',
    },
    legalNotice: {
      title: 'Mentions légales',
      summary: 'Éditeur et hébergeur du site.',
    },
    privacy: {
      title: 'Confidentialité',
      summary: 'Traitement des données envoyées par le formulaire.',
    },
  },
}

/** Les libellés des composants, hors contenu éditorial. */
export const ui = {
  skipLink: 'Aller au contenu',
  nav: {
    main: 'Principal',
    verticals: 'Verticales',
    byTrade: 'Par métier',
    pricing: 'Tarifs',
    home: 'Seeckr, accueil',
    login: 'Se connecter',
    menu: 'Menu',
    language: 'Langue',
  },
  consent: {
    label: 'Cookies',
    text: 'Avec votre accord, nous utilisons le pixel Meta pour mesurer nos publicités et vous en montrer sur Facebook et Instagram.',
    more: 'En savoir plus',
    accept: 'Accepter',
    refuse: 'Refuser',
    settings: 'Gérer les cookies',
  },
  animation: {
    pause: "Mettre l'animation en pause",
    resume: "Reprendre l'animation",
  },
  /** Une parole de visiteur, entre guillemets. */
  quote: (text: string) => `« ${text} »`,
  vertical: {
    translationEyebrow: 'La traduction',
    translationTitle:
      'Il vous parle comme ça. Votre fiche lui répond comme ça.',
    visitor: 'Votre visiteur',
    /** Préfixe lu par les lecteurs d'écran avant la parole du visiteur. */
    visitorSays: 'Votre visiteur : ',
    sheet: 'Votre fiche produit',
    exampleEyebrow: "Une conversation d'exemple",
    benefitsEyebrow: 'Ce que vous y gagnez',
  },
  conversation: {
    brand: 'Votre marque',
    ready: "C'est prêt",
    picked: '(réponse choisie)',
    other: '+ Autre',
    score: (value: number) => `${value} % compatible`,
    top3: 'Votre top 3',
    recommended: 'Recommandé',
    others: 'Autres choix',
  },
}

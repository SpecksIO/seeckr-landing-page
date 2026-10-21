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
  about:
    'Algimouss is the French manufacturer that hunts down moss on roofs, facades and patios: 52 products, from moss killers to water repellents by way of cleaners.',
  context:
    'Their site sells nothing: people buy Algimouss at DIY superstores and builders’ merchants. So these figures measure advice, not sales.',
  period:
    'Measured from 2 September to 21 October 2026, test conversations excluded.',
  figures: {
    redirected: {
      value: '1 in 3',
      label: 'visitors put back on the right product',
      detail:
        '111 of 373 who started from a product page. In the other 262 cases, the assistant confirmed the page.',
    },
    conversations: {
      value: '1,298',
      label: 'visitors advised in 7 weeks',
      detail: 'Around 26 a day.',
    },
    completion: {
      value: '9 in 10',
      label: 'visitors who start go all the way',
      detail:
        '90% of those who answer the first question, between 83% and 94% every week.',
    },
    advice: {
      value: '626',
      label: 'personalised recommendations',
      detail: '554 of them with at least one product.',
    },
    offHours: {
      value: '55%',
      label: 'of recommendations given while the phone line is closed',
      detail:
        'In the evening, at night or at the weekend (outside 9 am to 6 pm on weekdays).',
    },
    timeToAdvice: {
      value: '1 min 32 s',
      label: 'to find the right product',
      detail: 'Median time, in 5 answers from the visitor.',
    },
    coverage: {
      value: '46 of 52',
      label: 'products find their buyer, not just the best-sellers',
      detail: 'Recommended at least once.',
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
    title: 'Algimouss case study: a salesperson on a showcase site',
    description:
      'Algimouss makes 52 products for roofs, facades and patios. In seven weeks, the Seeckr assistant redirected one visitor in three to the right product, often in the evening and at weekends.',
  },
  eyebrow: 'Algimouss case study',
  title: 'Algimouss’s bet.',
  intro:
    'Seven weeks later, one visitor in three had been put back on the right product before going to buy it.',
  /**
   * Citation proposée, PAS ENCORE SIGNÉE par Anthony Durand : la page ne
   * l'affiche qu'en développement. Après son accord écrit, retirer la
   * condition dans la page du cas.
   */
  testimonial: {
    name: 'Anthony Durand',
    role: 'Marketing Director, Algimouss',
    quote:
      '“Our site sells nothing, and we still wanted to put a salesperson on it. It was a bet: advising visitors without ever seeing the sale close.”',
    photo: '/media/anthony-durand.png',
    photoAlt: 'Anthony Durand, Marketing Director at Algimouss',
  },
  /** Le chiffre mis en avant dès le haut de la page. */
  highlight: 'offHours' as AlgimoussFigure,
  /** Les chiffres que les autres pages montrent avant de renvoyer ici. */
  teaserFigures: [
    'redirected',
    'offHours',
    'completion',
    'timeToAdvice',
  ] satisfies AlgimoussFigure[],
  linkLabel: 'Read the full Algimouss case study',
  /** Le bouton qui déplie le détail de chaque section du récit. */
  moreLabel: 'Read the details',
  /** Le cas tel que l'accueil et la verticale le présentent. */
  teaser: {
    title:
      'At Algimouss, Seeckr put one visitor in three back on the right product.',
    intro:
      'Algimouss, a French maker of roof and facade treatments, plugged Seeckr into its site in September. Seven weeks later:',
  },
  /** Lien vers leur verticale, `@/content/verticals`. */
  verticalLink: 'See Seeckr for technical products',
  problem: {
    eyebrow: 'Why this bet',
    title: 'Visitors lost among 52 products.',
    quote:
      '“My facade has black marks and the colour is lighter than it was originally.”',
    intro:
      'Algimouss’s site has to warm visitors up before the store. They still need to know what to buy there.',
    items: [
      {
        title: 'Which product?',
        text: 'Moss killer, cleaner or water repellent? For tiles, slate or render? The 52 products overlap.',
      },
      {
        title: 'Not the same words',
        text: 'The sheet says “biocide”. The visitor says “my roof has gone all green”.',
      },
      {
        title: 'Closed in the evening',
        text: 'Advice went through the phone line, during office hours. Yet more than one recommendation in two is given in the evening, at night or at the weekend.',
      },
    ],
    more: [
      'Algimouss makes 52 products: moss killers, cleaners, preventive treatments, water repellents. From one surface to the next, their uses overlap heavily: tile, slate or steel sheet roofs, rendered, stone or wooden facades, concrete patios, asphalt.',
      'The site sells nothing online. Products are sold by stockists, at DIY superstores and builders’ merchants. So the visitor has to leave the site knowing exactly which product to ask for in store.',
      'Product sheets are written in the manufacturer’s words: “biocide”, “ready to use”, “tinted water repellent”. The visitor describes what they see: “my roof has gone all green”, “red marks on the render”. In between, someone was missing to ask the right questions.',
      'That someone existed: Algimouss’s phone line. But it answers during office hours, and questions also come in the evening and at the weekend.',
    ],
    moreQuote:
      '“Moss removal for a slate roof with a soft stone wall, tuffeau type.”',
  },
  setup: {
    eyebrow: 'What was set up',
    title: 'One line of script. The rest is Algimouss’s know-how.',
    quote:
      '“Terracotta tile roof, untreated for over 15 years, hard to reach. Semi-professional application.”',
    items: [
      {
        title: '4 to 6 questions, a top 3',
        text: 'Surface, material, symptom, access, goal. Then three ranked, scored products. If nothing fits, it says so (72 cases).',
      },
      {
        title: 'All the way to the store',
        text: 'It finds the nearest stockist: nearly 100 visitors sent straight to a store.',
      },
      {
        title: 'After-sales in the right place',
        text: 'Spare part, broken sprayer: it hands over to after-sales.',
      },
      {
        title: 'The experts stay in control',
        text: 'The Algimouss team reads conversations and rates every recommendation. 68 conversations read, and every comment corrects the assistant.',
      },
    ],
    more: [
      'Two entry points. On every product page, a banner asks “is this product right for you?”. And when the visitor is about to leave the site, a pop-up offers to advise them.',
      'Four to six questions about their situation: surface, material, symptom, access, goal. The assistant ends with a ranked top 3, a compatibility score and the reason for each product. The top product has a median score of 95%. When nothing fits, it says so instead of forcing a sale: 72 times in seven weeks.',
      'Out of 373 recommendations started from a product page, the assistant confirmed the page 262 times. The other 111 times, it pointed the visitor to a better-suited product than the one they were looking at.',
      'The advice goes all the way to the store: the assistant looks up the nearest stockist selling the recommended product. For after-sales, a spare part or a broken sprayer, it points to after-sales service instead of improvising.',
      'From the back office, the Algimouss team reads conversations and rates each recommended product, good or not. Their comments go back into the assistant’s product knowledge: 68 conversations read and rated since launch.',
    ],
  },
  /**
   * La section sur l'équipe Seeckr. Sa citation n'est PAS ENCORE SIGNÉE
   * par Anthony Durand : la page ne l'affiche qu'en développement.
   */
  team: {
    eyebrow: 'The Seeckr team',
    title: 'A team that responds fast.',
    text: 'A catch-up with Algimouss every two weeks: figures, conversations, what gets fixed. A new need? We talk it through, and the assistant evolves.',
    quote:
      '“What we value at Seeckr is how responsive they are: we think together about improving the results, and when we have a need, the feature follows.”',
  },
  results: {
    eyebrow: 'The results',
    title: 'The figures after seven weeks.',
    figures: [
      'conversations',
      'completion',
      'advice',
      'offHours',
      'timeToAdvice',
      'coverage',
    ] satisfies AlgimoussFigure[],
  },
  data: {
    eyebrow: 'What the data teaches Algimouss',
    title: 'The data Algimouss never had.',
    quote:
      '“I want to treat an Eternit roof against moss without discolouring it.”',
    items: [
      {
        title: '9 in 10 go all the way',
        text: 'The completion rate was the indicator Algimouss watched. It holds every week, between 83% and 94%.',
      },
      {
        title: 'A stockist near every customer',
        text: '98 store searches: Algimouss sees where its customers are, and whether a stockist is nearby.',
      },
      {
        title: 'What our customers are really looking for',
        text: 'Every conversation can be read in full: the material, the problem, what the customer has already tried.',
      },
    ],
    more: [
      'The figure Algimouss watched first: completion. Over the period, 90% of visitors who answer the first question go on to the recommendation. Week after week, the rate stays between 83% and 94%.',
      '626 personalised recommendations in seven weeks, 554 of them with at least one product. More than one in two (55%) was given in the evening, at night or at the weekend, outside 9 am to 6 pm on weekdays.',
      '46 of the 52 catalogue products were recommended at least once. The advice doesn’t just push best-sellers: it puts the whole catalogue to work.',
      '98 store searches launched from the assistant. For a manufacturer selling through stockists, that is a map of demand: where its customers are, and whether they find a store near them.',
      'Every conversation can be read in full in the back office: what the visitor described, what they answered, what they were recommended.',
    ],
  },
  /** Trois messages de visiteurs qui, lus à la suite, racontent le cas. */
  voices: {
    eyebrow: 'What their visitors write',
    title:
      'They describe their problem in their own words, not the product sheet’s.',
    intro:
      'First messages from visitors, translated from French and anonymous. The last one had been badly advised in store: the assistant caught them in time.',
    quotes: [
      '“I’m looking for a product to clean my aggregate patio that’s harmless to dogs.”',
      '“I’m looking for a product to kill the moss (not just green grime but actual moss and also some kind of small ferns) on a stone slab roof (schist) in the Cévennes.”',
      '“I bought Algimouss for my patio on your stockist’s advice, and I see on your site that it’s for roofs and facades: can I use it on my stone carpet?”',
    ],
  },
  /** Sous chaque citation de visiteur. */
  quoteCaption: 'A visitor, message translated from French',
  ctaTitle: 'Your catalogue deserves the same adviser.',
}

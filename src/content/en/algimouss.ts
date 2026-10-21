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
    'Measured since launch, over less than two months, test conversations excluded.',
  figures: {
    redirected: {
      value: '1 in 3',
      label: 'visitors put back on the right product',
      detail:
        '111 of 373 who started from a product page. In the other 262 cases, the assistant confirmed the page.',
    },
    conversations: {
      value: '1,298',
      label: 'visitors advised in less than two months',
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
 * La page `/cas-clients/algimouss` : Anthony Durand raconte. Mêmes phrases que
 * `@/content/fr/algimouss`, validées par lui ; seule la langue change.
 */
export const algimoussCase = {
  meta: {
    title: 'Algimouss testimonial: the bet of a salesperson on a showcase site',
    description:
      'Anthony Durand, Marketing Director at Algimouss, explains why he put Seeckr on a site that sells nothing. In less than two months, one visitor in three was redirected to the right product.',
  },
  eyebrow: 'Customer testimonial',
  title: 'Algimouss’s bet.',
  intro:
    'Anthony Durand, Marketing Director at Algimouss, explains why he put a salesperson on a site that sells nothing. And what happened in less than two months.',
  testimonial: {
    name: 'Anthony Durand',
    role: 'Marketing Director, Algimouss',
    quote:
      '“Our site sells nothing, and we still wanted to put a salesperson on it. It was a bet: advising visitors without ever seeing the sale close.”',
    photo: '/media/anthony-durand.png',
    photoAlt: 'Anthony Durand, Marketing Director at Algimouss',
  },
  teaserFigures: [
    'redirected',
    'offHours',
    'completion',
    'timeToAdvice',
  ] satisfies AlgimoussFigure[],
  linkLabel: 'Read the full Algimouss testimonial',
  moreLabel: 'Read the details',
  teaser: {
    title:
      'At Algimouss, Seeckr redirected one visitor in three to the right product.',
    intro:
      'Algimouss, a French maker of roof and facade treatments, plugged Seeckr into its site. In less than two months:',
  },
  verticalLink: 'See Seeckr for technical products',
  problem: {
    eyebrow: 'Why this bet',
    title: 'Our customers were getting lost among 52 products.',
    quote:
      '“My facade has black marks and the colour is lighter than it was originally.”',
    intro:
      'Our site is a showcase: it has to prepare our visitors before they go to the store. They still need to know what to buy there.',
    items: [
      {
        title: 'Which product?',
        text: 'Moss killer, cleaner or water repellent? For tiles, slate or render? Our 52 products overlap, and a homeowner gets lost quickly.',
      },
      {
        title: 'Not the same words',
        text: 'Our sheets say “biocide”. Our customers say “my roof has gone all green”.',
      },
      {
        title: 'Closed in the evening',
        text: 'Advice went through our phone line, during office hours. Today, more than one recommendation in two is given in the evening, at night or at the weekend.',
      },
    ],
    more: [
      'We make 52 products: moss killers, cleaners, preventive treatments, water repellents. From one surface to the next, their uses overlap a lot: tile, slate or steel sheet roofs, rendered, stone or wooden facades, concrete patios, asphalt.',
      'Our site sells nothing online. Our customers buy from our stockists, at DIY superstores and builders’ merchants. So they have to leave the site knowing exactly which product to ask for in store.',
      'Our product sheets are written in our manufacturer’s words: “biocide”, “ready to use”, “tinted water repellent”. Our customers describe what they see: “my roof has gone all green”, “red marks on the render”. In between, someone was missing to ask the right questions.',
      'That someone was our phone line. But it answers during office hours, and questions also come in the evening and at the weekend.',
    ],
    moreQuote:
      '“Moss removal for a slate roof with a soft stone wall, tuffeau type.”',
  },
  setup: {
    eyebrow: 'What we set up',
    title: 'One line of script. The rest is our know-how.',
    quote:
      '“Terracotta tile roof, untreated for over 15 years, hard to reach. Semi-professional application.”',
    items: [
      {
        title: '4 to 6 questions, a top 3',
        text: 'Surface, material, symptom, access, goal. Then three ranked, scored products. And if nothing fits, the assistant says so: that happened 72 times.',
      },
      {
        title: 'All the way to the store',
        text: 'It finds the nearest stockist: nearly 100 visitors sent straight to a store.',
      },
      {
        title: 'After-sales in the right place',
        text: 'Spare part, broken sprayer: it hands over to our after-sales team.',
      },
      {
        title: 'Our experts stay in control',
        text: 'Our team reads conversations and rates every recommendation. We train it the way we would train a salesperson: 68 conversations read so far.',
      },
    ],
    more: [
      'Setting it up took one line of script, with no development on our side. The real work is our product knowledge, and that is where we spend our time with the Seeckr team.',
      'There are two entry points. On every product page, a banner asks “is this product right for you?”. And when a visitor is about to leave the site, a pop-up offers to advise them.',
      'The assistant asks four to six questions about their situation: surface, material, symptom, access, goal. Then it ends with a ranked top 3, a compatibility score and the reason for each product. The top product has a median score of 95%. And when nothing fits, it says so instead of forcing a sale.',
      'Out of 373 recommendations started from a product page, it confirmed the page 262 times. The other 111 times, it pointed the visitor to a better-suited product than the one they were looking at. One visitor in three was looking at the wrong product.',
      'The advice goes all the way to the store: the assistant looks up the nearest stockist selling the recommended product. For after-sales, a spare part or a broken sprayer, it points to our after-sales team instead of improvising.',
      'From the back office, our team reads conversations and rates each recommended product, good or not. Our comments go back into the assistant’s product knowledge.',
    ],
  },
  team: {
    eyebrow: 'The Seeckr team',
    title: 'A team that responds fast.',
    text: 'We catch up every two weeks: figures, conversations, what gets fixed. When I have a new need, we talk it through, and the assistant evolves.',
    quote:
      '“What we value at Seeckr is how responsive they are: we think together about improving the results, and when we have a need, the feature follows.”',
  },
  results: {
    eyebrow: 'The results',
    title: 'What happened in less than two months.',
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
    eyebrow: 'What the data taught me',
    title: 'The data we never had.',
    quote:
      '“I want to treat an Eternit roof against moss without discolouring it.”',
    items: [
      {
        title: '9 in 10 go all the way',
        text: 'Completion was the first figure I looked at. 9 visitors in 10 make it to a recommendation: well beyond what I expected.',
      },
      {
        title: 'A stockist near every customer',
        text: '98 store searches. I can see where our customers are, and that they have a stockist near them. That reassured me about our network.',
      },
      {
        title: 'What our customers are really looking for',
        text: 'Every conversation can be read in full: the material, the problem, what the customer has already tried.',
      },
    ],
    more: [
      'Completion was the first figure I looked at: 90% of visitors who answer the first question go on to the recommendation. And it holds week after week, between 83% and 94%.',
      '626 personalised recommendations, 554 of them with at least one product. More than one in two (55%) was given in the evening, at night or at the weekend, when our phone line is closed. These are questions that used to wait until Monday morning, or never came back.',
      '46 of our 52 products were recommended at least once. The advice doesn’t just push our best-sellers: it puts the whole catalogue to work.',
      '98 store searches launched from the assistant. For us, selling through stockists, that is a map of demand: I can see where our customers are, and whether they find a store near them.',
      'And every conversation can be read in full in the back office: what the visitor described, what they answered, what we recommended.',
    ],
  },
  voices: {
    eyebrow: 'What our visitors write',
    title:
      'They describe their problem in their own words, not in our product sheets’.',
    intro:
      'The first messages from our visitors, translated from French. The last one had been badly advised in store: the assistant caught them in time.',
    quotes: [
      '“I’m looking for a product to clean my aggregate patio that’s harmless to dogs.”',
      '“I’m looking for a product to kill the moss (not just green grime but actual moss and also some kind of small ferns) on a stone slab roof (schist) in the Cévennes.”',
      '“I bought Algimouss for my patio on your stockist’s advice, and I see on your site that it’s for roofs and facades: can I use it on my stone carpet?”',
    ],
    /** La phrase qui conclut les trois messages. */
    closing: 'Selling means taking an interest in your prospect’s life.',
  },
  quoteCaption: 'One of our visitors, message translated from French',
  ctaTitle: 'Your catalogue deserves the same adviser.',
}

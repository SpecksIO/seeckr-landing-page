/**
 * Le cas Algimouss, seul client que le site peut nommer.
 *
 * Leur site ne vend pas en ligne : ces chiffres mesurent le conseil, jamais
 * des ventes. Aucun chiffre ne s'ajoute à cette liste sans mesure réelle.
 *
 * Tous sortent de la base de production le 21 octobre 2026, du 2 septembre
 * (mise en ligne) au 21 octobre, soit 7 semaines, conversations de test
 * exclues. Le site n'affiche aucune date : « en moins de deux mois ».
 *
 * La page est le témoignage d'Anthony Durand, directeur marketing
 * d'Algimouss, qui l'a validé (le 21 octobre 2026). Toute nouvelle phrase
 * à la première personne repasse par lui.
 */
export const algimouss = {
  name: 'Algimouss',
  about:
    "Algimouss, c'est le fabricant français qui fait la chasse à la mousse sur les toits, les façades et les terrasses : 52 produits, des démoussants aux hydrofuges en passant par les nettoyants.",
  context:
    'Leur site ne vend rien : on achète Algimouss en grande surface de bricolage ou en négoce. Ces chiffres mesurent donc le conseil, pas des ventes.',
  period:
    'Chiffres mesurés depuis la mise en ligne, sur moins de deux mois, conversations de test exclues.',
  figures: {
    redirected: {
      value: '1 sur 3',
      label: 'visiteurs réorientés vers le bon produit',
      detail:
        "111 sur 373 partis d'une fiche produit. Dans les 262 autres cas, l'assistant a confirmé la fiche.",
    },
    conversations: {
      value: '1 298',
      label: 'visiteurs conseillés en moins de deux mois',
      detail: 'Environ 26 par jour.',
    },
    completion: {
      value: '9 sur 10',
      label: 'visiteurs qui commencent vont au bout',
      detail:
        '90 % de ceux qui répondent à la première question, entre 83 et 94 % chaque semaine.',
    },
    advice: {
      value: '626',
      label: 'conseils personnalisés',
      detail: 'Dont 554 avec au moins un produit.',
    },
    offHours: {
      value: '55 %',
      label: 'des conseils donnés quand le standard est fermé',
      detail: 'Le soir, la nuit ou le week-end (hors 9 h à 18 h en semaine).',
    },
    timeToAdvice: {
      value: '1 min 32 s',
      label: 'pour trouver le bon produit',
      detail: 'En médiane, en 5 réponses du visiteur.',
    },
    coverage: {
      value: '46 sur 52',
      label: 'produits trouvent leur acheteur, pas seulement les best-sellers',
      detail: 'Recommandés au moins une fois.',
    },
  },
}

export type AlgimoussFigure = keyof typeof algimouss.figures

/**
 * La page `/cas-clients/algimouss` : Anthony Durand raconte. Les chiffres
 * qu'il cite sont ceux ci-dessus, aucun autre.
 */
export const algimoussCase = {
  meta: {
    title: "Témoignage Algimouss, le pari d'un vendeur sur un site vitrine",
    description:
      "Anthony Durand, directeur marketing d'Algimouss, raconte pourquoi il a mis Seeckr sur un site qui ne vend rien. En moins de deux mois, un visiteur sur trois a été réorienté vers le bon produit.",
  },
  eyebrow: 'Témoignage client',
  title: "Le pari d'Algimouss.",
  intro:
    "Anthony Durand, directeur marketing d'Algimouss, raconte pourquoi il a mis un vendeur sur un site qui ne vend rien. Et ce qui s'est passé en moins de deux mois.",
  testimonial: {
    name: 'Anthony Durand',
    role: 'Directeur marketing, Algimouss',
    quote:
      "« Notre site ne vend rien, et on a quand même voulu y mettre un vendeur. C'était un pari : conseiller des visiteurs sans jamais voir la vente se conclure. »",
    photo: '/media/anthony-durand.png',
    photoAlt: "Anthony Durand, directeur marketing d'Algimouss",
  },
  /** Les chiffres que les autres pages montrent avant de renvoyer ici. */
  teaserFigures: [
    'redirected',
    'offHours',
    'completion',
    'timeToAdvice',
  ] satisfies AlgimoussFigure[],
  linkLabel: 'Lire le témoignage Algimouss en entier',
  /** Le bouton qui déplie le détail de chaque section du récit. */
  moreLabel: 'Lire le détail',
  /** Le cas tel que l'accueil et la verticale le présentent. */
  teaser: {
    title:
      'Chez Algimouss, Seeckr a réorienté un visiteur sur trois vers le bon produit.',
    intro:
      'Algimouss, fabricant français de traitements pour toitures et façades, a branché Seeckr sur son site. En moins de deux mois :',
  },
  /** Lien vers leur verticale, `@/content/verticals`. */
  verticalLink: 'Voir Seeckr pour les produits techniques',
  problem: {
    eyebrow: 'Pourquoi ce pari',
    title: 'Nos clients se perdaient devant 52 produits.',
    quote:
      "« Ma façade a des traces noires et la couleur est plus claire qu'à l'origine. »",
    intro:
      "Notre site est une vitrine : il doit préparer nos visiteurs avant le magasin. Encore faut-il qu'ils sachent quoi y acheter.",
    items: [
      {
        title: 'Quel produit ?',
        text: "Démoussant, nettoyant ou hydrofuge ? Pour de la tuile, de l'ardoise ou de l'enduit ? Nos 52 produits se recoupent, et un particulier s'y perd vite.",
      },
      {
        title: 'Pas les mêmes mots',
        text: 'Nos fiches disent « biocide ». Nos clients disent « mon toit est tout vert ».',
      },
      {
        title: 'Fermé le soir',
        text: "Le conseil passait par notre standard, aux heures de bureau. Aujourd'hui, plus d'un conseil sur deux est donné le soir, la nuit ou le week-end.",
      },
    ],
    more: [
      "On fabrique 52 produits : démoussants, nettoyants, traitements préventifs, hydrofuges. D'un support à l'autre, leurs usages se recoupent beaucoup : toiture en tuile, en ardoise ou en bac acier, façade en enduit, pierre, bois, terrasse en béton, enrobé.",
      'Notre site ne vend rien en ligne. Nos clients achètent chez nos revendeurs, en grande surface de bricolage ou en négoce. Ils doivent donc repartir du site en sachant exactement quel produit demander en magasin.',
      "Nos fiches produit sont écrites avec nos mots de fabricant : « biocide », « PAE », « hydrofuge coloré ». Nos clients, eux, décrivent ce qu'ils voient : « mon toit est tout vert », « des traces rouges sur le crépi ». Entre les deux, il manquait quelqu'un pour poser les bonnes questions.",
      "Ce quelqu'un, c'était notre standard. Mais il répond aux heures de bureau, et les questions arrivent aussi le soir et le week-end.",
    ],
    moreQuote:
      '« Un démoussage de toiture ardoise avec mur en pierre tendre type tuffeau. »',
  },
  setup: {
    eyebrow: "Ce qu'on a mis en place",
    title: "Une ligne de script. Le reste, c'est notre savoir.",
    quote:
      '« Toiture tuile terre cuite sans traitement depuis plus de 15 ans, accès difficile. Application semi-pro. »',
    items: [
      {
        title: '4 à 6 questions, un top 3',
        text: "Support, matériau, symptôme, accès, objectif. Puis trois produits classés et notés. Et si rien ne convient, l'assistant le dit : c'est arrivé 72 fois.",
      },
      {
        title: "Jusqu'au magasin",
        text: 'Il trouve le revendeur le plus proche : près de 100 visiteurs envoyés directement en magasin.',
      },
      {
        title: 'Le SAV au bon endroit',
        text: 'Pièce détachée, pulvérisateur en panne : il passe la main à notre SAV.',
      },
      {
        title: 'Nos experts gardent la main',
        text: 'Notre équipe relit les conversations et note chaque recommandation. On le forme comme on formerait un vendeur : 68 conversations relues à ce jour.',
      },
    ],
    more: [
      "La mise en place a pris une ligne de script, sans développement de notre côté. Le vrai travail, c'est notre savoir métier, et c'est là qu'on passe notre temps avec l'équipe Seeckr.",
      "Il y a deux points d'entrée. Sur chaque fiche produit, un bandeau pose la question « ce produit est-il fait pour vous ? ». Et quand un visiteur s'apprête à quitter le site, une fenêtre lui propose de se faire conseiller.",
      "L'assistant pose quatre à six questions sur sa situation : le support, le matériau, le symptôme, l'accessibilité, l'objectif. Puis il conclut sur un top 3 classé, avec un score de compatibilité et le pourquoi de chaque produit. Le produit en tête affiche un score médian de 95 %. Et quand rien ne convient, il le dit au lieu de forcer une vente.",
      "Sur 373 conseils lancés depuis une fiche produit, il a confirmé la fiche 262 fois. Les 111 autres fois, il a orienté le visiteur vers un produit plus adapté que celui qu'il regardait. Un visiteur sur trois regardait le mauvais produit.",
      "Le conseil va jusqu'au magasin : l'assistant cherche le point de vente le plus proche qui vend le produit recommandé. Pour l'après-vente, une pièce détachée ou un pulvérisateur en panne, il oriente vers notre SAV au lieu d'improviser.",
      'Depuis le back office, notre équipe relit des conversations et note chaque produit recommandé, bon ou pas bon. Nos remarques repartent dans le savoir métier de l'assistant.',
    ],
  },
  team: {
    eyebrow: "L'équipe Seeckr",
    title: 'Une équipe qui répond vite.',
    text: "On fait le point tous les 15 jours : les chiffres, les conversations, ce qu'on corrige. Quand j'ai un nouveau besoin, on en discute, et l'assistant évolue.",
    quote:
      "« Ce qu'on apprécie chez Seeckr, c'est la réactivité : on réfléchit ensemble à améliorer les résultats, et quand on a un besoin, la fonctionnalité suit. »",
  },
  results: {
    eyebrow: 'Les résultats',
    title: "Ce qui s'est passé en moins de deux mois.",
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
    eyebrow: "Ce que la data m'a appris",
    title: "La data qu'on n'avait pas.",
    quote:
      '« Je cherche à traiter une toiture Eternit contre la mousse sans la décolorer. »',
    items: [
      {
        title: '9 sur 10 vont au bout',
        text: "La complétion, c'est le chiffre que je regardais en premier. 9 visiteurs sur 10 vont jusqu'au conseil : bien au-delà de ce que j'attendais.",
      },
      {
        title: 'Un revendeur près de chaque client',
        text: "98 recherches de magasin. Je vois où sont nos clients, et qu'ils ont un revendeur près de chez eux. Ça m'a rassuré sur notre réseau.",
      },
      {
        title: 'Ce que nos clients cherchent vraiment',
        text: 'Chaque conversation se relit en entier : le matériau, le problème, ce que le client a déjà essayé.',
      },
    ],
    more: [
      "La complétion, c'est le chiffre que je regardais en premier : 90 % des visiteurs qui répondent à la première question vont jusqu'à la recommandation. Et ça tient semaine après semaine, entre 83 et 94 %.",
      "626 recommandations personnalisées, dont 554 avec au moins un produit. Plus d'une sur deux (55 %) a été donnée le soir, la nuit ou le week-end, quand notre standard est fermé. Ce sont des questions qui, avant, attendaient le lundi matin, ou ne revenaient jamais.",
      '46 de nos 52 produits ont été recommandés au moins une fois. Le conseil ne pousse pas que nos best-sellers : il fait travailler tout le catalogue.',
      "98 recherches de point de vente lancées depuis l'assistant. Pour nous qui vendons par des revendeurs, c'est une carte de la demande : je vois où sont nos clients, et s'ils trouvent un magasin près de chez eux.",
      "Et chaque conversation se relit en entier dans le back office : ce que le visiteur a décrit, ce qu'il a répondu, ce qu'on lui a recommandé.",
    ],
  },
  /** Trois messages de visiteurs qui, lus à la suite, racontent le cas. */
  voices: {
    eyebrow: "Ce qu'écrivent nos visiteurs",
    title:
      'Ils décrivent leur problème avec leurs mots, pas avec ceux de nos fiches.',
    intro:
      "Les premiers messages de nos visiteurs, recopiés tels quels. Le dernier avait été mal conseillé en magasin : l'assistant l'a rattrapé.",
    quotes: [
      '« Je recherche un produit pour nettoyer ma terrasse en granulat, inoffensif pour les chiens. »',
      '« Je cherche un produit pour tuer les mousses (pas seulement des salissures vertes mais des mousses et aussi une variété de petites fougères) sur un toit en lauzes (schiste) en Cévennes. »',
      "« J'ai acheté de l'Algimouss sur le conseil de votre revendeur pour ma terrasse, et je vois sur votre site que c'est fait pour les toitures et les façades : puis-je l'utiliser sur ma moquette de pierre ? »",
    ],
  },
  /** Sous chaque citation de visiteur. */
  quoteCaption: 'Un de nos visiteurs, message recopié tel quel',
  ctaTitle: 'Votre catalogue mérite le même conseiller.',
}

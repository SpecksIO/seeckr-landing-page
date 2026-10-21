import type { Placement } from '@/content/types'

export const hero = {
  /** Titre de l'onglet et des résultats de recherche. */
  metaTitle: "Seeckr, le vendeur que votre site e-commerce n'a jamais eu",
  titleLead: 'Le vendeur que votre',
  titleStrong: "site e-commerce n'a jamais eu.",
  subtitle:
    'Seeckr est un assistant IA qui pose quelques questions à vos visiteurs, comme le ferait un vendeur en boutique, puis leur recommande les produits de votre catalogue qui correspondent à leur besoin.',
  videoLabel:
    'Démonstration : le bandeau Seeckr sur une fiche produit, la conversation avec le visiteur, puis son top 3.',
}

export const howItWorks = {
  eyebrow: 'Comment ça marche',
  title: "Une ligne de code suffit pour l'installer.",
  steps: [
    {
      title: 'Vous collez une ligne de script',
      text: "Vous l'ajoutez dans l'en-tête de votre site. Les couleurs se règlent ensuite depuis le back office, sans repasser par votre développeur.",
    },
    {
      title: 'Votre visiteur décrit sa situation',
      text: "Il n'a pas besoin de connaître le nom du produit. S'il explique qu'il reçoit ses beaux-parents deux fois par an et qu'il n'a pas de place pour un matelas, l'assistant comprend qu'il lui faut un canapé convertible.",
    },
    {
      title: 'Il reçoit son top 3',
      text: "L'assistant lui propose trois produits classés, chacun avec un score de compatibilité et la raison de son classement.",
    },
  ],
}

/**
 * Les emplacements possibles de l'assistant : source unique, lue par la
 * démonstration animée de l'accueil comme par la FAQ.
 */
export const integrations = {
  eyebrow: 'Intégrations',
  title: "Choisissez où l'assistant apparaît sur votre site.",
  text: 'Cinq emplacements sont possibles, de la fiche produit à la recherche sans résultat. Vous choisissez depuis le back office, et vous pouvez en changer à tout moment.',
  video: {
    src: '/media/integrations.mp4',
    poster: '/media/integrations.jpg',
    label:
      "Démonstration : le même assistant sur une fiche produit, en barre en bas de l'écran, en aperçu latéral, sur une recherche sans résultat, puis au moment du départ.",
  },
  placements: [
    {
      id: 'fiche-produit',
      name: 'Sur la fiche produit',
      text: "Sous le produit qu'il consulte, l'assistant l'aide à vérifier que c'est bien celui qu'il lui faut.",
    },
    {
      id: 'barre',
      name: "La barre en bas de l'écran",
      text: "Elle reste visible sur toutes les pages, et le visiteur peut la fermer d'un clic.",
    },
    {
      id: 'apercu',
      name: "L'aperçu qui glisse sur le côté",
      text: "Il s'ouvre après quelques secondes d'hésitation, avec la première question déjà posée.",
    },
    {
      id: 'sans-resultat',
      name: 'Quand la recherche ne donne rien',
      text: "Quand la recherche ne renvoie aucun résultat, l'assistant prend le relais et propose des produits adaptés au besoin du visiteur.",
    },
    {
      id: 'depart',
      name: 'La fenêtre au moment du départ',
      text: "Quand le visiteur s'apprête à quitter le site, l'assistant lui propose son aide plutôt qu'une remise de dernière minute.",
    },
  ] satisfies Placement[],
  cta: {
    title: 'Recevez votre Seeckr personnalisé sous 24 h ouvrées.',
    text: "C'est gratuit, et vous pouvez le montrer à vos équipes.",
    label: 'Recevez gratuitement votre Seeckr personnalisé',
  },
}

export const benefits = {
  eyebrow: 'Ce que ça change',
  title: 'Vos visiteurs sont mieux conseillés, et vous vendez davantage.',
  visitor: {
    label: 'Pour votre visiteur',
    title: 'Un conseil adapté à sa situation',
    paragraphs: [
      "Les filtres lui demandent un budget et les fiches techniques supposent qu'il connaisse déjà le produit. Seeckr l'interroge plutôt sur son usage, puis lui propose trois produits classés en expliquant chaque classement.",
      "Le score reste honnête : si un seul produit lui convient, l'assistant n'en propose qu'un, et si aucun ne convient, il le lui dit. L'assistant parle neuf langues et répond à chaque visiteur dans la sienne.",
    ],
  },
  merchant: {
    label: 'Pour vous',
    items: [
      {
        title: "Plus de ventes et moins d'erreurs d'achat",
        text: 'Un visiteur qui hésite finit souvent par quitter le site. Bien conseillé, il sait quel produit choisir, et le risque de retour diminue.',
      },
      {
        title: 'Vous savez enfin ce que cherchent vos clients',
        text: "Chaque visiteur vous explique avec ses propres mots ce qu'il cherche et ce qui le fait hésiter. Vous pouvez relire chaque conversation, et un rapport d'usage en fait la synthèse. De quoi bâtir vos personas sur ce que disent vraiment vos clients, et trouver dans leurs phrases les accroches de vos prochaines campagnes.",
      },
      {
        title:
          'Vos produits prioritaires mis en avant, sans fausser le conseil',
        text: "Un produit prioritaire ne passe devant que si deux produits conviennent autant l'un que l'autre à ce visiteur. Le conseil reste juste, et le visiteur ne voit pas ce réglage.",
      },
    ],
  },
}

export const verticalsIntro = {
  eyebrow: 'Par métier',
  title: 'Des fonctionnalités adaptées à votre secteur.',
}

export const faq = {
  eyebrow: 'Questions fréquentes',
  title: 'Vos questions avant de commencer.',
  items: [
    {
      id: 'prix',
      question: 'Combien ça coûte ?',
      answer:
        'Ça dépend de la taille de votre catalogue, des fonctionnalités que vous choisissez et des statistiques que vous voulez récupérer.',
      link: 'Réservez votre démo personnalisée et nous en parlons directement.',
    },
    {
      id: 'integration',
      question: "Comment Seeckr s'installe-t-il sur mon site ?",
      answer:
        "Il suffit d'ajouter une ligne de script dans l'en-tête de votre site. Le reste se règle depuis le back office, sans passer par votre développeur : l'emplacement de l'assistant sur vos pages et vos couleurs.",
    },
    {
      id: 'langues',
      question: "Dans quelles langues l'assistant parle-t-il ?",
      answer:
        "L'assistant parle neuf langues et répond à chaque visiteur dans la sienne.",
    },
    {
      id: 'donnees',
      question: 'Que deviennent les réponses de mes visiteurs ?',
      answer:
        "Vous les retrouvez dans le back office : les statistiques, chaque conversation en entier et un rapport d'usage généré automatiquement. Le visiteur peut laisser ses coordonnées pour être recontacté, mais rien ne l'y oblige.",
    },
    {
      id: 'seeckr-gratuit',
      question: 'Que contient le Seeckr personnalisé gratuit ?',
      answer:
        "Votre assistant, construit sur votre catalogue, à essayer sur votre propre site. Il n'y a rien à installer. Nous avons seulement besoin de l'adresse de votre site, de votre e-mail et de votre téléphone professionnels.",
    },
  ],
}

export const finalCta = {
  title: 'Essayez-le sur votre site.',
  text: "Nous construisons votre assistant sur votre catalogue, et vous le voyez fonctionner sur votre site. C'est gratuit, et il n'y a rien à installer.",
}

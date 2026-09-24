import type { Placement } from '@/content/types'

export const hero = {
  titleLead: 'Le vendeur que votre',
  titleStrong: "site e-commerce n'a jamais eu.",
  subtitle:
    "En boutique, quelqu'un lui aurait demandé ce qu'il cherche. En ligne, on lui tend une barre de recherche et on attend. Seeckr, lui, demande.",
  webinarLabel: 'Voir le prochain webinar',
  videoLabel:
    'Démonstration : le bandeau Seeckr sur une fiche produit, la conversation avec le visiteur, puis son top 3.',
}

export const howItWorks = {
  eyebrow: 'Comment ça marche',
  title: 'Une ligne de code, et vous avez un vendeur.',
  steps: [
    {
      title: 'Vous collez une ligne de script',
      text: "Dans l'en-tête de votre site, et c'est réglé. Vos couleurs se règlent ensuite depuis le back office, sans jamais rappeler votre développeur.",
    },
    {
      title: 'Votre visiteur raconte sa vie',
      text: "Il ne sait pas s'il lui faut un canapé trois places ou un clic-clac. Il sait qu'il reçoit ses beaux-parents deux fois par an et qu'il n'a nulle part où ranger un matelas. L'assistant part de là.",
    },
    {
      title: 'Il repart avec son top 3',
      text: 'Trois produits classés, un score de compatibilité, et la raison de chaque place. Il sait quoi prendre, et pour la première fois il sait pourquoi.',
    },
  ],
}

/**
 * Les emplacements possibles de l'assistant : source unique, lue par la
 * démonstration animée de l'accueil comme par la FAQ.
 */
export const integrations = {
  eyebrow: 'Plusieurs intégrations possibles',
  title: 'Le même assistant, là où votre visiteur hésite.',
  text: "Vous ne collez qu'une ligne de script. L'emplacement, lui, se choisit depuis le back office, et vous en changez d'un clic autant de fois que vous voulez.",
  video: {
    src: '/media/integrations.mp4',
    poster: '/media/integrations.jpg',
    label:
      "Démonstration : le même assistant sur une fiche produit, en barre en bas de l'écran, en aperçu latéral, sur une recherche sans résultat, puis au moment du départ.",
  },
  placements: [
    {
      id: 'fiche-produit',
      name: 'Sur la fiche produit',
      text: "Sous le produit qu'il regarde, la question qu'il n'ose pas poser : est-ce vraiment celui-là qu'il lui faut ?",
    },
    {
      id: 'barre',
      name: "La barre en bas de l'écran",
      text: "Sur toutes les pages, fermable d'un clic, elle attend le moment où il bloque.",
    },
    {
      id: 'apercu',
      name: "L'aperçu qui glisse sur le côté",
      text: "Après quelques secondes d'hésitation, avec déjà la première question posée.",
    },
    {
      id: 'sans-resultat',
      name: 'Quand la recherche ne donne rien',
      text: "Zéro résultat, le moment où il s'en va. L'assistant, lui, regarde au-delà des filtres.",
    },
    {
      id: 'depart',
      name: 'La fenêtre au moment du départ',
      text: "Il s'apprête à fermer l'onglet. Une question, plutôt qu'une remise de dernière minute.",
    },
  ] satisfies Placement[],
  cta: {
    title: 'Recevez votre Seeckr personnalisé sous 24 h ouvrées.',
    text: "C'est gratuit, et vous avez de quoi en faire la démonstration à vos équipes.",
    label: 'Recevez gratuitement votre Seeckr personnalisé',
  },
}

export const benefits = {
  eyebrow: 'Ce que ça change',
  title: 'Il se sent écouté. Vous vendez plus.',
  visitor: {
    label: 'Pour votre visiteur',
    title: "On l'écoute, enfin.",
    paragraphs: [
      "Personne ne lui avait jamais demandé ce qu'il cherchait vraiment. Les filtres lui réclament un prix, les fiches techniques lui réclament de savoir. Seeckr lui demande comment il vit, puis lui rend trois produits classés avec la raison de chaque place.",
      "Et le score ne ment pas. Si un seul produit lui convient, il n'en voit qu'un. Si rien ne convient, l'assistant le lui dit en face. Neuf langues, pour qu'il entende tout ça dans la sienne.",
    ],
  },
  merchant: {
    label: 'Pour vous',
    items: [
      {
        title: 'Vous vendez plus, et vous vendez mieux.',
        text: "Un visiteur qui doute s'en va. Un visiteur écouté achète. Et il ne repart pas avec un produit, il repart avec trois, classés et justifiés.",
      },
      {
        title: 'Enfin, vous savez qui sont vos clients.',
        text: "Chacun vient de vous raconter, avec ses mots à lui, ce qu'il cherche, ce qu'il a déjà essayé, ce qui l'a fait renoncer. Tout est là, lisible, conversation par conversation, et un rapport d'usage vous en fait la synthèse tout seul. Vos personas, vous ne les imaginez plus. Vous les lisez. Et les accroches que vous cherchez pour vos campagnes, vos clients les ont déjà écrites.",
      },
      {
        title: 'Vos priorités passent devant, sans trahir personne.',
        text: 'Vos produits prioritaires ne gagnent que lorsque deux produits se valent pour ce visiteur. Jamais au détriment du conseil, et jamais visible pour lui. Votre marge avance, votre crédibilité reste intacte.',
      },
    ],
  },
}

export const verticalsIntro = {
  eyebrow: 'Par métier',
  title: 'Chaque métier a ses règles, Seeckr a ses fonctionnalités.',
}

export const faq = {
  eyebrow: 'Questions fréquentes',
  title: 'Ce que vous vous demandez peut-être.',
  items: [
    {
      id: 'prix',
      question: 'Combien ça coûte ?',
      answer:
        'Ça dépend de la taille de votre catalogue, des fonctionnalités que vous choisissez et des statistiques que vous voulez récupérer. Réservez votre démo personnalisée et nous en parlons directement.',
    },
    {
      id: 'integration',
      question: "Comment Seeckr s'installe-t-il sur mon site ?",
      answer:
        "Une ligne de script dans l'en-tête, et c'est fini. Tout le reste se pilote depuis le back office, sans jamais rappeler votre développeur : l'emplacement de l'assistant sur vos pages, et vos couleurs.",
    },
    {
      id: 'langues',
      question: "Dans quelles langues l'assistant parle-t-il ?",
      answer:
        "Dans celle de votre visiteur. L'assistant en parle neuf et s'adresse à chacun dans la sienne.",
    },
    {
      id: 'donnees',
      question: 'Que deviennent les réponses de mes visiteurs ?',
      answer:
        "Elles deviennent la connaissance client que votre moteur de recherche ne vous donnera jamais : les statistiques, chaque conversation lisible en entier, et un rapport d'usage rédigé tout seul. Le visiteur peut laisser ses coordonnées pour être rappelé, rien ne l'y oblige.",
    },
    {
      id: 'seeckr-gratuit',
      question: 'Que contient le Seeckr personnalisé gratuit ?',
      answer:
        "Votre assistant, construit sur votre propre catalogue, à essayer sur votre propre site. Il n'y a rien à installer. Il nous faut votre site, votre e-mail et votre téléphone professionnels.",
    },
  ],
}

export const finalCta = {
  title: 'Essayez-le sur votre site.',
  text: "Nous construisons votre assistant sur votre catalogue, et vous le voyez travailler sur votre site. C'est gratuit, et il n'y a rien à installer.",
}

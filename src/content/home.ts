import { algimouss } from '@/content/algimouss'
import type { Conversation, Placement } from '@/content/types'

export const hero = {
  titleLead: 'Le vendeur que votre',
  titleStrong: "site e-commerce n'a jamais eu.",
  subtitle:
    "Votre moteur de recherche attend qu'on lui dise quoi chercher. Vos visiteurs, eux, connaissent leur vie, pas votre catalogue. Seeckr les écoute la raconter, leur pose les questions qu'ils n'auraient jamais formulées seuls, et les conduit au produit qui leur va vraiment.",
  webinarLabel: 'Voir le prochain webinar',
  videoLabel:
    'Démonstration : le bandeau Seeckr sur une fiche produit, la conversation avec le visiteur, puis son top 3.',
}

/** La conversation qui se joue en boucle dans la section « En situation ». */
export const demoConversation: Conversation = {
  steps: [
    {
      stage: 'On fait connaissance',
      question: 'Votre routine du matin, elle ressemble à quoi en ce moment ?',
      choices: [
        'Deux ou trois gestes, pas plus',
        'Un vrai moment pour moi',
        'Ça dépend des jours',
      ],
      picked: 0,
    },
    {
      stage: 'On comprend votre situation',
      intro:
        'Deux ou trois gestes, donc ce qui entre dans votre salle de bain doit gagner sa place.',
      question:
        "Le dernier produit que vous avez arrêté, c'était pour quelle raison ?",
      choices: [
        "Je n'ai pas vu de résultat",
        'Trop long à appliquer',
        "Je l'ai oublié, tout simplement",
      ],
      picked: 2,
    },
    {
      stage: 'On affine vos goûts',
      intro:
        "Un produit qu'on oublie, c'est souvent qu'il n'a pas trouvé sa place dans le geste.",
      question:
        "Qu'est-ce qui vous ferait dire, dans un mois, que c'était le bon choix ?",
      choices: [
        "Je l'utilise encore",
        "C'est devenu un réflexe",
        "Mon entourage l'a remarqué",
      ],
      picked: 0,
    },
  ],
  top: [
    {
      name: 'Crème Riche Nourrissante',
      score: 92,
      why: "Un seul geste le matin, un flacon à portée de main, une formule courte. Vous l'utiliserez encore dans un mois.",
    },
    { name: 'Sérum Éclat', score: 78 },
    { name: 'Baume Nettoyant', score: 71 },
  ],
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
  /** Ce que l'assistant dit dans la démonstration, quel que soit l'emplacement. */
  question: 'Pas sûr que ce produit soit le bon pour vous ?',
  start: 'Démarrer',
  placements: [
    {
      id: 'bandeau',
      name: 'Le bandeau sur la fiche produit',
      text: "En haut du produit qu'il regarde, avant qu'il ait fini de lire la description.",
    },
    {
      id: 'fenetre',
      name: 'La fenêtre au moment du départ',
      text: "Au moment où il quitte la page. Une question, plutôt qu'une remise de dernière minute.",
    },
    {
      id: 'bulle',
      name: "La bulle, en bas de l'écran",
      text: 'Discrète, sur toutes les pages, elle attend le moment où il bloque.',
    },
    {
      id: 'encart',
      name: "L'encart dans une page",
      text: "Dans le fil d'une page d'accueil ou d'un guide d'achat, comme un paragraphe de plus.",
    },
  ] satisfies Placement[],
  cta: {
    title: 'Recevez votre Seeckr personnalisé sous 24 h ouvrées.',
    text: "C'est gratuit, et vous avez de quoi en faire la démonstration à vos équipes.",
    label: 'Recevez votre Seeckr personnalisé',
  },
}

export const situation = {
  eyebrow: 'En situation',
  title: 'Au moment exact où il allait partir.',
  text: `Il hésite sur une fiche produit, sa souris remonte vers la croix. Seeckr lui propose trois questions. Chez Algimouss, ${algimouss.figures.exitIntent.value} visiteurs qui quittaient la page ont cliqué sur « Démarrer » plutôt que de fermer l'onglet. Voilà ce qui se passe ensuite.`,
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

export const proof = {
  eyebrow: 'La preuve',
  title: `En 19 jours, ${algimouss.figures.opened.value} visiteurs se sont confiés.`,
}

export const verticalsIntro = {
  eyebrow: 'Par métier',
  title: 'Chaque métier a ses clients, et chaque client sa façon de le dire.',
}

export const faq = {
  eyebrow: 'Questions fréquentes',
  title: 'Ce que vous vous demandez peut-être.',
  items: [
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
  title: 'Essayez-le sur vos propres clients.',
  text: "Nous construisons votre assistant sur votre catalogue, et vous le voyez travailler sur votre site. C'est gratuit, et il n'y a rien à installer.",
}

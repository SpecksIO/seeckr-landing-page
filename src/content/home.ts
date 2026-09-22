import type { AlgimoussFigure } from '@/content/algimouss'
import type { Conversation } from '@/content/types'

export const hero = {
  titleLead: 'Le vendeur que votre',
  titleStrong: "site e-commerce n'a jamais eu.",
  subtitle:
    'Seeckr écoute chaque visiteur raconter sa situation, lui pose des questions sur mesure, puis lui conseille les produits de votre catalogue qui lui vont vraiment, en lui expliquant pourquoi.',
  webinarLabel: 'Voir le prochain webinar',
}

/** La conversation qui se joue en boucle dans le hero. */
export const heroConversation: Conversation = {
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
      why: "Un geste le matin, un flacon à portée de main, et une formule courte : de quoi l'utiliser encore dans un mois.",
    },
    { name: 'Sérum Éclat', score: 78 },
    { name: 'Baume Nettoyant', score: 71 },
  ],
}

export const howItWorks = {
  eyebrow: 'Comment ça marche',
  title: 'Trois temps, et votre visiteur sait quoi choisir.',
  steps: [
    {
      title: 'Une ligne de script',
      text: "Vous la collez dans l'en-tête de votre site. Les emplacements et les couleurs se règlent ensuite depuis le back office Seeckr, sans retoucher votre site.",
    },
    {
      title: 'Votre visiteur raconte sa situation',
      text: "Avec ses mots. L'assistant lui pose des questions sur mesure sur son quotidien : ce à quoi il tient, ce sur quoi il est prêt à transiger.",
    },
    {
      title: 'Le top 3 et son pourquoi',
      text: "L'assistant conclut sur un top 3 classé. Chaque produit porte un score de compatibilité et la raison de sa place.",
    },
  ],
}

export const demoVideo = {
  eyebrow: 'En situation',
  title: 'Sur votre fiche produit, au moment où le visiteur hésite.',
  text: 'Un bandeau lui propose de vérifier que le produit lui convient. Au bout de la conversation, il sait lequel choisir, et pourquoi.',
  label:
    'Démonstration : le bandeau Seeckr sur une fiche produit, la conversation avec le visiteur, puis son top 3.',
}

export const benefits = {
  eyebrow: 'Ce que ça change',
  title: 'Le bon produit pour lui, un visiteur conseillé pour vous.',
  visitor: {
    label: 'Pour votre visiteur',
    title: 'Le produit juste, expliqué.',
    paragraphs: [
      "Il repart avec un top 3 classé et le pourquoi de chaque place. Le score est honnête : si un seul produit lui convient, il n'en voit qu'un. Si rien ne convient, l'assistant le lui dit. On ne complète jamais pour faire nombre.",
      "L'assistant lui répond dans sa langue, parmi 9 langues. Il peut laisser ses coordonnées pour être rappelé, rien ne l'y oblige.",
    ],
  },
  merchant: {
    label: 'Pour vous',
    items: [
      {
        title: 'Des visiteurs conseillés',
        text: "Qui ouvre l'assistant a déjà décidé d'agir. Seeckr ne lui demande pas pourquoi : il précise son besoin et le conduit au produit de votre catalogue qui lui correspond.",
      },
      {
        title: 'La mise en avant, à mérite égal',
        text: 'Vos produits prioritaires passent devant uniquement quand deux produits se valent pour ce visiteur, jamais au détriment du conseil. Le visiteur ne le voit pas.',
      },
      {
        title: 'Vos visiteurs, lus de près',
        text: "Statistiques, chaque conversation lisible, et un rapport d'usage rédigé automatiquement. Vous découvrez avec quels mots vos clients décrivent leur besoin : de la matière directe pour vos campagnes.",
      },
    ],
  },
}

export const proof = {
  eyebrow: 'La preuve',
  title: 'Algimouss, 19 jours après la mise en ligne.',
  figures: [
    'opened',
    'advised',
    'topScore',
    'otherProduct',
  ] satisfies AlgimoussFigure[],
  link: {
    href: '/produits-techniques#algimouss',
    label: 'Lire le cas Algimouss',
  },
}

export const verticalsIntro = {
  eyebrow: 'Par métier',
  title: 'Seeckr parle la langue de votre catalogue.',
}

export const faq = {
  eyebrow: 'Questions fréquentes',
  title: 'Ce que vous vous demandez peut-être.',
  items: [
    {
      id: 'integration',
      question: "Comment Seeckr s'installe-t-il sur mon site ?",
      answer:
        "Une ligne de script à coller dans l'en-tête de votre site suffit. Ensuite, tout se règle depuis le back office Seeckr, sans retoucher votre site : les emplacements (bandeau sur la fiche produit, fenêtre au moment où le visiteur quitte la page, bulle, encart dans une page) et les couleurs.",
    },
    {
      id: 'langues',
      question: "Dans quelles langues l'assistant parle-t-il ?",
      answer:
        "Dans celle de votre visiteur : l'assistant parle 9 langues et s'adresse à chacun dans la sienne.",
    },
    {
      id: 'donnees',
      question: 'Que deviennent les réponses de mes visiteurs ?',
      answer:
        "Elles vous servent à les comprendre : statistiques, chaque conversation lisible, et un rapport d'usage rédigé automatiquement. Le visiteur peut laisser ses coordonnées pour être rappelé, rien ne l'y oblige.",
    },
    {
      id: 'seeckr-gratuit',
      question: 'Que contient le Seeckr personnalisé gratuit ?',
      answer:
        "Votre assistant, construit sur votre propre catalogue, à essayer sur votre propre site. Rien n'est installé chez vous. Il suffit de nous indiquer votre site, votre e-mail et votre téléphone professionnels.",
    },
  ],
}

export const finalCta = {
  title: 'Voyez Seeckr conseiller vos propres clients.',
  text: "Nous construisons votre assistant sur votre catalogue, à essayer sur votre site. C'est gratuit, et rien n'est installé chez vous.",
}

import type { Vertical } from '@/content/types'

export const produitsTechniques: Vertical = {
  slug: 'produits-techniques',
  name: 'Produits techniques',
  teaser: 'Du symptôme au bon produit.',
  meta: {
    title: 'Seeckr pour les produits techniques',
    description:
      "Votre visiteur décrit sa maison, un matériau, un symptôme. Seeckr le conduit au bon produit de votre catalogue. Le cas Algimouss, chiffres à l'appui.",
  },
  hero: {
    title:
      "Il voit des traces noires sur son mur nord. Il ne sait pas que ça s'appelle un hydrofuge.",
    intro:
      "Un matériau, un symptôme, un coin d'ombre : Seeckr part de ce qu'il voit chez lui et le conduit au produit qui règle son cas. Chez Algimouss, une conversation sur deux a mis en tête un autre produit que celui de la page d'arrivée. Autant de visiteurs qui repartaient avec le mauvais bidon.",
  },
  contrast: {
    pairs: [
      {
        visitor: "J'ai de la mousse sur ma toiture en ardoise.",
        sheet:
          'Traitement curatif, application par pulvérisation, sans rinçage.',
      },
      {
        visitor: 'Des traces noires sont apparues sur la façade, côté nord.',
        sheet: 'Nettoyant façade, usage extérieur, action progressive.',
      },
      {
        visitor: "Ma terrasse en bois devient glissante l'hiver.",
        sheet: 'Antidérapant, supports bois et composite.',
      },
    ],
    closing:
      "Entre ce qu'il voit chez lui et ce que vous vendez, il manque un traducteur.",
  },
  conversation: {
    title: 'On commence par son toit.',
    steps: [
      {
        stage: 'On fait connaissance',
        question: "Votre maison, elle est plutôt à l'ombre ou au soleil ?",
        choices: [
          'Des arbres tout autour',
          'En plein soleil',
          'Ça dépend du côté',
        ],
        picked: 0,
      },
      {
        stage: 'On comprend votre situation',
        intro:
          "Avec des arbres autour, l'humidité reste, et la mousse revient vite.",
        question: "Le traitement, vous comptez l'appliquer vous-même ?",
        choices: [
          'Oui, depuis une échelle',
          "Un artisan s'en chargera",
          'Je ne sais pas encore',
        ],
        picked: 0,
      },
      {
        stage: 'On affine votre choix',
        intro:
          'Vous le faites vous-même : on privilégie ce qui se passe de rinçage.',
        question:
          "Qu'est-ce qui vous ferait dire, dans un an, que c'était le bon choix ?",
        choices: [
          'Ne pas avoir à remonter',
          'Un toit propre pour vendre',
          'Plus de traces sur les murs',
        ],
        picked: 0,
      },
    ],
    top: [
      {
        name: 'Traitement toiture curatif',
        score: 91,
        why: "Il s'applique depuis l'échelle, sans rinçage, et il agit dans la durée. Vous ne remonterez pas nettoyer l'an prochain.",
      },
      { name: 'Nettoyant toiture concentré', score: 79 },
      { name: 'Hydrofuge incolore', score: 63 },
    ],
  },
  benefitsTitle: 'Le bon produit du premier coup, même par le mauvais chemin.',
  benefits: [
    {
      title: 'Du symptôme au bon bidon',
      text: "Votre visiteur n'a pas à connaître vos gammes. Il décrit la trace noire sur son mur nord, Seeckr fait le reste.",
    },
    {
      title: 'Le bon produit, même depuis la mauvaise page',
      text: "Un visiteur atterrit rarement sur la fiche qui correspond à son cas. Chez Algimouss, c'était une fois sur deux. Seeckr remet le bon produit en tête et lui explique pourquoi il change d'avis.",
    },
    {
      title: 'Vous conseillez même sans vendre en ligne',
      text: "Votre site ne prend pas de commande ? Seeckr conseille quand même, et votre visiteur arrive chez son distributeur en sachant exactement quoi demander. C'est précisément le cas d'Algimouss.",
    },
  ],
  showAlgimouss: true,
}

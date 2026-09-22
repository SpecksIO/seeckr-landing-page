import type { Vertical } from '@/content/types'

export const produitsTechniques: Vertical = {
  slug: 'produits-techniques',
  name: 'Produits techniques',
  teaser: 'Vos visiteurs décrivent leur maison, pas une référence.',
  meta: {
    title: 'Seeckr pour les produits techniques',
    description:
      "Vos visiteurs décrivent leur maison, un matériau, un symptôme. Seeckr les conduit au bon produit de votre catalogue. Le cas Algimouss, chiffres à l'appui.",
  },
  hero: {
    title: 'Votre visiteur parle de sa maison, pas de vos références.',
    intro:
      "Un matériau, un symptôme, un coin d'ombre : Seeckr part de ce que votre visiteur voit chez lui et le conduit au produit de votre catalogue qui règle son cas.",
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
    closing: "Traduire l'un en l'autre, c'est le travail de Seeckr.",
  },
  conversation: {
    title: "Des questions sur sa maison, jamais sur l'étiquette.",
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
        why: "Il s'applique depuis l'échelle, sans rinçage, et agit dans la durée : fait pour un toit à l'ombre que vous ne voulez pas remonter nettoyer.",
      },
      { name: 'Nettoyant toiture concentré', score: 79 },
      { name: 'Hydrofuge incolore', score: 63 },
    ],
  },
  benefits: [
    {
      title: 'Du symptôme au produit',
      text: "Votre visiteur n'a pas à connaître vos gammes. Il décrit ce qu'il voit chez lui, Seeckr fait la traduction.",
    },
    {
      title: 'Le bon produit, même depuis la mauvaise fiche',
      text: 'Un visiteur arrive souvent sur une fiche qui ne correspond pas à son cas. Seeckr place alors en tête le produit qui lui convient, et lui dit pourquoi.',
    },
    {
      title: 'Un conseil utile, même sans vente en ligne',
      text: 'Votre site ne vend pas ? Seeckr conseille quand même : votre visiteur sait quoi demander à son distributeur.',
    },
  ],
  showAlgimouss: true,
}

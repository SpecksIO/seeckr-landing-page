import type { Vertical } from '@/content/types'

// Secteur réglementé : aucune allégation de santé ou thérapeutique ici.
export const cosmetiqueNutrition: Vertical = {
  slug: 'cosmetique-nutrition',
  name: 'Cosmétique et nutrition',
  teaser: 'Les questions de routine.',
  meta: {
    title: 'Seeckr pour la cosmétique et la nutrition',
    description:
      "Vos visiteurs parlent de leur routine et de leurs habitudes, pas d'actifs. Seeckr les écoute et classe les produits de votre catalogue qu'ils tiendront vraiment.",
  },
  hero: {
    title:
      'Il a arrêté son dernier sérum, et il ne sait pas vraiment pourquoi.',
    intro:
      "Seeckr l'interroge sur ses journées, sur ce qu'il a essayé et laissé tomber, et trouve la vraie raison : il l'oubliait. À partir de là, le bon produit n'est plus le plus actif, c'est celui qu'il tiendra.",
  },
  contrast: {
    pairs: [
      {
        visitor: 'Le matin, je me prépare en courant.',
        sheet: 'Texture fluide, absorption rapide.',
      },
      {
        visitor:
          "J'ai arrêté mon dernier sérum, je ne pensais jamais à le mettre.",
        sheet: 'Flacon pompe, application matin et soir.',
      },
      {
        visitor:
          'Je veux quelque chose que je peux prendre au bureau sans y penser.',
        sheet: 'Format gélules, prise quotidienne.',
      },
    ],
    closing:
      "Entre les deux, il manque quelqu'un qui écoute. C'est la place de Seeckr.",
  },
  conversation: {
    title:
      "Ce qu'il fait le matin en dit plus long que votre liste d'ingrédients.",
    steps: [
      {
        stage: 'On fait connaissance',
        question:
          "À quel moment de la journée auriez-vous le temps d'y penser ?",
        choices: [
          'Le matin, avec le café',
          'Le midi, au bureau',
          'Le soir, au calme',
        ],
        picked: 0,
      },
      {
        stage: 'On comprend votre situation',
        intro:
          'Le matin, donc : il faut que ça se glisse dans un geste que vous faites déjà.',
        question:
          "La dernière fois que vous avez arrêté un complément, qu'est-ce qui s'est passé ?",
        choices: [
          "J'oubliais de le prendre",
          'Le goût ne passait pas',
          'Trop de gélules à avaler',
        ],
        picked: 1,
      },
      {
        stage: 'On affine vos goûts',
        intro: 'Le goût compte, alors on écarte ce qui se prend à contrecœur.',
        question:
          "Qu'est-ce qui vous ferait dire, dans un mois, que vous avez bien fait ?",
        choices: [
          'Je le prends encore sans y penser',
          "J'ai envie de le prendre",
          "Je n'ai pas eu à me forcer",
        ],
        picked: 0,
      },
    ],
    top: [
      {
        name: 'Poudre Végétale Vanille',
        score: 93,
        why: 'Elle se mélange à votre café du matin et son goût vanille ne demande aucun effort. Vous la prendrez encore dans un mois.',
      },
      { name: 'Gélules Magnésium', score: 74 },
      { name: 'Infusion du Soir', score: 62 },
    ],
  },
  benefitsTitle: 'Des clients qui gardent le produit, et qui reviennent.',
  benefits: [
    {
      title: 'La routine avant la formule',
      text: 'Il décrit ses journées, ses oublis, ses ras-le-bol. Seeckr traduit tout ça en produits de votre catalogue, sans jamais lui demander de déchiffrer une étiquette.',
    },
    {
      title: 'Un conseil qui sait dire non',
      text: "Si un seul produit lui convient, il n'en voit qu'un. Si rien ne convient, l'assistant le dit. Un conseil qui refuse de vendre, c'est un conseil qu'on croit, et c'est ce qui fait revenir.",
    },
    {
      title: 'Les mots de vos clients, prêts pour vos campagnes',
      text: "Vous saurez enfin comment ils parlent de leur peau, de leur fatigue, de leur rythme. Ce ne sont plus des personas, ce sont des phrases, et elles sonnent plus juste que tout ce qu'un brief produira.",
    },
  ],
}

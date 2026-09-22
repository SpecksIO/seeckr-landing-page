import type { Vertical } from '@/content/types'

// Secteur réglementé : aucune allégation de santé ou thérapeutique ici.
export const cosmetiqueNutrition: Vertical = {
  slug: 'cosmetique-nutrition',
  name: 'Cosmétique et nutrition',
  teaser: 'Vos visiteurs parlent de leur routine, pas de la composition.',
  meta: {
    title: 'Seeckr pour la cosmétique et la nutrition',
    description:
      "Vos visiteurs parlent de leur routine et de leurs habitudes, pas d'actifs. Seeckr leur pose des questions sur mesure et classe les produits de votre catalogue qui leur conviennent.",
  },
  hero: {
    title:
      "Votre visiteur ne cherche pas un actif. Il cherche la routine qu'il tiendra.",
    intro:
      "Seeckr l'interroge sur son quotidien, sur ce qu'il a déjà essayé et ce qu'il a laissé tomber, puis classe les produits de votre catalogue qui lui vont vraiment, avec le pourquoi.",
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
      "Entre les deux, il manque un vendeur qui écoute. C'est la place de Seeckr.",
  },
  conversation: {
    title: 'Des questions sur sa journée, jamais sur la fiche.',
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
        why: 'Elle se mélange à votre café du matin, et son goût vanille ne demande aucun effort : de quoi la prendre encore dans un mois.',
      },
      { name: 'Gélules Magnésium', score: 74 },
      { name: 'Infusion du Soir', score: 62 },
    ],
  },
  benefits: [
    {
      title: 'La routine avant la composition',
      text: 'Votre visiteur décrit ses journées et ses habitudes. Seeckr traduit ce quotidien en produits de votre catalogue, sans lui demander de connaître la fiche.',
    },
    {
      title: 'Un top 3 qui sait dire non',
      text: "Si un seul produit lui convient, il n'en voit qu'un. Si rien ne convient, l'assistant le lui dit. Votre visiteur choisit en confiance.",
    },
    {
      title: 'Les mots de vos clients, pour vos campagnes',
      text: 'Chaque conversation est lisible. Vous découvrez comment vos clients parlent de leur peau, de leur rythme et de leurs envies : de la matière directe pour vos campagnes.',
    },
  ],
}

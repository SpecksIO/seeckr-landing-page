import type { Vertical } from '@/content/types'

// Aucun client de référence : aucun chiffre ni cas client sur cette page.
export const formation: Vertical = {
  slug: 'formation',
  name: 'Formation',
  teaser: 'Vos visiteurs disent où ils en sont et où ils veulent aller.',
  meta: {
    title: 'Seeckr pour les organismes de formation',
    description:
      "Votre visiteur sait où il en est et où il veut aller. Seeckr lui pose des questions sur mesure et propose les formations de votre catalogue qui l'y mènent.",
  },
  hero: {
    title:
      'Votre visiteur sait où il en est. Seeckr lui montre le chemin dans votre catalogue.',
    intro:
      "Il décrit son métier, ce qui le freine et ce qu'il vise. Seeckr lui propose les formations de votre catalogue qui l'y mènent, et lui explique pourquoi celles-ci.",
  },
  contrast: {
    pairs: [
      {
        visitor:
          'Je refais les mêmes tableaux chaque semaine, je voudrais que ça se fasse tout seul.',
        sheet:
          'Tableur perfectionnement : tableaux croisés dynamiques et macros.',
      },
      {
        visitor:
          'Je viens de prendre une équipe et je ne sais pas recadrer sans braquer.',
        sheet: "Management d'équipe, niveau intermédiaire, à distance.",
      },
      {
        visitor: 'Je veux changer de métier sans reprendre des études longues.',
        sheet: 'Titre professionnel, parcours modulaire, en alternance.',
      },
    ],
    closing:
      "Entre le point de départ et l'intitulé de la formation, Seeckr trace le chemin.",
  },
  conversation: {
    title: 'Des questions sur son travail, jamais sur le programme.',
    steps: [
      {
        stage: 'On fait connaissance',
        question:
          "Aujourd'hui, à quoi ressemble une journée de travail pour vous ?",
        choices: [
          'Je vis dans des tableaux',
          'Je suis surtout en réunion',
          'Je suis sur le terrain',
        ],
        picked: 0,
      },
      {
        stage: 'On comprend votre situation',
        intro:
          'Des tableaux toute la journée : il y a sûrement du temps à récupérer.',
        question:
          "Qu'est-ce qui vous prend du temps et que vous aimeriez ne plus faire ?",
        choices: [
          'Refaire les mêmes rapports',
          'Chercher des erreurs de formule',
          'Mettre en forme pour les autres',
        ],
        picked: 0,
      },
      {
        stage: 'On affine votre choix',
        intro:
          "Des rapports qui reviennent : c'est exactement ce qui s'automatise.",
        question:
          "La dernière fois que vous avez appris quelque chose de nouveau, ça s'est passé comment ?",
        choices: [
          'Seul, en tâtonnant',
          'Avec un collègue à côté',
          'En suivant un exemple concret',
        ],
        picked: 2,
      },
    ],
    top: [
      {
        name: 'Automatiser ses rapports avec un tableur',
        score: 92,
        why: 'Elle part de rapports comme les vôtres et vous fait refaire chaque étape sur un cas concret : de quoi ne plus refaire vos tableaux à la main.',
      },
      { name: 'Tableur perfectionnement', score: 77 },
      { name: 'Tableaux de bord : les bases', score: 64 },
    ],
  },
  benefits: [
    {
      title: 'Du point de départ à la destination',
      text: "Votre visiteur n'a pas à connaître l'intitulé exact d'une formation. Il dit où il en est et où il veut aller, Seeckr trace le chemin.",
    },
    {
      title: 'Un parcours argumenté',
      text: "Chaque formation proposée porte un score de compatibilité et la raison de sa place. Si aucune ne convient, l'assistant le dit.",
    },
    {
      title: 'Les attentes de vos futurs stagiaires',
      text: 'Chaque conversation est lisible. Vous découvrez comment vos visiteurs décrivent leurs besoins : de la matière directe pour vos intitulés et vos campagnes.',
    },
  ],
}

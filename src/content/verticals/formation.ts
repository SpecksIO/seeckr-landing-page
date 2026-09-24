import type { Vertical } from '@/content/types'

// Aucun client de référence : aucun chiffre ni cas client sur cette page.
export const formation: Vertical = {
  slug: 'formation',
  name: 'Formation',
  teaser: 'La trace pour Qualiopi.',
  meta: {
    title: 'Seeckr pour les organismes de formation',
    description:
      "Votre visiteur dit où il en est, Seeckr lui montre quelle formation l'y emmène. Et chaque demande reste tracée pour votre analyse du besoin.",
  },
  hero: {
    title:
      'Il ne cherche pas une formation. Il cherche à ne plus refaire ses tableaux le dimanche soir.',
    intro:
      "Il vous dit où il en est, ce qui le bloque, ce qu'il vise. Seeckr lui montre laquelle de vos formations l'y emmène, et pourquoi celle-là plutôt qu'une autre. Vous, vous gardez la trace de la demande, telle qu'il l'a formulée.",
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
      'Entre son point de départ et votre intitulé, Seeckr trace le chemin.',
  },
  conversation: {
    title: 'On part de son lundi matin.',
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
        why: 'Elle part de rapports comme les vôtres et vous fait refaire chaque étape sur un cas concret. Vous ne remonterez plus vos tableaux à la main.',
      },
      { name: 'Tableur perfectionnement', score: 77 },
      { name: 'Tableaux de bord : les bases', score: 64 },
    ],
  },
  benefitsTitle: 'Des inscrits qui savent pourquoi ils viennent.',
  benefits: [
    {
      title: 'Chaque demande laisse une trace',
      text: "La conversation reste lisible en entier : la situation qu'il a décrite, ce qu'il cherchait à régler, la formation qui lui a été recommandée et la raison de ce classement. Le jour de l'audit Qualiopi, votre analyse du besoin n'est plus à reconstituer de mémoire, elle est écrite, demande par demande.",
    },
    {
      title: 'De son problème à votre catalogue',
      text: "Il n'a aucune idée de l'intitulé qu'il devrait chercher. Il sait seulement ce qui lui pourrit ses semaines. Seeckr fait le chemin.",
    },
    {
      title: 'Il comprend pourquoi celle-là',
      text: "Chaque formation proposée porte un score de compatibilité et la raison de sa place. Un stagiaire qui a compris pourquoi cette formation-là s'engage avec autrement plus d'assurance.",
    },
    {
      title: 'Les attentes de vos futurs stagiaires, en clair',
      text: "Vous lirez, dans leurs mots, ce qu'ils viennent vraiment chercher. Vos intitulés, vos programmes et vos campagnes n'ont jamais eu de meilleure matière.",
    },
  ],
}

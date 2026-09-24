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
  compliance: {
    eyebrow: 'Traçabilité Qualiopi',
    title: 'Vos preuves se rédigent pendant que vous dormez.',
    intro:
      "Aujourd'hui, vous remplissez un tableur à la main pour montrer que chaque demande a été analysée. C'est long, fastidieux, et c'est le premier endroit où l'audit trouve un trou. Chaque conversation Seeckr écrit cette preuve à votre place.",
    items: [
      {
        title: 'Fini la saisie manuelle',
        text: "Tout est archivé au fil des demandes et s'exporte en un clic. Votre tableau de suivi, vous ne le remplirez plus.",
      },
      {
        title: 'Une preuve par bénéficiaire',
        text: "Chaque échange est horodaté et rattaché à la personne : ce qu'elle a décrit de sa situation, ce qu'elle visait, ce qui lui a été recommandé, et quand.",
      },
      {
        title: 'Les critères 2 et 3 documentés',
        text: "L'identification des objectifs et l'adaptation au bénéficiaire, renseignées toutes seules, demande après demande. Le jour de l'audit, vous ouvrez le dossier.",
      },
    ],
  },
}

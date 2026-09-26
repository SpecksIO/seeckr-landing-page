import type { Vertical } from '@/content/types'

export const produitsTechniques: Vertical = {
  name: 'Technical products',
  teaser: 'Photo upload.',
  meta: {
    title: 'Seeckr for technical products',
    description:
      'Your visitor describes their house, a material, a symptom. Seeckr leads them to the right product in your catalogue. The Algimouss case study, with the figures to back it up.',
  },
  hero: {
    title:
      'They can see black marks on their north-facing wall. They don’t know the answer is called a water repellent.',
    intro:
      'A material, a symptom, a shady corner: Seeckr starts from what they can see at home and leads them to the product that solves their problem. At Algimouss, one conversation in two recommended a different product from the one on the product page it started from. Every one of those visitors was about to leave with the wrong product.',
  },
  contrast: {
    pairs: [
      {
        visitor: 'I’ve got moss on my slate roof.',
        sheet: 'Moss and algae remover, spray-on, no rinsing needed.',
      },
      {
        visitor: 'Black marks have appeared on the north side of the house.',
        sheet: 'Facade cleaner, for exterior use, works gradually.',
      },
      {
        visitor: 'My wooden decking gets slippery in winter.',
        sheet: 'Anti-slip treatment, for wood and composite.',
      },
    ],
    closing:
      'Between what they see at home and what you sell, what’s missing is a translator.',
  },
  conversation: {
    title: 'We start with their roof.',
    steps: [
      {
        stage: 'Getting to know you',
        question: 'Is your house mostly in the shade or in the sun?',
        choices: ['Trees all around', 'In full sun', 'Depends which side'],
        picked: 0,
      },
      {
        stage: 'Understanding your situation',
        intro:
          'With trees around it, the damp lingers and the moss comes back quickly.',
        question: 'Are you planning to apply the treatment yourself?',
        choices: [
          'Yes, from a ladder',
          'A tradesperson will do it',
          'I’m not sure yet',
        ],
        picked: 0,
      },
      {
        stage: 'Narrowing it down',
        intro:
          'You’re doing it yourself, so we favour products that need no rinsing.',
        question:
          'A year from now, what would make you say it was the right choice?',
        choices: [
          'Not having to go back up',
          'A clean roof to help sell the house',
          'No more marks on the walls',
        ],
        picked: 0,
      },
    ],
    top: [
      {
        name: 'Roof moss and algae remover',
        score: 91,
        why: 'It goes on from the ladder, with no rinsing, and keeps working over time. You won’t be back up there cleaning next year.',
      },
      { name: 'Concentrated roof cleaner', score: 79 },
      { name: 'Clear water repellent', score: 63 },
    ],
  },
  benefitsTitle:
    'The right product first time, even from the wrong starting point.',
  benefits: [
    {
      title: 'From symptom to solution',
      text: 'Your visitor doesn’t need to know your product ranges. They describe the black marks on their north wall, Seeckr does the rest.',
    },
    {
      title: 'The right product, even from the wrong page',
      text: 'Visitors rarely land on the product page that matches their problem. At Algimouss, one in two did not. Seeckr puts the right product first and explains why it is worth changing their mind.',
    },
    {
      title: 'Advice that works even if you don’t sell online',
      text: 'Your site doesn’t take orders? Seeckr advises all the same, and your visitor walks into their stockist knowing exactly what to ask for. That’s exactly how Algimouss works.',
    },
  ],
}

import type { Vertical } from '@/content/types'

// Secteur réglementé : aucune allégation de santé ou thérapeutique ici.
export const cosmetiqueNutrition: Vertical = {
  name: 'Beauty and nutrition',
  teaser: 'Questions about their routine.',
  meta: {
    title: 'Seeckr for beauty and nutrition',
    description:
      'Your visitors talk about their routines and habits, not active ingredients. Seeckr listens and ranks the products in your catalogue they’ll actually stick with.',
  },
  hero: {
    title: 'They gave up on their last serum, and they’re not quite sure why.',
    intro:
      'Seeckr asks about their days, what they’ve tried and dropped, and finds the real reason: they kept forgetting it. From there, the right product isn’t the most potent one. It’s the one they’ll stick with.',
  },
  contrast: {
    pairs: [
      {
        visitor: 'I’m always rushing to get ready in the morning.',
        sheet: 'Lightweight texture, fast absorption.',
      },
      {
        visitor: 'I gave up on my last serum, I never remembered to put it on.',
        sheet: 'Pump bottle, apply morning and evening.',
      },
      {
        visitor:
          'I want something I can take at work without thinking about it.',
        sheet: 'Capsules, one daily dose.',
      },
    ],
    closing:
      'What’s missing in between is someone who listens. That’s where Seeckr comes in.',
  },
  conversation: {
    title:
      'What they do in the morning tells you more than your ingredients list.',
    steps: [
      {
        stage: 'Getting to know you',
        question:
          'At what point in your day would you have time to think about it?',
        choices: [
          'In the morning, with my coffee',
          'At lunchtime, at work',
          'In the evening, winding down',
        ],
        picked: 0,
      },
      {
        stage: 'Understanding your situation',
        intro:
          'Mornings, then: it needs to slot into something you already do.',
        question:
          'The last time you stopped taking a supplement, what happened?',
        choices: [
          'I kept forgetting to take it',
          'I couldn’t stand the taste',
          'Too many capsules to swallow',
        ],
        picked: 1,
      },
      {
        stage: 'Fine-tuning your preferences',
        intro: 'Taste matters, so we rule out anything that’s a chore to take.',
        question:
          'A month from now, what would make you say it was the right call?',
        choices: [
          'I’m still taking it without thinking',
          'I actually look forward to it',
          'I haven’t had to force myself',
        ],
        picked: 0,
      },
    ],
    top: [
      {
        name: 'Vanilla plant powder',
        score: 93,
        why: 'It mixes into your morning coffee and the vanilla makes it easy to take. You’ll still be taking it a month from now.',
      },
      { name: 'Magnesium Capsules', score: 74 },
      { name: 'Evening Herbal Tea', score: 62 },
    ],
  },
  benefitsTitle: 'Customers who stick with the product, and come back.',
  benefits: [
    {
      title: 'Routine before formula',
      text: 'They describe their days, what they forget, what they’re fed up with. Seeckr matches all that to products in your catalogue, without ever asking them to decode a label.',
    },
    {
      title: 'Advice that knows how to say no',
      text: 'If only one product suits them, they see only one. If nothing suits, the assistant says so. Advice that refuses to sell is advice people believe, and that’s what brings them back.',
    },
    {
      title: 'Your customers’ words, ready for your campaigns',
      text: 'At last you’ll know how they talk about their skin, their tiredness, the pace of their lives. These aren’t personas any more, they’re real sentences, and they ring truer than anything a brief will ever produce.',
    },
  ],
}

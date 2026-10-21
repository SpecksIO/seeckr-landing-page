import type { Placement } from '@/content/types'

export const hero = {
  /** Titre de l'onglet et des résultats de recherche. */
  metaTitle: 'Seeckr, the sales assistant your online shop never had',
  titleLead: 'The sales assistant your',
  titleStrong: 'online shop never had.',
  subtitle:
    'Seeckr is an AI assistant that asks your visitors a few questions, the way a shop assistant would, then recommends the products from your catalogue that match what they need.',
  videoLabel:
    'Demo: the Seeckr banner on a product page, the conversation with the visitor, then their top 3.',
}

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'One line of code is all it takes to install.',
  steps: [
    {
      title: 'You paste one line of code',
      text: 'You add it to your site’s <head>. Colours are then set from the dashboard, without going back to your developer.',
    },
    {
      title: 'Your visitor describes their situation',
      text: 'They don’t need to know the product’s name. If they explain that their in-laws come to stay twice a year and there’s no room for a spare mattress, the assistant understands they need a sofa bed.',
    },
    {
      title: 'They get their top 3',
      text: 'The assistant suggests three ranked products, each with a match score and the reason for its ranking.',
    },
  ],
}

/**
 * Les emplacements possibles de l'assistant : source unique, lue par la
 * démonstration animée de l'accueil comme par la FAQ.
 */
export const integrations = {
  eyebrow: 'Integrations',
  title: 'Choose where the assistant appears on your site.',
  text: 'There are five placements, from the product page to a search with no results. You choose from the dashboard, and you can change it at any time.',
  video: {
    src: '/media/integrations.mp4',
    poster: '/media/integrations.jpg',
    label:
      'Demo: the same assistant on a product page, as a bar at the bottom of the screen, as a side preview, on a search with no results, then as the visitor leaves.',
  },
  placements: [
    {
      id: 'fiche-produit',
      name: 'On the product page',
      text: 'Beneath the product they’re viewing, the assistant helps them check it’s really the one they need.',
    },
    {
      id: 'barre',
      name: 'The bar at the bottom of the screen',
      text: 'It stays visible on every page, and the visitor can close it in one click.',
    },
    {
      id: 'apercu',
      name: 'The preview that slides in from the side',
      text: 'It opens after a few seconds of hesitation, with the first question already asked.',
    },
    {
      id: 'sans-resultat',
      name: 'When search comes up empty',
      text: 'When a search returns no results, the assistant takes over and suggests products that fit what the visitor needs.',
    },
    {
      id: 'depart',
      name: 'The exit pop-up',
      text: 'When the visitor is about to leave the site, the assistant offers to help rather than a last-minute discount.',
    },
  ] satisfies Placement[],
  cta: {
    title:
      'Your own Seeckr assistant, built on your catalogue, within one working day.',
    text: 'It’s free, and you can show it to your team.',
    label: 'Try Seeckr free with my products',
  },
}

export const benefits = {
  eyebrow: 'What changes',
  title: 'Your visitors get better advice, and you sell more.',
  visitor: {
    label: 'For your visitor',
    title: 'Advice that fits their situation',
    paragraphs: [
      'Filters ask for a budget and spec sheets assume they already know the product. Seeckr asks about how they’ll use it instead, then suggests three ranked products and explains each ranking.',
      'The score stays honest: if only one product suits them, the assistant suggests only one, and if none does, it tells them so. The assistant speaks nine languages and answers each visitor in their own.',
    ],
  },
  merchant: {
    label: 'For you',
    items: [
      {
        title: 'More sales and fewer wrong purchases',
        text: 'A visitor who hesitates often ends up leaving the site. With good advice, they know which product to choose, and the risk of a return goes down.',
      },
      {
        title: 'You finally know what your customers are looking for',
        text: 'Every visitor explains, in their own words, what they’re looking for and what makes them hesitate. You can read each conversation in full, and a usage report sums them up. Enough to build your personas on what your customers actually say, and to find the hooks for your next campaigns in their own phrases.',
      },
      {
        title: 'Your priority products come first, without skewing the advice',
        text: 'A priority product only moves ahead when two products are an equal fit for this visitor. The advice stays sound, and the visitor never sees this setting.',
      },
    ],
  },
}

export const verticalsIntro = {
  eyebrow: 'By industry',
  title: 'Features tailored to your industry.',
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Your questions before getting started.',
  items: [
    {
      id: 'prix',
      question: 'How much does it cost?',
      answer:
        'It depends on the size of your catalogue, the features you choose and the statistics you want to collect.',
      link: 'Book your personalised demo and we’ll talk it through.',
    },
    {
      id: 'integration',
      question: 'How is Seeckr installed on my site?',
      answer:
        'You just add one line of code to your site’s <head>. Everything else is set from the dashboard, without going through your developer: where the assistant sits on your pages, and your colours.',
    },
    {
      id: 'langues',
      question: 'Which languages does the assistant speak?',
      answer:
        'The assistant speaks nine languages and answers each visitor in their own.',
    },
    {
      id: 'donnees',
      question: 'What happens to my visitors’ answers?',
      answer:
        'You’ll find them in the dashboard: the statistics, every conversation in full and an automatically generated usage report. Visitors can leave their details to be contacted, but it’s entirely optional.',
    },
    {
      id: 'seeckr-gratuit',
      question: 'What do I get for free?',
      answer:
        'Your assistant, built on your catalogue, to try on your own site. There’s nothing to install. All we need is your website address, your work email and your work phone number.',
    },
  ],
}

export const finalCta = {
  title: 'Try it on your site.',
  text: 'We build your assistant on your catalogue, and you see it working on your site. It’s free, and there’s nothing to install.',
}

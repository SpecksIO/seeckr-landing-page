import type { Placement } from '@/content/types'

export const hero = {
  /** Titre de l'onglet et des résultats de recherche. */
  metaTitle: 'Seeckr, the sales assistant your online shop never had',
  titleLead: 'The sales assistant your',
  titleStrong: 'online shop never had.',
  subtitle:
    'In a shop, someone would have asked what they were looking for. Online, we hand them a search bar and wait. Seeckr asks.',
  videoLabel:
    'Demo: the Seeckr banner on a product page, the conversation with the visitor, then their top 3.',
}

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'One line of code, and you have a sales assistant.',
  steps: [
    {
      title: 'You paste one line of code',
      text: 'Into your site’s <head>, and that’s it. You then set your colours from the dashboard, without ever going back to your developer.',
    },
    {
      title: 'Your visitor tells you about their life',
      text: 'They don’t know whether they need a three-seater or a sofa bed. They know their in-laws come to stay twice a year and there’s nowhere to put a spare mattress. The assistant starts there.',
    },
    {
      title: 'They leave with their top 3',
      text: 'Three ranked products, a match score, and why each one is ranked where it is. They know what to buy, and for the first time they know why.',
    },
  ],
}

/**
 * Les emplacements possibles de l'assistant : source unique, lue par la
 * démonstration animée de l'accueil comme par la FAQ.
 */
export const integrations = {
  eyebrow: 'Several ways to integrate',
  title: 'The same assistant, wherever your visitor hesitates.',
  text: 'You only paste one line of code. You choose where the assistant appears from the dashboard, and switch it in one click as often as you like.',
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
      text: 'Beneath the product they’re looking at, the question they don’t dare ask: is this really the one they need?',
    },
    {
      id: 'barre',
      name: 'The bar at the bottom of the screen',
      text: 'On every page, dismissed in one click, it waits for the moment they get stuck.',
    },
    {
      id: 'apercu',
      name: 'The preview that slides in from the side',
      text: 'After a few seconds of hesitation, with the first question already asked.',
    },
    {
      id: 'sans-resultat',
      name: 'When search comes up empty',
      text: 'Zero results, the moment they give up. The assistant looks beyond the filters.',
    },
    {
      id: 'depart',
      name: 'The exit pop-up',
      text: 'They’re about to close the tab. A question, rather than a last-minute discount.',
    },
  ] satisfies Placement[],
  cta: {
    title:
      'Your own Seeckr assistant, built on your catalogue, within one working day.',
    text: 'It’s free, and you’ll have something to show the team.',
    label: 'Try Seeckr free with my products',
  },
}

export const benefits = {
  eyebrow: 'What changes',
  title: 'They feel heard. You sell more.',
  visitor: {
    label: 'For your visitor',
    title: 'Someone is finally listening.',
    paragraphs: [
      'Nobody had ever asked them what they were really looking for. Filters demand a price, spec sheets assume they already know. Seeckr asks how they live, then gives them three ranked products and why each one is ranked where it is.',
      'And the score doesn’t lie. If only one product suits them, they see only one. If nothing suits, the assistant tells them straight. It speaks nine languages, so every visitor gets this in their own.',
    ],
  },
  merchant: {
    label: 'For you',
    items: [
      {
        title: 'More sales, and better ones.',
        text: 'A visitor in doubt leaves. A visitor who feels heard buys. And they don’t get one suggestion, they get three, ranked and explained.',
      },
      {
        title: 'Hear exactly how your customers describe what they need.',
        text: 'Each one has just told you, in their own words, what they’re looking for, what they’ve already tried, what made them give up. It’s all there, every conversation there to read in full, and a usage report sums it up for you automatically. You no longer imagine your personas. You read them. And your customers have already written the lines your campaigns are missing.',
      },
      {
        title: 'Your priorities come first, without misleading anyone.',
        text: 'Your priority products only win when two products are an equal fit for this visitor. Never at the expense of the advice, and never visible to them. Good for your margin, and your credibility stays intact.',
      },
    ],
  },
}

export const verticalsIntro = {
  eyebrow: 'By industry',
  title: 'Every industry has its rules. Seeckr has the features to match.',
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Questions you might have.',
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
        'One line of code in your site’s <head>, and you’re done. Everything else is managed from the dashboard, without ever going back to your developer: where the assistant sits on your pages, and your colours.',
    },
    {
      id: 'langues',
      question: 'Which languages does the assistant speak?',
      answer:
        'Your visitor’s. The assistant speaks nine and talks to each visitor in their own.',
    },
    {
      id: 'donnees',
      question: 'What happens to my visitors’ answers?',
      answer:
        'They become the customer insight your search engine will never give you: the statistics, every conversation readable in full, and a usage report that writes itself. Visitors can leave their details to be called back, but it’s entirely optional.',
    },
    {
      id: 'seeckr-gratuit',
      question: 'What do I get for free?',
      answer:
        'Your assistant, built on your own catalogue, to try on your own site. There’s nothing to install. We need your website, your work email and your work phone number.',
    },
  ],
}

export const finalCta = {
  title: 'Try it on your site.',
  text: 'We build your assistant on your catalogue, and you watch it work on your site. It’s free, and there’s nothing to install.',
}

/**
 * Landing page copy. Placeholder text — replace with the real product story.
 *
 * This module is the only place the copy lives: the rendered sections, the
 * FAQPage structured data and `/llms-full.txt` all derive from it.
 */

export const hero = {
  eyebrow: 'Early access',
  title: 'Find what matters, faster',
  subtitle:
    'Seeckr turns scattered information into answers your team can act on, without another dashboard to babysit.',
  primaryCta: { label: 'Request access', href: '#faq' },
  secondaryCta: { label: 'See how it works', href: '#features' },
}

export const features = [
  {
    id: 'search',
    title: 'Answers, not links',
    description:
      'Ask in plain language and get a sourced answer, with every claim traceable back to the document it came from.',
  },
  {
    id: 'connect',
    title: 'Connects to what you already use',
    description:
      'Point Seeckr at your existing tools and it indexes them in place. No migration, no duplicate source of truth.',
  },
  {
    id: 'control',
    title: 'Permissions that hold',
    description:
      'Results respect the access rules of the underlying systems. If someone cannot open the file, they cannot see the answer.',
  },
]

export const faq = [
  {
    id: 'what-is-it',
    question: 'What is Seeckr?',
    answer:
      'Seeckr is a search layer for teams. It indexes the tools you already work in and answers questions with citations back to the original documents.',
  },
  {
    id: 'data',
    question: 'Where does my data live?',
    answer:
      'Your documents stay in their original systems. Seeckr stores an index and the metadata needed to serve results, never a second copy of your content.',
  },
  {
    id: 'access',
    question: 'How do I get access?',
    answer:
      'Early access is rolling out gradually. Request an invitation and we will reach out when a slot opens for your team size.',
  },
]

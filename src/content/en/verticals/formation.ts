import type { Vertical } from '@/content/types'

// Aucun client de référence : aucun chiffre ni cas client sur cette page.
// Qualiopi n'existe qu'en France : pas de bloc `compliance` en anglais.
export const formation: Vertical = {
  name: 'Training',
  teaser: 'Their need, in their own words.',
  meta: {
    title: 'Seeckr for training providers',
    description:
      'Your visitor tells you where they are now, Seeckr shows them which course gets them where they want to be. And every request stays on record, in their own words.',
  },
  hero: {
    title:
      'They’re not looking for a course. They’re looking to stop rebuilding their spreadsheets on a Sunday night.',
    intro:
      'They tell you where they are, what’s holding them back, what they’re aiming for. Seeckr shows them which of your courses gets them there, and why that one rather than another. You keep a record of the request, exactly as they put it.',
  },
  contrast: {
    pairs: [
      {
        visitor:
          'I rebuild the same spreadsheets every week, I’d like them to update themselves.',
        sheet: 'Advanced spreadsheets: pivot tables and macros.',
      },
      {
        visitor:
          'I’ve just taken over a team and I don’t know how to pull people up without putting their backs up.',
        sheet: 'Team management, intermediate level, remote.',
      },
      {
        visitor:
          'I want to change careers without going back to university for years.',
        sheet: 'Professional qualification, module by module, alongside a job.',
      },
    ],
    closing:
      'Between where they start and your course title, Seeckr maps the route.',
  },
  conversation: {
    title: 'We start with their Monday morning.',
    steps: [
      {
        stage: 'Getting to know you',
        question: 'What does a working day look like for you at the moment?',
        choices: [
          'I live in spreadsheets',
          'I’m mostly in meetings',
          'I’m out in the field',
        ],
        picked: 0,
      },
      {
        stage: 'Understanding your situation',
        intro: 'Spreadsheets all day: there’s bound to be time to win back.',
        question: 'What takes up your time that you’d rather stop doing?',
        choices: [
          'Rebuilding the same reports',
          'Hunting down formula errors',
          'Formatting things for others',
        ],
        picked: 0,
      },
      {
        stage: 'Narrowing it down',
        intro: 'Recurring reports: that is exactly what can be automated.',
        question: 'The last time you learnt something new, how did it go?',
        choices: [
          'On my own, by trial and error',
          'With a colleague beside me',
          'Following a real example',
        ],
        picked: 2,
      },
    ],
    top: [
      {
        name: 'Automate your reports with spreadsheets',
        score: 92,
        why: 'It starts from reports like yours and has you rework each step on a real example. You won’t be rebuilding your spreadsheets by hand again.',
      },
      { name: 'Advanced spreadsheets', score: 77 },
      { name: 'Dashboards: the basics', score: 64 },
    ],
  },
  benefitsTitle: 'Learners who know why they signed up.',
  benefits: [
    {
      title: 'From their problem to your catalogue',
      text: 'They have no idea which course title to search for. They only know what’s ruining their week. Seeckr bridges the gap.',
    },
    {
      title: 'They understand why this one',
      text: 'Every course suggested comes with a match score and why it is ranked where it is. A learner who understands why this course is the one commits with far more confidence.',
    },
    {
      title: 'Your future learners’ expectations, in plain words',
      text: 'You’ll read, in their own words, what they’re really coming for. Your course titles, programmes and campaigns have never had better material.',
    },
  ],
}

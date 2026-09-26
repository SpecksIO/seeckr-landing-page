/** La page `/mon-seeckr` et son formulaire. */
export const lead = {
  meta: {
    title: 'Get your free Seeckr assistant, built on your catalogue',
    description:
      'Your Seeckr assistant, built on your own catalogue, to try on your own site. Nothing gets installed on your side.',
  },
  eyebrow: 'Your own Seeckr assistant',
  title: 'See it work on your own products.',
  intro:
    'Give us your website address. We build your assistant on your real catalogue, then show it to you in action.',
  promises: [
    'Your assistant, built on your real catalogue.',
    'Yours to try on your site, with your products.',
    'Nothing to install, nothing to sign.',
    'Ready within one working day.',
  ],
  form: {
    fields: {
      site: { label: 'Website', placeholder: 'myshop.co.uk' },
      email: {
        label: 'Work email',
        placeholder: 'firstname@myshop.co.uk',
      },
      phone: { label: 'Work phone', placeholder: '' },
    },
    errors: {
      site: 'Enter your website address, for example myshop.co.uk.',
      email: 'Enter a valid work email, for example firstname@myshop.co.uk.',
      phone:
        'Enter a valid phone number, including the country code (+44 for the UK).',
    },
    invalid:
      'Something is missing or incomplete: please check the highlighted fields.',
    failed: 'Your request couldn’t be sent. Please try again in a moment.',
    sending: 'Sending…',
    reassurance:
      'We only use your details to build and present your Seeckr assistant. Never sold on, and no newsletter without your consent.',
    privacyLink: 'Privacy policy',
    sent: {
      title: 'Got it. We’re on it.',
      text: 'We build your Seeckr assistant on your catalogue, then get back to you to show it in action.',
    },
  },
}

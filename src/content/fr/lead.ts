/** La page `/mon-seeckr` et son formulaire. */
export const lead = {
  meta: {
    title: 'Recevez gratuitement votre Seeckr personnalisé',
    description:
      "Votre assistant Seeckr, construit sur votre propre catalogue, à essayer sur votre propre site. Rien n'est installé chez vous.",
  },
  eyebrow: 'Seeckr personnalisé',
  title: 'Voyez-le travailler sur vos propres produits.',
  intro:
    "Donnez-nous l'adresse de votre site. Nous construisons votre assistant sur votre vrai catalogue, puis nous vous le montrons en action.",
  promises: [
    'Votre assistant, construit sur votre vrai catalogue.',
    'À essayer sur votre site, avec vos produits.',
    'Rien à installer, rien à signer.',
    'Prêt sous 24 h ouvrées.',
  ],
  form: {
    fields: {
      site: { label: 'Site internet', placeholder: 'maboutique.fr' },
      email: {
        label: 'E-mail professionnel',
        placeholder: 'prenom@maboutique.fr',
      },
      phone: { label: 'Téléphone professionnel', placeholder: '' },
    },
    errors: {
      site: "Indiquez l'adresse de votre site, par exemple maboutique.fr.",
      email:
        'Indiquez un e-mail professionnel valide, par exemple prenom@maboutique.fr.',
      phone:
        "Indiquez un numéro de téléphone valide, avec l'indicatif du pays s'il n'est pas français.",
    },
    invalid:
      "Il manque une information ou l'une d'elles est incomplète : vérifiez les champs signalés.",
    failed: "Votre demande n'a pas pu partir. Réessayez dans un instant.",
    sending: 'Envoi en cours…',
    reassurance:
      'Vos coordonnées servent uniquement à fabriquer et vous présenter votre Seeckr. Jamais revendues, aucune newsletter sans votre accord.',
    privacyLink: 'Politique de confidentialité',
    sent: {
      title: "C'est noté. On se met au travail.",
      text: 'Nous construisons votre Seeckr sur votre catalogue, puis nous revenons vers vous pour vous le montrer en action.',
    },
  },
}

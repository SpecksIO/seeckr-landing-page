/** La page `/mon-seeckr` et son formulaire. */
export const lead = {
  meta: {
    title: 'Ricevi gratis il tuo Seeckr personalizzato',
    description:
      'Il tuo assistente Seeckr, costruito sul tuo catalogo, da provare sul tuo sito. Non devi installare nulla.',
  },
  eyebrow: 'Seeckr personalizzato',
  title: 'Guardalo lavorare sui tuoi prodotti.',
  intro:
    "Dacci l'indirizzo del tuo sito. Costruiamo il tuo assistente sul tuo vero catalogo, poi te lo mostriamo in azione.",
  promises: [
    'Il tuo assistente, costruito sul tuo vero catalogo.',
    'Da provare sul tuo sito, con i tuoi prodotti.',
    'Niente da installare, niente da firmare.',
    'Pronto entro 24 ore lavorative.',
  ],
  form: {
    fields: {
      site: { label: 'Sito web', placeholder: 'ilmionegozio.it' },
      email: {
        label: 'E-mail aziendale',
        placeholder: 'nome@ilmionegozio.it',
      },
      phone: { label: 'Telefono aziendale', placeholder: '' },
    },
    errors: {
      site: "Inserisci l'indirizzo del tuo sito, ad esempio ilmionegozio.it.",
      email:
        'Inserisci un indirizzo e-mail aziendale valido, ad esempio nome@ilmionegozio.it.',
      phone:
        "Inserisci un numero di telefono valido, con il prefisso internazionale (per l'Italia, +39).",
    },
    invalid:
      "Manca un'informazione o una è incompleta: controlla i campi segnalati.",
    failed:
      'Non è stato possibile inviare la richiesta. Riprova tra un attimo.',
    sending: 'Invio in corso…',
    reassurance:
      'I tuoi dati servono solo a creare il tuo Seeckr e a presentartelo. Mai rivenduti, nessuna newsletter senza il tuo consenso.',
    privacyLink: 'Informativa sulla privacy',
    sent: {
      title: 'Ricevuto. Ci mettiamo al lavoro.',
      text: 'Costruiamo il tuo Seeckr sul tuo catalogo, poi ti ricontattiamo per mostrartelo in azione.',
    },
  },
}

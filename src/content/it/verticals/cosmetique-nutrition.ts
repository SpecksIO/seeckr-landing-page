import type { Vertical } from '@/content/types'

// Secteur réglementé : aucune allégation de santé ou thérapeutique ici.
export const cosmetiqueNutrition: Vertical = {
  name: 'Cosmetica e integratori',
  teaser: 'Domande sulle abitudini quotidiane',
  meta: {
    title: 'Seeckr per la cosmetica e gli integratori',
    description:
      'I tuoi clienti parlano della loro routine e delle loro abitudini, non di principi attivi. Seeckr li ascolta e mette in classifica i prodotti del tuo catalogo che useranno davvero con costanza.',
  },
  hero: {
    title: 'Ha smesso di usare il suo ultimo siero e non sa bene perché.',
    intro:
      'Seeckr fa domande sulle sue giornate, su cosa ha provato e poi lasciato perdere, e trova il vero motivo: se ne dimenticava. Da lì, il prodotto giusto non è più il più ricco di principi attivi: è quello che userà con costanza.',
  },
  contrast: {
    pairs: [
      {
        visitor: 'La mattina mi preparo di corsa.',
        sheet: 'Texture fluida, assorbimento rapido.',
      },
      {
        visitor:
          'Ho smesso con il mio ultimo siero, non mi ricordavo mai di metterlo.',
        sheet: 'Flacone con dosatore, applicazione mattina e sera.',
      },
      {
        visitor: 'Voglio qualcosa da prendere in ufficio senza pensarci.',
        sheet: 'Formato capsule, assunzione quotidiana.',
      },
    ],
    closing:
      'In mezzo, manca qualcuno che ascolti. È qui che entra in gioco Seeckr.',
  },
  conversation: {
    title: 'Come inizia la giornata dice più della tua lista di ingredienti.',
    steps: [
      {
        stage: 'Facciamo conoscenza',
        question:
          'In quale momento della giornata avresti il tempo di pensarci?',
        choices: [
          'La mattina, con il caffè',
          'A pranzo, in ufficio',
          'La sera, con calma',
        ],
        picked: 0,
      },
      {
        stage: 'Capiamo la tua situazione',
        intro: "La mattina, quindi: deve entrare in un'abitudine che hai già.",
        question:
          "L'ultima volta che hai smesso di prendere un integratore, cosa è successo?",
        choices: [
          'Mi dimenticavo di prenderlo',
          'Il sapore non mi andava giù',
          'Troppe capsule da ingoiare',
        ],
        picked: 1,
      },
      {
        stage: 'Affiniamo i tuoi gusti',
        intro:
          'Il sapore conta, quindi scartiamo ciò che si prende controvoglia.',
        question: 'Cosa ti farebbe dire, tra un mese, che hai fatto bene?',
        choices: [
          'Lo prendo ancora senza pensarci',
          'Ho voglia di prenderlo',
          'Non ho dovuto sforzarmi',
        ],
        picked: 0,
      },
    ],
    top: [
      {
        name: 'Proteine vegetali in polvere alla vaniglia',
        score: 93,
        why: 'Si sciolgono nel caffè del mattino e il gusto vaniglia non richiede alcuno sforzo. Tra un mese le prenderai ancora.',
      },
      { name: 'Magnesio in capsule', score: 74 },
      { name: 'Tisana della sera', score: 62 },
    ],
  },
  benefitsTitle: 'Clienti che continuano a usare il prodotto e che tornano.',
  benefits: [
    {
      title: 'La routine prima della formula',
      text: "I tuoi clienti descrivono le loro giornate, le dimenticanze, quello che non sopportano più. Seeckr traduce tutto questo in prodotti del tuo catalogo, senza mai chiedere di decifrare un'etichetta.",
    },
    {
      title: 'Una raccomandazione che sa dire di no',
      text: "Se va bene un solo prodotto, ne vedono uno solo. Se non va bene niente, l'assistente lo dice. Una raccomandazione che rinuncia a vendere è una raccomandazione credibile, ed è questo che fa tornare i clienti.",
    },
    {
      title: 'Le parole dei tuoi clienti, pronte per le tue campagne',
      text: 'Saprai finalmente come parlano della loro pelle, della loro stanchezza, dei loro ritmi. Non sono più buyer persona, sono frasi. E suonano più vere di qualsiasi cosa possa uscire da un brief.',
    },
  ],
}

import type { Vertical } from '@/content/types'

export const produitsTechniques: Vertical = {
  name: 'Prodotti tecnici',
  teaser: 'Il cliente manda una foto',
  meta: {
    title: 'Seeckr per i prodotti tecnici',
    description:
      'I tuoi clienti descrivono la loro casa, un materiale, un sintomo. Seeckr li porta al prodotto giusto del tuo catalogo. Il caso Algimouss, numeri alla mano.',
  },
  hero: {
    title:
      'Vede delle macchie nere sul muro esposto a nord. Non sa che la soluzione si chiama idrorepellente.',
    intro:
      'Un materiale, un sintomo, un angolo in ombra: Seeckr parte da ciò che il cliente vede a casa sua e arriva al prodotto che risolve il problema. Nel caso di Algimouss, una conversazione su due ha messo al primo posto un prodotto diverso da quello della scheda da cui era partita. Tutte persone che sarebbero uscite con il prodotto sbagliato.',
  },
  contrast: {
    pairs: [
      {
        visitor: "C'è del muschio sul mio tetto in tegole.",
        sheet:
          'Trattamento curativo, applicazione a spruzzo, senza risciacquo.',
      },
      {
        visitor:
          'Sono comparse delle macchie nere sulla facciata, sul lato nord.',
        sheet: 'Detergente per facciate, uso esterno, azione progressiva.',
      },
      {
        visitor:
          "Il mio pavimento in legno da esterno diventa scivoloso d'inverno.",
        sheet: 'Antiscivolo, per legno e materiali compositi.',
      },
    ],
    closing:
      'Tra ciò che i tuoi clienti vedono a casa loro e ciò che vendi tu, manca un traduttore.',
  },
  conversation: {
    title: 'Si comincia dal tetto.',
    steps: [
      {
        stage: 'Facciamo conoscenza',
        question: "La tua casa è più all'ombra o al sole?",
        choices: ['Circondata da alberi', 'In pieno sole', 'Dipende dal lato'],
        picked: 0,
      },
      {
        stage: 'Capiamo la tua situazione',
        intro:
          "Con gli alberi intorno, l'umidità resta e il muschio torna in fretta.",
        question: 'Il trattamento pensi di applicarlo tu?',
        choices: [
          'Sì, dalla scala',
          'Se ne occuperà un artigiano',
          'Non lo so ancora',
        ],
        picked: 0,
      },
      {
        stage: 'Affiniamo la tua scelta',
        intro: 'Fai da te: privilegiamo i prodotti senza risciacquo.',
        question:
          'Cosa ti farebbe dire, tra un anno, che era la scelta giusta?',
        choices: [
          'Non dover risalire',
          'Un tetto pulito per vendere casa',
          'Niente più macchie sui muri',
        ],
        picked: 0,
      },
    ],
    top: [
      {
        name: 'Trattamento curativo per tetti',
        score: 91,
        why: "Si applica dalla scala, senza risciacquo, e agisce nel tempo. L'anno prossimo non dovrai risalire a pulire.",
      },
      { name: 'Detergente concentrato per tetti', score: 79 },
      { name: 'Idrorepellente incolore', score: 63 },
    ],
  },
  benefitsTitle:
    'Il prodotto giusto al primo colpo, anche partendo dalla strada sbagliata.',
  benefits: [
    {
      title: 'Dal sintomo alla confezione giusta',
      text: 'I tuoi clienti non devono conoscere le tue gamme. Descrivono la macchia nera sul muro a nord, Seeckr fa il resto.',
    },
    {
      title: 'Il prodotto giusto, anche dalla pagina sbagliata',
      text: 'Raramente un cliente arriva sulla scheda che corrisponde al suo caso. Nel caso di Algimouss, succedeva una volta su due. Seeckr riporta in cima il prodotto giusto e spiega perché è meglio di quello che stava guardando.',
    },
    {
      title: 'Raccomandazioni anche senza vendita online',
      text: 'Il tuo sito non prende ordini? Seeckr raccomanda comunque il prodotto giusto e il cliente arriva dal rivenditore sapendo esattamente cosa chiedere. È proprio il caso di Algimouss.',
    },
  ],
}

import type { Vertical } from '@/content/types'

// Aucun client de référence : aucun chiffre ni cas client sur cette page.
// Qualiopi n'existe qu'en France : pas de bloc `compliance` en italien.
export const formation: Vertical = {
  name: 'Formazione',
  teaser: 'Ogni richiesta tracciata',
  meta: {
    title: 'Seeckr per gli enti di formazione',
    description:
      'I tuoi futuri corsisti dicono a che punto sono, Seeckr mostra quale corso li porta dove vogliono arrivare. E ogni richiesta resta tracciata, così come è stata formulata.',
  },
  hero: {
    title:
      'Non cerca un corso. Vuole smettere di passare la domenica sera a rifare gli stessi file Excel.',
    intro:
      'Ti dice a che punto è, cosa non funziona, a cosa punta. Seeckr mostra quale dei tuoi corsi porta lì e perché proprio quello e non un altro. Tu conservi la traccia della richiesta, così come è stata formulata.',
  },
  contrast: {
    pairs: [
      {
        visitor:
          'Rifaccio gli stessi file Excel ogni settimana, vorrei che si aggiornassero da soli.',
        sheet: 'Corso Excel avanzato: tabelle pivot e macro.',
      },
      {
        visitor:
          'Ho appena preso in mano un team e non so come riprendere qualcuno senza che si metta sulla difensiva.',
        sheet: 'Gestione del team, livello intermedio, online.',
      },
      {
        visitor: 'Voglio cambiare lavoro senza rimettermi a studiare per anni.',
        sheet:
          'Percorso di riqualificazione professionale, modulare, con periodi in azienda.',
      },
    ],
    closing:
      'Tra il loro punto di partenza e il titolo del tuo corso, Seeckr traccia il percorso.',
  },
  conversation: {
    title: 'Si parte dal lunedì mattina.',
    steps: [
      {
        stage: 'Facciamo conoscenza',
        question: "Oggi, com'è una tua giornata di lavoro?",
        choices: [
          'Vivo su Excel',
          'Sono quasi sempre in riunione',
          'Lavoro sul campo',
        ],
        picked: 0,
      },
      {
        stage: 'Capiamo la tua situazione',
        intro:
          "Excel tutto il giorno: c'è sicuramente del tempo da recuperare.",
        question: 'Cosa ti porta via tempo e vorresti smettere di fare?',
        choices: [
          'Rifare sempre gli stessi report',
          'Cercare errori nelle formule',
          'Formattare file per i colleghi',
        ],
        picked: 0,
      },
      {
        stage: 'Affiniamo la tua scelta',
        intro:
          'Report che si ripetono: è esattamente ciò che si può automatizzare.',
        question:
          "L'ultima volta che hai imparato qualcosa di nuovo, com'è andata?",
        choices: [
          'In autonomia, per tentativi',
          'Con un collega accanto',
          'Seguendo un esempio concreto',
        ],
        picked: 2,
      },
    ],
    top: [
      {
        name: 'Automatizzare i report con Excel',
        score: 92,
        why: 'Parte da report come i tuoi e ti fa rifare ogni passaggio su un caso concreto. Non ricostruirai più i tuoi report a mano.',
      },
      { name: 'Corso Excel avanzato', score: 77 },
      { name: 'Dashboard: le basi', score: 64 },
    ],
  },
  benefitsTitle: 'Iscritti che sanno perché vengono.',
  benefits: [
    {
      title: 'Dal loro problema al tuo catalogo',
      text: 'Non hanno idea di quale corso dovrebbero cercare. Sanno solo cosa rovina loro le settimane. Al resto pensa Seeckr.',
    },
    {
      title: 'Capiscono perché proprio quel corso',
      text: 'Ogni corso proposto ha un punteggio di compatibilità e il motivo della sua posizione. Chi ha capito perché proprio quel corso si impegna con ben altra convinzione.',
    },
    {
      title: 'Le aspettative dei tuoi futuri corsisti, messe in chiaro',
      text: 'Leggerai, con le loro parole, cosa vengono davvero a cercare. I titoli, i programmi e le campagne dei tuoi corsi non hanno mai avuto materiale migliore.',
    },
  ],
}

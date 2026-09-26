import type { Placement } from '@/content/types'

export const hero = {
  /** Titre de l'onglet et des résultats de recherche. */
  metaTitle:
    'Seeckr, il consulente di vendita che il tuo e-commerce non ha mai avuto',
  titleLead: 'Il consulente di vendita che il tuo',
  titleStrong: 'e-commerce non ha mai avuto.',
  subtitle:
    'In negozio, qualcuno avrebbe chiesto ai tuoi clienti cosa cercassero. Online, si ritrovano davanti una barra di ricerca e nessuno chiede niente. Seeckr, invece, chiede.',
  videoLabel:
    'Dimostrazione: il banner Seeckr su una scheda prodotto, la conversazione con il cliente, poi la sua top 3.',
}

export const howItWorks = {
  eyebrow: 'Come funziona',
  title: 'Una riga di codice e hai un consulente di vendita.',
  steps: [
    {
      title: 'Incolli una riga di script',
      text: "Nell'<head> del tuo sito e il gioco è fatto. I colori si impostano poi dal back office, senza scomodare lo sviluppatore.",
    },
    {
      title: 'I tuoi clienti descrivono la loro situazione',
      text: "Non sanno se serve loro un divano tre posti o un divano letto. Sanno che due volte l'anno ospitano i suoceri e che non hanno dove mettere un materasso. L'assistente parte da lì.",
    },
    {
      title: 'Ricevono la loro top 3',
      text: 'Tre prodotti in classifica, un punteggio di compatibilità e il motivo di ogni posizione. Sanno cosa scegliere e, per la prima volta, sanno perché.',
    },
  ],
}

/**
 * Les emplacements possibles de l'assistant : source unique, lue par la
 * démonstration animée de l'accueil comme par la FAQ.
 */
export const integrations = {
  eyebrow: 'Diverse posizioni sul tuo sito',
  title: 'Lo stesso assistente, dove i tuoi clienti esitano.',
  text: 'Incolli una sola riga di script. La posizione si sceglie dal back office e la cambi con un clic tutte le volte che vuoi.',
  video: {
    src: '/media/integrations.mp4',
    poster: '/media/integrations.jpg',
    label:
      'Dimostrazione: lo stesso assistente su una scheda prodotto, nella barra in fondo allo schermo, nel pannello laterale, su una ricerca senza risultati, poi nel popup di uscita.',
  },
  placements: [
    {
      id: 'fiche-produit',
      name: 'Sulla scheda prodotto',
      text: 'Sotto il prodotto che stanno guardando, la domanda che non osano fare: è davvero quello giusto per loro?',
    },
    {
      id: 'barre',
      name: 'La barra in fondo allo schermo',
      text: 'Su tutte le pagine, si chiude con un clic e aspetta il momento in cui il cliente esita.',
    },
    {
      id: 'apercu',
      name: 'Il pannello laterale',
      text: 'Si apre dopo qualche secondo di esitazione, con la prima domanda già pronta.',
    },
    {
      id: 'sans-resultat',
      name: 'Quando la ricerca non trova nulla',
      text: "Zero risultati: è il momento in cui se ne vanno. L'assistente, invece, guarda oltre i filtri.",
    },
    {
      id: 'depart',
      name: 'Il popup di uscita',
      text: "Stanno per chiudere la pagina. Meglio una domanda che uno sconto dell'ultimo minuto.",
    },
  ] satisfies Placement[],
  cta: {
    title: 'Ricevi il tuo Seeckr personalizzato entro 24 ore lavorative.',
    text: 'È gratuito e avrai qualcosa di concreto da mostrare al tuo team.',
    label: 'Ricevi gratis il tuo Seeckr personalizzato',
  },
}

export const benefits = {
  eyebrow: 'Cosa cambia',
  title: 'I tuoi clienti si sentono ascoltati. Tu vendi di più.',
  visitor: {
    label: 'Per i tuoi clienti',
    title: 'Finalmente qualcuno li ascolta.',
    paragraphs: [
      'Nessuno aveva mai chiesto loro cosa cercassero davvero. I filtri chiedono un prezzo, le schede tecniche danno per scontato che sappiano già tutto. Seeckr chiede come vivono, poi propone tre prodotti in classifica con il motivo di ogni posizione.',
      "E il punteggio non mente. Se va bene un solo prodotto, ne vedono uno solo. Se non va bene niente, l'assistente lo dice chiaramente. E parla nove lingue: ognuno legge tutto questo nella propria.",
    ],
  },
  merchant: {
    label: 'Per te',
    items: [
      {
        title: 'Vendi di più e vendi meglio.',
        text: 'Un cliente che ha dubbi se ne va. Un cliente ascoltato compra. E non se ne va con un solo prodotto, ma con tre, in classifica e motivati.',
      },
      {
        title: 'Finalmente sai chi sono i tuoi clienti.',
        text: 'Ognuno ti ha appena raccontato, con parole sue, cosa cerca, cosa ha già provato, perché ha rinunciato. È tutto lì, leggibile, conversazione per conversazione, e un report di utilizzo ne fa la sintesi da solo. Le tue buyer persona non le immagini più. Le leggi. E i messaggi che cerchi per le tue campagne, i tuoi clienti li hanno già scritti.',
      },
      {
        title: 'Spingi i tuoi prodotti prioritari, senza ingannare nessuno.',
        text: 'I tuoi prodotti prioritari vincono solo quando due prodotti si equivalgono per quel cliente. Mai a scapito della raccomandazione e mai in modo visibile. Il tuo margine cresce, la tua credibilità resta intatta.',
      },
    ],
  },
}

export const verticalsIntro = {
  eyebrow: 'Per settore',
  title:
    'Ogni settore ha le sue regole. Seeckr ha le funzionalità per ciascuno.',
}

export const faq = {
  eyebrow: 'Domande frequenti',
  title: 'Quello che forse ti stai chiedendo.',
  items: [
    {
      id: 'prix',
      question: 'Quanto costa?',
      answer:
        'Dipende dalle dimensioni del tuo catalogo, dalle funzionalità che scegli e dalle statistiche che vuoi ottenere.',
      link: 'Prenota la tua demo personalizzata e ne parliamo direttamente.',
    },
    {
      id: 'integration',
      question: 'Come si installa Seeckr sul mio sito?',
      answer:
        "Una riga di script nell'<head> e il gioco è fatto. Tutto il resto si gestisce dal back office, senza scomodare lo sviluppatore: la posizione dell'assistente sulle tue pagine e i tuoi colori.",
    },
    {
      id: 'langues',
      question: "In quali lingue parla l'assistente?",
      answer:
        "In quella dei tuoi clienti. L'assistente ne parla nove e risponde a ognuno nella propria.",
    },
    {
      id: 'donnees',
      question: 'Che fine fanno le risposte dei miei clienti?',
      answer:
        'Diventano informazioni sui clienti che il tuo motore di ricerca non ti darà mai: le statistiche, ogni conversazione leggibile per intero e un report di utilizzo che si scrive da solo. Il cliente può lasciare i suoi recapiti per essere ricontattato, ma non è obbligatorio.',
    },
    {
      id: 'seeckr-gratuit',
      question: 'Cosa comprende il Seeckr personalizzato gratuito?',
      answer:
        "Il tuo assistente, costruito sul tuo catalogo, da provare sul tuo sito. Non c'è niente da installare. Ci bastano l'indirizzo del sito, un'e-mail e un telefono aziendali.",
    },
  ],
}

export const finalCta = {
  title: 'Provalo sul tuo sito.',
  text: "Costruiamo il tuo assistente sul tuo catalogo e lo vedi lavorare sul tuo sito. È gratuito e non c'è niente da installare.",
}

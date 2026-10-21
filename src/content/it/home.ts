import type { Placement } from '@/content/types'

export const hero = {
  /** Titre de l'onglet et des résultats de recherche. */
  metaTitle:
    'Seeckr, il consulente di vendita che il tuo e-commerce non ha mai avuto',
  titleLead: 'Il consulente di vendita che il tuo',
  titleStrong: 'e-commerce non ha mai avuto.',
  subtitle:
    'Seeckr è un assistente IA che fa qualche domanda ai tuoi clienti, come farebbe un commesso in negozio, poi consiglia i prodotti del tuo catalogo adatti a ciò di cui hanno bisogno.',
  videoLabel:
    'Dimostrazione: il banner Seeckr su una scheda prodotto, la conversazione con il cliente, poi la sua top 3.',
}

export const howItWorks = {
  eyebrow: 'Come funziona',
  title: 'Basta una riga di codice per installarlo.',
  steps: [
    {
      title: 'Incolli una riga di script',
      text: "La aggiungi nell'<head> del tuo sito. I colori si impostano poi dal back office, senza ripassare dallo sviluppatore.",
    },
    {
      title: 'I tuoi clienti descrivono la loro situazione',
      text: "Non devono conoscere il nome del prodotto. Se spiegano che due volte l'anno ospitano i suoceri e che non hanno spazio per un materasso, l'assistente capisce che serve loro un divano letto.",
    },
    {
      title: 'Ricevono la loro top 3',
      text: "L'assistente propone tre prodotti in classifica, ciascuno con un punteggio di compatibilità e il motivo della sua posizione.",
    },
  ],
}

/**
 * Les emplacements possibles de l'assistant : source unique, lue par la
 * démonstration animée de l'accueil comme par la FAQ.
 */
export const integrations = {
  eyebrow: 'Integrazioni',
  title: "Scegli dove appare l'assistente sul tuo sito.",
  text: 'Le posizioni possibili sono cinque, dalla scheda prodotto alla ricerca senza risultati. Scegli dal back office, e puoi cambiarla in qualsiasi momento.',
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
      text: "Sotto il prodotto che stanno guardando, l'assistente li aiuta a verificare che sia proprio quello giusto.",
    },
    {
      id: 'barre',
      name: 'La barra in fondo allo schermo',
      text: 'Resta visibile su tutte le pagine, e il cliente può chiuderla con un clic.',
    },
    {
      id: 'apercu',
      name: 'Il pannello laterale',
      text: 'Si apre dopo qualche secondo di esitazione, con la prima domanda già posta.',
    },
    {
      id: 'sans-resultat',
      name: 'Quando la ricerca non trova nulla',
      text: "Quando la ricerca non dà alcun risultato, l'assistente subentra e propone prodotti adatti alle esigenze del cliente.",
    },
    {
      id: 'depart',
      name: 'Il popup di uscita',
      text: "Quando il cliente sta per lasciare il sito, l'assistente gli offre il suo aiuto invece di uno sconto dell'ultimo minuto.",
    },
  ] satisfies Placement[],
  cta: {
    title: 'Ricevi il tuo Seeckr personalizzato entro 24 ore lavorative.',
    text: 'È gratuito e puoi mostrarlo al tuo team.',
    label: 'Ricevi gratis il tuo Seeckr personalizzato',
  },
}

export const benefits = {
  eyebrow: 'Cosa cambia',
  title: 'I tuoi clienti sono consigliati meglio, e tu vendi di più.',
  visitor: {
    label: 'Per i tuoi clienti',
    title: 'Un consiglio adatto alla loro situazione',
    paragraphs: [
      'I filtri chiedono un budget e le schede tecniche danno per scontato che conoscano già il prodotto. Seeckr chiede invece come lo useranno, poi propone tre prodotti in classifica spiegando ogni posizione.',
      "Il punteggio resta onesto: se va bene un solo prodotto, l'assistente ne propone uno solo, e se non va bene nessuno, lo dice. L'assistente parla nove lingue e risponde a ogni cliente nella sua.",
    ],
  },
  merchant: {
    label: 'Per te',
    items: [
      {
        title: "Più vendite e meno errori d'acquisto",
        text: 'Un cliente che esita spesso finisce per lasciare il sito. Ben consigliato, sa quale prodotto scegliere, e il rischio di reso diminuisce.',
      },
      {
        title: 'Finalmente sai cosa cercano i tuoi clienti',
        text: 'Ogni visitatore ti spiega con parole sue cosa cerca e cosa lo fa esitare. Puoi rileggere ogni conversazione, e un report di utilizzo ne fa la sintesi. Abbastanza per costruire le tue buyer persona su ciò che dicono davvero i tuoi clienti, e trovare nelle loro frasi i messaggi delle tue prossime campagne.',
      },
      {
        title:
          'I tuoi prodotti prioritari in evidenza, senza falsare il consiglio',
        text: 'Un prodotto prioritario passa avanti solo quando due prodotti vanno ugualmente bene per quel cliente. Il consiglio resta corretto, e il cliente non vede questa impostazione.',
      },
    ],
  },
}

export const verticalsIntro = {
  eyebrow: 'Per settore',
  title: 'Funzionalità pensate per il tuo settore.',
}

export const faq = {
  eyebrow: 'Domande frequenti',
  title: 'Le tue domande prima di iniziare.',
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
        "Basta aggiungere una riga di script nell'<head> del tuo sito. Il resto si imposta dal back office, senza passare dallo sviluppatore: la posizione dell'assistente sulle tue pagine e i tuoi colori.",
    },
    {
      id: 'langues',
      question: "In quali lingue parla l'assistente?",
      answer:
        "L'assistente parla nove lingue e risponde a ogni cliente nella sua.",
    },
    {
      id: 'donnees',
      question: 'Che fine fanno le risposte dei miei clienti?',
      answer:
        'Le ritrovi nel back office: le statistiche, ogni conversazione per intero e un report di utilizzo generato automaticamente. Il cliente può lasciare i suoi recapiti per essere ricontattato, ma non è obbligatorio.',
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
  text: "Costruiamo il tuo assistente sul tuo catalogo e lo vedi funzionare sul tuo sito. È gratuito e non c'è niente da installare.",
}

/**
 * Le cas Algimouss, seul client que le site peut nommer.
 *
 * Leur site ne vend pas en ligne : ces chiffres mesurent le conseil, jamais
 * des ventes. Aucun chiffre ne s'ajoute à cette liste sans mesure réelle.
 *
 * Mêmes chiffres que `@/content/fr/algimouss`, seule leur écriture change.
 */
export const algimouss = {
  name: 'Algimouss',
  about:
    'Algimouss è il produttore francese che dà la caccia al muschio su tetti, facciate e terrazze: 52 prodotti, dagli antimuschio agli idrorepellenti passando per i detergenti.',
  context:
    'Il loro sito non vende nulla: Algimouss si compra nei centri fai da te e dai rivenditori edili. Questi numeri misurano quindi la consulenza, non le vendite.',
  period:
    'Numeri misurati dal lancio, in meno di due mesi, conversazioni di prova escluse.',
  figures: {
    redirected: {
      value: '1 su 3',
      label: 'visitatori riportati sul prodotto giusto',
      detail:
        '111 su 373 partiti da una scheda prodotto. Negli altri 262 casi, l’assistente ha confermato la scheda.',
    },
    conversations: {
      value: '1.298',
      label: 'visitatori consigliati in meno di due mesi',
      detail: 'Circa 26 al giorno.',
    },
    completion: {
      value: '9 su 10',
      label: 'visitatori che iniziano arrivano fino in fondo',
      detail:
        'Il 90 % di chi risponde alla prima domanda, tra l’83 e il 94 % ogni settimana.',
    },
    advice: {
      value: '626',
      label: 'consigli personalizzati',
      detail: 'Di cui 554 con almeno un prodotto.',
    },
    offHours: {
      value: '55 %',
      label: 'dei consigli dati a centralino chiuso',
      detail:
        'La sera, di notte o nel fine settimana (esclusa la fascia dalle 9 alle 18 nei giorni feriali).',
    },
    timeToAdvice: {
      value: '1 min 32 s',
      label: 'per trovare il prodotto giusto',
      detail: 'In mediana, in 5 risposte del visitatore.',
    },
    coverage: {
      value: '46 su 52',
      label: 'prodotti trovano il loro acquirente, non solo i più venduti',
      detail: 'Raccomandati almeno una volta.',
    },
  },
}

export type AlgimoussFigure = keyof typeof algimouss.figures

/**
 * La page `/cas-clients/algimouss` : Anthony Durand raconte. Mêmes phrases que
 * `@/content/fr/algimouss`, validées par lui ; seule la langue change.
 */
export const algimoussCase = {
  meta: {
    title:
      'Testimonianza Algimouss: la scommessa di un venditore su un sito vetrina',
    description:
      'Anthony Durand, direttore marketing di Algimouss, racconta perché ha messo Seeckr su un sito che non vende nulla. In meno di due mesi, un visitatore su tre è stato indirizzato verso il prodotto giusto.',
  },
  eyebrow: 'Testimonianza cliente',
  title: 'La scommessa di Algimouss.',
  intro:
    'Anthony Durand, direttore marketing di Algimouss, racconta perché ha messo un venditore su un sito che non vende nulla. E cosa è successo in meno di due mesi.',
  testimonial: {
    name: 'Anthony Durand',
    role: 'Direttore marketing, Algimouss',
    quote:
      '«Il nostro sito non vende nulla, eppure abbiamo voluto metterci un venditore. Era una scommessa: consigliare i visitatori senza mai vedere la vendita concludersi.»',
    photo: '/media/anthony-durand.png',
    photoAlt: 'Anthony Durand, direttore marketing di Algimouss',
  },
  teaserFigures: [
    'redirected',
    'offHours',
    'completion',
    'timeToAdvice',
  ] satisfies AlgimoussFigure[],
  linkLabel: 'Leggi la testimonianza Algimouss completa',
  moreLabel: 'Leggi i dettagli',
  teaser: {
    title:
      'Da Algimouss, Seeckr ha indirizzato un visitatore su tre verso il prodotto giusto.',
    intro:
      'Algimouss, produttore francese di trattamenti per tetti e facciate, ha collegato Seeckr al suo sito. In meno di due mesi:',
  },
  verticalLink: 'Scopri Seeckr per i prodotti tecnici',
  problem: {
    eyebrow: 'Perché questa scommessa',
    title: 'I nostri clienti si perdevano tra 52 prodotti.',
    quote:
      '«La mia facciata ha delle macchie nere e il colore è più chiaro rispetto all’origine.»',
    intro:
      'Il nostro sito è una vetrina: deve preparare i visitatori prima del negozio. Ma devono sapere cosa comprarci.',
    items: [
      {
        title: 'Quale prodotto?',
        text: 'Antimuschio, detergente o idrorepellente? Per tegole, ardesia o intonaco? I nostri 52 prodotti si sovrappongono, e un privato si perde in fretta.',
      },
      {
        title: 'Non le stesse parole',
        text: 'Le nostre schede dicono «biocida». I nostri clienti dicono «il mio tetto è tutto verde».',
      },
      {
        title: 'Chiuso la sera',
        text: 'La consulenza passava dal nostro centralino, in orario d’ufficio. Oggi, più di un consiglio su due viene dato la sera, di notte o nel fine settimana.',
      },
    ],
    more: [
      'Produciamo 52 prodotti: antimuschio, detergenti, trattamenti preventivi, idrorepellenti. Da un supporto all’altro, i loro usi si sovrappongono molto: tetti in tegole, ardesia o lamiera, facciate in intonaco, pietra, legno, terrazze in cemento, asfalto.',
      'Il nostro sito non vende nulla online. I nostri clienti comprano dai nostri rivenditori, nei centri fai da te o dai rivenditori edili. Devono quindi lasciare il sito sapendo esattamente quale prodotto chiedere in negozio.',
      'Le nostre schede prodotto sono scritte con le nostre parole da produttore: «biocida», «pronto all’uso», «idrorepellente colorato». I nostri clienti descrivono ciò che vedono: «il mio tetto è tutto verde», «macchie rosse sull’intonaco». In mezzo mancava qualcuno che facesse le domande giuste.',
      'Quel qualcuno era il nostro centralino. Ma risponde in orario d’ufficio, e le domande arrivano anche la sera e nel fine settimana.',
    ],
    moreQuote:
      '«Un trattamento antimuschio per tetto in ardesia con muro in pietra tenera tipo tufo.»',
  },
  setup: {
    eyebrow: 'Cosa abbiamo messo in campo',
    title: 'Una riga di script. Il resto è il nostro sapere.',
    quote:
      '«Tetto in tegole di cotto senza trattamenti da più di 15 anni, accesso difficile. Applicazione semi-professionale.»',
    items: [
      {
        title: 'Da 4 a 6 domande, una top 3',
        text: 'Supporto, materiale, sintomo, accesso, obiettivo. Poi tre prodotti in classifica, con punteggio. E se nulla va bene, l’assistente lo dice: è successo 72 volte.',
      },
      {
        title: 'Fino al negozio',
        text: 'Trova il rivenditore più vicino: quasi 100 visitatori indirizzati direttamente in negozio.',
      },
      {
        title: 'Il post-vendita al posto giusto',
        text: 'Pezzo di ricambio, nebulizzatore guasto: passa la mano al nostro post-vendita.',
      },
      {
        title: 'I nostri esperti mantengono il controllo',
        text: 'Il nostro team rilegge le conversazioni e valuta ogni raccomandazione. Lo formiamo come formeremmo un venditore: 68 conversazioni rilette finora.',
      },
    ],
    more: [
      'La messa in opera ha richiesto una riga di script, senza sviluppo da parte nostra. Il vero lavoro è il nostro sapere tecnico, ed è lì che passiamo il tempo con il team Seeckr.',
      'Ci sono due punti d’ingresso. Su ogni scheda prodotto, un banner chiede «questo prodotto fa per te?». E quando un visitatore sta per lasciare il sito, una finestra gli propone un consiglio.',
      'L’assistente fa da quattro a sei domande sulla sua situazione: supporto, materiale, sintomo, accessibilità, obiettivo. Poi conclude con una top 3 in classifica, un punteggio di compatibilità e il perché di ogni prodotto. Il primo prodotto ha un punteggio mediano del 95 %. E quando nulla va bene, lo dice invece di forzare una vendita.',
      'Su 373 consigli avviati da una scheda prodotto, ha confermato la scheda 262 volte. Le altre 111 volte, ha indirizzato il visitatore verso un prodotto più adatto di quello che stava guardando. Un visitatore su tre guardava il prodotto sbagliato.',
      'Il consiglio arriva fino al negozio: l’assistente cerca il punto vendita più vicino che vende il prodotto raccomandato. Per il post-vendita, un pezzo di ricambio o un nebulizzatore guasto, indirizza al nostro post-vendita invece di improvvisare.',
      'Dal back office, il nostro team rilegge le conversazioni e valuta ogni prodotto raccomandato, buono o no. Le nostre osservazioni tornano nel sapere tecnico dell’assistente.',
    ],
  },
  team: {
    eyebrow: 'Il team Seeckr',
    title: 'Un team che risponde in fretta.',
    text: 'Facciamo il punto ogni 15 giorni: i numeri, le conversazioni, cosa si corregge. Quando ho una nuova esigenza, ne parliamo, e l’assistente si evolve.',
    quote:
      '«Quello che apprezziamo di Seeckr è la reattività: riflettiamo insieme su come migliorare i risultati, e quando abbiamo un’esigenza, la funzionalità arriva.»',
  },
  results: {
    eyebrow: 'I risultati',
    title: 'Cosa è successo in meno di due mesi.',
    figures: [
      'conversations',
      'completion',
      'advice',
      'offHours',
      'timeToAdvice',
      'coverage',
    ] satisfies AlgimoussFigure[],
  },
  data: {
    eyebrow: 'Cosa mi hanno insegnato i dati',
    title: 'I dati che non avevamo.',
    quote:
      '«Vorrei trattare un tetto in Eternit contro il muschio senza scolorirlo.»',
    items: [
      {
        title: '9 su 10 arrivano in fondo',
        text: 'Il completamento era il primo numero che guardavo. 9 visitatori su 10 arrivano al consiglio: ben oltre quello che mi aspettavo.',
      },
      {
        title: 'Un rivenditore vicino a ogni cliente',
        text: '98 ricerche di negozio. Vedo dove sono i nostri clienti, e che hanno un rivenditore vicino. Mi ha rassicurato sulla nostra rete.',
      },
      {
        title: 'Cosa cercano davvero i nostri clienti',
        text: 'Ogni conversazione si rilegge per intero: il materiale, il problema, cosa il cliente ha già provato.',
      },
    ],
    more: [
      'Il completamento era il primo numero che guardavo: il 90 % dei visitatori che rispondono alla prima domanda arriva fino alla raccomandazione. E tiene settimana dopo settimana, tra l’83 e il 94 %.',
      '626 raccomandazioni personalizzate, di cui 554 con almeno un prodotto. Più di una su due (55 %) è stata data la sera, di notte o nel fine settimana, a centralino chiuso. Sono domande che prima aspettavano il lunedì mattina, o non tornavano più.',
      '46 dei nostri 52 prodotti sono stati raccomandati almeno una volta. La consulenza non spinge solo i più venduti: fa lavorare tutto il catalogo.',
      '98 ricerche di punto vendita avviate dall’assistente. Per noi che vendiamo tramite rivenditori, è una mappa della domanda: vedo dove sono i nostri clienti e se trovano un negozio vicino.',
      'E ogni conversazione si rilegge per intero nel back office: cosa ha descritto il visitatore, cosa ha risposto, cosa gli abbiamo raccomandato.',
    ],
  },
  voices: {
    eyebrow: 'Cosa scrivono i nostri visitatori',
    title:
      'Descrivono il loro problema con le loro parole, non con quelle delle nostre schede.',
    intro:
      'I primi messaggi dei nostri visitatori, tradotti dal francese. L’ultimo era stato consigliato male in negozio: l’assistente lo ha recuperato.',
    quotes: [
      '«Cerco un prodotto per pulire la mia terrazza in graniglia, innocuo per i cani.»',
      '«Cerco un prodotto per eliminare il muschio (non solo lo sporco verde ma proprio muschio e anche una specie di piccole felci) su un tetto in lose (scisto) nelle Cevenne.»',
      '«Ho comprato Algimouss per la mia terrazza su consiglio del vostro rivenditore, e vedo sul vostro sito che è fatto per tetti e facciate: posso usarlo sul mio pavimento in moquette di pietra?»',
    ],
    /** La phrase qui conclut les trois messages. */
    closing:
      'Vendere è sapersi interessare alla vita del proprio potenziale cliente.',
  },
  quoteCaption: 'Uno dei nostri visitatori, messaggio tradotto dal francese',
  ctaTitle: 'Il tuo catalogo merita lo stesso consulente.',
}

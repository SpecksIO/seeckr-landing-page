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
    'Misure dal 2 settembre al 21 ottobre 2026, conversazioni di prova escluse.',
  figures: {
    redirected: {
      value: '1 su 3',
      label: 'visitatori riportati sul prodotto giusto',
      detail:
        '111 su 373 partiti da una scheda prodotto. Negli altri 262 casi, l’assistente ha confermato la scheda.',
    },
    conversations: {
      value: '1.298',
      label: 'visitatori consigliati in 7 settimane',
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
 * La page `/cas-clients/algimouss`. Elle ne fait que mettre en scène les
 * chiffres ci-dessus : aucune affirmation qui ne s'y lise déjà.
 */
export const algimoussCase = {
  meta: {
    title: 'Caso studio Algimouss: un venditore su un sito vetrina',
    description:
      'Algimouss produce 52 prodotti per tetti, facciate e terrazze. In sette settimane, l’assistente Seeckr ha indirizzato un visitatore su tre verso il prodotto giusto, spesso la sera e nel fine settimana.',
  },
  eyebrow: 'Caso studio Algimouss',
  title: 'La scommessa di Algimouss.',
  intro:
    'Sette settimane dopo, un visitatore su tre era stato riportato sul prodotto giusto prima di andare a comprarlo.',
  /**
   * Citation proposée, PAS ENCORE SIGNÉE par Anthony Durand : la page ne
   * l'affiche qu'en développement. Après son accord écrit, retirer la
   * condition dans la page du cas.
   */
  testimonial: {
    name: 'Anthony Durand',
    role: 'Direttore marketing, Algimouss',
    quote:
      '«Il nostro sito non vende nulla, eppure abbiamo voluto metterci un venditore. Era una scommessa: consigliare i visitatori senza mai vedere la vendita concludersi.»',
    photo: '/media/anthony-durand.png',
    photoAlt: 'Anthony Durand, direttore marketing di Algimouss',
  },
  /** Le chiffre mis en avant dès le haut de la page. */
  highlight: 'offHours' as AlgimoussFigure,
  /** Les chiffres que les autres pages montrent avant de renvoyer ici. */
  teaserFigures: [
    'redirected',
    'offHours',
    'completion',
    'timeToAdvice',
  ] satisfies AlgimoussFigure[],
  linkLabel: 'Leggi il caso Algimouss completo',
  /** Le bouton qui déplie le détail de chaque section du récit. */
  moreLabel: 'Leggi i dettagli',
  /** Le cas tel que l'accueil et la verticale le présentent. */
  teaser: {
    title:
      'Da Algimouss, Seeckr ha riportato un visitatore su tre sul prodotto giusto.',
    intro:
      'Algimouss, produttore francese di trattamenti per tetti e facciate, ha collegato Seeckr al suo sito a settembre. Sette settimane dopo:',
  },
  /** Lien vers leur verticale, `@/content/verticals`. */
  verticalLink: 'Scopri Seeckr per i prodotti tecnici',
  problem: {
    eyebrow: 'Perché questa scommessa',
    title: 'Visitatori persi tra 52 prodotti.',
    quote:
      '«La mia facciata ha delle macchie nere e il colore è più chiaro rispetto all’origine.»',
    intro:
      'Il sito di Algimouss deve preparare i visitatori prima del negozio. Ma devono sapere cosa comprarci.',
    items: [
      {
        title: 'Quale prodotto?',
        text: 'Antimuschio, detergente o idrorepellente? Per tegole, ardesia o intonaco? I 52 prodotti si sovrappongono.',
      },
      {
        title: 'Non le stesse parole',
        text: 'La scheda dice «biocida». Il visitatore dice «il mio tetto è tutto verde».',
      },
      {
        title: 'Chiuso la sera',
        text: 'La consulenza passava dal centralino, in orario d’ufficio. Eppure più di un consiglio su due viene dato la sera, di notte o nel fine settimana.',
      },
    ],
    more: [
      'Algimouss produce 52 prodotti: antimuschio, detergenti, trattamenti preventivi, idrorepellenti. Da un supporto all’altro, i loro usi si sovrappongono molto: tetti in tegole, ardesia o lamiera, facciate in intonaco, pietra, legno, terrazze in cemento, asfalto.',
      'Il sito non vende nulla online. La vendita avviene presso i rivenditori, nei centri fai da te o dai rivenditori edili. Il visitatore deve quindi lasciare il sito sapendo esattamente quale prodotto chiedere in negozio.',
      'Le schede prodotto sono scritte con le parole del produttore: «biocida», «pronto all’uso», «idrorepellente colorato». Il visitatore descrive ciò che vede: «il mio tetto è tutto verde», «macchie rosse sull’intonaco». In mezzo mancava qualcuno che facesse le domande giuste.',
      'Quel qualcuno esisteva: il centralino di Algimouss. Ma risponde in orario d’ufficio, e le domande arrivano anche la sera e nel fine settimana.',
    ],
    moreQuote:
      '«Un trattamento antimuschio per tetto in ardesia con muro in pietra tenera tipo tufo.»',
  },
  setup: {
    eyebrow: 'Cosa è stato messo in campo',
    title: 'Una riga di script. Il resto è il sapere di Algimouss.',
    quote:
      '«Tetto in tegole di cotto senza trattamenti da più di 15 anni, accesso difficile. Applicazione semi-professionale.»',
    items: [
      {
        title: 'Da 4 a 6 domande, una top 3',
        text: 'Supporto, materiale, sintomo, accesso, obiettivo. Poi tre prodotti in classifica, con punteggio. Se nulla va bene, lo dice (72 casi).',
      },
      {
        title: 'Fino al negozio',
        text: 'Trova il rivenditore più vicino: quasi 100 visitatori indirizzati direttamente in negozio.',
      },
      {
        title: 'Il post-vendita al posto giusto',
        text: 'Pezzo di ricambio, nebulizzatore guasto: passa la mano al post-vendita.',
      },
      {
        title: 'Gli esperti mantengono il controllo',
        text: 'Il team Algimouss rilegge le conversazioni e valuta ogni raccomandazione. 68 conversazioni rilette, e ogni osservazione corregge l’assistente.',
      },
    ],
    more: [
      'Due punti d’ingresso. Su ogni scheda prodotto, un banner chiede «questo prodotto fa per te?». E quando il visitatore sta per lasciare il sito, una finestra gli propone un consiglio.',
      'Da quattro a sei domande sulla sua situazione: supporto, materiale, sintomo, accessibilità, obiettivo. L’assistente conclude con una top 3 in classifica, un punteggio di compatibilità e il perché di ogni prodotto. Il primo prodotto ha un punteggio mediano del 95 %. Quando nulla va bene, lo dice invece di forzare una vendita: 72 volte in sette settimane.',
      'Su 373 consigli avviati da una scheda prodotto, l’assistente ha confermato la scheda 262 volte. Le altre 111 volte, ha indirizzato il visitatore verso un prodotto più adatto di quello che stava guardando.',
      'Il consiglio arriva fino al negozio: l’assistente cerca il punto vendita più vicino che vende il prodotto raccomandato. Per il post-vendita, un pezzo di ricambio o un nebulizzatore guasto, indirizza al servizio post-vendita invece di improvvisare.',
      'Dal back office, il team Algimouss rilegge le conversazioni e valuta ogni prodotto raccomandato, buono o no. Le loro osservazioni tornano nel sapere tecnico dell’assistente: 68 conversazioni rilette e valutate dal lancio.',
    ],
  },
  /**
   * La section sur l'équipe Seeckr. Sa citation n'est PAS ENCORE SIGNÉE
   * par Anthony Durand : la page ne l'affiche qu'en développement.
   */
  team: {
    eyebrow: 'Il team Seeckr',
    title: 'Un team che risponde in fretta.',
    text: 'Un incontro con Algimouss ogni 15 giorni: i numeri, le conversazioni, cosa si corregge. Una nuova esigenza? Ne parliamo, e l’assistente si evolve.',
    quote:
      '«Quello che apprezziamo di Seeckr è la reattività: riflettiamo insieme su come migliorare i risultati, e quando abbiamo un’esigenza, la funzionalità arriva.»',
  },
  results: {
    eyebrow: 'I risultati',
    title: 'I numeri dopo sette settimane.',
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
    eyebrow: 'Cosa insegnano i dati ad Algimouss',
    title: 'I dati che Algimouss non aveva.',
    quote:
      '«Vorrei trattare un tetto in Eternit contro il muschio senza scolorirlo.»',
    items: [
      {
        title: '9 su 10 arrivano in fondo',
        text: 'Il tasso di completamento era l’indicatore che Algimouss seguiva. Tiene ogni settimana, tra l’83 e il 94 %.',
      },
      {
        title: 'Un rivenditore vicino a ogni cliente',
        text: '98 ricerche di negozio: Algimouss vede dove sono i suoi clienti e se un rivenditore è vicino.',
      },
      {
        title: 'Cosa cercano davvero i nostri clienti',
        text: 'Ogni conversazione si rilegge per intero: il materiale, il problema, cosa il cliente ha già provato.',
      },
    ],
    more: [
      'Il primo numero che Algimouss seguiva: il completamento. Nel periodo, il 90 % dei visitatori che rispondono alla prima domanda arriva fino alla raccomandazione. Settimana dopo settimana, il tasso resta tra l’83 e il 94 %.',
      '626 raccomandazioni personalizzate in sette settimane, di cui 554 con almeno un prodotto. Più di una su due (55 %) è stata data la sera, di notte o nel fine settimana, esclusa la fascia dalle 9 alle 18 nei giorni feriali.',
      '46 dei 52 prodotti del catalogo sono stati raccomandati almeno una volta. La consulenza non spinge solo i più venduti: fa lavorare tutto il catalogo.',
      '98 ricerche di punto vendita avviate dall’assistente. Per un produttore che vende tramite rivenditori, è una mappa della domanda: dove sono i suoi clienti e se trovano un negozio vicino.',
      'Ogni conversazione si rilegge per intero nel back office: cosa ha descritto il visitatore, cosa ha risposto, cosa gli è stato raccomandato.',
    ],
  },
  /** Trois messages de visiteurs qui, lus à la suite, racontent le cas. */
  voices: {
    eyebrow: 'Cosa scrivono i loro visitatori',
    title:
      'Descrivono il loro problema con le loro parole, non con quelle della scheda.',
    intro:
      'Primi messaggi dei visitatori, tradotti dal francese e anonimi. L’ultimo era stato consigliato male in negozio: l’assistente lo ha recuperato.',
    quotes: [
      '«Cerco un prodotto per pulire la mia terrazza in graniglia, innocuo per i cani.»',
      '«Cerco un prodotto per eliminare il muschio (non solo lo sporco verde ma proprio muschio e anche una specie di piccole felci) su un tetto in lose (scisto) nelle Cevenne.»',
      '«Ho comprato Algimouss per la mia terrazza su consiglio del vostro rivenditore, e vedo sul vostro sito che è fatto per tetti e facciate: posso usarlo sul mio pavimento in moquette di pietra?»',
    ],
  },
  /** Sous chaque citation de visiteur. */
  quoteCaption: 'Un visitatore, messaggio tradotto dal francese',
  ctaTitle: 'Il tuo catalogo merita lo stesso consulente.',
}

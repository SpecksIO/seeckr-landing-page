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
    'Algimouss es el fabricante francés que persigue el musgo en tejados, fachadas y terrazas: 52 productos, de los antimusgo a los hidrofugantes, pasando por los limpiadores.',
  context:
    'Su web no vende nada: Algimouss se compra en grandes superficies de bricolaje y almacenes de materiales. Así que estas cifras miden la recomendación, no las ventas.',
  period:
    'Mediciones del 2 de septiembre al 21 de octubre de 2026, sin contar las conversaciones de prueba.',
  figures: {
    redirected: {
      value: '1 de cada 3',
      label: 'visitantes devueltos al producto adecuado',
      detail:
        '111 de 373 que entraron por una ficha de producto. En los otros 262 casos, el asistente confirmó la ficha.',
    },
    conversations: {
      value: '1298',
      label: 'visitantes asesorados en 7 semanas',
      detail: 'Unos 26 al día.',
    },
    completion: {
      value: '9 de cada 10',
      label: 'visitantes que empiezan llegan hasta el final',
      detail:
        'El 90 % de quienes responden a la primera pregunta, entre el 83 y el 94 % cada semana.',
    },
    advice: {
      value: '626',
      label: 'recomendaciones personalizadas',
      detail: '554 de ellas con al menos un producto.',
    },
    offHours: {
      value: '55 %',
      label: 'de las recomendaciones, con el teléfono de atención cerrado',
      detail:
        'Por la tarde, de noche o el fin de semana (fuera del horario de 9 h a 18 h entre semana).',
    },
    timeToAdvice: {
      value: '1 min 32 s',
      label: 'para encontrar el producto adecuado',
      detail: 'Mediana, en 5 respuestas del visitante.',
    },
    coverage: {
      value: '46 de 52',
      label: 'productos encuentran comprador, no solo los más vendidos',
      detail: 'Recomendados al menos una vez.',
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
    title: 'Caso de éxito Algimouss: un vendedor en una web escaparate',
    description:
      'Algimouss fabrica 52 productos para tejados, fachadas y terrazas. En siete semanas, el asistente de Seeckr reorientó a uno de cada tres visitantes hacia el producto adecuado, a menudo por la tarde y el fin de semana.',
  },
  eyebrow: 'Caso de éxito Algimouss',
  title: 'La apuesta de Algimouss.',
  intro:
    'Siete semanas después, uno de cada tres visitantes había vuelto al producto adecuado antes de ir a comprarlo.',
  /**
   * Citation proposée, PAS ENCORE SIGNÉE par Anthony Durand : la page ne
   * l'affiche qu'en développement. Après son accord écrit, retirer la
   * condition dans la page du cas.
   */
  testimonial: {
    name: 'Anthony Durand',
    role: 'Director de marketing, Algimouss',
    quote:
      '«Nuestra web no vende nada, y aun así quisimos poner un vendedor en ella. Era una apuesta: asesorar a los visitantes sin ver nunca cerrarse la venta.»',
    photo: '/media/anthony-durand.png',
    photoAlt: 'Anthony Durand, director de marketing de Algimouss',
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
  linkLabel: 'Leer el caso Algimouss completo',
  /** Le bouton qui déplie le détail de chaque section du récit. */
  moreLabel: 'Leer el detalle',
  /** Le cas tel que l'accueil et la verticale le présentent. */
  teaser: {
    title:
      'En Algimouss, Seeckr devolvió a uno de cada tres visitantes al producto adecuado.',
    intro:
      'Algimouss, fabricante francés de tratamientos para tejados y fachadas, conectó Seeckr a su web en septiembre. Siete semanas después:',
  },
  /** Lien vers leur verticale, `@/content/verticals`. */
  verticalLink: 'Ver Seeckr para productos técnicos',
  problem: {
    eyebrow: 'Por qué esta apuesta',
    title: 'Visitantes perdidos entre 52 productos.',
    quote:
      '«Mi fachada tiene manchas negras y el color es más claro que el original.»',
    intro:
      'La web de Algimouss tiene que preparar a sus visitantes antes de la tienda. Aún hace falta que sepan qué comprar allí.',
    items: [
      {
        title: '¿Qué producto?',
        text: '¿Antimusgo, limpiador o hidrofugante? ¿Para teja, pizarra o revoco? Los 52 productos se solapan.',
      },
      {
        title: 'No las mismas palabras',
        text: 'La ficha dice «biocida». El visitante dice «mi tejado está todo verde».',
      },
      {
        title: 'Cerrado por la tarde',
        text: 'La recomendación pasaba por el teléfono, en horario de oficina. Y más de una de cada dos se da por la tarde, de noche o el fin de semana.',
      },
    ],
    more: [
      'Algimouss fabrica 52 productos: antimusgo, limpiadores, tratamientos preventivos, hidrofugantes. De un soporte a otro, sus usos se solapan mucho: tejado de teja, pizarra o chapa, fachada de revoco, piedra, madera, terraza de hormigón, asfalto.',
      'La web no vende nada online. La venta se hace en los distribuidores, en grandes superficies de bricolaje o almacenes de materiales. El visitante tiene que salir de la web sabiendo exactamente qué producto pedir en la tienda.',
      'Las fichas de producto están escritas con las palabras del fabricante: «biocida», «listo para usar», «hidrofugante coloreado». El visitante describe lo que ve: «mi tejado está todo verde», «manchas rojas en el revoco». Entre ambos faltaba alguien que hiciera las preguntas adecuadas.',
      'Ese alguien existía: el teléfono de atención de Algimouss. Pero responde en horario de oficina, y las preguntas también llegan por la tarde y el fin de semana.',
    ],
    moreQuote:
      '«Un tratamiento antimusgo para tejado de pizarra con muro de piedra blanda tipo toba.»',
  },
  setup: {
    eyebrow: 'Lo que se puso en marcha',
    title: 'Una línea de script. Lo demás es el saber de Algimouss.',
    quote:
      '«Tejado de teja de barro sin tratar desde hace más de 15 años, acceso difícil. Aplicación semiprofesional.»',
    items: [
      {
        title: 'De 4 a 6 preguntas, un top 3',
        text: 'Soporte, material, síntoma, acceso, objetivo. Después, tres productos clasificados y puntuados. Si nada encaja, lo dice (72 casos).',
      },
      {
        title: 'Hasta la tienda',
        text: 'Encuentra el distribuidor más cercano: casi 100 visitantes enviados directamente a la tienda.',
      },
      {
        title: 'La posventa, en su sitio',
        text: 'Pieza de recambio, pulverizador averiado: pasa el testigo a la posventa.',
      },
      {
        title: 'Los expertos mantienen el control',
        text: 'El equipo de Algimouss relee las conversaciones y valora cada recomendación. 68 conversaciones releídas, y cada comentario corrige al asistente.',
      },
    ],
    more: [
      'Dos puntos de entrada. En cada ficha de producto, un banner pregunta «¿es este producto para ti?». Y cuando el visitante está a punto de irse, una ventana le propone asesorarle.',
      'De cuatro a seis preguntas sobre su situación: soporte, material, síntoma, accesibilidad, objetivo. El asistente concluye con un top 3 clasificado, una puntuación de compatibilidad y el porqué de cada producto. El primer producto tiene una puntuación mediana del 95 %. Cuando nada encaja, lo dice en lugar de forzar una venta: 72 veces en siete semanas.',
      'De 373 recomendaciones iniciadas desde una ficha de producto, el asistente confirmó la ficha 262 veces. Las otras 111, orientó al visitante hacia un producto más adecuado que el que estaba mirando.',
      'La recomendación llega hasta la tienda: el asistente busca el punto de venta más cercano que vende el producto recomendado. Para la posventa, una pieza de recambio o un pulverizador averiado, orienta al servicio posventa en lugar de improvisar.',
      'Desde el back office, el equipo de Algimouss relee conversaciones y valora cada producto recomendado, bueno o no. Sus comentarios vuelven al saber técnico del asistente: 68 conversaciones releídas y valoradas desde el lanzamiento.',
    ],
  },
  /**
   * La section sur l'équipe Seeckr. Sa citation n'est PAS ENCORE SIGNÉE
   * par Anthony Durand : la page ne l'affiche qu'en développement.
   */
  team: {
    eyebrow: 'El equipo Seeckr',
    title: 'Un equipo que responde rápido.',
    text: 'Una reunión con Algimouss cada 15 días: las cifras, las conversaciones, lo que se corrige. ¿Una nueva necesidad? Lo hablamos y el asistente evoluciona.',
    quote:
      '«Lo que valoramos de Seeckr es su reactividad: pensamos juntos cómo mejorar los resultados, y cuando tenemos una necesidad, la funcionalidad llega.»',
  },
  results: {
    eyebrow: 'Los resultados',
    title: 'Las cifras tras siete semanas.',
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
    eyebrow: 'Lo que los datos enseñan a Algimouss',
    title: 'Los datos que Algimouss no tenía.',
    quote:
      '«Quiero tratar un tejado de Eternit contra el musgo sin decolorarlo.»',
    items: [
      {
        title: '9 de cada 10 llegan al final',
        text: 'La tasa de finalización era el indicador que seguía Algimouss. Se mantiene cada semana, entre el 83 y el 94 %.',
      },
      {
        title: 'Un distribuidor cerca de cada cliente',
        text: '98 búsquedas de tienda: Algimouss ve dónde están sus clientes y si tienen un distribuidor cerca.',
      },
      {
        title: 'Lo que buscan de verdad nuestros clientes',
        text: 'Cada conversación se puede leer entera: el material, el problema, lo que el cliente ya ha probado.',
      },
    ],
    more: [
      'La primera cifra que seguía Algimouss: la finalización. En el periodo, el 90 % de los visitantes que responden a la primera pregunta llegan a la recomendación. Semana tras semana, la tasa se mantiene entre el 83 y el 94 %.',
      '626 recomendaciones personalizadas en siete semanas, 554 de ellas con al menos un producto. Más de una de cada dos (55 %) se dio por la tarde, de noche o el fin de semana, fuera del horario de 9 h a 18 h entre semana.',
      '46 de los 52 productos del catálogo se recomendaron al menos una vez. La recomendación no empuja solo los más vendidos: pone a trabajar todo el catálogo.',
      '98 búsquedas de punto de venta lanzadas desde el asistente. Para un fabricante que vende a través de distribuidores, es un mapa de la demanda: dónde están sus clientes y si encuentran una tienda cerca.',
      'Cada conversación se puede leer entera en el back office: lo que describió el visitante, lo que respondió y lo que se le recomendó.',
    ],
  },
  /** Trois messages de visiteurs qui, lus à la suite, racontent le cas. */
  voices: {
    eyebrow: 'Lo que escriben sus visitantes',
    title: 'Describen su problema con sus palabras, no con las de la ficha.',
    intro:
      'Primeros mensajes de visitantes, traducidos del francés y anónimos. Al último lo habían asesorado mal en la tienda: el asistente llegó a tiempo.',
    quotes: [
      '«Busco un producto para limpiar mi terraza de árido, inofensivo para los perros.»',
      '«Busco un producto para acabar con el musgo (no solo suciedad verde, sino musgo de verdad y también una especie de helechos pequeños) en un tejado de losas de pizarra (esquisto) en las Cevenas.»',
      '«Compré Algimouss para mi terraza por consejo de vuestro distribuidor, y veo en vuestra web que es para tejados y fachadas: ¿puedo usarlo en mi moqueta de piedra?»',
    ],
  },
  /** Sous chaque citation de visiteur. */
  quoteCaption: 'Un visitante, mensaje traducido del francés',
  ctaTitle: 'Tu catálogo merece el mismo asesor.',
}

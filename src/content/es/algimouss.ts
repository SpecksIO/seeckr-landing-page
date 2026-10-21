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
    'Cifras medidas desde el lanzamiento, en menos de dos meses, sin contar las conversaciones de prueba.',
  figures: {
    redirected: {
      value: '1 de cada 3',
      label: 'visitantes devueltos al producto adecuado',
      detail:
        '111 de 373 que entraron por una ficha de producto. En los otros 262 casos, el asistente confirmó la ficha.',
    },
    conversations: {
      value: '1298',
      label: 'visitantes asesorados en menos de dos meses',
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
 * La page `/cas-clients/algimouss` : Anthony Durand raconte. Mêmes phrases que
 * `@/content/fr/algimouss`, validées par lui ; seule la langue change.
 */
export const algimoussCase = {
  meta: {
    title:
      'Testimonio Algimouss: la apuesta de un vendedor en una web escaparate',
    description:
      'Anthony Durand, director de marketing de Algimouss, cuenta por qué puso Seeckr en una web que no vende nada. En menos de dos meses, uno de cada tres visitantes fue reorientado hacia el producto adecuado.',
  },
  eyebrow: 'Testimonio de cliente',
  title: 'La apuesta de Algimouss.',
  intro:
    'Anthony Durand, director de marketing de Algimouss, cuenta por qué puso un vendedor en una web que no vende nada. Y lo que pasó en menos de dos meses.',
  testimonial: {
    name: 'Anthony Durand',
    role: 'Director de marketing, Algimouss',
    quote:
      '«Nuestra web no vende nada, y aun así quisimos poner un vendedor en ella. Era una apuesta: asesorar a los visitantes sin ver nunca cerrarse la venta.»',
    photo: '/media/anthony-durand.png',
    photoAlt: 'Anthony Durand, director de marketing de Algimouss',
  },
  teaserFigures: [
    'redirected',
    'offHours',
    'completion',
    'timeToAdvice',
  ] satisfies AlgimoussFigure[],
  linkLabel: 'Leer el testimonio de Algimouss completo',
  moreLabel: 'Leer el detalle',
  teaser: {
    title:
      'En Algimouss, Seeckr reorientó a uno de cada tres visitantes hacia el producto adecuado.',
    intro:
      'Algimouss, fabricante francés de tratamientos para tejados y fachadas, conectó Seeckr a su web. En menos de dos meses:',
  },
  verticalLink: 'Ver Seeckr para productos técnicos',
  problem: {
    eyebrow: 'Por qué esta apuesta',
    title: 'Nuestros clientes se perdían entre 52 productos.',
    quote:
      '«Mi fachada tiene manchas negras y el color es más claro que el original.»',
    intro:
      'Nuestra web es un escaparate: tiene que preparar a nuestros visitantes antes de la tienda. Aún hace falta que sepan qué comprar allí.',
    items: [
      {
        title: '¿Qué producto?',
        text: '¿Antimusgo, limpiador o hidrofugante? ¿Para teja, pizarra o revoco? Nuestros 52 productos se solapan, y un particular se pierde enseguida.',
      },
      {
        title: 'No las mismas palabras',
        text: 'Nuestras fichas dicen «biocida». Nuestros clientes dicen «mi tejado está todo verde».',
      },
      {
        title: 'Cerrado por la tarde',
        text: 'La recomendación pasaba por nuestro teléfono, en horario de oficina. Hoy, más de una de cada dos se da por la tarde, de noche o el fin de semana.',
      },
    ],
    more: [
      'Fabricamos 52 productos: antimusgo, limpiadores, tratamientos preventivos, hidrofugantes. De un soporte a otro, sus usos se solapan mucho: tejado de teja, pizarra o chapa, fachada de revoco, piedra, madera, terraza de hormigón, asfalto.',
      'Nuestra web no vende nada online. Nuestros clientes compran en nuestros distribuidores, en grandes superficies de bricolaje o almacenes de materiales. Tienen que salir de la web sabiendo exactamente qué producto pedir en la tienda.',
      'Nuestras fichas de producto están escritas con nuestras palabras de fabricante: «biocida», «listo para usar», «hidrofugante coloreado». Nuestros clientes describen lo que ven: «mi tejado está todo verde», «manchas rojas en el revoco». Entre ambos faltaba alguien que hiciera las preguntas adecuadas.',
      'Ese alguien era nuestro teléfono de atención. Pero responde en horario de oficina, y las preguntas también llegan por la tarde y el fin de semana.',
    ],
    moreQuote:
      '«Un tratamiento antimusgo para tejado de pizarra con muro de piedra blanda tipo toba.»',
  },
  setup: {
    eyebrow: 'Lo que pusimos en marcha',
    title: 'Una línea de script. Lo demás es nuestro saber.',
    quote:
      '«Tejado de teja de barro sin tratar desde hace más de 15 años, acceso difícil. Aplicación semiprofesional.»',
    items: [
      {
        title: 'De 4 a 6 preguntas, un top 3',
        text: 'Soporte, material, síntoma, acceso, objetivo. Después, tres productos clasificados y puntuados. Y si nada encaja, el asistente lo dice: ha pasado 72 veces.',
      },
      {
        title: 'Hasta la tienda',
        text: 'Encuentra el distribuidor más cercano: casi 100 visitantes enviados directamente a la tienda.',
      },
      {
        title: 'La posventa, en su sitio',
        text: 'Pieza de recambio, pulverizador averiado: pasa el testigo a nuestra posventa.',
      },
      {
        title: 'Nuestros expertos mantienen el control',
        text: 'Nuestro equipo relee las conversaciones y valora cada recomendación. Lo formamos como formaríamos a un vendedor: 68 conversaciones releídas hasta hoy.',
      },
    ],
    more: [
      'La puesta en marcha llevó una línea de script, sin desarrollo por nuestra parte. El trabajo de verdad es nuestro saber técnico, y es ahí donde pasamos el tiempo con el equipo de Seeckr.',
      'Hay dos puntos de entrada. En cada ficha de producto, un banner pregunta «¿es este producto para ti?». Y cuando un visitante está a punto de irse, una ventana le propone asesorarle.',
      'El asistente hace de cuatro a seis preguntas sobre su situación: soporte, material, síntoma, accesibilidad, objetivo. Después concluye con un top 3 clasificado, una puntuación de compatibilidad y el porqué de cada producto. El primer producto tiene una puntuación mediana del 95 %. Y cuando nada encaja, lo dice en lugar de forzar una venta.',
      'De 373 recomendaciones iniciadas desde una ficha de producto, confirmó la ficha 262 veces. Las otras 111, orientó al visitante hacia un producto más adecuado que el que estaba mirando. Uno de cada tres visitantes miraba el producto equivocado.',
      'La recomendación llega hasta la tienda: el asistente busca el punto de venta más cercano que vende el producto recomendado. Para la posventa, una pieza de recambio o un pulverizador averiado, orienta a nuestra posventa en lugar de improvisar.',
      'Desde el back office, nuestro equipo relee conversaciones y valora cada producto recomendado, bueno o no. Nuestros comentarios vuelven al saber técnico del asistente.',
    ],
  },
  team: {
    eyebrow: 'El equipo Seeckr',
    title: 'Un equipo que responde rápido.',
    text: 'Hacemos balance cada 15 días: las cifras, las conversaciones, lo que se corrige. Cuando tengo una nueva necesidad, lo hablamos y el asistente evoluciona.',
    quote:
      '«Lo que valoramos de Seeckr es su reactividad: pensamos juntos cómo mejorar los resultados, y cuando tenemos una necesidad, la funcionalidad llega.»',
  },
  results: {
    eyebrow: 'Los resultados',
    title: 'Lo que pasó en menos de dos meses.',
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
    eyebrow: 'Lo que me enseñaron los datos',
    title: 'Los datos que no teníamos.',
    quote:
      '«Quiero tratar un tejado de Eternit contra el musgo sin decolorarlo.»',
    items: [
      {
        title: '9 de cada 10 llegan al final',
        text: 'La finalización era la primera cifra que miraba. 9 visitantes de cada 10 llegan a la recomendación: mucho más de lo que esperaba.',
      },
      {
        title: 'Un distribuidor cerca de cada cliente',
        text: '98 búsquedas de tienda. Veo dónde están nuestros clientes, y que tienen un distribuidor cerca. Eso me tranquilizó sobre nuestra red.',
      },
      {
        title: 'Lo que buscan de verdad nuestros clientes',
        text: 'Cada conversación se puede leer entera: el material, el problema, lo que el cliente ya ha probado.',
      },
    ],
    more: [
      'La finalización era la primera cifra que miraba: el 90 % de los visitantes que responden a la primera pregunta llegan a la recomendación. Y se mantiene semana tras semana, entre el 83 y el 94 %.',
      '626 recomendaciones personalizadas, 554 de ellas con al menos un producto. Más de una de cada dos (55 %) se dio por la tarde, de noche o el fin de semana, con nuestro teléfono cerrado. Son preguntas que antes esperaban al lunes por la mañana, o no volvían nunca.',
      '46 de nuestros 52 productos se recomendaron al menos una vez. La recomendación no empuja solo los más vendidos: pone a trabajar todo el catálogo.',
      '98 búsquedas de punto de venta lanzadas desde el asistente. Para nosotros, que vendemos a través de distribuidores, es un mapa de la demanda: veo dónde están nuestros clientes y si encuentran una tienda cerca.',
      'Y cada conversación se puede leer entera en el back office: lo que describió el visitante, lo que respondió, lo que le recomendamos.',
    ],
  },
  voices: {
    eyebrow: 'Lo que escriben nuestros visitantes',
    title:
      'Describen su problema con sus palabras, no con las de nuestras fichas.',
    intro:
      'Los primeros mensajes de nuestros visitantes, traducidos del francés. Al último lo habían asesorado mal en la tienda: el asistente llegó a tiempo.',
    quotes: [
      '«Busco un producto para limpiar mi terraza de árido, inofensivo para los perros.»',
      '«Busco un producto para acabar con el musgo (no solo suciedad verde, sino musgo de verdad y también una especie de helechos pequeños) en un tejado de losas de pizarra (esquisto) en las Cevenas.»',
      '«Compré Algimouss para mi terraza por consejo de vuestro distribuidor, y veo en vuestra web que es para tejados y fachadas: ¿puedo usarlo en mi moqueta de piedra?»',
    ],
    /** La phrase qui conclut les trois messages. */
    closing: 'Vender es saber interesarse por la vida de tu cliente potencial.',
  },
  quoteCaption: 'Uno de nuestros visitantes, mensaje traducido del francés',
  ctaTitle: 'Tu catálogo merece el mismo asesor.',
}

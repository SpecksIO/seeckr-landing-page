/**
 * Le cas Algimouss, seul client que le site peut nommer.
 *
 * Leur site ne vend pas en ligne : ces chiffres mesurent le conseil, jamais
 * des ventes. Aucun chiffre ne s'ajoute à cette liste sans mesure réelle.
 *
 * Tous proviennent des mesures Algimouss du 2 au 20 septembre 2026, soit
 * 19 jours depuis la mise en ligne. Le site ne publie plus cette période :
 * elle reste ici pour que personne n'oublie d'où sortent les chiffres.
 */
export const algimouss = {
  name: 'Algimouss',
  about:
    'Algimouss fabrica tratamientos para tejados, fachadas, terrazas y caminos.',
  context:
    'Su web no vende online: sus clientes compran en puntos de venta. Por eso estas cifras miden las recomendaciones, no las ventas.',
  figures: {
    trend: {
      value: 'del 39 % al 48 %',
      label:
        'de conversaciones que llegan hasta la recomendación, de la primera a la tercera semana',
    },
    firstAnswer: {
      value: '9 de cada 10',
      label:
        'visitantes que responden a la primera pregunta llegan hasta la recomendación',
      detail:
        'entre el 85 % y el 92 % según las mediciones: las preguntas dan en el clavo',
    },
    productPage: {
      value: '180 de 297',
      label:
        'conversaciones iniciadas desde una ficha de producto terminan con una recomendación',
      detail: 'es decir, el 61 %',
    },
    exitIntent: {
      value: '229',
      label:
        'visitantes que salían de la página hicieron clic en «Empezar» en el pop-up de salida',
    },
    otherProduct: {
      value: '55 %',
      label:
        'de las conversaciones iniciadas desde una ficha de producto ponen en primer lugar un producto distinto al de la ficha',
      detail:
        'sobre 147 conversaciones. Sin recomendación, uno de cada dos visitantes se habría ido con un producto menos adecuado para su caso.',
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
    title: 'Caso de éxito Algimouss, 19 días de recomendaciones medidas',
    description: `${algimouss.about} ${algimouss.context}`,
  },
  eyebrow: 'Caso de éxito',
  title: 'Algimouss, 19 días de recomendaciones medidas.',
  /** Lien vers leur verticale, `@/content/verticals`. */
  verticalLink: 'Ver Seeckr para productos técnicos',
  measuresEyebrow: 'Las mediciones',
  setup:
    'Las mediciones distinguen dos ubicaciones: la ficha de producto y el pop-up de salida. Es todo lo que se instaló en su web.',
  figuresTitle: 'Lo que han logrado las recomendaciones, cifra a cifra.',
  /** Le chiffre mis en avant dès le haut de la page. */
  highlight: 'otherProduct' as AlgimoussFigure,
  /** Les chiffres que les autres pages montrent avant de renvoyer ici. */
  teaserFigures: ['firstAnswer', 'otherProduct'] satisfies AlgimoussFigure[],
  linkLabel: 'Leer el caso Algimouss completo',
  groups: [
    {
      title: 'Cómo responden los visitantes',
      figures: ['trend', 'firstAnswer'],
    },
    {
      title: 'Dónde empieza la conversación',
      figures: ['exitIntent', 'productPage'],
    },
    {
      title: 'Lo que cambia la recomendación',
      figures: ['otherProduct'],
    },
  ] satisfies { title: string; figures: AlgimoussFigure[] }[],
}

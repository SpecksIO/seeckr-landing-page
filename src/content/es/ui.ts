/** Le site lui-même : description, appel principal, pages du plan. */
export const site = {
  /** Langue au format Open Graph. */
  ogLocale: 'es_ES',
  description:
    'Tus clientes saben lo que necesitan, no cómo se llama en tu catálogo. Seeckr los escucha, les hace las preguntas que nunca se habrían planteado solos y los lleva al producto que de verdad les encaja.',
  cta: {
    label: 'Prueba Seeckr gratis con tu catálogo',
    shortLabel: 'Pruébalo gratis con tu catálogo',
  },
  /** Titres et résumés du plan du site et de llms.txt. */
  pages: {
    home: {
      title: 'Inicio',
      summary: 'Qué hace Seeckr, cómo se instala y qué cambia.',
    },
    lead: {
      title: 'Prueba Seeckr con tu catálogo',
      summary:
        'Solicitar un asistente Seeckr construido sobre el propio catálogo.',
    },
    legalNotice: {
      title: 'Aviso legal',
      summary: 'Editor y proveedor de alojamiento del sitio web.',
    },
    privacy: {
      title: 'Privacidad',
      summary: 'Tratamiento de los datos enviados a través del formulario.',
    },
  },
}

/** Les libellés des composants, hors contenu éditorial. */
export const ui = {
  skipLink: 'Ir al contenido',
  nav: {
    main: 'Principal',
    verticals: 'Sectores',
    byTrade: 'Por sector',
    pricing: 'Precios',
    home: 'Seeckr, inicio',
    login: 'Iniciar sesión',
    menu: 'Menú',
    language: 'Idioma',
  },
  consent: {
    label: 'Cookies',
    text: 'Con su consentimiento, utilizamos el píxel de Meta para medir nuestros anuncios y mostrárselos en Facebook e Instagram.',
    more: 'Más información',
    accept: 'Aceptar',
    refuse: 'Rechazar',
    settings: 'Gestionar las cookies',
  },
  animation: {
    pause: 'Pausar la animación',
    resume: 'Reanudar la animación',
  },
  /** Une parole de visiteur, entre guillemets. */
  quote: (text: string) => `«${text}»`,
  vertical: {
    translationEyebrow: 'La traducción',
    translationTitle: 'Tu cliente habla así. Tu ficha le contesta así.',
    visitor: 'Tu cliente',
    /** Préfixe lu par les lecteurs d'écran avant la parole du visiteur. */
    visitorSays: 'Tu cliente: ',
    sheet: 'Tu ficha',
    exampleEyebrow: 'Una conversación de ejemplo',
    benefitsEyebrow: 'Lo que ganas',
  },
  conversation: {
    brand: 'Tu marca',
    ready: 'Listo',
    picked: '(respuesta elegida)',
    other: '+ Otra',
    score: (value: number) => `${value} % de compatibilidad`,
    top3: 'Tu top 3',
    recommended: 'Recomendado',
    others: 'Otras opciones',
  },
}

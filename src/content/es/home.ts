import type { Placement } from '@/content/types'

export const hero = {
  /** Titre de l'onglet et des résultats de recherche. */
  metaTitle: 'Seeckr, el vendedor que tu tienda online nunca ha tenido',
  titleLead: 'El vendedor que tu',
  titleStrong: 'tienda online nunca ha tenido.',
  subtitle:
    'En una tienda física, el dependiente pregunta al cliente qué busca. En una tienda online, la web le pone delante una barra de búsqueda y espera. Seeckr, en cambio, pregunta.',
  videoLabel:
    'Demostración: Seeckr en la ficha de producto, la conversación con el cliente y, después, su top 3.',
}

export const howItWorks = {
  eyebrow: 'Cómo funciona',
  title: 'Una línea de código y ya tienes un vendedor.',
  steps: [
    {
      title: 'Pegas una línea de script',
      text: 'En la cabecera de tu web, y listo. Los colores se ajustan después desde el back office, sin volver a llamar a tu desarrollador.',
    },
    {
      title: 'Tu cliente te cuenta qué necesita',
      text: 'No sabe si necesita un sofá de tres plazas o un sofá cama. Sabe que recibe a sus suegros dos veces al año y que no tiene dónde guardar un colchón. El asistente parte de ahí.',
    },
    {
      title: 'Recibe su top 3',
      text: 'Tres productos ordenados, una puntuación de compatibilidad y el motivo de cada posición. Sabe qué elegir y, por primera vez, sabe por qué.',
    },
  ],
}

/**
 * Les emplacements possibles de l'assistant : source unique, lue par la
 * démonstration animée de l'accueil comme par la FAQ.
 */
export const integrations = {
  eyebrow: 'Varias ubicaciones',
  title: 'El mismo asistente, justo donde tu cliente duda.',
  text: 'Solo pegas una línea de script. La ubicación se elige desde el back office y la cambias con un clic tantas veces como quieras.',
  video: {
    src: '/media/integrations.mp4',
    poster: '/media/integrations.jpg',
    label:
      'Demostración: el mismo asistente en una ficha de producto, en una barra en la parte inferior de la pantalla, en una vista previa lateral, en una búsqueda sin resultados y, por último, en el pop-up de salida.',
  },
  placements: [
    {
      id: 'fiche-produit',
      name: 'En la ficha de producto',
      text: 'Debajo del producto que está mirando, la pregunta que no se atreve a hacer: ¿es de verdad el que necesita?',
    },
    {
      id: 'barre',
      name: 'La barra en la parte inferior de la pantalla',
      text: 'En todas las páginas, se cierra con un clic y aparece justo cuando el cliente se atasca.',
    },
    {
      id: 'apercu',
      name: 'La vista previa que se desliza por el lateral',
      text: 'Tras unos segundos de duda, con la primera pregunta ya planteada.',
    },
    {
      id: 'sans-resultat',
      name: 'Cuando la búsqueda no encuentra nada',
      text: 'Cero resultados: el momento en que se va. El asistente, en cambio, mira más allá de los filtros.',
    },
    {
      id: 'depart',
      name: 'El pop-up de salida',
      text: 'Está a punto de cerrar la pestaña. Una pregunta, en lugar de un descuento de última hora.',
    },
  ] satisfies Placement[],
  cta: {
    title: 'Tu Seeckr personalizado, listo en 24 h laborables.',
    text: 'Es gratis y podrás enseñárselo a tu equipo.',
    label: 'Prueba Seeckr gratis con tu catálogo',
  },
}

export const benefits = {
  eyebrow: 'Lo que cambia',
  title: 'Tu cliente se siente escuchado. Tú vendes más.',
  visitor: {
    label: 'Para tu cliente',
    title: 'Por fin alguien le escucha.',
    paragraphs: [
      'Nadie le había preguntado nunca qué buscaba de verdad. Los filtros le piden un precio; las fichas técnicas, que ya sepa del tema. Seeckr le pregunta cómo vive y le propone tres productos ordenados, con el motivo de cada posición.',
      'Y la puntuación no miente. Si solo le encaja un producto, solo ve uno. Si no le encaja ninguno, el asistente se lo dice claramente. Nueve idiomas, para que lo lea en el suyo.',
    ],
  },
  merchant: {
    label: 'Para ti',
    items: [
      {
        title: 'Vendes más y vendes mejor.',
        text: 'Un cliente que duda se va. Un cliente escuchado compra. Y no ve un producto, ve tres, ordenados y justificados.',
      },
      {
        title: 'Por fin sabes quiénes son tus clientes.',
        text: 'Cada uno acaba de contarte, con sus propias palabras, qué busca, qué ha probado ya y qué le hizo desistir. Todo está ahí, legible, conversación a conversación, y un informe de actividad te lo resume solo. Tus buyer personas ya no te las imaginas. Las lees. Y los ganchos que buscas para tus campañas ya te los han escrito tus clientes.',
      },
      {
        title: 'Tus productos prioritarios, primero. Sin engañar a nadie.',
        text: 'Tus productos prioritarios solo ganan cuando dos productos están igualados para ese cliente. Nunca a costa de la recomendación, y sin que el cliente lo note. Tu margen gana terreno y tu credibilidad sigue intacta.',
      },
    ],
  },
}

export const verticalsIntro = {
  eyebrow: 'Por sector',
  title: 'Cada sector tiene sus reglas. Seeckr, sus funcionalidades.',
}

export const faq = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Lo que quizá te estés preguntando.',
  items: [
    {
      id: 'prix',
      question: '¿Cuánto cuesta?',
      answer:
        'Depende del tamaño de tu catálogo, de las funcionalidades que elijas y de las estadísticas que quieras obtener.',
      link: 'Reserva tu demo personalizada y lo hablamos directamente.',
    },
    {
      id: 'integration',
      question: '¿Cómo se instala Seeckr en mi web?',
      answer:
        'Una línea de script en la cabecera, y ya está. Todo lo demás se gestiona desde el back office, sin volver a llamar a tu desarrollador: la ubicación del asistente en tus páginas y tus colores.',
    },
    {
      id: 'langues',
      question: '¿En qué idiomas habla el asistente?',
      answer:
        'En el de tu cliente. El asistente habla nueve y se dirige a cada uno en el suyo.',
    },
    {
      id: 'donnees',
      question: '¿Qué pasa con las respuestas de mis clientes?',
      answer:
        'Se convierten en lo que tu buscador nunca te contará de tus clientes: las estadísticas, cada conversación completa y legible, y un informe de actividad que se redacta solo. El cliente puede dejar sus datos para que le llamen, pero nada le obliga.',
    },
    {
      id: 'seeckr-gratuit',
      question: '¿Qué incluye el Seeckr personalizado gratuito?',
      answer:
        'Tu asistente, construido sobre tu propio catálogo, para probarlo en tu propia web. No hay nada que instalar. Solo necesitamos tu web, tu correo y tu teléfono profesionales.',
    },
  ],
}

export const finalCta = {
  title: 'Pruébalo en tu web.',
  text: 'Construimos tu asistente sobre tu catálogo y lo ves trabajar en tu web. Es gratis y no hay nada que instalar.',
}

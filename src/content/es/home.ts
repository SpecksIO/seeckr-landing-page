import type { Placement } from '@/content/types'

export const hero = {
  /** Titre de l'onglet et des résultats de recherche. */
  metaTitle: 'Seeckr, el vendedor que tu tienda online nunca ha tenido',
  titleLead: 'El vendedor que tu',
  titleStrong: 'tienda online nunca ha tenido.',
  subtitle:
    'Seeckr es un asistente de IA que hace unas pocas preguntas a tus clientes, como lo haría un dependiente en tienda, y después les recomienda los productos de tu catálogo que se ajustan a lo que necesitan.',
  videoLabel:
    'Demostración: Seeckr en la ficha de producto, la conversación con el cliente y, después, su top 3.',
}

export const howItWorks = {
  eyebrow: 'Cómo funciona',
  title: 'Basta una línea de código para instalarlo.',
  platforms:
    'Compatible con todas las plataformas de e-commerce, incluidos los sitios a medida. Con un clic, Seeckr se conecta a tu tienda: tus visitantes añaden al carrito desde el asistente y tú sigues las ventas en tus estadísticas.',
  steps: [
    {
      title: 'Pegas una línea de script',
      text: 'La añades en la cabecera de tu web. Los colores se ajustan después desde el back office, sin volver a pasar por tu desarrollador.',
    },
    {
      title: 'Tu cliente describe su situación',
      text: 'No necesita saber cómo se llama el producto. Si explica que recibe a sus suegros dos veces al año y que no tiene sitio para un colchón, el asistente entiende que necesita un sofá cama.',
    },
    {
      title: 'Recibe su top 3',
      text: 'El asistente le propone tres productos ordenados, cada uno con una puntuación de compatibilidad y el motivo de su posición.',
    },
  ],
}

/**
 * Les emplacements possibles de l'assistant : source unique, lue par la
 * démonstration animée de l'accueil comme par la FAQ.
 */
export const integrations = {
  eyebrow: 'Integraciones',
  title: 'Elige dónde aparece el asistente en tu web.',
  text: 'Hay cinco ubicaciones posibles, desde la ficha de producto hasta la búsqueda sin resultados. Eliges desde el back office, y puedes cambiarla en cualquier momento.',
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
      text: 'Debajo del producto que está mirando, el asistente le ayuda a comprobar que es el que necesita.',
    },
    {
      id: 'barre',
      name: 'La barra en la parte inferior de la pantalla',
      text: 'Está visible en todas las páginas, y el cliente puede cerrarla con un clic.',
    },
    {
      id: 'apercu',
      name: 'La vista previa que se desliza por el lateral',
      text: 'Se abre tras unos segundos de duda, con la primera pregunta ya planteada.',
    },
    {
      id: 'sans-resultat',
      name: 'Cuando la búsqueda no encuentra nada',
      text: 'Cuando la búsqueda no da ningún resultado, el asistente toma el relevo y propone productos adaptados a lo que necesita el cliente.',
    },
    {
      id: 'depart',
      name: 'El pop-up de salida',
      text: 'Cuando el cliente está a punto de salir de la web, el asistente le ofrece ayuda en lugar de un descuento de última hora.',
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
  title: 'Tus clientes reciben un mejor consejo, y tú vendes más.',
  visitor: {
    label: 'Para tu cliente',
    title: 'Un consejo adaptado a su situación',
    paragraphs: [
      'Los filtros le piden un presupuesto y las fichas técnicas dan por hecho que ya conoce el producto. Seeckr le pregunta en cambio por el uso que le dará, y después le propone tres productos ordenados explicando cada posición.',
      'La puntuación es honesta: si solo le encaja un producto, el asistente solo le propone uno, y si no le encaja ninguno, se lo dice. El asistente habla nueve idiomas y responde a cada cliente en el suyo.',
    ],
  },
  merchant: {
    label: 'Para ti',
    items: [
      {
        title: 'Más ventas y menos errores de compra',
        text: 'Un cliente que duda suele acabar saliendo de la web. Bien aconsejado, sabe qué producto elegir, y el riesgo de devolución baja.',
      },
      {
        title: 'Por fin sabes lo que buscan tus clientes',
        text: 'Cada visitante te explica con sus propias palabras qué busca y qué le hace dudar. Puedes releer cada conversación, y un informe de actividad las resume. Suficiente para construir tus buyer personas a partir de lo que dicen de verdad tus clientes, y encontrar en sus frases los ganchos de tus próximas campañas.',
      },
      {
        title: 'Tus productos prioritarios, primero, sin falsear el consejo',
        text: 'Un producto prioritario solo pasa delante cuando dos productos encajan igual de bien con ese cliente. El consejo sigue siendo justo, y el cliente no ve este ajuste.',
      },
    ],
  },
}

export const verticalsIntro = {
  eyebrow: 'Por sector',
  title: 'Funcionalidades adaptadas a tu sector.',
}

export const faq = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Tus preguntas antes de empezar.',
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
        'Basta con añadir una línea de script en la cabecera de tu web. El resto se ajusta desde el back office, sin pasar por tu desarrollador: la ubicación del asistente en tus páginas y tus colores.',
    },
    {
      id: 'performance',
      question: '¿Seeckr ralentiza mi web?',
      answer:
        'No. El script pesa 18 KB comprimido y se carga en diferido: tu página se muestra primero y el asistente llega después. La conversación solo se carga cuando el cliente la abre.',
    },
    {
      id: 'catalogue',
      question: '¿Cómo conoce Seeckr mi catálogo?',
      answer:
        'Nos envías tu catálogo en el formato que ya tienes: una exportación de tu tienda, un archivo, un PDF. Nuestra IA lo lee entero y lo traduce al lenguaje de tus clientes: sus usos, sus limitaciones, en qué están dispuestos a ceder. Una ficha técnica copiada no les dice nada. Cada vez que cambia tu gama, actualizamos el catálogo. Seeckr recomienda el producto que responde a la necesidad y luego lleva al cliente a tu ficha, que muestra el precio y la disponibilidad del momento. En Shopify, WooCommerce, PrestaShop o una web a medida, basta con la misma línea de script. Sea cual sea la plataforma, el cliente también puede añadir los productos recomendados al carrito desde el asistente.',
    },
    {
      id: 'fiabilite',
      question: '¿Puede la IA inventarse información?',
      answer:
        'Es lo primero que blindamos. El asistente solo recomienda productos de tu catálogo y construye cada explicación a partir de la ficha del producto, y de nada más. Cuando nada encaja de verdad, lo dice en lugar de forzar una recomendación. Tu equipo revisa las conversaciones en el back office y señala cualquier respuesta que haya que corregir. Integramos esos comentarios de forma continua, para que el asistente defienda tus argumentos, tus orientaciones y tus decisiones.',
    },
    {
      id: 'roi',
      question: '¿Cómo mido lo que me aporta Seeckr?',
      answer:
        'Seeckr se conecta a tu tienda y sigue los pedidos realizados tras una recomendación. Cada mes, el back office te muestra las conversaciones, los productos más recomendados y las necesidades que expresan tus clientes. A los tres meses, hacemos contigo el balance en cifras del impacto en tus ventas.',
    },
    {
      id: 'langues',
      question: '¿En qué idiomas habla el asistente?',
      answer:
        'El asistente habla nueve idiomas y responde a cada cliente en el suyo.',
    },
    {
      id: 'donnees',
      question: '¿Qué pasa con las respuestas de mis clientes?',
      answer:
        'Las encuentras en el back office: las estadísticas, cada conversación completa y un informe de actividad generado automáticamente. El cliente puede dejar sus datos para que le contacten, pero nada le obliga.',
    },
    {
      id: 'rgpd',
      question: '¿Dónde se alojan los datos de mis clientes?',
      answer:
        'Las conversaciones se almacenan en Europa, en Irlanda. El script no instala ninguna cookie en tu web. La IA que lleva la conversación se elige según tu sector: para cada tarea, escogemos el modelo más adecuado entre los mejores del mercado.',
    },
    {
      id: 'seeckr-gratuit',
      question: '¿Qué incluye el Seeckr personalizado gratuito?',
      answer:
        'Tu asistente, construido sobre tu catálogo, para probarlo en tu propia web. No hay nada que instalar. Solo necesitamos la dirección de tu web, tu correo y tu teléfono profesionales.',
    },
  ],
}

export const finalCta = {
  title: 'Pruébalo en tu web.',
  text: 'Construimos tu asistente sobre tu catálogo y lo ves funcionar en tu web. Es gratis y no hay nada que instalar.',
}

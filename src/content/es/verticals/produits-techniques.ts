import type { Vertical } from '@/content/types'

export const produitsTechniques: Vertical = {
  name: 'Productos técnicos',
  teaser: 'Tu cliente te envía una foto.',
  meta: {
    title: 'Seeckr para productos técnicos',
    description:
      'Tu cliente describe su casa, un material, un síntoma. Seeckr le lleva al producto adecuado de tu catálogo. El caso Algimouss, con cifras.',
  },
  hero: {
    title:
      'Ve manchas negras en la pared norte. No sabe que lo que necesita se llama hidrofugante.',
    intro:
      'Un material, un síntoma, un rincón a la sombra: Seeckr parte de lo que ve en su casa y le lleva al producto que resuelve su caso. En Algimouss, una de cada dos conversaciones puso en primer lugar un producto distinto al de la ficha por la que había entrado el cliente. Visitantes que se iban con el bidón equivocado.',
  },
  contrast: {
    pairs: [
      {
        visitor: 'Tengo musgo en el tejado de pizarra.',
        sheet:
          'Tratamiento antimusgo, aplicación por pulverización, sin aclarado.',
      },
      {
        visitor: 'Han salido manchas negras en la fachada, en el lado norte.',
        sheet: 'Limpiador de fachadas, uso exterior, acción progresiva.',
      },
      {
        visitor: 'Mi terraza de madera resbala en invierno.',
        sheet: 'Antideslizante, para madera y composite.',
      },
    ],
    closing:
      'Entre lo que ve en su casa y lo que tú vendes, falta un traductor.',
  },
  conversation: {
    title: 'Empezamos por su tejado.',
    steps: [
      {
        stage: 'Conociéndote',
        question: '¿Tu casa está más a la sombra o al sol?',
        choices: ['Rodeada de árboles', 'A pleno sol', 'Depende de la fachada'],
        picked: 0,
      },
      {
        stage: 'Entendiendo tu situación',
        intro:
          'Con árboles alrededor, la humedad se queda y el musgo vuelve rápido.',
        question: '¿Piensas aplicar el tratamiento tú mismo?',
        choices: [
          'Sí, desde una escalera',
          'Se encargará un profesional',
          'Todavía no lo sé',
        ],
        picked: 0,
      },
      {
        stage: 'Afinando tu elección',
        intro: 'Lo haces tú: priorizamos lo que no necesita aclarado.',
        question: '¿Qué te haría decir, dentro de un año, que acertaste?',
        choices: [
          'No tener que volver a subir',
          'Un tejado limpio para vender la casa',
          'Ni una mancha más en las paredes',
        ],
        picked: 0,
      },
    ],
    top: [
      {
        name: 'Tratamiento antimusgo para tejados',
        score: 91,
        why: 'Se aplica desde la escalera, sin aclarado, y actúa a largo plazo. El año que viene no tendrás que volver a subir a limpiar.',
      },
      { name: 'Limpiador concentrado para tejados', score: 79 },
      { name: 'Hidrofugante incoloro', score: 63 },
    ],
  },
  benefitsTitle:
    'El producto adecuado a la primera, aunque llegue por el camino equivocado.',
  benefits: [
    {
      title: 'Del síntoma al bidón adecuado',
      text: 'Tu cliente no tiene por qué conocer tus gamas. Describe la mancha negra de su pared norte y Seeckr hace el resto.',
    },
    {
      title: 'El producto adecuado, incluso desde la página equivocada',
      text: 'Un cliente rara vez aterriza en la ficha que corresponde a su caso. En Algimouss, pasaba una de cada dos veces. Seeckr pone el producto adecuado en primer lugar y le explica por qué le recomienda otro.',
    },
    {
      title: 'Recomiendas aunque no vendas online',
      text: '¿Tu web no acepta pedidos? Seeckr recomienda igualmente y tu cliente llega a la tienda sabiendo exactamente qué pedir. Es justo el caso de Algimouss.',
    },
  ],
}

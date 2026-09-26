import type { Vertical } from '@/content/types'

// Secteur réglementé : aucune allégation de santé ou thérapeutique ici.
export const cosmetiqueNutrition: Vertical = {
  name: 'Cosmética y nutrición',
  teaser: 'Preguntas sobre la rutina de cada cliente.',
  meta: {
    title: 'Seeckr para cosmética y nutrición',
    description:
      'Tus clientes hablan de su rutina y de sus hábitos, no de principios activos. Seeckr los escucha y pone primero los productos de tu catálogo que de verdad van a seguir usando.',
  },
  hero: {
    title: 'Dejó su último sérum y no sabe muy bien por qué.',
    intro:
      'Seeckr le pregunta por su día a día, por lo que ha probado y abandonado, y encuentra el verdadero motivo: se le olvidaba. A partir de ahí, el producto adecuado ya no es el que más activos lleva, sino el que va a seguir usando.',
  },
  contrast: {
    pairs: [
      {
        visitor: 'Por la mañana me arreglo a toda prisa.',
        sheet: 'Textura fluida, absorción rápida.',
      },
      {
        visitor: 'Dejé mi último sérum, nunca me acordaba de ponérmelo.',
        sheet: 'Frasco con dosificador, aplicación mañana y noche.',
      },
      {
        visitor: 'Quiero algo que pueda tomar en la oficina sin pensarlo.',
        sheet: 'En cápsulas, toma diaria.',
      },
    ],
    closing:
      'Entre una cosa y otra, falta alguien que escuche. Ese es el papel de Seeckr.',
  },
  conversation: {
    title: 'Lo que hace por la mañana dice más que tu lista de ingredientes.',
    steps: [
      {
        stage: 'Conociéndote',
        question: '¿En qué momento del día te acordarías de tomarlo?',
        choices: [
          'Por la mañana, con el café',
          'A mediodía, en la oficina',
          'Por la noche, con calma',
        ],
        picked: 0,
      },
      {
        stage: 'Entendiendo tu situación',
        intro:
          'Por la mañana, entonces: tiene que encajar en algo que ya haces.',
        question: 'La última vez que dejaste un complemento, ¿qué pasó?',
        choices: [
          'Se me olvidaba tomarlo',
          'No soportaba el sabor',
          'Demasiadas cápsulas que tragar',
        ],
        picked: 1,
      },
      {
        stage: 'Afinando tus gustos',
        intro:
          'El sabor importa, así que descartamos lo que se toma a disgusto.',
        question: '¿Qué te haría decir, dentro de un mes, que acertaste?',
        choices: [
          'Lo sigo tomando sin pensarlo',
          'Me apetece tomarlo',
          'No he tenido que obligarme',
        ],
        picked: 0,
      },
    ],
    top: [
      {
        name: 'Proteína vegetal en polvo sabor vainilla',
        score: 93,
        why: 'Se mezcla con tu café de la mañana y su sabor a vainilla no te exige ningún esfuerzo. Dentro de un mes la seguirás tomando.',
      },
      { name: 'Cápsulas de magnesio', score: 74 },
      { name: 'Infusión de noche', score: 62 },
    ],
  },
  benefitsTitle: 'Clientes que siguen con el producto y que vuelven.',
  benefits: [
    {
      title: 'La rutina antes que la fórmula',
      text: 'Describe su día a día, sus olvidos, lo que ya no aguanta. Seeckr lo traduce todo en productos de tu catálogo, sin pedirle nunca que descifre una etiqueta.',
    },
    {
      title: 'Una recomendación que sabe decir que no',
      text: 'Si solo le encaja un producto, solo ve uno. Si no le encaja ninguno, el asistente se lo dice. Una recomendación que se niega a vender es una recomendación creíble, y eso es lo que hace volver.',
    },
    {
      title: 'Las palabras de tus clientes, listas para tus campañas',
      text: 'Por fin sabrás cómo hablan de su piel, de su cansancio, de su ritmo. Ya no son buyer personas, son frases y suenan más auténticas que cualquier cosa que salga de un brief.',
    },
  ],
}

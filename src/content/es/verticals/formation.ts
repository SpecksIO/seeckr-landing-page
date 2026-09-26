import type { Vertical } from '@/content/types'

// Aucun client de référence : aucun chiffre ni cas client sur cette page.
// Qualiopi n'existe qu'en France : pas de bloc `compliance` en espagnol.
export const formation: Vertical = {
  name: 'Formación',
  teaser: 'Cada solicitud, en sus propias palabras.',
  meta: {
    title: 'Seeckr para centros de formación',
    description:
      'Tu cliente cuenta en qué punto está y Seeckr le muestra qué formación le lleva adonde quiere llegar. Y cada solicitud queda registrada tal como la formuló.',
  },
  hero: {
    title:
      'No busca una formación. Busca dejar de rehacer sus hojas de cálculo el domingo por la noche.',
    intro:
      'Te cuenta en qué punto está, qué le frena y a qué aspira. Seeckr le muestra cuál de tus formaciones le lleva hasta ahí, y por qué esa y no otra. Tú conservas el registro de la solicitud, tal como la formuló.',
  },
  contrast: {
    pairs: [
      {
        visitor:
          'Rehago las mismas tablas cada semana, me gustaría que se hicieran solas.',
        sheet: 'Hoja de cálculo avanzada: tablas dinámicas y macros.',
      },
      {
        visitor:
          'Acabo de ponerme al frente de un equipo y no sé llamar la atención sin que se pongan a la defensiva.',
        sheet: 'Gestión de equipos, nivel intermedio, en remoto.',
      },
      {
        visitor:
          'Quiero cambiar de profesión sin volver a pasarme años estudiando.',
        sheet:
          'Certificado de profesionalidad, itinerario modular, en alternancia con el empleo.',
      },
    ],
    closing:
      'Entre su punto de partida y el nombre de tu curso, Seeckr traza el camino.',
  },
  conversation: {
    title: 'Empezamos por su lunes por la mañana.',
    steps: [
      {
        stage: 'Conociéndote',
        question: 'Hoy por hoy, ¿cómo es para ti un día de trabajo?',
        choices: [
          'Vivo entre hojas de cálculo',
          'Paso casi todo el día en reuniones',
          'Trabajo fuera de la oficina',
        ],
        picked: 0,
      },
      {
        stage: 'Entendiendo tu situación',
        intro:
          'Hojas de cálculo todo el día: seguro que hay tiempo que recuperar.',
        question: '¿Qué te quita tiempo y te gustaría dejar de hacer?',
        choices: [
          'Rehacer los mismos informes',
          'Buscar errores en fórmulas',
          'Dar formato para los demás',
        ],
        picked: 0,
      },
      {
        stage: 'Afinando tu elección',
        intro: 'Informes que se repiten: justo lo que se puede automatizar.',
        question: 'La última vez que aprendiste algo nuevo, ¿cómo fue?',
        choices: [
          'Solo, a base de prueba y error',
          'Con un compañero al lado',
          'Siguiendo un ejemplo concreto',
        ],
        picked: 2,
      },
    ],
    top: [
      {
        name: 'Automatizar informes con hojas de cálculo',
        score: 92,
        why: 'Parte de informes como los tuyos y te hace repetir cada paso con un caso concreto. Ya no tendrás que montar tus tablas a mano.',
      },
      { name: 'Hoja de cálculo avanzada', score: 77 },
      { name: 'Cuadros de mando: lo básico', score: 64 },
    ],
  },
  benefitsTitle: 'Alumnos que saben por qué se inscriben.',
  benefits: [
    {
      title: 'De su problema a tu catálogo',
      text: 'No tiene ni idea del nombre del curso que debería buscar. Solo sabe qué le amarga las semanas. Seeckr le guía.',
    },
    {
      title: 'Entiende por qué esa y no otra',
      text: 'Cada formación propuesta lleva una puntuación de compatibilidad y el motivo de su posición. Un alumno que entiende por qué esa formación es la suya se compromete con mucha más seguridad.',
    },
    {
      title: 'Lo que esperan tus futuros alumnos, sin rodeos',
      text: 'Leerás, con sus propias palabras, lo que de verdad vienen a buscar. Tus cursos, tus programas y tus campañas nunca han tenido mejor materia prima.',
    },
  ],
}

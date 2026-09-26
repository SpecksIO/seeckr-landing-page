/** La page `/mon-seeckr` et son formulaire. */
export const lead = {
  meta: {
    title: 'Prueba gratis tu Seeckr personalizado',
    description:
      'Tu asistente Seeckr, construido sobre tu propio catálogo, para probarlo en tu propia web. No instalas nada.',
  },
  eyebrow: 'Seeckr personalizado',
  title: 'Míralo trabajar con tus propios productos.',
  intro:
    'Danos la dirección de tu web. Construimos tu asistente sobre tu catálogo real y te lo enseñamos en acción.',
  promises: [
    'Tu asistente, construido sobre tu catálogo real.',
    'Para probarlo en tu web, con tus productos.',
    'Nada que instalar, nada que firmar.',
    'Listo en 24 h laborables.',
  ],
  form: {
    fields: {
      site: { label: 'Sitio web', placeholder: 'mitienda.es' },
      email: {
        label: 'Correo electrónico profesional',
        placeholder: 'nombre@mitienda.es',
      },
      phone: { label: 'Teléfono profesional', placeholder: '' },
    },
    errors: {
      site: 'Indica la dirección de tu web, por ejemplo mitienda.es.',
      email:
        'Indica un correo profesional válido, por ejemplo nombre@mitienda.es.',
      phone:
        'Indica un número de teléfono válido con el prefijo del país, por ejemplo +34 para España.',
    },
    invalid:
      'Falta un dato o alguno está incompleto: revisa los campos marcados.',
    failed:
      'No hemos podido enviar tu solicitud. Vuelve a intentarlo en un momento.',
    sending: 'Enviando…',
    reassurance:
      'Tus datos solo sirven para preparar y presentarte tu Seeckr. Nunca los vendemos y no te enviaremos ninguna newsletter sin tu consentimiento.',
    privacyLink: 'Política de privacidad',
    sent: {
      title: 'Recibido. Nos ponemos manos a la obra.',
      text: 'Construimos tu Seeckr sobre tu catálogo y volvemos a contactarte para enseñártelo en acción.',
    },
  },
}

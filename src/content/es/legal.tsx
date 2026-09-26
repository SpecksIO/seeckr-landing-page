import Link from 'next/link'
import { company, headquarters, shareCapital } from '@/content/company'
import { localePath } from '@/lib/i18n'
import { paths } from '@/lib/site'

const mail = (
  <a href={`mailto:${company.email}`} className="underline underline-offset-4">
    {company.email}
  </a>
)

// Pages légales au vouvoiement (usted), l'usage en Espagne. La forme sociale
// est traduite ici, le capital vient de `company.ts`.
export const legalNotice = {
  meta: {
    title: 'Aviso legal',
    description: 'Editor y proveedor de alojamiento del sitio web de Seeckr.',
  },
  Body: () => (
    <>
      <section>
        <h2>Editor del sitio web</h2>
        <ul>
          <li>
            {company.legalName}, sociedad por acciones simplificada de derecho
            francés, con un capital social de {shareCapital('es')}
          </li>
          <li>Domicilio social: {headquarters}, Francia</li>
          <li>
            SIREN {company.siren}, {company.registry} (número de identificación
            y registro mercantil franceses)
          </li>
          <li>NIF-IVA intracomunitario: [À COMPLÉTER : numéro de TVA]</li>
          <li>
            Contacto: {mail},{' '}
            <a
              href={`tel:${company.phone}`}
              className="underline underline-offset-4"
            >
              {company.phoneLabelIntl}
            </a>
          </li>
          <li>Directora de la publicación: {company.publicationDirector}</li>
        </ul>
      </section>
      <section>
        <h2>Alojamiento</h2>
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Estados
          Unidos,{' '}
          <a href="https://vercel.com" className="underline underline-offset-4">
            vercel.com
          </a>
          .
        </p>
      </section>
      <section>
        <h2>Propiedad intelectual</h2>
        <p>
          El nombre Seeckr, su logotipo y los contenidos de este sitio web están
          protegidos por la legislación sobre propiedad intelectual. Queda
          prohibida cualquier reproducción sin autorización.
        </p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>
          Este sitio web no instala ninguna cookie ni utiliza ninguna
          herramienta de medición de audiencia.
        </p>
      </section>
    </>
  ),
}

export const privacy = {
  meta: {
    title: 'Política de privacidad',
    description:
      'Qué datos recoge el sitio web de Seeckr, con qué finalidad y cómo ejercer sus derechos.',
  },
  Body: () => (
    <>
      <section>
        <h2>Responsable del tratamiento</h2>
        <p>
          {company.legalName}, {headquarters}, Francia. Para cualquier consulta
          sobre sus datos: {mail}
        </p>
      </section>
      <section>
        <h2>Datos recogidos</h2>
        <p>
          El sitio web solo recoge datos personales a través del{' '}
          <Link
            href={localePath('es', paths.lead)}
            className="underline underline-offset-4"
          >
            formulario de solicitud
          </Link>
          : la dirección de su sitio web, su correo electrónico profesional y su
          teléfono profesional.
        </p>
        <p>
          Este sitio web no instala ninguna cookie ni utiliza ninguna
          herramienta de medición de audiencia.
        </p>
      </section>
      <section>
        <h2>Finalidad</h2>
        <p>
          Sus datos se utilizan únicamente para preparar y presentarle su
          Seeckr. Nunca los vendemos y no le enviaremos ninguna newsletter sin
          su consentimiento.
        </p>
      </section>
      <section>
        <h2>Base jurídica</h2>
        <p>
          La aplicación de medidas precontractuales adoptadas a petición suya:
          usted solicita un Seeckr construido sobre su catálogo y utilizamos sus
          datos para prepararlo y presentárselo.
        </p>
      </section>
      <section>
        <h2>Destinatarios</h2>
        <p>
          Su solicitud se transmite al equipo de Seeckr. Para ello, pasa por
          proveedores técnicos: Resend para el envío del correo de notificación,
          Slack para la mensajería interna del equipo y Vercel para el
          alojamiento del sitio web.
        </p>
        <p>
          Estos tres proveedores están establecidos en Estados Unidos, por lo
          que sus datos pueden tratarse fuera de la Unión Europea, en el marco
          de los compromisos contractuales adquiridos con cada uno de ellos.
        </p>
      </section>
      <section>
        <h2>Plazo de conservación</h2>
        <p>
          Tres años desde nuestro último contacto con usted. Transcurrido ese
          plazo, sus datos se suprimen.
        </p>
      </section>
      <section>
        <h2>Sus derechos</h2>
        <p>
          Puede acceder a sus datos, solicitar su rectificación o supresión,
          oponerse a su tratamiento o solicitar su limitación o portabilidad.
          Escríbanos a {mail}.
        </p>
        <p>
          También puede presentar una reclamación ante la CNIL, la autoridad
          francesa de protección de datos, en{' '}
          <a
            href="https://www.cnil.fr"
            className="underline underline-offset-4"
          >
            cnil.fr
          </a>
          .
        </p>
      </section>
    </>
  ),
}

import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { company, headquarters } from '@/content/company'
import { pageMetadata } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Mentions légales',
  description: 'Éditeur et hébergeur du site seeckr.fr.',
  path: '/mentions-legales',
})

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <section>
        <h2>Éditeur du site</h2>
        <ul>
          <li>
            {company.legalName}, {company.legalForm}
          </li>
          <li>Siège social : {headquarters}</li>
          <li>
            SIREN {company.siren}, {company.registry}
          </li>
          <li>TVA intracommunautaire : [À COMPLÉTER : numéro de TVA]</li>
          <li>
            Contact :{' '}
            <a
              href={`mailto:${company.email}`}
              className="underline underline-offset-4"
            >
              {company.email}
            </a>
            ,{' '}
            <a
              href={`tel:${company.phone}`}
              className="underline underline-offset-4"
            >
              {company.phoneLabel}
            </a>
          </li>
          <li>Directrice de la publication : {company.publicationDirector}</li>
        </ul>
      </section>
      <section>
        <h2>Hébergeur</h2>
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis,{' '}
          <a href="https://vercel.com" className="underline underline-offset-4">
            vercel.com
          </a>
          .
        </p>
      </section>
      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Le nom Seeckr, son logo et les contenus de ce site sont protégés par
          le droit de la propriété intellectuelle. Toute reproduction sans
          autorisation est interdite.
        </p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>
          Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure
          d'audience.
        </p>
      </section>
    </LegalPage>
  )
}

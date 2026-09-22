import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
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
          <li>Raison sociale : [À COMPLÉTER : raison sociale]</li>
          <li>Forme juridique et capital : [À COMPLÉTER : forme et capital]</li>
          <li>Siège social : [À COMPLÉTER : adresse du siège]</li>
          <li>Immatriculation : [À COMPLÉTER : RCS et numéro SIREN]</li>
          <li>TVA intracommunautaire : [À COMPLÉTER : numéro de TVA]</li>
          <li>Contact : [À COMPLÉTER : e-mail et téléphone de contact]</li>
          <li>
            Directeur de la publication : [À COMPLÉTER : nom du directeur de la
            publication]
          </li>
        </ul>
      </section>
      <section>
        <h2>Hébergeur</h2>
        <p>Vercel Inc. [À COMPLÉTER : adresse et téléphone de l'hébergeur]</p>
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

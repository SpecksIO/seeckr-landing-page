import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { pageMetadata } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Politique de confidentialité',
  description:
    'Quelles données le site seeckr.fr collecte, pourquoi, et comment exercer vos droits.',
  path: '/confidentialite',
})

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          [À COMPLÉTER : raison sociale et adresse du responsable du traitement]
        </p>
      </section>
      <section>
        <h2>Données collectées</h2>
        <p>
          Le site ne collecte des données personnelles que par le formulaire{' '}
          <Link href="/mon-seeckr" className="underline underline-offset-4">
            Mon Seeckr gratuit
          </Link>
          {'\u00a0'}: l'adresse de votre site internet, votre e-mail
          professionnel et votre téléphone professionnel.
        </p>
        <p>
          Le site ne dépose aucun cookie et n'utilise aucun outil de mesure
          d'audience.
        </p>
      </section>
      <section>
        <h2>Finalité</h2>
        <p>
          Vos coordonnées servent uniquement à fabriquer et vous présenter votre
          Seeckr. Jamais revendues, aucune newsletter sans votre accord.
        </p>
      </section>
      <section>
        <h2>Base légale</h2>
        <p>[À COMPLÉTER : base légale du traitement]</p>
      </section>
      <section>
        <h2>Destinataires</h2>
        <p>
          Votre demande est transmise à l'équipe Seeckr. Pour cela, elle passe
          par des prestataires techniques : Resend pour l'envoi de l'e-mail de
          notification, Slack pour la messagerie interne de l'équipe, et Vercel
          pour l'hébergement du site.
        </p>
        <p>
          [À COMPLÉTER : transferts hors de l'Union européenne et garanties
          associées]
        </p>
      </section>
      <section>
        <h2>Durée de conservation</h2>
        <p>[À COMPLÉTER : durée de conservation des demandes]</p>
      </section>
      <section>
        <h2>Vos droits</h2>
        <p>
          Vous pouvez accéder à vos données, les faire rectifier ou effacer,
          vous opposer à leur traitement, en demander la limitation ou la
          portabilité. Écrivez à [À COMPLÉTER : contact RGPD].
        </p>
        <p>
          Vous pouvez aussi adresser une réclamation à la CNIL, sur{' '}
          <a
            href="https://www.cnil.fr"
            className="underline underline-offset-4"
          >
            cnil.fr
          </a>
          .
        </p>
      </section>
    </LegalPage>
  )
}

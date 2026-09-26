import Link from 'next/link'
import { company, headquarters, shareCapital } from '@/content/company'
import { localePath } from '@/lib/i18n'
import { paths } from '@/lib/site'

const mail = (
  <a href={`mailto:${company.email}`} className="underline underline-offset-4">
    {company.email}
  </a>
)

export const legalNotice = {
  meta: {
    title: 'Legal notice',
    description: 'Publisher and host of the Seeckr website.',
  },
  Body: () => (
    <>
      <section>
        <h2>Publisher</h2>
        <ul>
          <li>
            {company.legalName}, a French SAS (simplified joint-stock company)
            with share capital of {shareCapital('en-GB')}
          </li>
          <li>Registered office: {headquarters}, France</li>
          <li>
            SIREN {company.siren}, {company.registry}
          </li>
          <li>EU VAT number: [À COMPLÉTER : numéro de TVA]</li>
          <li>
            Contact: {mail},{' '}
            <a
              href={`tel:${company.phone}`}
              className="underline underline-offset-4"
            >
              {company.phoneLabelIntl}
            </a>
          </li>
          <li>Publication director: {company.publicationDirector}</li>
        </ul>
      </section>
      <section>
        <h2>Host</h2>
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United
          States,{' '}
          <a href="https://vercel.com" className="underline underline-offset-4">
            vercel.com
          </a>
          .
        </p>
      </section>
      <section>
        <h2>Intellectual property</h2>
        <p>
          The Seeckr name, its logo and the content of this website are
          protected by intellectual property law. Any reproduction without
          permission is prohibited.
        </p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>This website sets no cookies and uses no analytics tools.</p>
      </section>
    </>
  ),
}

export const privacy = {
  meta: {
    title: 'Privacy policy',
    description:
      'What data the Seeckr website collects, why, and how to exercise your rights.',
  },
  Body: () => (
    <>
      <section>
        <h2>Data controller</h2>
        <p>
          {company.legalName}, {headquarters}, France. For any question about
          your data: {mail}
        </p>
      </section>
      <section>
        <h2>Data collected</h2>
        <p>
          The website only collects personal data through the{' '}
          <Link
            href={localePath('en', paths.lead)}
            className="underline underline-offset-4"
          >
            free trial request form
          </Link>
          : your website address, your work email and your work phone number.
        </p>
        <p>This website sets no cookies and uses no analytics tools.</p>
      </section>
      <section>
        <h2>Purpose</h2>
        <p>
          We only use your details to build and present your Seeckr assistant.
          Never sold on, and no newsletter without your consent.
        </p>
      </section>
      <section>
        <h2>Legal basis</h2>
        <p>
          Steps taken at your request prior to entering into a contract: you ask
          for a Seeckr assistant built on your catalogue, and we use your
          details to build it and present it to you.
        </p>
      </section>
      <section>
        <h2>Recipients</h2>
        <p>
          Your request is passed to the Seeckr team. To get there, it goes
          through technical service providers: Resend to send the notification
          email, Slack for the team’s internal messaging, and Vercel to host the
          website.
        </p>
        <p>
          All three providers are based in the United States: your data may
          therefore be processed outside the European Union, under the
          contractual commitments made with each of them.
        </p>
      </section>
      <section>
        <h2>Retention period</h2>
        <p>
          Three years from our last contact with you. After that, your details
          are deleted.
        </p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>
          You can access your data, have it corrected or erased, object to its
          processing, or request its restriction or portability. Write to {mail}
          .
        </p>
        <p>
          You can also lodge a complaint with the CNIL, the French data
          protection authority, at{' '}
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

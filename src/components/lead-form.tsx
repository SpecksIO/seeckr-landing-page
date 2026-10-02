'use client'

import Link from 'next/link'
import { useActionState, useEffect, useRef } from 'react'
import { submitLead } from '@/app/[lang]/mon-seeckr/actions'
import { button } from '@/components/styles'
import type { Dictionary } from '@/content'
import type { LeadField, LeadState } from '@/lib/lead'
import { track } from '@/lib/meta-pixel'

const fields: {
  name: LeadField
  type: string
  autoComplete: string
  inputMode?: 'url'
}[] = [
  { name: 'site', type: 'text', autoComplete: 'url', inputMode: 'url' },
  { name: 'email', type: 'email', autoComplete: 'email' },
  { name: 'phone', type: 'tel', autoComplete: 'tel' },
]

/**
 * Formulaire du Seeckr personnalisé. Il passe par une action serveur :
 * sans JavaScript, le navigateur l'envoie et la page revient avec le résultat.
 */
export function LeadForm({
  lang,
  copy,
  submitLabel,
  privacyHref,
}: {
  lang: string
  copy: Dictionary['lead']['form']
  submitLabel: string
  privacyHref: string
}) {
  const [state, formAction, pending] = useActionState<LeadState, FormData>(
    submitLead,
    { status: 'idle' }
  )
  const confirmation = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state.status !== 'sent') return
    confirmation.current?.focus()
    track('Lead')
  }, [state.status])

  if (state.status === 'sent') {
    return (
      <div
        ref={confirmation}
        tabIndex={-1}
        role="status"
        className="rounded-2xl bg-white p-6 text-text outline-none sm:p-8"
      >
        <p className="font-display font-semibold text-2xl text-ink">
          {copy.sent.title}
        </p>
        <p className="mt-3 text-text-soft leading-relaxed">{copy.sent.text}</p>
      </div>
    )
  }

  const values = state.status === 'idle' ? undefined : state.values
  const errors = state.status === 'idle' ? [] : state.errors

  return (
    <form
      action={formAction}
      className="rounded-2xl bg-white p-6 text-text sm:p-8"
    >
      <input type="hidden" name="lang" value={lang} />
      {state.status === 'invalid' && (
        <p
          role="alert"
          className="mb-6 rounded-lg bg-mist p-4 text-ink text-sm"
        >
          {copy.invalid}
        </p>
      )}
      {state.status === 'failed' && (
        <p
          role="alert"
          className="mb-6 rounded-lg bg-mist p-4 text-ink text-sm"
        >
          {copy.failed}
        </p>
      )}

      <div className="space-y-5">
        {fields.map((field) => {
          const error = errors.includes(field.name)
          return (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block font-medium text-ink text-sm"
              >
                {copy.fields[field.name].label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                placeholder={copy.fields[field.name].placeholder || undefined}
                defaultValue={values?.[field.name]}
                required
                maxLength={200}
                aria-invalid={error || undefined}
                aria-describedby={error ? `${field.name}-error` : undefined}
                className="mt-2 block min-h-12 w-full rounded-lg border border-line bg-white px-4 text-base text-text placeholder:text-meta focus:border-violet focus:outline-2 focus:outline-violet-100 aria-invalid:border-violet"
              />
              {error && (
                <p
                  id={`${field.name}-error`}
                  className="mt-2 text-sm text-violet"
                >
                  {copy.errors[field.name]}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {/* Champ piège : invisible, hors du parcours clavier et des lecteurs d'écran. */}
      <div
        aria-hidden="true"
        className="absolute -left-[10000px] size-px overflow-hidden"
      >
        <label>
          Entreprise
          <input
            type="text"
            name="entreprise"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className={`${button('primary')} mt-8 w-full disabled:opacity-70`}
      >
        {pending ? copy.sending : submitLabel}
      </button>
      <p className="mt-4 text-sm text-text-soft leading-relaxed">
        {copy.reassurance}
      </p>
      <p className="mt-2 text-sm">
        <Link
          href={privacyHref}
          className="text-violet underline underline-offset-4"
        >
          {copy.privacyLink}
        </Link>
      </p>
    </form>
  )
}

'use server'

import { type Lead, type LeadState, parseLead } from '@/lib/lead'

/**
 * Reçoit la demande de Seeckr personnalisé, puis la transmet par e-mail
 * (Resend) et sur Slack. Un seul canal qui répond suffit : la demande n'est
 * pas perdue.
 */
export async function submitLead(
  _previous: LeadState,
  formData: FormData
): Promise<LeadState> {
  // Champ piège invisible : seul un robot le remplit. Il croit avoir réussi.
  if (formData.get('entreprise')) return { status: 'sent' }

  const parsed = parseLead(formData)
  if (!parsed.ok) {
    return { status: 'invalid', values: parsed.values, errors: parsed.errors }
  }

  const results = await Promise.allSettled([
    sendEmail(parsed.lead),
    notifySlack(parsed.lead),
  ])
  for (const result of results) {
    if (result.status === 'rejected') {
      console.error('Demande de Seeckr : envoi échoué', result.reason)
    }
  }
  if (results.some((result) => result.status === 'fulfilled')) {
    return { status: 'sent' }
  }
  return { status: 'failed', values: parsed.lead, errors: {} }
}

function summary(lead: Lead) {
  return [
    'Nouvelle demande de Seeckr personnalisé',
    '',
    `Site : ${lead.site}`,
    `E-mail : ${lead.email}`,
    `Téléphone : ${lead.phone}`,
  ].join('\n')
}

async function sendEmail(lead: Lead) {
  await post(
    'https://api.resend.com/emails',
    {
      from: 'Seeckr <noreply@seeckr.fr>',
      to: env('LEAD_EMAIL_TO'),
      reply_to: lead.email,
      subject: `Seeckr personnalisé : ${new URL(lead.site).hostname}`,
      text: summary(lead),
    },
    { Authorization: `Bearer ${env('RESEND_API_KEY')}` }
  )
}

async function notifySlack(lead: Lead) {
  await post(env('SLACK_WEBHOOK_URL'), { text: summary(lead) })
}

async function post(
  url: string,
  body: unknown,
  headers: Record<string, string> = {}
) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(10_000),
  })
  if (!response.ok) {
    throw new Error(
      `${new URL(url).host} a répondu ${response.status} : ${await response.text()}`
    )
  }
}

function env(name: string) {
  const value = process.env[name]
  if (!value) throw new Error(`Variable d'environnement manquante : ${name}`)
  return value
}

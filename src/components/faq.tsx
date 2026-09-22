import { Section } from '@/components/section'
import { faq } from '@/content/home'

export function Faq() {
  return (
    <Section id="faq" tone="light" eyebrow={faq.eyebrow} title={faq.title}>
      <div className="max-w-3xl border-ink/15 border-b">
        {faq.items.map((item) => (
          <details key={item.id} className="group border-ink/15 border-t">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display font-medium text-lg focus-visible:outline-2 focus-visible:outline-violet [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="text-2xl text-violet transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-prose pb-6 text-ink/80 leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  )
}

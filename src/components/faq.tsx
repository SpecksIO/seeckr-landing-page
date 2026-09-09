import { faq } from '@/lib/content'

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="mx-auto w-full max-w-3xl scroll-mt-20 border-t border-line px-6 py-20"
    >
      <h2 id="faq-title" className="text-2xl font-bold tracking-tight">
        Frequently asked questions
      </h2>
      <dl className="mt-10 space-y-6">
        {faq.map((item) => (
          <div key={item.id} className="border-b border-line pb-6">
            <dt className="text-base font-semibold">{item.question}</dt>
            <dd className="mt-2 text-sm leading-6 text-muted">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

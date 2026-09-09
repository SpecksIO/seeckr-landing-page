import { Faq } from '@/components/faq'
import { faq } from '@/lib/content'
import { render, screen } from '@testing-library/react'

describe('Faq', () => {
  it('renders every question and answer from the content source', () => {
    render(<Faq />)

    for (const item of faq) {
      expect(screen.getByText(item.question)).toBeInTheDocument()
      expect(screen.getByText(item.answer)).toBeInTheDocument()
    }
  })

  it('exposes an accessible section heading', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { name: /frequently asked questions/i })
    ).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'

import { AnimatedSection } from './AnimatedSection'
import { axe } from 'jest-axe'

describe('AnimatedSection', () => {
  it('displays the default message', () => {
    render(<AnimatedSection>a</AnimatedSection>)

    expect(screen.getByText('a')).toBeInTheDocument()
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<AnimatedSection>a</AnimatedSection>)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

import { render, screen } from '@testing-library/react'

import { Header } from './Header'
import { axe } from 'jest-axe'

describe('Header', () => {
  it('renders properly', () => {
    render(<Header />)

    expect(screen.getByText('PHONE CATALOG')).toBeInTheDocument()
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

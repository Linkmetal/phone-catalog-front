import { render, screen } from '@testing-library/react'

import { Select } from '@radix-ui/react-select'
import { axe } from 'jest-axe'

describe('Select', () => {
  it('renders properly', () => {
    render(<Select />)

    expect(screen.getByText('PHONE CATALOG')).toBeInTheDocument()
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<Select />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

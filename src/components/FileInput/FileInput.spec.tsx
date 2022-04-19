import { render, screen } from '@testing-library/react'

import { FileInput } from './FileInput'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'

describe('FileInput', () => {
  it('renders properly', () => {
    render(<FileInput id="id" label="label" />)

    expect(screen.getAllByText('label')[0]).toBeInTheDocument()
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<FileInput label="label" id="id" />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

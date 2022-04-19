import { render, screen } from '@testing-library/react'

import { Toast } from './Toast'
import { axe } from 'jest-axe'

describe('Toast', () => {
  it('renders properly', () => {
    render(<Toast toastMessage={{ description: '', title: '', variant: 'danger' }} />)

    expect(screen.getByText('PHONE CATALOG')).toBeInTheDocument()
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<Toast toastMessage={{ description: '', title: '', variant: 'danger' }} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

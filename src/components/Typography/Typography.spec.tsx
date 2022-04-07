import { render, screen } from '@testing-library/react'

import React from 'react'
import { Typography } from './Typography'
import { axe } from 'jest-axe'

describe('Typography', () => {
  it('displays the default message', () => {
    render(<Typography />)

    expect(screen.getByText('This is the Typography component!')).toBeInTheDocument()
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<Typography />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

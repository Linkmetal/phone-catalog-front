import { render, screen } from '@testing-library/react'

import React from 'react'
import { Typography } from './Typography'
import { axe } from 'jest-axe'

describe('Typography', () => {
  it('renders properly', () => {
    render(<Typography>Text</Typography>)

    expect(screen.getByText('Text')).toBeInTheDocument()
  })

  it('can pass color as parameter', () => {
    render(<Typography color="accentTextContrast">Text</Typography>)

    expect(screen.getByText('Text').className.includes('accentTextContrast')).toBeTruthy()
  })

  it('can pass size as parameter', () => {
    render(<Typography size="h1">Text</Typography>)

    expect(screen.getByText('Text').className.includes('h1')).toBeTruthy()
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<Typography>Text</Typography>)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

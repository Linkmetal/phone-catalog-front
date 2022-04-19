import { render, screen } from '@testing-library/react'

import { MemoryRouter } from 'react-router'
import { Toolbar } from './Toolbar'
import { axe } from 'jest-axe'

describe('Toolbar', () => {
  it('renders properly', () => {
    render(
      <MemoryRouter>
        <Toolbar searchValue="" onSearch={() => undefined} />,
      </MemoryRouter>,
    )

    expect(screen.getByText('Search phone')).toBeInTheDocument()
  })

  it.todo('calls onLogin on login click')

  it('does not have basic accessibility issues', async () => {
    const { container } = render(
      <MemoryRouter>
        <Toolbar searchValue="" onSearch={() => undefined} />,
      </MemoryRouter>,
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

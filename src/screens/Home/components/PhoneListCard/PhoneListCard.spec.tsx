import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'

import { PhoneListCard } from './PhoneListCard'
import { axe } from 'jest-axe'
import { phonesFixture } from 'test/fixtures/phones'
import userEvent from '@testing-library/user-event'

describe('Home', () => {
  it('renders the phone list properly', () => {
    render(<PhoneListCard phone={phonesFixture[0]} />)

    expect(screen.getByText(phonesFixture[0].name)).toBeInTheDocument()
    expect(screen.getByText(phonesFixture[0].manufacturer)).toBeInTheDocument()
    expect(screen.getByText(`${phonesFixture[0].price}€`)).toBeInTheDocument()
  })

  it('navigates to phone detail onClick', async () => {
    render(<PhoneListCard phone={phonesFixture[0]} />, { wrapper: MemoryRouter })

    userEvent.click(screen.getByText(phonesFixture[0].name))
    await waitFor(() => {
      expect(window.location.pathname).toBe('/')
    })
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<PhoneListCard phone={phonesFixture[0]} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

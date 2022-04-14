import { render, screen } from '@testing-library/react'

import { PhoneList } from './PhoneList'
import { axe } from 'jest-axe'
import { phonesFixture } from 'test/fixtures/phones'

describe('Home', () => {
  it('renders the phone list properly', () => {
    render(<PhoneList phones={phonesFixture} />)

    phonesFixture.map((phone) => expect(screen.getByText(phone.name)).toBeInTheDocument())
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<PhoneList phones={phonesFixture} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

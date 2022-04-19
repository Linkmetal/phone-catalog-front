import { render, screen } from '@testing-library/react'

import { CreatePhoneForm } from './CreatePhoneForm'
import { axe } from 'jest-axe'
import { phonesFixture } from 'test/fixtures/phones'

describe('CreatePhoneForm', () => {
  // it('renders the phone list properly', () => {
  //   render(
  //     <CreatePhoneForm hasReachedTotal={false} isLoading={false} onLoadMore={() => undefined} phones={phonesFixture} />,
  //   )
  //   phonesFixture.map((phone) => expect(screen.getByText(phone.name)).toBeInTheDocument())
  // })
  // it('does not have basic accessibility issues', async () => {
  //   const { container } = render(
  //     <CreatePhoneForm hasReachedTotal={false} isLoading={false} onLoadMore={() => undefined} phones={phonesFixture} />,
  //   )
  //   const results = await axe(container)
  //   expect(results).toHaveNoViolations()
  // })
})

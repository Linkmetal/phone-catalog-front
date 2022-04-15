import { render, screen } from '@testing-library/react'

import { PhoneListCard } from './PhoneListCard'
import { axe } from 'jest-axe'
import { phonesFixture } from 'test/fixtures/phones'

describe('Home', () => {
  it('renders the phone list properly', () => {
    render(<PhoneListCard phone={phonesFixture[0]} />)

    expect(screen.getByText(phonesFixture[0].name)).toBeInTheDocument()
    expect(screen.getByText(phonesFixture[0].manufacturer)).toBeInTheDocument()
    expect(screen.getByText(`${phonesFixture[0].price}€`)).toBeInTheDocument()
  })

  it.todo('navigates to phone detail onClick')
  // async () => {
  //   render(
  //     <MemoryRouter>
  //       <Routes>
  //         <Route path="/" element={<PhoneListCard phone={phonesFixture[0]} />} />
  //         <Route path="/phones/:id" element={<div>navigated</div>} />
  //       </Routes>
  //       {/* <PhoneListCard phone={phonesFixture[0]} /> */}
  //     </MemoryRouter>,
  //   )
  //   userEvent.click(await screen.findByText(phonesFixture[0].name))
  //   await waitFor(() => {
  //     expect(location.href).toBe(`/phones/${phonesFixture[0].id}`)
  //   })

  //   // expect(window.location.pathname).toBe(`/phone/${phonesFixture[0].id}`)
  // })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<PhoneListCard phone={phonesFixture[0]} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

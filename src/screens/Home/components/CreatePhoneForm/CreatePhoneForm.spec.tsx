import { QueryClient, QueryClientProvider } from 'react-query'
import { render, screen } from '@testing-library/react'

import { CreatePhoneForm } from './CreatePhoneForm'
import { PhonesRepository } from 'network/repositories/PhonesRepository'
import { axe } from 'jest-axe'
import { phonesFixture } from 'test/fixtures/phones'
import userEvent from '@testing-library/user-event'

describe('CreatePhoneForm', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: false,
      },
      mutations: {
        useErrorBoundary: false,
      },
    },
  })
  it('renders properly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CreatePhoneForm onSuccess={() => undefined} onError={() => undefined} />
      </QueryClientProvider>,
    )

    expect(screen.getByText('Create Phone'))
  })

  it.todo('can submit a phone')
  // jest.spyOn(PhonesRepository, 'add').mockResolvedValue(phonesFixture[0])
  // jest.spyOn(PhonesRepository, 'addImage').mockResolvedValue(phonesFixture[0])
  // , () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <CreatePhoneForm onSuccess={() => undefined} onError={() => undefined} />
  //     </QueryClientProvider>,
  //   )

  //   userEvent.type(screen.getByText('Name'), 'Phone')
  //   userEvent.type(screen.getByText('Description'), 'asd')
  //   userEvent.type(screen.getByText('Price'), '100')
  //   userEvent.type(screen.getByText('Processor'), 'asd')
  //   userEvent.type(screen.getByText('Color'), 'asd')
  //   userEvent.click(screen.getByLabelText('Select manufacturer'))
  //   userEvent.click(screen.getByText('Apple'))
  //   userEvent.click(screen.getByLabelText('Select RAM'))
  //   userEvent.click(screen.getByText('2 GB'))

  // // ADD Image to file input

  //   userEvent.click(screen.getByText('Submit'))

  //   expect(screen.getByText('Create Phone'))
  // })

  // TODO: Find out why ARIA role combobox is not allowed for given element
  it.skip('does not have basic accessibility issues', async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <CreatePhoneForm onSuccess={() => undefined} onError={() => undefined} />
      </QueryClientProvider>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

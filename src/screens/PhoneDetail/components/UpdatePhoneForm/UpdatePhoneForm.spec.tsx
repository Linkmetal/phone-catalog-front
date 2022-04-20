import { QueryClient, QueryClientProvider } from 'react-query'
import { render, screen, waitFor } from '@testing-library/react'

import { PhonesRepository } from 'network/repositories/PhonesRepository'
import { UpdatePhoneForm } from './UpdatePhoneForm'
import { axe } from 'jest-axe'
import { phonesFixture } from 'test/fixtures/phones'
import userEvent from '@testing-library/user-event'

describe('UpdatePhoneForm', () => {
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
        <UpdatePhoneForm onSuccess={() => undefined} onError={() => undefined} phone={phonesFixture[0]} />
      </QueryClientProvider>,
    )

    expect(screen.getByText('Edit Phone'))
  })

  it('can edit a phone', async () => {
    jest.spyOn(PhonesRepository, 'edit').mockResolvedValue(phonesFixture[0])
    jest.spyOn(PhonesRepository, 'addImage').mockResolvedValue(phonesFixture[0])
    const onSuccessMock = jest.fn()
    render(
      <QueryClientProvider client={queryClient}>
        <UpdatePhoneForm onSuccess={onSuccessMock} onError={() => undefined} phone={phonesFixture[0]} />
      </QueryClientProvider>,
    )

    userEvent.type(screen.getByText('Name'), 'Phone')
    userEvent.click(screen.getByText('Submit'))

    await waitFor(() => {
      expect(onSuccessMock).toHaveBeenCalled()
    })
  })

  // TODO: Find out why ARIA role combobox is not allowed for given element
  it.skip('does not have basic accessibility issues', async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <UpdatePhoneForm phone={phonesFixture[0]} onSuccess={() => undefined} onError={() => undefined} />
      </QueryClientProvider>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

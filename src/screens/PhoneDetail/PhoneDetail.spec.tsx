import { QueryClient, QueryClientProvider } from 'react-query'
import { render, screen } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { PhoneDetail } from './PhoneDetail'
import { PhonesRepository } from 'network/repositories/PhonesRepository'
import { ToastMessageProvider } from 'contexts/ToastContext'
import { axe } from 'jest-axe'
import { phonesFixture } from 'test/fixtures/phones'
import userEvent from '@testing-library/user-event'

describe('PhoneDetail', () => {
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

  beforeEach(() => {
    jest.spyOn(PhonesRepository, 'details').mockResolvedValue(phonesFixture[0])
  })

  it('renders properly', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ToastMessageProvider>
            <PhoneDetail />
          </ToastMessageProvider>
        </QueryClientProvider>
      </MemoryRouter>,
    )

    expect(await screen.findByText(phonesFixture[0].name)).toBeInTheDocument()
    expect(await screen.findByText(phonesFixture[0].description)).toBeInTheDocument()
    expect(await screen.findByText(phonesFixture[0].color)).toBeInTheDocument()
    expect(await screen.findByText(phonesFixture[0].manufacturer)).toBeInTheDocument()
    expect(await screen.findByText(phonesFixture[0].ram)).toBeInTheDocument()
  })

  it('shows update phone form', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ToastMessageProvider>
            <PhoneDetail />
          </ToastMessageProvider>
        </QueryClientProvider>
      </MemoryRouter>,
    )

    userEvent.click(screen.getByLabelText('Edit Phone'))

    expect((await screen.findAllByText('Edit Phone')).length).toBe(2)
  })

  it('shows delete phone form', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ToastMessageProvider>
            <PhoneDetail />
          </ToastMessageProvider>
        </QueryClientProvider>
      </MemoryRouter>,
    )

    userEvent.click(screen.getByLabelText('Delete Phone'))

    expect((await screen.findAllByText('Delete Phone')).length).toBe(2)
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ToastMessageProvider>
            <PhoneDetail />
          </ToastMessageProvider>
        </QueryClientProvider>
      </MemoryRouter>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

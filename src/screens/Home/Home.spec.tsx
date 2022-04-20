import { QueryClient, QueryClientProvider } from 'react-query'
import { render, screen, waitFor } from '@testing-library/react'

import { Home } from './Home'
import { MemoryRouter } from 'react-router-dom'
import { PhonesRepository } from 'network/repositories/PhonesRepository'
import { ToastMessageProvider } from 'contexts/ToastContext'
import { phonesFixture } from 'test/fixtures/phones'
import userEvent from '@testing-library/user-event'

describe('Home', () => {
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
  let fetchSpy: jest.SpyInstance
  beforeEach(() => {
    fetchSpy = jest
      .spyOn(PhonesRepository, 'fetch')
      .mockResolvedValue({ pagination: { offset: 0, pageTake: 9, total: 9 }, data: phonesFixture })
  })

  it('renders properly', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ToastMessageProvider>
            <Home />
          </ToastMessageProvider>
        </QueryClientProvider>
      </MemoryRouter>,
    )

    expect(screen.getByText('PHONE CATALOG')).toBeInTheDocument()
    expect(screen.getByText('Filters')).toBeInTheDocument()
    expect(await screen.findByText('iPhone 7')).toBeInTheDocument()
  })

  it('shows create phone form', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ToastMessageProvider>
            <Home />
          </ToastMessageProvider>
        </QueryClientProvider>
      </MemoryRouter>,
    )

    userEvent.click(screen.getByLabelText('Create Phone'))

    expect((await screen.findAllByText('Create Phone')).length).toBe(2)
  })

  it('filters by name', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ToastMessageProvider>
            <Home />
          </ToastMessageProvider>
        </QueryClientProvider>
      </MemoryRouter>,
    )

    userEvent.type(screen.getAllByLabelText('Search phone')[0], 'asd')

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith({
        manufacturer: [],
        maxPrice: 1500,
        minPrice: 0,
        offset: 0,
        pageTake: 9,
        ram: [],
        searchQuery: 'asd',
      })
    })
  })
  it('filters by price', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ToastMessageProvider>
            <Home />
          </ToastMessageProvider>
        </QueryClientProvider>
      </MemoryRouter>,
    )

    screen.getByLabelText('Minimum').focus()
    userEvent.keyboard('[ArrowRight]')

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith({
        manufacturer: [],
        maxPrice: 1500,
        minPrice: 50,
        offset: 0,
        pageTake: 9,
        ram: [],
        searchQuery: '',
      })
    })
  })

  it('filters by manufacturer', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ToastMessageProvider>
            <Home />
          </ToastMessageProvider>
        </QueryClientProvider>
      </MemoryRouter>,
    )

    userEvent.click(screen.getByLabelText('Xiaomi'))

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith({
        manufacturer: ['Xiaomi'],
        maxPrice: 1500,
        minPrice: 0,
        offset: 0,
        pageTake: 9,
        ram: [],
        searchQuery: '',
      })
    })
  })

  it('filters by ram size', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ToastMessageProvider>
            <Home />
          </ToastMessageProvider>
        </QueryClientProvider>
      </MemoryRouter>,
    )

    userEvent.click(screen.getByLabelText('3 GB'))

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith({
        manufacturer: [],
        maxPrice: 1500,
        minPrice: 0,
        offset: 0,
        pageTake: 9,
        ram: ['3 GB'],
        searchQuery: '',
      })
    })
  })

  it('paginates', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ToastMessageProvider>
            <Home />
          </ToastMessageProvider>
        </QueryClientProvider>
      </MemoryRouter>,
    )

    userEvent.click(await screen.findByText('Load more'))

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith({
        manufacturer: [],
        maxPrice: 1500,
        minPrice: 0,
        offset: 9,
        pageTake: 9,
        ram: [],
        searchQuery: '',
      })
    })
  })
})

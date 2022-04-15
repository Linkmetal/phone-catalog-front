import { QueryClient, QueryClientProvider } from 'react-query'
import { render, screen, waitFor } from '@testing-library/react'

import { Home } from './Home'
import { MemoryRouter } from 'react-router-dom'
import { PhonesRepository } from 'network/repositories/PhonesRepository'
import { phonesFixture } from 'test/fixtures/phones'
import userEvent from '@testing-library/user-event'
import { wait } from '@testing-library/user-event/dist/utils'

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
  beforeEach(() => {
    jest.spyOn(PhonesRepository, 'fetch').mockResolvedValue({ pagination: {}, data: phonesFixture })
  })

  it('renders properly', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </MemoryRouter>,
    )

    expect(screen.getByText('PHONE CATALOG')).toBeInTheDocument()
    expect(screen.getByText('Filters')).toBeInTheDocument()
    expect(await screen.findByText('iPhone 7')).toBeInTheDocument()
  })

  // TODO: investigate why is not filtering by name, jest fake timers?? https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
  it.todo('filters by name')
  // async () => {
  //   render(
  //     <MemoryRouter>
  //       <QueryClientProvider client={queryClient}>
  //         <Home />
  //       </QueryClientProvider>
  //     </MemoryRouter>,
  //   )

  //   userEvent.type(screen.getAllByLabelText('Search phone')[0], 'aaa')
  //   await wait(1000)
  //   await waitFor(async () => {
  //     expect(await screen.findByText('iPhone 7')).not.toBeInTheDocument()
  //   })
  // })
})
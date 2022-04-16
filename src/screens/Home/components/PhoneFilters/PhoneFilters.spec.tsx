import { render, screen, waitFor } from '@testing-library/react'

import { PhoneFilters } from './PhoneFilters'
import { PhoneFiltersParams } from 'types/phone'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'

describe('PhoneFilters', () => {
  it('renders properly', () => {
    render(<PhoneFilters filters={{} as PhoneFiltersParams} onFiltersChange={() => undefined} />)

    expect(screen.getByText('Filters')).toBeInTheDocument()
    expect(screen.getByText('Price')).toBeInTheDocument()
    expect(screen.getByText('Manufacturer')).toBeInTheDocument()
    expect(screen.getByText('RAM Memory')).toBeInTheDocument()
  })

  it('calls onFilterChange on Price Range Change', async () => {
    const onFiltersChangeMock = jest.fn()
    render(
      <PhoneFilters
        filters={{ maxPrice: 1500, minPrice: 0 } as PhoneFiltersParams}
        onFiltersChange={onFiltersChangeMock}
      />,
    )

    userEvent.tab()
    userEvent.keyboard('[ArrowRight]')

    await waitFor(() => {
      expect(onFiltersChangeMock).toHaveBeenCalledWith({ minPrice: 50, maxPrice: 1500 })
    })
  })

  it('calls onFilterChange on manufacturer checkbox click', async () => {
    const onFiltersChangeMock = jest.fn()
    render(<PhoneFilters filters={{} as PhoneFiltersParams} onFiltersChange={onFiltersChangeMock} />)

    userEvent.click(screen.getByLabelText('Apple'))

    expect(onFiltersChangeMock).toHaveBeenCalledWith({ manufacturer: ['Apple'] })
  })

  it('calls onFilterChange on ram checkbox click', async () => {
    const onFiltersChangeMock = jest.fn()
    render(<PhoneFilters filters={{} as PhoneFiltersParams} onFiltersChange={onFiltersChangeMock} />)

    userEvent.click(screen.getByLabelText('2 GB'))

    expect(onFiltersChangeMock).toHaveBeenCalledWith({ ram: ['2 GB'] })
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<PhoneFilters filters={{} as PhoneFiltersParams} onFiltersChange={() => undefined} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

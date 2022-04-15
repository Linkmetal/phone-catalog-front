import { render, screen } from '@testing-library/react'

import { RangeInput } from './RangeInput'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'

describe('RangeInput', () => {
  it('renders properly', () => {
    render(<RangeInput onChange={() => undefined} value={[0, 10]} />)

    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('shows the unit token', () => {
    render(<RangeInput onChange={() => undefined} value={[0, 10]} unit="€" />)

    expect(screen.getByText('0€')).toBeInTheDocument()
    expect(screen.getByText('10€')).toBeInTheDocument()
  })

  it('calls onChange on thumb change', async () => {
    const onChangeMock = jest.fn()
    render(<RangeInput onChange={onChangeMock} value={[0, 10]} step={1} unit="€" />)

    userEvent.tab()
    userEvent.keyboard('[ArrowRight]')

    expect(onChangeMock).toHaveBeenCalledWith([1, 10])
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<RangeInput onChange={() => undefined} value={[0, 10]} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

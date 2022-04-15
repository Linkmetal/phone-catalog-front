import { render, screen, waitFor } from '@testing-library/react'

import { MultiCheckboxSelect } from './MultiCheckboxSelect'
import { PhoneManufacturerValues } from 'constants/phone'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'

describe('MultiCheckboxSelect', () => {
  it('renders properly', () => {
    render(<MultiCheckboxSelect onChange={() => undefined} options={[...PhoneManufacturerValues]} />)

    PhoneManufacturerValues.map((manufacturer) => {
      expect(screen.getByText(manufacturer)).toBeInTheDocument()
    })
  })

  it('calls onChange with checked and unchecked options', async () => {
    const onChangeMock = jest.fn()
    render(<MultiCheckboxSelect onChange={onChangeMock} options={[...PhoneManufacturerValues]} />)

    userEvent.click(screen.getByLabelText('Apple'))
    userEvent.click(screen.getByLabelText('Apple'))

    expect(onChangeMock).toHaveBeenCalledWith(['Apple'])
    expect(onChangeMock).toHaveBeenCalledWith([])
    expect(onChangeMock).toHaveBeenCalledTimes(2)
  })

  it('can recieve default checked options', async () => {
    const onChangeMock = jest.fn()
    render(
      <MultiCheckboxSelect onChange={onChangeMock} options={[...PhoneManufacturerValues]} defaultOptions={['Apple']} />,
    )

    userEvent.click(screen.getByLabelText('Xiaomi'))

    expect(onChangeMock).toHaveBeenCalledWith(['Apple', 'Xiaomi'])
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(
      <MultiCheckboxSelect onChange={() => undefined} options={[...PhoneManufacturerValues]} />,
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

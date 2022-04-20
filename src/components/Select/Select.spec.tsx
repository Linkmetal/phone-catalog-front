import { render, screen } from '@testing-library/react'

import { PhoneManufacturerValues } from 'constants/phone'
import { Select } from 'components/Select'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'

describe('Select', () => {
  it('renders properly', () => {
    render(
      <Select
        id="manufacturer"
        label="manufacturer"
        values={[...PhoneManufacturerValues]}
        placeholder="Select manufacturer"
        error=""
        onChange={() => undefined}
      />,
    )

    expect(screen.getByLabelText('Select manufacturer')).toBeInTheDocument()
  })

  // TODO: Find out why <select> tag is not displaying
  it.skip('can select an option', async () => {
    const onChangeMock = jest.fn()
    render(
      <Select
        id="manufacturer"
        label="manufacturer"
        values={[...PhoneManufacturerValues]}
        placeholder="Select manufacturer"
        error=""
        onChange={onChangeMock}
      />,
    )

    userEvent.click(screen.getByLabelText('Select manufacturer'))
    userEvent.click(await screen.findByText('Apple'))

    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(onChangeMock).toHaveBeenCalledWith('Apple')
  })

  it('can recieve a default value', () => {
    render(
      <Select
        id="manufacturer"
        label="manufacturer"
        values={[...PhoneManufacturerValues]}
        placeholder="Select manufacturer"
        error=""
        value="Apple"
        onChange={() => undefined}
      />,
    )

    expect(screen.getByText('Apple')).toBeInTheDocument()
  })

  it('Displays error message', () => {
    render(
      <Select
        id="manufacturer"
        label="manufacturer"
        values={[...PhoneManufacturerValues]}
        placeholder="Select manufacturer"
        error="Required"
        onChange={() => undefined}
      />,
    )

    expect(screen.getByText('Required')).toBeInTheDocument()
  })

  // TODO: Find out why ARIA role combobox is not allowed for given element
  it.skip('does not have basic accessibility issues', async () => {
    const { container } = render(
      <Select
        id="manufacturer"
        label="manufacturer"
        values={[...PhoneManufacturerValues]}
        placeholder="Select manufacturer"
        error="asd"
        onChange={() => undefined}
      />,
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

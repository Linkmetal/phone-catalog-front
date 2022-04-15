import { render, screen } from '@testing-library/react'

import React from 'react'
import { TextInput } from './TextInput'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'

describe('TextInput', () => {
  it('renders properly', () => {
    render(<TextInput id="id" label="label" value="" />)

    expect(screen.getAllByText('label')[0]).toBeInTheDocument()
  })

  it('displays the helper text', () => {
    render(<TextInput id="id" label="label" helperText="Helper text" value="" />)

    expect(screen.getByText('Helper text')).toBeInTheDocument()
  })

  it('can be disabled', () => {
    const onChangeMock = jest.fn()
    render(<TextInput id="id" label="label" onChange={onChangeMock} disabled value="" />)

    userEvent.type(screen.getAllByLabelText('label')[0], 'content')

    expect(onChangeMock).not.toHaveBeenCalled()
    expect(screen.getAllByLabelText('label')[0]).toBeDisabled()
  })

  it('shows the value passed as prop', () => {
    const onChangeMock = jest.fn()
    render(<TextInput id="id" label="label" value="test-value" onChange={onChangeMock} />)

    expect(screen.getByDisplayValue('test-value')).toBeInTheDocument()
  })

  it('calls the onChange method with the changed value', () => {
    const onChange = jest.fn()
    render(<TextInput id="id" label="label" value="a" onChange={onChange} />)

    userEvent.type(screen.getAllByLabelText('label')[0], 'b')

    expect(onChange).toHaveBeenCalledWith('ab')
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<TextInput label="label" id="id" value="asd" />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

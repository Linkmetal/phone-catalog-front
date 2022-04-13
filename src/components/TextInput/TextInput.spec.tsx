import { render, screen } from '@testing-library/react'

import React from 'react'
import { TextInput } from './TextInput'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'

describe('TextInput', () => {
  it('displays the label', () => {
    render(<TextInput id="id" label="label" value="" />)

    expect(screen.getByText('label')).toBeInTheDocument()
    expect(screen.getByLabelText('label')).toBeInTheDocument()
  })

  it('displays the helper text', () => {
    render(<TextInput id="id" label="label" helperText="Helper text" value="" />)

    expect(screen.getByText('Helper text')).toBeInTheDocument()
  })

  it('can be disabled', () => {
    const onChange = jest.fn()
    render(<TextInput id="id" label="label" helperText="Helper text" onChange={onChange} disabled value="" />)

    expect(screen.getByLabelText('label')).toBeDisabled()

    userEvent.type(screen.getByLabelText('label'), 'content')

    expect(onChange).not.toHaveBeenCalled()
  })

  it('can be read-only', () => {
    const onChange = jest.fn()
    render(<TextInput id="id" label="label" helperText="Helper text" onChange={onChange} disabled={true} value="" />)

    userEvent.type(screen.getByLabelText('label'), 'content')

    expect(onChange).not.toHaveBeenCalled()
  })

  it('shows the value passed as prop', () => {
    const onChange = jest.fn()
    render(<TextInput id="id" label="label" value="test-value" helperText="Helper text" onChange={onChange} />)

    expect(screen.getByDisplayValue('test-value')).toBeInTheDocument()
  })

  it('calls the onChange method with the changed value', () => {
    const onChange = jest.fn()
    render(<TextInput id="id" label="label" value="a" helperText="Helper text" onChange={onChange} />)

    userEvent.type(screen.getByLabelText('label'), 'b')

    expect(onChange).toHaveBeenCalledWith('ab')
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<TextInput label="label" id="id" value="asd" />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

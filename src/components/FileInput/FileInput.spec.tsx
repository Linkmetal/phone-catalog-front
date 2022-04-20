import { fireEvent, render, screen } from '@testing-library/react'

import { FileInput } from './FileInput'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'

describe('FileInput', () => {
  it('can load a file and shows the preview', async () => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })
    const onFileUploadMock = jest.fn()
    render(<FileInput onFileUpload={onFileUploadMock} id="id" label="label" />)

    userEvent.click(await screen.findByText('Upload file'))

    const fileInput = screen.getAllByLabelText('label')[0] as HTMLInputElement

    fireEvent.change(fileInput, {
      target: { files: [file] },
    })

    expect(await screen.findByAltText('Image preview')).toBeInTheDocument()
    expect(fileInput.files).not.toBe(null)
    if (fileInput.files) {
      expect(fileInput.files[0].name).toBe('chucknorris.png')
      expect(fileInput.files.length).toBe(1)
    }

    expect(onFileUploadMock).toHaveBeenCalledWith(file)
  })

  it('can delete a file', async () => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })
    const onFileUploadMock = jest.fn()
    render(<FileInput onFileUpload={onFileUploadMock} id="id" label="label" />)

    const fileInput = screen.getAllByLabelText('label')[0] as HTMLInputElement

    fireEvent.change(fileInput, {
      target: { files: [file] },
    })

    userEvent.click(await screen.findByText('Delete'))

    expect(fileInput.files).toBe(null)

    expect(onFileUploadMock).toHaveBeenCalledTimes(2)
    expect(onFileUploadMock).toHaveBeenCalledWith(null)
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<FileInput onFileUpload={() => undefined} label="label" id="id" />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

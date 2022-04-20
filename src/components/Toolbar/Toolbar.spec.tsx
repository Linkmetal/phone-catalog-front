import { render, screen, waitFor } from '@testing-library/react'

import { MemoryRouter } from 'react-router'
import { Toolbar } from './Toolbar'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'

describe('Toolbar', () => {
  it('renders properly', () => {
    render(
      <MemoryRouter>
        <Toolbar searchValue="" onSearch={() => undefined} />,
      </MemoryRouter>,
    )

    expect(screen.getByText('Search phone')).toBeInTheDocument()
  })

  it('calls onCreatePhone on Create Phone buttonClick', () => {
    const onCreatePhoneMock = jest.fn()
    render(
      <MemoryRouter>
        <Toolbar searchValue="" onCreatePhone={onCreatePhoneMock} onSearch={() => undefined} />,
      </MemoryRouter>,
    )

    userEvent.click(screen.getByText('Create Phone'))

    expect(onCreatePhoneMock).toHaveBeenCalledTimes(1)
  })

  it('calls onEditPhone on Edit Phone buttonClick', () => {
    const onEditPhoneMock = jest.fn()
    render(
      <MemoryRouter>
        <Toolbar searchValue="" onEditPhone={onEditPhoneMock} onSearch={() => undefined} />,
      </MemoryRouter>,
    )

    userEvent.click(screen.getByText('Edit Phone'))

    expect(onEditPhoneMock).toHaveBeenCalledTimes(1)
  })

  it('calls onSearch on Delete Phone buttonClick', () => {
    const onDeletePhoneMock = jest.fn()
    render(
      <MemoryRouter>
        <Toolbar searchValue="" onDeletePhone={onDeletePhoneMock} onSearch={() => undefined} />,
      </MemoryRouter>,
    )

    userEvent.click(screen.getByText('Delete Phone'))

    expect(onDeletePhoneMock).toHaveBeenCalledTimes(1)
  })

  it('calls onSearch on searchBar input', async () => {
    const onSearchMock = jest.fn()
    render(
      <MemoryRouter>
        <Toolbar searchValue="" onSearch={onSearchMock} />,
      </MemoryRouter>,
    )

    userEvent.type(screen.getAllByLabelText('Search phone')[0], 'a')

    await waitFor(() => {
      expect(onSearchMock).toHaveBeenCalledTimes(1)
    })
  })

  it('toggle class darkTheme on Toggle button click', async () => {
    const onSearchMock = jest.fn()
    render(
      <MemoryRouter>
        <div data-testid="container" id="darkThemeContainer">
          <Toolbar searchValue="" onSearch={onSearchMock} />,
        </div>
      </MemoryRouter>,
    )

    userEvent.click(screen.getByLabelText('Toggle dark theme'))

    await waitFor(() => {
      expect(screen.getByTestId('container')).toHaveClass('t-kvInUK', { exact: true })
    })
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(
      <MemoryRouter>
        <Toolbar searchValue="" onSearch={() => undefined} />,
      </MemoryRouter>,
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

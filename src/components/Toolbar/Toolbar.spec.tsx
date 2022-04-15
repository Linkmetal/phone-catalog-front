import { render, screen, waitFor } from '@testing-library/react'

import { MemoryRouter } from 'react-router'
import { Toolbar } from './Toolbar'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'

describe('Toolbar', () => {
  it('renders properly', () => {
    render(
      <MemoryRouter>
        <Toolbar isDarkThemeSetted={false} onThemeChange={() => undefined} searchValue="" onSearch={() => undefined} />,
      </MemoryRouter>,
    )

    expect(screen.getByText('Search phone')).toBeInTheDocument()
  })

  it('calls onThemeChange on theme toggle click', () => {
    const onThemeChangeMock = jest.fn()
    render(
      <MemoryRouter>
        <Toolbar
          isDarkThemeSetted={false}
          onThemeChange={onThemeChangeMock}
          searchValue=""
          onSearch={() => undefined}
        />
      </MemoryRouter>,
    )

    userEvent.click(screen.getByLabelText('Toggle dark theme'))

    expect(onThemeChangeMock).toHaveBeenCalledWith(true)
  })

  it('calls onThemeChange on theme toggle click', async () => {
    const onSearchMock = jest.fn()
    render(
      <MemoryRouter>
        <Toolbar isDarkThemeSetted={false} onThemeChange={() => undefined} searchValue="" onSearch={onSearchMock} />
      </MemoryRouter>,
    )

    userEvent.type(screen.getAllByLabelText('Search phone')[0], 'asd')

    await waitFor(() => {
      expect(onSearchMock).toHaveBeenCalledWith('asd')
    })
  })

  it.todo('calls onLogin on login click')

  it('does not have basic accessibility issues', async () => {
    const { container } = render(
      <MemoryRouter>
        <Toolbar isDarkThemeSetted={false} onThemeChange={() => undefined} searchValue="" onSearch={() => undefined} />,
      </MemoryRouter>,
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

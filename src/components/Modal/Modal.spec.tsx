import { render, screen } from '@testing-library/react'

import { Modal } from './Modal'
import { axe } from 'jest-axe'

describe('Modal', () => {
  it('does not have basic accessibility issues', async () => {
    const { container } = render(<Modal onClose={() => undefined} open={true} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
  it('shows content when open is true', () => {
    render(
      <Modal onClose={() => undefined} open={true}>
        <span>Im a modal</span>
      </Modal>,
    )

    expect(screen.getByText('Im a modal')).toBeInTheDocument()
  })

  it('hides content when open is false', () => {
    render(
      <Modal onClose={() => undefined} open={false}>
        <span>Im a modal</span>
      </Modal>,
    )

    expect(screen.queryByText('Im a modal')).not.toBeInTheDocument()
  })

  it.todo('close on close button click')
})

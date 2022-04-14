import { Home } from './Home'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'

describe('Home', () => {
  it('displays Icon', () => {
    render(<Home />)
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<Home />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

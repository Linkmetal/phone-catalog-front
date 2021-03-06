import { render, screen } from '@testing-library/react'

import { Toast } from './Toast'
import { ToastMessageProvider } from 'contexts/ToastContext'
import { ToastProvider } from '@radix-ui/react-toast'
import { ToastViewport } from 'components/Toast/Toast.styles'

describe('Toast', () => {
  it('renders properly', async () => {
    render(
      <ToastMessageProvider>
        <ToastProvider>
          <Toast toastMessage={{ description: 'asd', title: 'dsa', variant: 'danger', delay: 10000 }} />
          <ToastViewport />
        </ToastProvider>
      </ToastMessageProvider>,
    )

    expect(await screen.findByText('asd')).toBeInTheDocument()
  })
})

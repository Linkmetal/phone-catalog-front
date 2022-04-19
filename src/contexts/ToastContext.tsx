import * as RadixToast from '@radix-ui/react-toast'

import React, { useEffect } from 'react'

import { Toast } from 'components/Toast'
import { ToastViewport } from 'components/Toast/Toast.styles'

type ToastContext = { toastMessage: ToastMessage | null; setToastMessage: (toastMessage: ToastMessage | null) => void }

export type ToastMessage = {
  variant: 'danger' | 'info' | 'success'
  title: string
  description: string
  delay?: number
  actionMessage?: string
  onAction?: () => void
}

const ToastContext = React.createContext<ToastContext | undefined>(undefined)

export const ToastMessageProvider: React.FC = ({ children }) => {
  const [toastMessage, setToastMessage] = React.useState<ToastMessage | null>(null)

  useEffect(() => {
    if (!toastMessage) return
    setTimeout(() => setToastMessage(null), toastMessage?.delay || 5000)
  }, [toastMessage])

  return (
    <ToastContext.Provider value={{ toastMessage, setToastMessage }}>
      <RadixToast.Provider>
        {toastMessage && <Toast toastMessage={toastMessage} />}
        <ToastViewport />
      </RadixToast.Provider>
      {children}
    </ToastContext.Provider>
  )
}

export function useToastContext() {
  const context = React.useContext(ToastContext)

  if (typeof context === 'undefined') {
    throw new Error('useToastContext must be used within a ToastMessageProvider')
  }
  return context
}

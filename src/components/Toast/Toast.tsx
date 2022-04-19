import { ToastDescription, ToastRoot, ToastTitle } from 'components/Toast/Toast.styles'

import { ToastMessage } from 'contexts/ToastContext'

export type ToastProps = {
  toastMessage: ToastMessage
}
export const Toast = ({ toastMessage }: ToastProps) => {
  return (
    <ToastRoot variant={toastMessage.variant} open={true}>
      <ToastTitle>{toastMessage.title}</ToastTitle>
      <ToastDescription>{toastMessage.description}</ToastDescription>
    </ToastRoot>
  )
}

export default Toast

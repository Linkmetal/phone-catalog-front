import { CloseButton, Content, ModalRoot, Overlay, Portal } from './Modal.styles'

import { ComponentProps } from 'react'

type ModalOwnProps = ComponentProps<typeof ModalRoot>
type ContentOwnProps = ComponentProps<typeof Content>
export type ModalProps = ModalOwnProps & ContentOwnProps & { onClose: () => void }

export const Modal = ({ onClose, children, css, ...rest }: ModalProps) => {
  return (
    <ModalRoot modal {...rest}>
      <Portal>
        <Overlay>
          <Content css={css}>
            <CloseButton onClick={onClose} />
            {children}
          </Content>
        </Overlay>
      </Portal>
    </ModalRoot>
  )
}

Modal.displayName = 'Modal'

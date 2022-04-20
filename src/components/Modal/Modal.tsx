import { CloseButton, Content, ModalRoot, Overlay, Portal } from './Modal.styles'

import { ComponentProps } from 'react'
import { darkTheme } from '../../styles/stitches.config'
import { useCookieState } from 'ahooks'

type ModalOwnProps = ComponentProps<typeof ModalRoot>
type ContentOwnProps = ComponentProps<typeof Content>
export type ModalProps = ModalOwnProps & ContentOwnProps & { onClose: () => void }

export const Modal = ({ onClose, children, css, ...rest }: ModalProps) => {
  const [isDarkThemeSetted] = useCookieState('darkTheme')
  return (
    <ModalRoot modal {...rest}>
      <Portal>
        <Overlay>
          <Content className={isDarkThemeSetted === 'true' ? darkTheme : ''} css={css}>
            <CloseButton onClick={onClose} />
            {children}
          </Content>
        </Overlay>
      </Portal>
    </ModalRoot>
  )
}

Modal.displayName = 'Modal'

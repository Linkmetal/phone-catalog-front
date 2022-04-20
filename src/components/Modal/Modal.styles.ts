import * as Dialog from '@radix-ui/react-dialog'

import { FlexContainer } from 'styles/common.styles'
import { keyframes } from '@stitches/react'
import { styled } from 'styles/stitches.config'

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const scaleIn = keyframes({
  to: { opacity: 1, transform: 'scale(1) translate(0)' },
})

export const ModalRoot = styled(Dialog.Root, {
  backgroundColor: '$accentBg',
})

export const Portal = styled(Dialog.Portal)

export const CloseButton = styled(Dialog.Close, {
  all: 'unset',
  position: 'absolute',
  color: '$accentTextContrast',
  top: '$3',
  right: '$3',
  size: '$4',
  cursor: 'pointer',
  textAlign: 'center',
  verticalAlign: 'middle',
  borderRadius: '$2',
  padding: '$1',
  '&::after': {
    content: 'x',
    fontSize: '130%',
    position: 'relative',
    top: '-7px',
  },
  '&:hover': {
    backgroundColor: '$accentBgHover',
  },
})

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(50, 53, 63, 0.7)',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  overflow: 'auto',
  padding: '$4',
  zIndex: 100,

  '&[data-state="open"]': {
    animation: `${fadeIn} 150ms ease-out forwards`,
  },
})

export const Content = styled(Dialog.Content, {
  padding: '$9',
  backgroundColor: '$accentBg',
  borderRadius: '$3',
  opacity: 0,
  transform: 'scale(.9) translateY(24px)',

  '&:focus': {
    outline: 'none',
  },

  '&[data-state="open"]': {
    animation: `${scaleIn} 150ms ease-out forwards`,
    animationDelay: '150ms',
  },
})

export const ModalHeader = styled(FlexContainer, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$4',
})

export const ModalTitle = styled('h4', {
  margin: 0,
  fontSize: '$h4',
  lineHeight: '$h4',
  fontWeight: '$semiBold',
})

export const ModalSubtitle = styled('p', {
  margin: 0,
  fontSize: '$body',
  lineHeight: '$body',
  color: '$text-subdued',
})

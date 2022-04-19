import * as RadixToast from '@radix-ui/react-toast'

import { keyframes, styled } from 'styles/stitches.config'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastViewport = styled(RadixToast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: '350px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastRoot = styled(RadixToast.Root, {
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',
  backgroundColor: '$accentBgActive',
  color: '$accentText',

  variants: {
    variant: {
      danger: {
        backgroundColor: '$dangerBgActive',
        color: '$dangerText',
      },
      success: {
        backgroundColor: '$successBgActive',
        color: '$successText',
      },
      info: {
        backgroundColor: '$infoBgActive',
        color: '$infoText',
      },
    },
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in forwards`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out forwards`,
    },
  },
})

export const ToastTitle = styled(RadixToast.Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: 500,
  fontSize: 15,
})

export const ToastDescription = styled(RadixToast.Description, {
  gridArea: 'description',
  margin: 0,
  fontSize: 13,
  lineHeight: 1.3,
})

export const ToastAction = styled(RadixToast.Action, {
  gridArea: 'action',
})

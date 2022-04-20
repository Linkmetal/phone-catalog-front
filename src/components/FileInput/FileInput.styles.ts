import { FlexContainer } from 'styles/common.styles'
import { styled } from 'styles/stitches.config'

export const FileInputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  backgroundColor: 'transparent',
  borderRadius: '$2',
  padding: '$2 $4',

  '&:focus': {
    outline: 'none',
  },
})

export const Input = styled('input', {
  height: '$6',
  width: '100%',
  appearance: 'none',
  border: 'none',
  backgroundColor: '$accentBgHover',
  padding: 0,

  fontSize: '$caption',
  fontWeight: '$semiBold',
  color: '$accentText',

  '&::placeholder': {
    color: '$gray11',
  },

  '&:focus': {
    outline: 'none',
  },

  '&:disabled': {
    color: '$gray1',
    cursor: 'not-allowed',

    '&::placeholder': {
      color: '$gray1',
    },
  },

  '&:read-only': {
    color: '$gray1',
    pointerEvents: 'none',

    '&::placeholder': {
      color: '$gray1',
    },
  },

  '&[type="file"]': {
    display: 'none',
  },
})

export const FileInputRoot = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  minWidth: '120px',
  width: '100%',
  variants: {
    singleLine: {
      true: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
})

export const TextInputContainer = styled(FlexContainer, {})

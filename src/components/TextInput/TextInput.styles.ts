import { FlexContainer } from 'styles/common.styles'
import { Typography } from 'components/Typography'
import { styled } from 'styles/stitches.config'

export const InputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',

  border: '1px solid $grey-200',
  borderRadius: '$2',
  backgroundColor: '$accentBg',

  padding: '$2 $4',

  '& > svg': {
    color: '$accentText',
    marginRight: '$2',
    marginLeft: '-$1',
  },

  '&:focus': {
    outline: 'none',
  },
})

export const Input = styled('input', {
  height: '$6',
  width: '100%',
  appearance: 'none',
  border: 'none',
  backgroundColor: '$accentBg',
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
})

export const HelperText = styled(Typography, {
  color: '$accentTextContrast',
  fontSize: '$small',
  marginTop: '$2',

  variants: {
    error: {
      true: {
        color: '$errorText',
      },
    },
    success: {
      true: {
        color: '$successText',
      },
    },
    info: {
      true: {
        color: '$infoText',
      },
    },
    disabled: {
      true: {
        color: '$gray1',
      },
    },
  },
})

export const TextInputRoot = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  minWidth: '120px',

  variants: {
    error: {
      true: {},
    },
    success: {
      true: {},
    },
    disabled: {
      true: {},
    },
  },
})

export const TextInputContainer = styled(FlexContainer, {
  variants: {
    singleLine: {
      true: {
        '& > div': {
          minHeight: 'auto',
        },
      },
    },
  },
})

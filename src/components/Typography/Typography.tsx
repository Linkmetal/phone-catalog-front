import { ColorTokens, styled, theme } from 'styles/stitches.config'

type ColorVariants = { [K in ColorTokens]: { color: string } }

const colorVariants = (): ColorVariants => {
  let result = {}
  Object.keys(theme.colors).map((key) => (result = { ...result, [key]: { color: `$${key}` } }))
  return result as ColorVariants
}

export const Typography = styled('span', {
  display: 'inline-block',
  margin: 0,
  fontWeight: 400,
  lineHeight: 1,
  variants: {
    color: colorVariants(),
    size: {
      h1: {
        fontSize: '$h1',
        lineHeight: '$h1',
      },
      h2: {
        fontSize: '$h2',
        lineHeight: '$h2',
      },
      h3: {
        fontSize: '$h3',
        lineHeight: '$h3',
      },
      h4: {
        fontSize: '$h4',
        lineHeight: '$h4',
      },
      h5: {
        fontSize: '$h5',
        lineHeight: '$h5',
      },
      button: {
        fontSize: '$button',
        lineHeight: '$button',
      },
      body: {
        fontSize: '$body',
        lineHeight: '$body',
      },
      caption: {
        fontSize: '$caption',
        lineHeight: '$caption',
      },
      small: {
        fontSize: '$small',
        lineHeight: '$small',
      },
    },
    weight: {
      regular: {
        fontWeight: '$regular',
      },
      bold: {
        fontWeight: '$bold',
      },
      extraBold: {
        fontWeight: '$extraBold',
      },
    },
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
    truncate: {
      true: {
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  },

  defaultVariants: {
    color: 'accentText',
    weight: 'regular',
    align: 'left',
    size: 'body',
    truncate: false,
  },
})

Typography.displayName = 'Typography'

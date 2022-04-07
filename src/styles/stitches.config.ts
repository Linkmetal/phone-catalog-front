import { createStitches } from '@stitches/react'

const gradients = {
  'gradient-top':
    'linear-gradient(0deg, #006466, #065a60, #0b525b, #144552, #1b3a4b, #212f45, #272640, #312244, #3e1f47, #4d194d)',
  'gradient-right':
    'linear-gradient(90deg, #006466, #065a60, #0b525b, #144552, #1b3a4b, #212f45, #272640, #312244, #3e1f47, #4d194d)',
  'gradient-bottom':
    'linear-gradient(180deg, #006466, #065a60, #0b525b, #144552, #1b3a4b, #212f45, #272640, #312244, #3e1f47, #4d194d)',
  'gradient-left':
    'linear-gradient(270deg, #006466, #065a60, #0b525b, #144552, #1b3a4b, #212f45, #272640, #312244, #3e1f47, #4d194d)',
  'gradient-top-right':
    'linear-gradient(45deg, #006466, #065a60, #0b525b, #144552, #1b3a4b, #212f45, #272640, #312244, #3e1f47, #4d194d)',
  'gradient-bottom-right':
    'linear-gradient(135deg, #006466, #065a60, #0b525b, #144552, #1b3a4b, #212f45, #272640, #312244, #3e1f47, #4d194d)',
  'gradient-top-left':
    'linear-gradient(225deg, #006466, #065a60, #0b525b, #144552, #1b3a4b, #212f45, #272640, #312244, #3e1f47, #4d194d)',
  'gradient-bottom-left':
    'linear-gradient(315deg, #006466, #065a60, #0b525b, #144552, #1b3a4b, #212f45, #272640, #312244, #3e1f47, #4d194d)',
  'gradient-radial':
    'radial-gradient(#006466, #065a60, #0b525b, #144552, #1b3a4b, #212f45, #272640, #312244, #3e1f47, #4d194d)',
}

export const colors = {
  'primary-100': '#006466',
  'primary-200': '#065a60',
  'primary-300': '#0b525b',
  'primary-400': '#144552',
  'primary-500': '#1b3a4b',
  'secondary-100': '#272640',
  'secondary-200': '#312244',
  'secondary-300': '#3e1f47',
  'secondary-400': '#4d194d',

  'white-100': '#ffffff',
  'grey-100': '#8a8a8a',
  'text-default': '#26282e',
}

export type ColorTokens = keyof typeof colors

export const {
  styled,
  css,
  getCssText,
  config,
  globalCss: stitchesGlobal,
  theme,
  keyframes,
} = createStitches({
  theme: {
    colors,
    gradients,
    space: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '32px',
      8: '40px',
      9: '48px',
      10: '56px',
      11: '80px',
      12: '96px',
      modal: '120px',
    },
    fontSizes: {
      h1: '44px',
      h2: '36px',
      h3: '28px',
      h4: '20px',
      h5: '18px',
      button: '16px',
      body: '14px',
      caption: '12px',
      small: '10px',
    },
    lineHeights: {
      h1: '48px',
      h2: '40px',
      h3: '32px',
      h4: '24px',
      h5: '24px',
      button: '24px',
      body: '24px',
      caption: '16px',
      small: '16px',
    },
    fonts: {
      default:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      lato: 'Lato, sans-serif',
      devIcon: 'DevIcon',
    },
    fontWeights: {
      regular: 400,
      bold: 700,
      extraBold: 900,
    },
    letterSpacings: {},
    sizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '32px',
      8: '40px',
      9: '48px',
      10: '56px',
      11: '80px',
      12: '96px',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      round: '50%',
    },
    shadows: {
      'elevation-100': '1px 1px 4px rgba(0, 30, 53, 0.1)',
      'elevation-200': '0px 8px 12px rgba(0, 30, 53, 0.05)',
      'border-default': 'inset 0 0 0 1px #CFCFD2',
      'border-hover': 'inset 0 0 0 2px #BFBFBF',
      'border-focus': 'inset 0 0 0 2px #84868C',
    },
    zIndices: {},
    transitions: {},
  },
  media: {
    sm: '(min-width: 520px)',
    md: '(min-width: 900px)',
    lg: '(min-width: 1080px)',
  },
  utils: {
    size: (value: string) => ({
      width: value,
      height: value,
    }),
    paddingX: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
})

export const globalStyles = stitchesGlobal({
  '*': {
    boxSizing: 'border-box',
  },

  'ul,li': {
    listStyle: 'none',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  body: {
    fontFamily: '$lato',
    padding: 0,
    margin: 0,
    backgroundColor: '$background-default',
  },
  '@font-face': {
    fontFamily: 'DevIcon',
    src: 'url("/fonts/devicon.ttf")',
  },
  '@import': 'url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap")',

  ':root': {},
})

export type SizeTokens = keyof typeof theme.sizes
export type SpaceTokens = keyof typeof theme.space

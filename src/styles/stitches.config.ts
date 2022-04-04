import { createStitches } from '@stitches/react'

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
    colors: {},
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
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1480px)',
    bp5: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    size: (value: any) => ({
      width: value,
      height: value,
    }),
    paddingX: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    marginX: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: any) => ({
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

export type ColorTokens = keyof typeof theme.colors
export type SizeTokens = keyof typeof theme.sizes
export type SpaceTokens = keyof typeof theme.space

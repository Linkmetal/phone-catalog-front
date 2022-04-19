import { keyframes, styled } from 'styles/stitches.config'

export const Layout = styled('article', {
  height: '100vh',
  width: '100vw',
  backgroundColor: '$accentBase',
})

export const FlexContainer = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
      center: {
        alignItems: 'center',
      },
      spaceBetween: {
        alignItems: 'space-between',
      },
      spaceAround: {
        alignItems: 'space-around',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    justify: 'center',
    align: 'center',
  },
})

export const Card = styled(FlexContainer, {
  borderRadius: '$2',
})

export const Img = styled('img', {
  objectFit: 'contain',
  width: '100%',
  height: '100%',
})

const animPend = keyframes({
  '0%': {
    transform: 'rotate(22deg)',
  },
  '50%': {
    transform: 'rotate(0deg)',
  },
})
const animPend2 = keyframes({
  '0%, 55%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: ' rotate(-22deg)',
  },
})

export const Loader = styled('div', {
  width: '60px',
  height: '60px',
  display: 'block',
  margin: '20px auto',
  position: 'relative',
  background:
    'radial-gradient(ellipse at center, $accentSolid 69%, rgba(0, 0, 0, 0) 70%), linear-gradient(to right, rgba(0, 0, 0, 0) 47%, $accentSolid 48%, $accentSolid 52%, rgba(0, 0, 0, 0) 53%)',
  backgroundSize: '20px 20px , 20px auto',
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'center bottom, center -5px',
  boxSizing: 'border-box',

  '&::before, &::after': {
    content: '',
    boxSizing: 'border-box',
    position: 'absolute',
    left: '-20px',
    top: '0',
    width: '20px',
    height: '60px',
    background:
      'radial-gradient(ellipse at center, $accentSolid 69%, rgba(0, 0, 0, 0) 70%), linear-gradient(to right, rgba(0, 0, 0, 0) 47%, $accentSolid 48%, $accentSolid 52%, rgba(0, 0, 0, 0) 53%)',
    backgroundSize: '20px 20px , 20px auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom, center -5px',
    transform: 'rotate(0deg)',
    transformOrigin: '50% 0%',
    animation: `${animPend} 0.5s linear infinite alternate`,
  },
  '&::after': {
    animation: `${animPend2} 0.5s linear infinite alternate`,
    left: ' 100%',
  },
})

export const Button = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  paddingY: '$2',
  paddingX: '$4',
  borderRadius: '$2',
  backgroundColor: '$accentSolid',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$accentSolidHover',
  },
  '&:active': {
    backgroundColor: '$accentText',
    boxShadow: 'inset 0 0 1px 1px black',
  },
  '&:focus': {
    outline: '$accentBorderHover 3px solid',
  },
  variants: {
    variant: {
      danger: {
        backgroundColor: '$dangerSolid',
        '&:hover': {
          backgroundColor: '$dangerSolidHover',
        },
        '&:active': {
          backgroundColor: '$dangerText',
        },
      },
    },
  },
})

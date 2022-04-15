import { styled } from 'styles/stitches.config'

export const Layout = styled('article', {
  height: '100vh',
  width: '100vw',
  backgroundColor: '$accentBg',
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

import { styled } from 'styles/stitches.config'

export const HomeRoot = styled('div', {
  backgroundColor: '$accentSolid',
})

export const GridContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  '@sm': {
    gridTemplateColumns: '1fr',
  },
  '@md': {
    gridTemplateColumns: '0.25fr 0.75fr',
  },
  '@lg': {
    gridTemplateColumns: '0.20fr 0.80fr',
  },
})

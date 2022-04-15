import { styled } from 'styles/stitches.config'

export const HomeRoot = styled('div', {
  backgroundColor: '$accentBase',
})

export const GridContainer = styled('section', {
  display: 'grid',
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
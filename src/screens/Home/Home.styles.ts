import { styled } from '@stitches/react'

export const GridContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: '0.15fr 0.85fr',
  '@bp2': {
    gridTemplateColumns: '1fr',
  },
})

import { styled } from 'styles/stitches.config'

export const PhoneListRoot = styled('div', {
  height: '100%',
  overflow: 'scroll',
  display: 'grid',
  columnGap: '$4',
  rowGap: '$4',
  padding: '$8',
  gridTemplateRows: 'max-content',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  '@sm': {
    gridTemplateColumns: '1fr',
  },
  '@md': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@lg': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
})
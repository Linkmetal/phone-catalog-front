import { FlexContainer } from '../../../../styles/common.styles'
import { styled } from 'styles/stitches.config'

export const PhoneListRoot = styled('div', {
  height: '100%',
  overflow: 'auto',
  display: 'grid',
  columnGap: '$4',
  rowGap: '$4',
  padding: '$8',
  gridTemplateRows: 'max-content',
  gridTemplateColumns: '1fr',
  gridAutoColumns: 'max-content',
  backgroundColor: '$accentBg',

  '@sm': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@md': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@lg': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
})

export const LoaderContainer = styled(FlexContainer, {
  gridColumn: '1 / 1',
  gridRow: 'span 8',

  '@sm': {
    gridColumn: '1 / 3',
    gridRow: 'span 8',
  },
  '@md': {
    gridColumn: '1 / 3',
    gridRow: 'span 5',
  },
  '@lg': {
    gridColumn: '1 / 4',
    gridRow: 'span 5',
  },
})

export const LoadMoreContainer = styled(FlexContainer, {
  gridColumn: '1 / 1',
  gridRowEnd: 'span 8',

  '@sm': {
    gridColumn: '1 / 3',
    gridRowEnd: 'span 8',
  },
  '@md': {
    gridColumn: '1 / 3',
    gridRowEnd: 'span 5',
  },
  '@lg': {
    gridColumn: '1 / 4',
    gridRowEnd: 'span 5',
  },
})

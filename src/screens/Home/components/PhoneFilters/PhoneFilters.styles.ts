import { FlexContainer } from 'styles/common.styles'
import { styled } from 'styles/stitches.config'

export const PhoneFiltersRoot = styled(FlexContainer, {
  paddingX: '$4',
  backgroundColor: '$accentBg',
  height: '100%',
  width: '100%',
  gap: '$4',
  borderBottom: 'none',

  border: 'solid 2px $accentBorder',
  transition: 'height 200ms linear',
  overflow: 'hidden',

  '@md': {
    border: 'none',
    paddingX: '$4',
    borderRight: 'solid 2px $accentBorder',
  },
})

export const FilterContainer = styled(FlexContainer, {
  width: '100%',
  gap: '$3',
  paddingTop: '$2',
  paddingBottom: '$4',
  borderBottom: 'solid 1px $accentBorder',

  '@md': {
    borderBottom: 'solid 2px $accentBorder',
  },
})

export const PhoneFiltersTitle = styled(FlexContainer, {
  backgroundColor: '$accentBg',
  padding: '$4',
  borderRight: 'solid 2px $accentBorder',

  '& > svg': {
    color: '$accentText',
    size: '$6',
  },
  width: '100%',

  '@md': {
    '& > svg': {
      display: 'none',
    },
  },
})

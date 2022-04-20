import { FlexContainer } from 'styles/common.styles'
import { styled } from 'styles/stitches.config'

export const PhoneFiltersRoot = styled(FlexContainer, {
  padding: '$4',
  paddingTop: '0',
  backgroundColor: '$accentBg',
  height: '100%',
  width: '100%',
  gap: '$4',
  borderRight: 'solid 2px $accentBorder',
  transition: 'height 200ms linear',
  overflow: 'hidden',
})

export const FilterContainer = styled(FlexContainer, {
  width: '100%',
  gap: '$3',
  borderTop: 'solid 2px $accentBorder',
  paddingTop: '$2',
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
})

import { FlexContainer } from 'styles/common.styles'
import { styled } from 'styles/stitches.config'

export const PhoneFiltersRoot = styled(FlexContainer, {
  padding: '$4',
  backgroundColor: '$accentBgActive',
  height: '100%',
  gap: '$4',
  borderRight: 'solid 2px $accentBorder',
})

export const FilterContainer = styled(FlexContainer, {
  width: '100%',
  gap: '$3',
  borderTop: 'solid 2px $accentBorder',
  paddingTop: '$2',
})

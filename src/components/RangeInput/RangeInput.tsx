import { StyledRange, StyledSlider, StyledThumb, StyledTrack } from './RangeInput.styles'

import { FlexContainer } from '../../styles/common.styles'
import { Typography } from '../Typography'

export type RangeInputProps = {
  value: number[]
  onChange: (value: number[]) => void
}

export const RangeInput = ({ onChange, value }: RangeInputProps) => {
  return (
    <>
      <StyledSlider onValueChange={onChange} max={1500} aria-label="Price range filter" value={value}>
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        <StyledThumb />
        <StyledThumb />
      </StyledSlider>
      <FlexContainer css={{ width: '100%' }} justify="spaceBetween">
        <Typography>{value[0]}€</Typography>
        <Typography>{value[1]}€</Typography>
      </FlexContainer>
    </>
  )
}

export default RangeInput

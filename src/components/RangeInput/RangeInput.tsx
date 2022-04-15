import { RangeInputRoot, StyledRange, StyledSlider, StyledThumb, StyledTrack } from './RangeInput.styles'

import { FlexContainer } from 'styles/common.styles'
import { Typography } from 'components/Typography'

export type RangeInputProps = {
  value: number[]
  onChange: (value: number[]) => void
  unit?: string
  step?: number
}

export const RangeInput = ({ onChange, value, unit, step = 50 }: RangeInputProps) => {
  return (
    <RangeInputRoot>
      <StyledSlider onValueChange={onChange} max={1500} step={step} aria-label="Price range filter" value={value}>
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        <StyledThumb />
        <StyledThumb />
      </StyledSlider>
      <FlexContainer css={{ width: '100%' }} justify="spaceBetween">
        <Typography color="accentTextContrast">
          {value[0]}
          {unit}
        </Typography>
        <Typography color="accentTextContrast">
          {value[1]}
          {unit}
        </Typography>
      </FlexContainer>
    </RangeInputRoot>
  )
}

export default RangeInput

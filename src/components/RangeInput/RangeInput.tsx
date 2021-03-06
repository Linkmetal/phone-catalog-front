import { RangeInputRoot, StyledRange, StyledSlider, StyledThumb, StyledTrack } from './RangeInput.styles'

import { FlexContainer } from 'styles/common.styles'
import { Typography } from 'components/Typography'

export type RangeInputProps = {
  value: number[]
  onChange: (value: number[]) => void
  label: string
  unit?: string
  step?: number
}

export const RangeInput = ({ onChange, value, unit, step = 50 }: RangeInputProps) => {
  return (
    <RangeInputRoot>
      <StyledSlider role="presentation" onValueChange={onChange} max={1500} step={step} value={value}>
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        <StyledThumb role="slider" aria-valuenow={value[0]} />
        <StyledThumb role="slider" aria-valuenow={value[1]} />
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

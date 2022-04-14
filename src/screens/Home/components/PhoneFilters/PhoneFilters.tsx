import { FlexContainer } from 'styles/common.styles'
import { PhoneFiltersParams } from 'types/phone'
import { PhoneFiltersRoot } from './PhoneFilters.styles'
import RangeInput from 'components/RangeInput/RangeInput'
import { Typography } from 'components/Typography'

export type PhoneFiltersProps = {
  onFiltersChange: (filters: PhoneFiltersParams) => void
  filters: PhoneFiltersParams
}

export const PhoneFilters = ({ filters, onFiltersChange }: PhoneFiltersProps) => {
  return (
    <PhoneFiltersRoot direction="column" justify="start">
      <Typography size="h4">Filters</Typography>
      <FlexContainer direction="column" justify="start">
        <Typography>Price</Typography>
        <RangeInput
          onChange={(range) => onFiltersChange({ ...filters, minPrice: range[0], maxPrice: range[1] })}
          value={[filters.minPrice, filters.maxPrice]}
        />
      </FlexContainer>
    </PhoneFiltersRoot>
  )
}

PhoneFilters.displayName = 'PhoneFilters'

import { FilterContainer, PhoneFiltersRoot } from './PhoneFilters.styles'
import { PhoneFiltersParams, PhoneManufacturer, PhoneRamMemory } from 'types/phone'
import { PhoneManufacturerValues, PhoneRamMemoryValues } from 'constants/phone'

import { MultiCheckboxSelect } from 'components/MultiCheckboxSelect'
import RangeInput from 'components/RangeInput/RangeInput'
import { Typography } from 'components/Typography'

export type PhoneFiltersProps = {
  onFiltersChange: (filters: PhoneFiltersParams) => void
  filters: PhoneFiltersParams
}

export const PhoneFilters = ({ filters, onFiltersChange }: PhoneFiltersProps) => {
  return (
    <PhoneFiltersRoot direction="column" justify="start">
      <Typography size="h3">Filters</Typography>
      <FilterContainer direction="column" justify="start">
        <Typography size="h5">Price</Typography>
        <RangeInput
          onChange={(range) => onFiltersChange({ ...filters, minPrice: range[0], maxPrice: range[1] })}
          value={[filters.minPrice, filters.maxPrice]}
          unit="€"
        />
      </FilterContainer>
      <FilterContainer direction="column" justify="start">
        <Typography size="h5">Manufacturer</Typography>
        <MultiCheckboxSelect
          options={[...PhoneManufacturerValues]}
          onChange={(manufacturers) =>
            onFiltersChange({ ...filters, manufacturer: manufacturers as PhoneManufacturer[] })
          }
        />
      </FilterContainer>
      <FilterContainer direction="column" justify="start">
        <Typography size="h5">RAM Memory</Typography>
        <MultiCheckboxSelect
          options={[...PhoneRamMemoryValues]}
          onChange={(ram) => onFiltersChange({ ...filters, ram: ram as PhoneRamMemory[] })}
        />
      </FilterContainer>
    </PhoneFiltersRoot>
  )
}

PhoneFilters.displayName = 'PhoneFilters'

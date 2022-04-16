import { FilterContainer, PhoneFiltersRoot } from './PhoneFilters.styles'
import { PhoneFiltersParams, PhoneManufacturer, PhoneRamMemory } from 'types/phone'
import { PhoneManufacturerValues, PhoneRamMemoryValues } from 'constants/phone'
import { useDebounce, useUpdateEffect } from 'ahooks'

import { MultiCheckboxSelect } from 'components/MultiCheckboxSelect'
import RangeInput from 'components/RangeInput/RangeInput'
import { Typography } from 'components/Typography'
import { useState } from 'react'

export type PhoneFiltersProps = {
  onFiltersChange: (filters: PhoneFiltersParams) => void
  filters: PhoneFiltersParams
}

export const PhoneFilters = ({ filters, onFiltersChange }: PhoneFiltersProps) => {
  // NOTE: We need this state here to handle the debounce, if its handled inside the RangeInput the control gets frozen
  const [range, setRange] = useState<number[]>([filters.minPrice, filters.maxPrice])
  const debouncedValue = useDebounce(range, { wait: 300 })

  useUpdateEffect(() => {
    onFiltersChange({ ...filters, minPrice: debouncedValue[0], maxPrice: debouncedValue[1] })
  }, [debouncedValue])
  return (
    <PhoneFiltersRoot direction="column" justify="start">
      <Typography size="h3">Filters</Typography>
      <FilterContainer direction="column" justify="start">
        <Typography size="h5">Price</Typography>
        <RangeInput label="Price Range Filter" onChange={setRange} value={range} unit="€" />
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

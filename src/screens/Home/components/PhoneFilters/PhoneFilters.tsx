import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { FilterContainer, PhoneFiltersRoot, PhoneFiltersTitle } from './PhoneFilters.styles'
import { PhoneFiltersParams, PhoneManufacturer, PhoneRamMemory } from 'types/phone'
import { PhoneManufacturerValues, PhoneRamMemoryValues } from 'constants/phone'
import { useDebounce, useUpdateEffect } from 'ahooks'

import { FlexContainer } from '../../../../styles/common.styles'
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
  const [open, setOpen] = useState<boolean>(false)

  useUpdateEffect(() => {
    onFiltersChange({ ...filters, minPrice: debouncedValue[0], maxPrice: debouncedValue[1] })
  }, [debouncedValue])
  return (
    <FlexContainer css={{ height: '100%', width: '100%' }} direction="column" justify="start">
      <PhoneFiltersTitle>
        <Typography size="h3">Filters</Typography>
        {open && <ChevronUpIcon role="button" onClick={() => setOpen(!open)} />}
        {!open && <ChevronDownIcon role="button" onClick={() => setOpen(!open)} />}
      </PhoneFiltersTitle>
      <PhoneFiltersRoot css={{ height: open ? '100%' : '0px' }} direction="column" justify="start">
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
    </FlexContainer>
  )
}

PhoneFilters.displayName = 'PhoneFilters'

import {
  Checkbox,
  CheckboxIndicator,
  MultiCheckboxSelectRoot,
} from 'components/MultiCheckboxSelect/MultiCheckboxSelect.styles'

import { CheckIcon } from '@radix-ui/react-icons'
import { FlexContainer } from 'styles/common.styles'
import { Label } from '@radix-ui/react-label'
import { Typography } from 'components/Typography'
import { useEffect } from 'react'
import { useSelections } from 'ahooks'

export type MultiCheckboxSelectProps = {
  options: string[]
  onChange: (value: string[]) => void
  defaultOptions?: string[]
}

export const MultiCheckboxSelect = ({ onChange, options, defaultOptions = [] }: MultiCheckboxSelectProps) => {
  const { isSelected, toggle, selected } = useSelections<string>(options, defaultOptions)

  useEffect(() => {
    onChange(selected)
  }, [selected])

  return (
    <MultiCheckboxSelectRoot>
      {options.map((option, index) => (
        <FlexContainer css={{ marginBottom: '$1' }} justify="start" key={`${option}-${index}`}>
          <Checkbox
            onClick={() => {
              toggle(option)
            }}
            checked={isSelected(option)}
            id={`${option}-checkbox`}
          >
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </Checkbox>
          <Label htmlFor="c1">
            <Typography size="button" color="accentTextContrast">
              {option}
            </Typography>
          </Label>
        </FlexContainer>
      ))}
    </MultiCheckboxSelectRoot>
  )
}

export default MultiCheckboxSelect

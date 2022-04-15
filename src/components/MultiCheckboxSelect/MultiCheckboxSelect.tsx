import * as Label from '@radix-ui/react-label'

import {
  Checkbox,
  CheckboxIndicator,
  MultiCheckboxSelectRoot,
} from 'components/MultiCheckboxSelect/MultiCheckboxSelect.styles'
import { useSelections, useUpdateEffect } from 'ahooks'

import { CheckIcon } from '@radix-ui/react-icons'
import { FlexContainer } from 'styles/common.styles'
import { Typography } from 'components/Typography'

export type MultiCheckboxSelectProps = {
  options: string[]
  onChange: (value: string[]) => void
  defaultOptions?: string[]
}

export const MultiCheckboxSelect = ({ onChange, options, defaultOptions = [] }: MultiCheckboxSelectProps) => {
  const { isSelected, toggle, selected } = useSelections<string>(options, defaultOptions)

  useUpdateEffect(() => {
    onChange(selected)
  }, [selected])

  return (
    <MultiCheckboxSelectRoot>
      {options.map((option, index) => (
        <FlexContainer css={{ marginBottom: '$1' }} justify="start" key={`${option}-${index}`}>
          <Checkbox
            role="checkbox"
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
          <Label.Root role="presentation" aria-label={`Check ${option} option`} htmlFor={`${option}-checkbox`}>
            <Typography size="button" color="accentTextContrast">
              {option}
            </Typography>
          </Label.Root>
        </FlexContainer>
      ))}
    </MultiCheckboxSelectRoot>
  )
}

export default MultiCheckboxSelect

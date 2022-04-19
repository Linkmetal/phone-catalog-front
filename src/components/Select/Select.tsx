import * as Label from '@radix-ui/react-label'

import {
  Content,
  Item,
  ItemIndicator,
  RadixSelectRoot,
  ScrollDownButton,
  ScrollUpButton,
  SelectRoot,
  Trigger,
  Viewport,
} from 'components/Select/Select.styles'
import { Icon, ItemText, Value } from '@radix-ui/react-select'

import { Typography } from 'components/Typography'

export type SelectProps<T> = {
  id: string
  values: T[]
  value: T
  label: string
  placeholder: string
  onChange: (value: string) => void
  error: string
}

export function Select<T extends string>({ id, values, value, label, placeholder, onChange, error }: SelectProps<T>) {
  return (
    <SelectRoot direction="column" align="start">
      <Label.Root role="presentation" aria-label={label} asChild htmlFor={id}>
        <Typography size="caption" color="accentTextContrast">
          {label}
        </Typography>
      </Label.Root>
      <RadixSelectRoot value={''} onValueChange={(value) => onChange(value)}>
        <Trigger>
          <Value>{value || placeholder}</Value>
          <Icon />
        </Trigger>
        <Typography size="caption" color="dangerText" css={{ paddingY: '$2' }}>
          {error}
        </Typography>

        <Content>
          <ScrollUpButton />
          <Viewport>
            <Item css={{ display: 'none' }} key={`default-select-option`} value={''}>
              <ItemText>{value}</ItemText>
              <ItemIndicator />
            </Item>
            {values.map((value) => (
              <Item key={`${label}-${value}-select-option`} value={value}>
                <ItemText>{value}</ItemText>
                <ItemIndicator />
              </Item>
            ))}
          </Viewport>
          <ScrollDownButton />
        </Content>
      </RadixSelectRoot>
    </SelectRoot>
  )
}

export default Select

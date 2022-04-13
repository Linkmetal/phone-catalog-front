import * as Label from '@radix-ui/react-label'

import { HelperText, Input, InputWrapper, TextInputRoot } from './TextInput.styles'

import { IconName } from 'components/Icon/IconNames'
import { Typography } from 'components/Typography'
import { forwardRef } from 'react'

export type TextInputType = 'text' | 'number' | 'password' | 'email'
export type TextInputProps = {
  id: string
  value: string
  placeholder?: string
  onChange?: (value: string) => void
  disabled?: boolean
  helperText?: string
  label: string
  error?: string
  icon?: IconName
  singleLine?: boolean
  type?: TextInputType
  min?: number
  max?: number
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id,
      helperText,
      type = 'text',
      label,
      value,
      error,
      disabled = false,
      placeholder = '',
      icon,
      min,
      max,
      singleLine = false,
      onChange = () => undefined,
    },
    forwardedRef,
  ) => {
    return (
      <TextInputRoot>
        <Label.Root aria-label={label} asChild style={{ display: singleLine ? 'none' : 'inherit' }} htmlFor={id}>
          <Typography size="caption" color="accentTextContrast">
            {label}
          </Typography>
        </Label.Root>
        <InputWrapper>
          <Input
            id={id}
            ref={forwardedRef}
            onChange={(event) => onChange(event.target.value)}
            type={type}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            min={min}
            max={max}
          />
        </InputWrapper>
        {(helperText || error) && (
          <HelperText error={!!error} size="caption" css={{ marginBottom: '$4' }}>
            {error || helperText}
          </HelperText>
        )}
      </TextInputRoot>
    )
  },
)

TextInput.displayName = 'TextInput'

import * as Label from '@radix-ui/react-label'

import { HelperText, Input, InputWrapper, TextInputRoot } from './TextInput.styles'

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
      min,
      max,
      singleLine = false,
      onChange = () => undefined,
    },
    forwardedRef,
  ) => {
    return (
      <TextInputRoot singleLine={singleLine}>
        <Label.Root
          role="presentation"
          aria-label={label}
          asChild
          style={{ display: singleLine ? 'none' : 'inherit' }}
          htmlFor={id}
        >
          <Typography size="caption" color="accentTextContrast">
            {label}
          </Typography>
        </Label.Root>
        <InputWrapper css={{ backgroundColor: '$accentBgHover' }}>
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
        <HelperText error={!!error} size="caption" css={{ marginBottom: '$2' }}>
          {error || helperText}
        </HelperText>
      </TextInputRoot>
    )
  },
)

TextInput.displayName = 'TextInput'

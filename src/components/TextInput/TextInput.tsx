import * as Label from '@radix-ui/react-label'

import { HelperText, Input, InputWrapper, TextArea, TextInputRoot } from './TextInput.styles'

import { Typography } from 'components/Typography'
import { forwardRef } from 'react'

export type TextInputType = 'text' | 'number' | 'password' | 'email' | 'textarea'
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
  searchInput?: boolean
  type?: TextInputType
  min?: number
  max?: number
}

export const TextInput = forwardRef<HTMLInputElement & HTMLTextAreaElement, TextInputProps>(
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
      searchInput = false,
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
        <InputWrapper searchInput={searchInput} css={{ backgroundColor: '$accentBgHover' }}>
          {type !== 'textarea' && (
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
          )}
          {type === 'textarea' && (
            <TextArea
              id={id}
              ref={forwardedRef}
              onChange={(event) => onChange(event.target.value)}
              placeholder={placeholder}
              value={value}
              disabled={disabled}
            />
          )}
        </InputWrapper>
        <HelperText error={!!error} size="caption" css={{ marginBottom: '$2' }}>
          {error || helperText}
        </HelperText>
      </TextInputRoot>
    )
  },
)

TextInput.displayName = 'TextInput'

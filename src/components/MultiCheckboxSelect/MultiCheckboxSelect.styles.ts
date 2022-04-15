import * as RadixCheckbox from '@radix-ui/react-checkbox'

import { styled } from 'styles/stitches.config'

export const MultiCheckboxSelectRoot = styled('div', {
  width: '100%',
})

export const Checkbox = styled(RadixCheckbox.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  backgroundColor: '$accentSolid',
  width: '$6',
  height: '$6',
  borderRadius: '$2',
  marginRight: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: '$accentSolidHover',
  },
  '&:focus': {
    border: 'solid 3px $accentTextContrast',
  },
})

export const CheckboxIndicator = styled(RadixCheckbox.Indicator, {
  color: '$accentTextContrast',
})

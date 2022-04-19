import * as RadixSelect from '@radix-ui/react-select'

import { FlexContainer } from 'styles/common.styles'
import { styled } from 'styles/stitches.config'

export const SelectRoot = styled(FlexContainer, {})

export const RadixSelectRoot = styled(RadixSelect.Root, {})

export const Trigger = styled(RadixSelect.SelectTrigger, {
  all: 'unset',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$2',
  padding: '0 $4',
  fontSize: 13,
  lineHeight: 1,
  height: '35px',
  backgroundColor: '$accentBg',
  color: '$accentText',
  border: 'solid 1px $accentBorder',
  '&:hover': { backgroundColor: '$accentBgHover' },
  '&:focus': { border: 'solid 2px $accentBorderHover' },
})

export const Content = styled(RadixSelect.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  position: 'relative',
  width: '100%',
  top: '$5',
  right: '$2',
})

export const Viewport = styled(RadixSelect.Viewport, {
  boxSizing: 'border-box',
  padding: '$2',
  border: 'solid 1px $accentBorder',
  borderRadius: '$2',
})

export const Item = styled(RadixSelect.Item, {
  all: 'unset',
  boxSizing: 'border-box',
  fontSize: '$body',
  color: '$accentText',
  borderRadius: '$2',
  display: 'flex',
  alignItems: 'center',
  height: '$6',
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$accentSolidHover',
    color: '$accentBase',
  },
})

export const Label = styled(RadixSelect.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: '$whiteA11',
})

export const ItemIndicator = styled(RadixSelect.ItemIndicator, {
  position: 'absolute',
  width: '$6',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '$6',
  backgroundColor: 'white',
  color: '$accentText',
  cursor: 'default',
}

export const ScrollUpButton = styled(RadixSelect.ScrollUpButton, scrollButtonStyles)

export const ScrollDownButton = styled(RadixSelect.ScrollDownButton, scrollButtonStyles)

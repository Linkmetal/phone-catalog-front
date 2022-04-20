import * as Toggle from '@radix-ui/react-toggle'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

import { Typography } from '../Typography'
import { styled } from 'styles/stitches.config'

export const ToolbarRoot = styled('div', {
  position: 'relative',
  width: '100%',
  height: '6%',
  backgroundColor: '$accentBgActive',
  borderColor: '$accentBorder',
  borderWidth: '$1',
  borderStyle: 'solid',
  paddingX: '$4',
  paddingY: '$2',
})

export const DarkThemeToggle = styled(Toggle.Root, {
  size: '$7',
  padding: '$2',
  borderRadius: '$2',
  backgroundColor: '$accentBg',
  border: 'none',
  '&:hover': {
    backgroundColor: '$accentBgHover',
  },
})

export const DarkThemeToggleIcon = styled(MoonIcon, {
  color: '$accentText',
})

export const LightThemeToggleIcon = styled(SunIcon, {
  color: '$accentText',
})

export const ToolbarButtonText = styled(Typography, {
  display: 'none',
  marginLeft: '$1',
  color: '$whiteA12',
  '@sm': {
    display: 'flex',
  },
})

import * as Slider from '@radix-ui/react-slider'

import { styled } from 'styles/stitches.config'

export const RangeInputRoot = styled('div', {
  width: '100%',
})

export const StyledSlider = styled(Slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '100%',

  '&[data-orientation="horizontal"]': {
    height: 20,
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 20,
    height: 100,
  },
})

export const StyledTrack = styled(Slider.Track, {
  backgroundColor: '$gray11',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '$4',

  '&[data-orientation="horizontal"]': { height: 3 },
  '&[data-orientation="vertical"]': { width: 3 },
})

export const StyledRange = styled(Slider.Range, {
  position: 'absolute',
  backgroundColor: '$accentSolid',
  borderRadius: '$4',
  height: '100%',
})

export const StyledThumb = styled(Slider.Thumb, {
  all: 'unset',
  boxSizing: 'border-box',
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: '$accentSolid',
  borderRadius: 10,
  '&:hover': {
    backgroundColor: '$accentSolidHover',
  },
  '&:focus': {
    border: 'solid 3px $accentTextContrast',
    borderRadius: 10,
  },
})

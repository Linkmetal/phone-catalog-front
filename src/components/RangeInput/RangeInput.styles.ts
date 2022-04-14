import * as Slider from '@radix-ui/react-slider'

import { styled } from 'styles/stitches.config'

export const StyledSlider = styled(Slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 200,

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
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px $accentSolid`,
  borderRadius: 10,
  '&:hover': {
    backgroundColor: '$accentSolidHover',
  },
  '&:focus': {
    boxShadow: `0 0 0 5px $accentSolidHover`,
  },
})

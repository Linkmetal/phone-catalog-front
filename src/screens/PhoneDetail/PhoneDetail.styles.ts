import { FlexContainer } from 'styles/common.styles'
import { styled } from 'styles/stitches.config'

export const PhoneDetailRoot = styled('div', {
  backgroundColor: '$accentSolid',
})

export const DetailsGridContainer = styled('section', {
  backgroundColor: '$accentBgHover',
  display: 'grid',
  height: '80%',
  '& img': {
    height: '50%',
  },
  '@sm': {
    gridTemplateColumns: '1fr',
  },
  '@lg': {
    gridTemplateColumns: '0.40fr 0.60fr',
  },
})

export const GoBackContainer = styled(FlexContainer, {
  padding: '$2',
  backgroundColor: '$accentBgHover',
  '& > svg': { color: '$accentText' },
})

export const DetailField = styled(FlexContainer, {
  overflow: 'auto',
  paddingBottom: '$8',
  '& > svg': {
    color: '$accentText',
    size: '$6',
    marginRight: '$2',
  },
})

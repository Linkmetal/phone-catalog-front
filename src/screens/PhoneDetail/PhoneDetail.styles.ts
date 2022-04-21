import { FlexContainer } from 'styles/common.styles'
import { styled } from 'styles/stitches.config'

export const PhoneDetailRoot = styled('div', {
  backgroundColor: '$accentSolid',
})

export const DetailsGridContainer = styled('section', {
  backgroundColor: '$accentBg',
  display: 'flex',
  flexDirection: 'column',
  gridGap: '$4',
  height: '100%',
  '& img': {
    height: '50%',
  },

  '@md': {
    display: 'grid',
    gridGap: '$4',
    height: '76%',

    gridTemplateColumns: '0.6fr 0.4fr',
    '& img': {
      // height: '50%',
      height: '400px',
    },
  },
})

export const GoBackContainer = styled(FlexContainer, {
  padding: '$2',
  backgroundColor: '$accentBg',
  '& > svg': { color: '$accentText' },
})

export const DetailField = styled(FlexContainer, {
  height: '25px',
  flexGrow: '1',
  '& > svg': {
    color: '$accentText',
    size: '$6',
    marginRight: '$2',
  },
})

export const DescriptionField = styled(DetailField, {
  backgroundColor: '$accentBg',
  width: '100%',
  padding: '$4',

  '@md': {
    flex: '1 1 0',
  },
})

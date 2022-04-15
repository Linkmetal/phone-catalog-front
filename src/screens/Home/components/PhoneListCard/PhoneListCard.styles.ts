import { Card } from 'styles/common.styles'
import { styled } from 'styles/stitches.config'

export const PhoneListCardLinkWrapper = styled('div', {
  height: '100%',
})

export const PhoneListCardRoot = styled(Card, {
  width: '100%',
  gap: '$4',
  padding: '$4',
  border: 'solid $accentBorder',
  borderWidth: '$1',
  '&:hover': {
    borderColor: '$accentBorderHover',
    backgroundColor: '$accentBgHover',
  },
})

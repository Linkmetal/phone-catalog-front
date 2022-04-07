import { Card } from 'styles/common.styles'
import { styled } from '@stitches/react'

export const PhoneListCardLinkWrapper = styled('div', {})

export const PhoneListCardRoot = styled(Card, {
  width: '100%',
  gap: '$4',
  padding: '$4',
  '&:hover': {
    boxShadow: '$border-hover',
  },
})

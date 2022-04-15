import * as AspectRatio from '@radix-ui/react-aspect-ratio'

import { Card, FlexContainer, Img } from 'styles/common.styles'
import { PhoneListCardLinkWrapper, PhoneListCardRoot } from 'screens/Home/components/PhoneListCard/PhoneListCard.styles'

import { Phone } from 'types/phone'
import { Typography } from 'components/Typography'

export type PhoneListProps = {
  phone: Phone
}

export const PhoneListCard = ({ phone }: PhoneListProps) => {
  return (
    <PhoneListCardLinkWrapper as="a" href={`/phone/${phone.id}`}>
      <PhoneListCardRoot direction="column" justify="spaceAround">
        <FlexContainer css={{ width: '100%' }} direction="row" justify="spaceAround">
          <Card css={{ height: '$12', width: '$12', margin: '$4' }}>
            <AspectRatio.Root ratio={9 / 16}>
              <Img
                // TODO: remove this image validation
                src={phone.imageFileName.startsWith('http') ? phone.imageFileName : '/placeholder.png'}
                role="presentation"
              />
            </AspectRatio.Root>
          </Card>
          <FlexContainer direction="column" css={{ flexGrow: '1', padding: '$4' }}>
            <Typography size="h5">{phone.name}</Typography>
            <Typography size="body" color="accentTextContrast">
              {phone.manufacturer}
            </Typography>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer direction="row" justify="spaceBetween">
          <Typography size="h2">{`${phone.price}€`}</Typography>
        </FlexContainer>
      </PhoneListCardRoot>
    </PhoneListCardLinkWrapper>
  )
}

export default PhoneListCard

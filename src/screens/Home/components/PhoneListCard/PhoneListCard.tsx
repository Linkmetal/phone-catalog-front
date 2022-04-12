import { Card, FlexContainer } from 'styles/common.styles'
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
          <Card css={{ height: '$12', width: '$12' }}>img</Card>
          <FlexContainer direction="column">
            <Typography size="h3">{phone.name}</Typography>
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

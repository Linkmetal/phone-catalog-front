import { Button, FlexContainer, Loader } from 'styles/common.styles'

import { Label } from '@radix-ui/react-label'
import { Phone } from 'types/phone'
import { PhoneListCard } from 'screens/Home/components/PhoneListCard'
import { PhoneListRoot } from './PhoneList.styles'
import { Typography } from 'components/Typography'

export type PhoneListProps = {
  phones: Phone[]
  onLoadMore: () => void
  isLoading: boolean
  hasReachedTotal: boolean
}

export const PhoneList = ({ phones, onLoadMore, isLoading, hasReachedTotal }: PhoneListProps) => {
  return (
    <PhoneListRoot>
      {phones.map((phone) => (
        <PhoneListCard key={phone.id} phone={phone} />
      ))}
      {!hasReachedTotal && (
        <>
          {isLoading && (
            <FlexContainer css={{ gridColumn: '1 / 4', gridRow: 'span 8' }}>
              <Loader />
            </FlexContainer>
          )}
          {!isLoading && (
            <FlexContainer css={{ gridColumn: '1 / 4', gridRowEnd: 'span 8' }}>
              <Button onClick={onLoadMore}>
                <Label>
                  <Typography color="accentTextContrast">Load more</Typography>
                </Label>
              </Button>
            </FlexContainer>
          )}
        </>
      )}
    </PhoneListRoot>
  )
}

export default PhoneList

import { Button, Loader } from 'styles/common.styles'
import { LoadMoreContainer, LoaderContainer, PhoneListRoot } from './PhoneList.styles'

import { Label } from '@radix-ui/react-label'
import { Phone } from 'types/phone'
import { PhoneListCard } from 'screens/Home/components/PhoneListCard'
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

      {!hasReachedTotal && isLoading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      {!hasReachedTotal && !isLoading && (
        <LoadMoreContainer>
          <Button onClick={onLoadMore}>
            <Label role="button" aria-label="Load more phones">
              <Typography color="whiteA12">Load more</Typography>
            </Label>
          </Button>
        </LoadMoreContainer>
      )}
    </PhoneListRoot>
  )
}

export default PhoneList

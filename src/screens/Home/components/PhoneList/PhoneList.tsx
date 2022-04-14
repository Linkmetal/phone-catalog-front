import { Phone } from 'types/phone'
import { PhoneListCard } from 'screens/Home/components/PhoneListCard'
import { PhoneListRoot } from './PhoneList.styles'

export type PhoneListProps = {
  phones: Phone[]
}

export const PhoneList = ({ phones }: PhoneListProps) => {
  return (
    <PhoneListRoot>
      {phones.map((phone) => (
        <PhoneListCard key={phone.id} phone={phone} />
      ))}
    </PhoneListRoot>
  )
}

export default PhoneList

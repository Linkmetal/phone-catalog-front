import { AnimatedSection } from 'components/AnimatedSection'
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
        <AnimatedSection threshold={0.5} key={phone.id}>
          <PhoneListCard phone={phone} />
        </AnimatedSection>
      ))}
    </PhoneListRoot>
  )
}

export default PhoneList

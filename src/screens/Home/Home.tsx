import { FlexContainer, Layout } from 'styles/common.styles'

import { GridContainer } from 'screens/Home/Home.styles'
import Header from 'components/Header/Header'
import { PhoneList } from 'screens/Home/components'
import { Typography } from 'components/Typography'
import { phonesFixture } from 'test/fixtures/phones'

export const Home = () => {
  return (
    <Layout>
      <Header />
      <GridContainer css={{ height: '85%' }}>
        <FlexContainer css={{ backgroundColor: '$primary-100' }}>
          <Typography>{'Filters'}</Typography>
        </FlexContainer>
        <div style={{ backgroundColor: '$secondary-100' }}>
          <PhoneList phones={phonesFixture} />
        </div>
      </GridContainer>
    </Layout>
  )
}

export default Home

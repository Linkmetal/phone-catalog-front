import { FlexContainer, Layout } from 'styles/common.styles'
import { GridContainer, HomeRoot } from 'screens/Home/Home.styles'

import Header from 'components/Header/Header'
import { PhoneList } from 'screens/Home/components'
import { Typography } from 'components/Typography'
import { phonesFixture } from 'test/fixtures/phones'

export const Home = () => {
  return (
    <HomeRoot>
      <Layout>
        <Header />
        <GridContainer css={{ height: '90%' }}>
          <FlexContainer>
            <Typography>{'Filters'}</Typography>
          </FlexContainer>
          <div style={{ backgroundColor: '$accentBg' }}>
            <PhoneList phones={phonesFixture} />
          </div>
        </GridContainer>
      </Layout>
    </HomeRoot>
  )
}

Home.displayName = 'Home'

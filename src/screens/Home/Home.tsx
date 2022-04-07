import { FlexContainer, Layout } from 'styles/common.styles'

import { GridContainer } from 'screens/Home/Home.styles'
import Header from 'components/Header/Header'
import { Typography } from 'components/Typography'

export const Home = () => {
  return (
    <Layout>
      <Header />
      <GridContainer css={{ height: '85%' }}>
        <FlexContainer css={{ backgroundColor: '$primary-100' }}>
          <Typography>{'Filters'}</Typography>
        </FlexContainer>
        <FlexContainer css={{ backgroundColor: '$secondary-100' }}>
          <Typography>{'List'}</Typography>
        </FlexContainer>
      </GridContainer>
    </Layout>
  )
}

export default Home

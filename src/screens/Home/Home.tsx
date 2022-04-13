import { FlexContainer, Layout } from 'styles/common.styles'
import { GridContainer, HomeRoot } from 'screens/Home/Home.styles'

import Header from 'components/Header/Header'
import { PhoneList } from 'screens/Home/components'
import Toolbar from 'components/Toolbar/Toolbar'
import { Typography } from 'components/Typography'
import { darkTheme } from 'styles/stitches.config'
import { phonesFixture } from 'test/fixtures/phones'
import { useState } from 'react'

export const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isDarkThemeSetted, setIsDarkThemeSetted] = useState(false)

  return (
    <HomeRoot className={isDarkThemeSetted ? darkTheme : undefined}>
      <Layout>
        <Header />
        <Toolbar
          isDarkThemeSetted={isDarkThemeSetted}
          onThemeChange={setIsDarkThemeSetted}
          onSearch={setSearchValue}
          searchValue={searchValue}
        />
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

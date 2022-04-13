import { FlexContainer, Layout } from 'styles/common.styles'
import { GridContainer, HomeRoot } from 'screens/Home/Home.styles'

import Header from 'components/Header/Header'
import { PhoneList } from 'screens/Home/components'
import Toolbar from 'components/Toolbar/Toolbar'
import { Typography } from 'components/Typography'
import { darkTheme } from 'styles/stitches.config'
import { useFetchPhones } from 'hooks/queries/useFetchPhones'
import { useState } from 'react'

export const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isDarkThemeSetted, setIsDarkThemeSetted] = useState(false)
  const { phones } = useFetchPhones()

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
            <PhoneList phones={phones?.data || []} />
          </div>
        </GridContainer>
      </Layout>
    </HomeRoot>
  )
}

Home.displayName = 'Home'

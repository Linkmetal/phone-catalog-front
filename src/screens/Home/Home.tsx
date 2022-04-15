import { FlexContainer, Layout, Loader } from 'styles/common.styles'
import { GridContainer, HomeRoot } from './Home.styles'

import Header from 'components/Header/Header'
import { PhoneFilters } from './components/PhoneFilters'
import { PhoneFiltersParams } from '../../types/phone'
import { PhoneList } from './components/PhoneList'
import { Toolbar } from 'components/Toolbar'
import { darkTheme } from 'styles/stitches.config'
import { useFetchPhones } from 'hooks/queries/useFetchPhones'
import { useState } from 'react'

export const Home = () => {
  const [isDarkThemeSetted, setIsDarkThemeSetted] = useState(false)
  const [filters, setFilters] = useState<PhoneFiltersParams>({
    manufacturer: [],
    maxPrice: 1500,
    minPrice: 0,
    searchQuery: '',
    ram: undefined,
  })
  const { phones } = useFetchPhones(filters)

  return (
    <HomeRoot className={isDarkThemeSetted ? darkTheme : undefined}>
      <Layout>
        <Header />
        <Toolbar
          isDarkThemeSetted={isDarkThemeSetted}
          onThemeChange={setIsDarkThemeSetted}
          onSearch={(searchQuery) => setFilters({ ...filters, searchQuery })}
          searchValue={filters.searchQuery}
        />
        <GridContainer css={{ height: '85%' }}>
          <PhoneFilters onFiltersChange={setFilters} filters={filters} />
          {!phones && (
            <FlexContainer>
              <Loader />
            </FlexContainer>
          )}
          {phones && <PhoneList phones={phones?.data || []} />}
        </GridContainer>
      </Layout>
    </HomeRoot>
  )
}

Home.displayName = 'Home'

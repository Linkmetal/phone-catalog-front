import { GridContainer, HomeRoot } from './Home.styles'
import { Phone, PhoneFiltersParams } from 'types/phone'

import Header from 'components/Header/Header'
import { Layout } from 'styles/common.styles'
import { PhoneFilters } from './components/PhoneFilters'
import { PhoneList } from './components/PhoneList'
import { Toolbar } from 'components/Toolbar'
import { darkTheme } from 'styles/stitches.config'
import { useFetchPhones } from 'hooks/queries/useFetchPhones'
import { useState } from 'react'

const PAGE_SIZE = 9

export const Home = () => {
  const [page, setPage] = useState(1)
  const [phoneList, setPhoneList] = useState<Phone[]>([])
  const [isDarkThemeSetted, setIsDarkThemeSetted] = useState<boolean>(false)
  const [filters, setFilters] = useState<PhoneFiltersParams>({
    manufacturer: [],
    ram: [],
    maxPrice: 1500,
    minPrice: 0,
    searchQuery: '',
  })

  const handleLoadMore = () => {
    setPage(page + 1)
    setFilters({ ...filters })
  }

  const { phones, isLoading } = useFetchPhones(
    { ...filters, pageTake: PAGE_SIZE, offset: PAGE_SIZE * (page - 1) },
    {
      onSuccess: (result) => {
        if (phoneList.length > 0 && phoneList.find((phone) => result.data[0].id === phone.id)) return

        setPhoneList([...phoneList, ...result.data])
      },
      isDataEqual: (oldData, newData) => oldData?.pagination === newData.pagination,
    },
  )

  const resetList = () => {
    console.log('resetting list', filters)

    setPhoneList([])
    setPage(1)
  }

  return (
    <HomeRoot className={isDarkThemeSetted ? darkTheme : undefined}>
      <Layout>
        <Header />
        <Toolbar
          isDarkThemeSetted={isDarkThemeSetted}
          onThemeChange={setIsDarkThemeSetted}
          onSearch={(searchQuery) => {
            resetList()
            setFilters({ ...filters, searchQuery })
          }}
          searchValue={filters.searchQuery}
        />
        <GridContainer css={{ height: '85%' }}>
          <PhoneFilters
            onFiltersChange={(values) => {
              resetList()
              setFilters({ ...filters, ...values })
            }}
            filters={filters}
          />
          {phoneList && (
            <PhoneList
              onLoadMore={handleLoadMore}
              phones={phoneList}
              isLoading={isLoading}
              hasReachedTotal={phones?.pagination.total === phoneList.length}
            />
          )}
        </GridContainer>
      </Layout>
    </HomeRoot>
  )
}

Home.displayName = 'Home'

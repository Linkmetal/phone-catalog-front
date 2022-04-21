import { GridContainer, HomeRoot } from './Home.styles'
import { Phone, PhoneFiltersParams } from 'types/phone'

import { CreatePhoneForm } from 'screens/Home/components/CreatePhoneForm'
import { Header } from 'components/Header'
import { Layout } from 'styles/common.styles'
import { Modal } from 'components/Modal'
import { PhoneFilters } from './components/PhoneFilters'
import { PhoneList } from './components/PhoneList'
import { Toolbar } from 'components/Toolbar'
import { useFetchPhones } from 'hooks/queries/useFetchPhones'
import { useState } from 'react'
import { useTitle } from 'ahooks'
import { useToastContext } from 'contexts/ToastContext'

const PAGE_SIZE = 9

export const Home = () => {
  useTitle('Phone Catalog - List')
  const { setToastMessage } = useToastContext()
  const [page, setPage] = useState(1)
  const [phoneList, setPhoneList] = useState<Phone[]>([])
  const [isCreatePhoneModalOpen, setIsCreatePhoneModalOpen] = useState<boolean>(false)
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

  const {
    phones,
    isLoading,
    refetch: refetchPhones,
  } = useFetchPhones(
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
    setPhoneList([])
    setPage(1)
  }

  return (
    <HomeRoot>
      <Layout>
        <Header />
        <Toolbar
          onSearch={(searchQuery) => {
            resetList()
            setFilters({ ...filters, searchQuery })
          }}
          searchValue={filters.searchQuery}
          onCreatePhone={() => setIsCreatePhoneModalOpen(!isCreatePhoneModalOpen)}
        />
        <GridContainer css={{ height: '84%' }}>
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

      <Modal onClose={() => setIsCreatePhoneModalOpen(false)} open={isCreatePhoneModalOpen}>
        <CreatePhoneForm
          onError={(error) => {
            setToastMessage({
              title: error.error,
              description: `Status: ${error.statusCode} - ${error.message}`,
              variant: 'danger',
            })
          }}
          onSuccess={() => {
            setToastMessage({
              title: 'Success',
              description: 'Phone created successfully',
              variant: 'success',
            })
            setIsCreatePhoneModalOpen(false)
            resetList()
            refetchPhones()
          }}
        />
      </Modal>
    </HomeRoot>
  )
}

Home.displayName = 'Home'

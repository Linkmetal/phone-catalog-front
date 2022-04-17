import { Phone, PhoneManufacturer } from 'types/phone'
import { UseQueryOptions, useQuery } from 'react-query'

import { PaginatedResponse } from 'types/PaginatedResponse'
import { PhonesRepository } from 'network/repositories/PhonesRepository'

export type FetchPhonesParams = {
  offset?: number
  pageTake?: number
  sortColumn?: unknown
  sortDirection?: 'ASC' | 'DESC'
  searchQuery?: string
  minPrice?: number
  maxPrice?: number
  manufacturer?: PhoneManufacturer[]
}

export namespace FetchPhones {
  export type Params = FetchPhonesParams
  export type Response = PaginatedResponse<Phone[]>
  export type Error = unknown
  export type Options = UseQueryOptions<Response, Error>
}

const createKey = (params: FetchPhones.Params = {}) => ['fetch-phones', JSON.stringify(params)]

const queryFetcher = (params?: FetchPhones.Params) => async () => {
  return await PhonesRepository.fetch(params)
}

export const useFetchPhones = (params?: FetchPhones.Params, options?: FetchPhones.Options) => {
  const { data, ...rest } = useQuery<FetchPhones.Response, FetchPhones.Error>(
    createKey(params),
    queryFetcher(params),
    options,
  )
  return { phones: data, ...rest }
}

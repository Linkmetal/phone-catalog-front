import { UseQueryOptions, useQuery } from 'react-query'

import { Phone } from 'types/phone'
import { PhonesRepository } from 'network/repositories/PhonesRepository'

export type FetchPhonesParams = {
  pageStart?: number
  pageTake?: number
  sortColumn?: unknown
  sortDirection?: 'ASC' | 'DESC'
  searchQuery?: string
}

type FetchPhonesResponse = {
  pagination: unknown
  data: Phone[]
}

export namespace FetchPhones {
  export type Params = FetchPhonesParams
  export type Response = FetchPhonesResponse
  export type Error = unknown
  export type Options = UseQueryOptions<Response, Error>
}

const createKey = (params: FetchPhones.Params = {}) => ['fetch-students', JSON.stringify(params)]

const queryFetcher = (params?: FetchPhones.Params) => () => {
  return PhonesRepository.fetch(params)
}

export const useFetchPhones = (params?: FetchPhones.Params, options?: FetchPhones.Options) => {
  const { data, ...rest } = useQuery<FetchPhones.Response, FetchPhones.Error>(
    createKey(params),
    queryFetcher(params),
    options,
  )
  return { phones: data, ...rest }
}

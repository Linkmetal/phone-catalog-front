import { UseQueryOptions, useQuery } from 'react-query'

import { ApiError } from 'types/Errors'
import { AxiosError } from 'axios'
import { Phone } from 'types/phone'
import { PhonesRepository } from 'network/repositories/PhonesRepository'

export type FetchPhoneDetailsParams = {
  id: string
}

export namespace FetchPhoneDetails {
  export type Params = FetchPhoneDetailsParams
  export type Response = Phone
  export type Error = AxiosError<ApiError>
  export type Options = UseQueryOptions<Response, Error>
}

const createKey = (params: FetchPhoneDetails.Params) => ['fetch-phone-details', JSON.stringify(params)]

const queryFetcher = (params: FetchPhoneDetails.Params) => async () => {
  return await PhonesRepository.details(params.id)
}

export const useFetchPhoneDetails = (params: FetchPhoneDetails.Params, options?: FetchPhoneDetails.Options) => {
  const { data, ...rest } = useQuery<FetchPhoneDetails.Response, FetchPhoneDetails.Error>(
    createKey(params),
    queryFetcher(params),
    options,
  )
  return { phone: data, ...rest }
}

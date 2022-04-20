import { UseMutationOptions, useMutation } from 'react-query'

import { ApiError } from 'types/Errors'
import { AxiosError } from 'axios'
import { Phone } from 'types/phone'
import { PhonesRepository } from 'network/repositories/PhonesRepository'

export namespace AddPhone {
  export type Response = Phone
  export type Variables = Omit<Phone, 'id' | 'imageSrc'>
  export type Error = AxiosError<ApiError>
  export type Options = UseMutationOptions<Response, Error, Variables>
}

export const useAddPhone = (options?: AddPhone.Options) => {
  const mutationFn = async (data: AddPhone.Variables) => {
    return PhonesRepository.add(data)
  }

  const mutation = useMutation<AddPhone.Response, AddPhone.Error, AddPhone.Variables>(mutationFn, options)

  return { ...mutation, addPhone: mutation.mutate }
}

import { UseMutationOptions, useMutation } from 'react-query'

import { ApiError } from 'types/Errors'
import { AxiosError } from 'axios'
import { Phone } from 'types/phone'
import { PhonesRepository } from 'network/repositories/PhonesRepository'

export namespace EditPhone {
  export type Response = Phone
  export type Variables = Omit<Phone, 'id' | 'imageFileName'>
  export type Error = AxiosError<ApiError>
  export type Options = UseMutationOptions<Response, Error, Variables>
}

export const useEditPhone = (id: string, options?: EditPhone.Options) => {
  const mutationFn = async (data: EditPhone.Variables) => {
    return PhonesRepository.edit(id, data)
  }

  const mutation = useMutation<EditPhone.Response, EditPhone.Error, EditPhone.Variables>(mutationFn, options)

  return { ...mutation, editPhone: mutation.mutate }
}

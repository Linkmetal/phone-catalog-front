import { UseMutationOptions, useMutation } from 'react-query'

import { Phone } from 'types/phone'
import { PhonesRepository } from 'network/repositories/PhonesRepository'

export namespace EditPhone {
  export type Response = Phone
  export type Variables = Omit<Phone, 'id' | 'imageFileName'>
  export type Error = unknown
  export type Options = UseMutationOptions<Response, Error, Variables>
}

export const useEditPhone = (id: string, options?: EditPhone.Options) => {
  const mutationFn = async (data: EditPhone.Variables) => {
    return PhonesRepository.edit(id, data)
  }

  const mutation = useMutation<EditPhone.Response, EditPhone.Error, EditPhone.Variables>(mutationFn, options)

  return { ...mutation, addPhone: mutation.mutate }
}

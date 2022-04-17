import { UseMutationOptions, useMutation } from 'react-query'

import { Phone } from 'types/phone'
import { PhonesRepository } from 'network/repositories/PhonesRepository'

export namespace AddPhoneImage {
  export type Response = Phone
  export type Variables = { image: File; id: string }
  export type Error = unknown
  export type Options = UseMutationOptions<Response, Error, Variables>
}

export const useAddPhoneImage = (options?: AddPhoneImage.Options) => {
  const mutationFn = async (data: AddPhoneImage.Variables) => {
    return PhonesRepository.addImage(data)
  }

  const mutation = useMutation<AddPhoneImage.Response, AddPhoneImage.Error, AddPhoneImage.Variables>(
    mutationFn,
    options,
  )

  return { ...mutation, addPhoneImage: mutation.mutate }
}

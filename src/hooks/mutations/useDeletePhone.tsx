import { UseMutationOptions, useMutation } from 'react-query'

import { PhonesRepository } from 'network/repositories/PhonesRepository'

export namespace DeletePhone {
  export type Response = true
  export type Params = { id: string }
  export type Error = unknown
  export type Options = UseMutationOptions<Response, Error, { id: string }>
}

export const useDeletePhone = (options?: DeletePhone.Options) => {
  const mutationFn = async (params: DeletePhone.Params) => {
    return await PhonesRepository.delete(params.id)
  }

  const mutation = useMutation<DeletePhone.Response, DeletePhone.Error, DeletePhone.Params>(mutationFn, options)

  return { ...mutation, deletePhone: mutation.mutate }
}

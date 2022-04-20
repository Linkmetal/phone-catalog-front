import { AddPhone } from 'hooks/mutations/useAddPhone'
import { AddPhoneImage } from 'hooks/mutations/useAddPhoneImage'
import { ApiClient } from 'network/ApiClient'
import { DeletePhone } from 'hooks/mutations/useDeletePhone'
import { EditPhone } from 'hooks/mutations/useEditPhone'
import { FetchPhoneDetails } from 'hooks/queries/useFetchPhoneDetails'
import { FetchPhones } from 'hooks/queries/useFetchPhones'

export const PhonesRepository = {
  fetch(params?: FetchPhones.Params) {
    return ApiClient.get<FetchPhones.Params, FetchPhones.Response>('/phones', { params })
  },
  details(id: string) {
    return ApiClient.get<FetchPhoneDetails.Params, FetchPhoneDetails.Response>(`/phones/${id}`)
  },
  add(data: AddPhone.Variables) {
    return ApiClient.post<AddPhone.Variables, AddPhone.Response>('/phones', data)
  },
  edit(id: string, data: EditPhone.Variables) {
    return ApiClient.put<EditPhone.Variables, EditPhone.Response>(`/phones/${id}`, data)
  },
  delete(id: string) {
    return ApiClient.delete<DeletePhone.Params, DeletePhone.Response>(`/phones/${id}`)
  },
  addImage(data: AddPhoneImage.Variables) {
    const fd = new FormData()
    fd.append('file', data.image)
    return ApiClient.post<AddPhoneImage.Variables, AddPhoneImage.Response>(`/phones/${data.id}/image`, fd, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}

import { ApiClient } from 'network/ApiClient'
import { FetchPhones } from 'hooks/queries/useFetchPhones'

export const PhonesRepository = {
  fetch(params?: FetchPhones.Params) {
    return ApiClient.get<FetchPhones.Params, FetchPhones.Response>('/phones', { params })
  },
  // details(id: string) {
  //   return ApiClient.get<PhoneDetails.Response>(`/groups/${id}`)
  // },
  // add(data: AddPhone.Variables) {
  //   return ApiClient.post<AddPhone.Response>('/groups', { data })
  // },
  // edit(id: string, data: EditPhone.Variables) {
  //   return ApiClient.patch<EditPhone.Response>(`/groups/${id}`, { data })
  // },
  // delete(id: string) {
  //   return ApiClient.delete<EditPhone.Response>(`/groups/${id}`)
  // },
}

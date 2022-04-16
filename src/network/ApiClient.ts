import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND_API_URL

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 2000,
  headers: { 'X-Custom-Header': 'foobar' },
})

axiosInstance.interceptors.response.use((res) => res.data)

export const ApiClient = axiosInstance

import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND_API_URL

export const ApiClient = axios.create({
  baseURL: baseUrl,
  timeout: 2000,
  headers: { 'X-Custom-Header': 'foobar' },
})

export type FormErrors<T> = Partial<Record<keyof T, string>>
export type ApiError = {
  statusCode: number
  error: string
  message: string
}

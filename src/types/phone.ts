export type Phone = {
  id: string
  name: string
  manufacturer: PhoneManufacturer
  description: string
  color: string
  price: number
  imageFileName: string
  screen: string
  processor: string
  ram: PhoneRamMemory
}

export type PhoneManufacturer = 'Apple' | 'Xioami' | 'Samsung'
export type PhoneRamMemory = '2 GB' | '3 GB' | '4 GB' | '5 GB' | '6 GB'

export type PhoneFiltersParams = {
  manufacturer: PhoneManufacturer[]
  ram?: PhoneRamMemory
  minPrice: number
  maxPrice: number
  searchQuery: string
}

import { PhoneManufacturerValues, PhoneRamMemoryValues } from 'constants/phone'

export type Phone = {
  id: string
  name: string
  manufacturer: PhoneManufacturer
  description: string
  color: string
  price: number
  imageSrc: string
  screen: string
  processor: string
  ram: PhoneRamMemory
}

export type PhoneManufacturer = typeof PhoneManufacturerValues[number]
export type PhoneRamMemory = typeof PhoneRamMemoryValues[number]

export type PhoneFiltersParams = {
  manufacturer: PhoneManufacturer[]
  ram?: PhoneRamMemory[]
  minPrice: number
  maxPrice: number
  searchQuery: string
}

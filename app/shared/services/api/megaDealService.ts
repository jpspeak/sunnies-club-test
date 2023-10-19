import apiClient from './apiClient'

export type MegaDeal = {
  _id: string
  image: string
  name: string
  description: string
  url: string
  createdAt: string
}

export type MegaDeals = MegaDeal[]

const getMegaDeals = () => apiClient.get<MegaDeals>('/mega-deals')

const megaDealService = {
  getMegaDeals
}
export default megaDealService

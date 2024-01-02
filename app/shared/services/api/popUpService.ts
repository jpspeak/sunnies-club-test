import apiClient from './apiClient'

export type PopUp = {
  _id: string
  url: string
  image: string
  status: string
}

const getPopUps = () => apiClient.get<PopUp[]>('/pop-ups')

const popUpService = { getPopUps }

export default popUpService

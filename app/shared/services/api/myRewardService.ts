import apiClient from './apiClient'

export type RewardType = 'IN-STORE VOUCHER' | 'ONLINE VOUCHER' | 'ITEM'

export type MyReward = {
  _id: string
  userId: string
  name: string
  description: string
  points: number
  type: RewardType
  image: string
  expiryDate: string
  termsAndConditions: string
  inStoreVoucherCode?: string
  onlineVoucherCode?: string
  isUsed: boolean
  dateUsed: string
}

type MyRewards = MyReward[]

const getMyRewards = (valid = true) => {
  let config = {}
  if (!valid) {
    config = { ...config, params: { invalid: true } }
  }
  return apiClient.get<MyRewards>(`/user-rewards`, config)
}
const getMyReward = (id: string) =>
  apiClient.get<MyReward>(`/user-rewards/${id}`)

const useMyReward = (id: string) =>
  apiClient.post<MyReward>(`/user-rewards/${id}/use-online-voucher`)

const myRewardService = {
  getMyRewards,
  getMyReward,
  useMyReward
}

export default myRewardService

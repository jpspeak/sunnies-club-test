import apiClient from './apiClient'

export type RewardType = 'IN-STORE VOUCHER' | 'ONLINE VOUCHER' | 'ITEM'

export type MyRewardItem = {
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
}

type MyRewardList = MyRewardItem[]

const getMyRewards = () => apiClient.get<MyRewardList>('/my-rewards')
const getMyReward = (id: string) =>
  apiClient.get<MyRewardItem>(`/my-rewards/${id}`)
const useMyReward = (id: string) =>
  apiClient.post<MyRewardItem>(`/my-rewards/${id}/use`)

const myRewardService = { getMyRewards, getMyReward, useMyReward }
export default myRewardService

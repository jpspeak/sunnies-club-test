import apiClient from './apiClient'
import { MyRewardItem } from './myRewardService'

export type RewardItem = {
  _id: string
  name: string
  description: string
  points: number
  type: string
  image: string
  termsAndConditions: string
}

type RewardList = RewardItem[]

export type RedeemResult = {
  reward: MyRewardItem
  user: { points: number }
}

const getRewards = () => apiClient.get<RewardList>('/rewards')
const getReward = (id: string) => apiClient.get<RewardItem>(`/rewards/${id}`)
const redeemReward = (id: string) =>
  apiClient.post<RedeemResult>(`/rewards/${id}/redeem`)

const rewardService = { getRewards, getReward, redeemReward }
export default rewardService

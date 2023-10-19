import apiClient from './apiClient'
import { MyReward } from './myRewardService'

export type Reward = {
  _id: string
  name: string
  description: string
  points: number
  type: string
  image: string
  termsAndConditions: string
}

export type Rewards = Reward[]

export type RedeemResult = {
  reward: MyReward
  user: { points: number }
}

const getRewards = () => apiClient.get<Rewards>('/rewards')

const getReward = (id: string) => apiClient.get<Reward>(`/rewards/${id}`)

const redeemReward = (id: string) =>
  apiClient.post<RedeemResult>(`/rewards/${id}/redeem`)

const rewardService = { getRewards, getReward, redeemReward }

export default rewardService

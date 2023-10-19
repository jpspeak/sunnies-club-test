import { Paginated } from '../../types'
import apiClient from './apiClient'

export const transactionTypes = {
  earnedPoints: 'Earned Points',
  redeemedPoints: 'Redeemed Points',
  birthdayPoints: 'Birthday Points',
  bonusPoints: 'Bonus Points',
  eventParticipationPoints: 'Event Participation Points'
  // anniversaryPoints: "Anniversary Points",
  // reviewPoints: "Review Points",
  // referralPoints: "Referral Points",
  // surveyPoints: "Survey Points",
  // socialMediaPoints: "Social Media Engagement Points",
  // milestonePoints: "Milestone Points",
  // transactionReversal: "Transaction Reversal",
  // pointsExpiration: "Points Expiration",
  // giftedPoints: "Gifted Points",
  // tierPromotionPoints: "Tier Promotion Points",
  // tierDemotionPoints: "Tier Demotion Points",
  // adminAdjustments: "Admin Adjustments",
  // eventParticipationPoints: "Event Participation Points",
  // charityDonationPoints: "Charity Donation Points"
}
export type OrderItem = {
  PONumber: string
  orderItemId: string
  orderId: string
  productName: string // Temporarily set to optional to avoid error if SSIS api has no product_name value
  lensName: string
  warehouseCode: string
  storeCode: string
  storeName: string
  total: string
  paymentDate: string
  claimablePoints: number
}
export type Transaction = {
  _id: string
  referenceId: string
  type: string
  description: string
  currentPoints: number
  pointsChange: number
  createdAt: string
  date: string
  redeemedRewardId?: string
  orderDetails: OrderItem[]
  redemptionDetails?: {
    inStoreVoucherCode: string
    onlineVoucherCode: string
    storeCode: string
    storeName: string
    redeemedDate: string
  }
}
export type Transactions = Transaction[]

const getTransactions = (limit = 10) => {
  return apiClient.get<Paginated<Transactions>>('/transactions', {
    params: { limit }
  })
}
const getTransaction = (id: string) => {
  return apiClient.get<Transaction>(`/transactions/${id}`)
}

const transactionService = {
  getTransactions,
  getTransaction
}
export default transactionService

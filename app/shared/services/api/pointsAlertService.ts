import apiClient from './apiClient'

const alert = (email: string) =>
  apiClient.post(`/redeemable-points-alert/${email}`)

const pointsAlertService = { alert }
export default pointsAlertService

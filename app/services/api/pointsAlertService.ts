import apiClient from './apiClient'

const alert = (email: string) =>
  apiClient.post(`/redeemable-points-alert/${email}`)

export default { alert }

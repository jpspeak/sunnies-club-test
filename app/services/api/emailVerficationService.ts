import apiClient from './apiClient'

const sendOTP = (formdata: { email: string }) =>
  apiClient.post('/email-verification/otp/send', formdata)

const verifyOTP = (formdata: { otp: string }) =>
  apiClient.post('/email-verification/otp/verify', formdata)

export default { sendOTP, verifyOTP }

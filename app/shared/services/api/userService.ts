import apiClient from './apiClient'

type ResetPwdFormData = {
  token: string
  password: string
}

type ResetPwdVerifFormData = {
  email: string
}

type UpdateProfileFormData = {
  firstname: string
  lastname: string
  mobileNumber: string
}

type UpdatePwdFormData = {
  currentPassword: string
  newPassword: string
}

const sendSecEmailVerification = (formdata: { secondaryEmail: string }) =>
  apiClient.post(
    '/users/account/secondary-email-address/verification',
    formdata
  )

const addSecEmail = (formdata: { secondaryEmail: string; otp: string }) =>
  apiClient.post('/users/account/secondary-email-address/add', formdata)

const sendResetPasswordVerification = (formdata: ResetPwdVerifFormData) =>
  apiClient.post('/users/password/reset/verification', formdata)

const resetPassword = (formdata: ResetPwdFormData) =>
  apiClient.post('/users/password/reset', formdata)

const updateProfile = (formdata: UpdateProfileFormData) =>
  apiClient.post('/users/profile', formdata)

const sendAccountVerification = (formdata: { email: string }) =>
  apiClient.post(`/users/account/verification`, formdata)

const verifyAccount = (token: string) =>
  apiClient.post(`/users/account/verify?verificationToken=${token}`)

const updatePassword = (formdata: UpdatePwdFormData) =>
  apiClient.post('/users/password/update', formdata)

const userService = {
  sendSecEmailVerification,
  addSecEmail,
  sendResetPasswordVerification,
  resetPassword,
  sendAccountVerification,
  verifyAccount,
  updateProfile,
  updatePassword
}
export default userService

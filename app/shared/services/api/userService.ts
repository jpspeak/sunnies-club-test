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

const addSecEmailVerification = (formdata: { secondaryEmail: string }) =>
  apiClient.post(
    '/users/account/email-address/add-sec-email-verification',
    formdata
  )

const addSecEmail = (formdata: { secondaryEmail: string; otp: string }) =>
  apiClient.post('/users/account/add-sec-email', formdata)

const resetPassword = (formdata: ResetPwdFormData) =>
  apiClient.post('/users/password/reset', formdata)

const resetPasswordVerification = (formdata: ResetPwdVerifFormData) =>
  apiClient.post('/users/password/reset/verification', formdata)

const updateProfile = (formdata: UpdateProfileFormData) =>
  apiClient.post('/users/profile', formdata)

const verifyAccount = (token: string) =>
  apiClient.post(`/users/account/verify?verificationToken=${token}`)

const updatePassword = (formdata: UpdatePwdFormData) =>
  apiClient.post('/users/password/update', formdata)

const userService = {
  addSecEmailVerification,
  addSecEmail,
  resetPasswordVerification,
  resetPassword,
  updateProfile,
  verifyAccount,
  updatePassword
}
export default userService

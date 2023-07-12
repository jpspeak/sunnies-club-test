import apiClient, { apiClientRefreshToken } from './apiClient'

type SignupFormdata = {
  email: string
  firstname: string
  lastname: string
  birthdate: string
  password: string
}
type SigninFormdata = {
  email: string
  password: string
}
const me = () => apiClient.get('/users/me')

const signup = (formdata: SignupFormdata) =>
  apiClient.post('/auth/sign-up', formdata)

const signin = (formdata: SigninFormdata) =>
  apiClient.post('/auth/sign-in', formdata)

const signout = () => apiClient.post('/auth/sign-out')

const refreshToken = () => apiClientRefreshToken.post('/auth/refresh-token')

const authService = { me, signup, signin, signout, refreshToken }
export default authService

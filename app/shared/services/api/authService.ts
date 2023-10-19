import authTokenService from '../authTokenService'
import apiClient, { apiClientRefreshToken } from './apiClient'

type SignupFormData = {
  email: string
  firstname: string
  lastname: string
  birthdate: string
  password: string
}

type SigninFormData = {
  email: string
  password: string
}

type SignInResData = {
  accessToken: string
  refreshToken: string
  user: {
    email: string
    id: string
  }
}

const getAuthUser = () => apiClient.get('/auth/user')

const signup = (formdata: SignupFormData) =>
  apiClient.post('/auth/sign-up', formdata)

const signin = (formdata: SigninFormData) =>
  apiClient.post<SignInResData>('/auth/sign-in', formdata)

const signout = () => apiClient.post('/auth/sign-out')

const refreshToken = () =>
  apiClientRefreshToken.post('/auth/refresh-token', {
    refreshToken: authTokenService.getRefreshToken()
  })

const authService = { getAuthUser, signup, signin, signout, refreshToken }

export default authService

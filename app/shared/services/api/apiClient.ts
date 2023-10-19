import axios from 'axios'
import authTokenService from '../authTokenService'

export const apiClientRefreshToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL || 'http://localhost:8000',
  withCredentials: true
})

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL || 'http://localhost:8000',
  withCredentials: true
})

apiClient.interceptors.request.use(
  (config) => {
    // Get the token from your authentication system or storage
    const token = authTokenService.getAccessToken()

    // Add the Bearer token to the 'Authorization' header
    config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default apiClient

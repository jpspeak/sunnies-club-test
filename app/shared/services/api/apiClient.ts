import axios from 'axios'
import authTokenService from '../authTokenService'
import authService from './authService'

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

// Response interceptor to refresh an expired token
let isRefreshing = false // Track if a token refresh is in progress
let refreshPromise: any // Store the promise for token refresh
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    // Request refresh token if error status is 401
    // Should not request refresh token if 401 is from signing in
    if (
      error.response?.status === 401 &&
      error.response.config.url !== '/auth/sign-in'
    ) {
      if (!isRefreshing) {
        isRefreshing = true
        refreshPromise = authService.refreshToken()
      }
      try {
        const { data } = await refreshPromise
        authTokenService.setAccessToken(data.accessToken)
        authTokenService.setRefreshToken(data.refreshToken)

        isRefreshing = false
        refreshPromise = null

        return await apiClient(originalRequest)
      } catch (refreshError: any) {
        if (refreshError.response.status === 401) {
          authTokenService.removeTokens()
        }

        isRefreshing = false
        refreshPromise = null
      }
    }
    return Promise.reject(error)
  }
)

export default apiClient

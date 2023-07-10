import axios from 'axios'
import authService from './authService'

export const apiClientRefreshToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL || 'http://localhost:8000',
  withCredentials: true
})

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL || 'http://localhost:8000',
  withCredentials: true
})

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401) {
      try {
        await authService.refreshToken()
        return apiClient(originalRequest)
      } catch (error) {}
    }
    return Promise.reject(error)
  }
)

export default apiClient

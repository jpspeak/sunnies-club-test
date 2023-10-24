'use client'

import { PropsWithChildren, useEffect } from 'react'
import useAuthStore from '../hooks/useAuthStore'
import apiClient from '../services/api/apiClient'
import authTokenService from '../services/authTokenService'
import authService from '../services/api/authService'

// AxiosInterceptors component is created to call hooks necessary to signout
export default function AxiosInterceptors({ children }: PropsWithChildren) {
  const signout = useAuthStore((state) => state.signout)

  useEffect(() => {
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

            // Clear the refresh-related variables
            isRefreshing = false
            refreshPromise = null

            return await apiClient(originalRequest)
          } catch (refreshError: any) {
            if (refreshError.response.status === 401) {
              signout()
            }
          }
        }
        return Promise.reject(error)
      }
    )
  }, [signout])
  return children
}

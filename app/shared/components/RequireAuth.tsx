'use client'

import React, { PropsWithChildren, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import useAuthStore from '../hooks/useAuthStore'
import Spinner from './Spinner'
import Center from './Center'
import authService from '../services/api/authService'
import authTokenService from '../services/authTokenService'
import { useLocalStorage } from '@uidotdev/usehooks'

type RequireAuthProps = {
  except: string[]
}

export default function RequireAuth({
  children,
  except
}: PropsWithChildren<RequireAuthProps>): JSX.Element | null {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [atkn] = useLocalStorage(authTokenService.accessTokenKey, null)
  const { signin, signout, isAuthenticated } = useAuthStore((state) => state)

  // Signout if no accesstoken
  useEffect(() => {
    if (!atkn) {
      signout()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [atkn])

  // Get user then sign in
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true)
      try {
        await authService.getAuthUser()
        signin()
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading)
    return (
      <Center className='h-screen'>
        <Spinner />
      </Center>
    )

  if (!isAuthenticated && !except.includes(pathname)) {
    router.replace('/auth')
    return null
  }
  if (isAuthenticated && except.includes(pathname)) {
    router.replace('/dashboard')
    return null
  }
  return <>{children}</>
}

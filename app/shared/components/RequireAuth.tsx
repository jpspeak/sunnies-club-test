'use client'

import React, { PropsWithChildren, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import useAuthStore from '../hooks/useAuthStore'
import Spinner from './Spinner'
import Center from './Center'
import authService from '../services/api/authService'

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
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const signin = useAuthStore((state) => state.signin)

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

'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { redirect, usePathname, useRouter } from 'next/navigation'
import authService from '../services/api/authService'
import useAuthStore from '../hooks/useAuthStore'

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
        await authService.me()
        signin()
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
    fetchUser()
  }, [])

  if (isLoading) return <>Loading...</>
  if (!isAuthenticated && !except.includes(pathname)) {
    router.replace('/signin')
    return null
  }
  if (isAuthenticated && except.includes(pathname)) {
    router.replace('/')
    return null
  }
  return <>{children}</>
}

'use client'

import React from 'react'
import authService from '../../services/api/authService'
import Button from '../../components/ui/Button'
import useAuthStore from '@/app/hooks/useAuthStore'

export default function SignoutButton() {
  const storeSignout = useAuthStore((state) => state.signout)
  const signout = async () => {
    try {
      await authService.signout()
      storeSignout()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Button className='text-left' variant='secondary' onClick={signout}>
      Logout
    </Button>
  )
}

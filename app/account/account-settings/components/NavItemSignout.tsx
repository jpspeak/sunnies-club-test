'use client'

import React from 'react'
import useAuthStore from '@/app/shared/hooks/useAuthStore'
import authService from '@/app/shared/services/api/authService'
import authTokenService from '@/app/shared/services/authTokenService'
import NavItemButton from '../../components/NavItemButton'

export default function NavItemSignout() {
  const storeSignout = useAuthStore((state) => state.signout)
  const handleClick = async () => {
    try {
      authTokenService.removeTokens()
      storeSignout()
      await authService.signout()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <NavItemButton
      onClick={handleClick}
      className='border-b border-soft-black-50'
    >
      Log out
    </NavItemButton>
  )
}

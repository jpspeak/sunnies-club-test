'use client'

import React, { useState } from 'react'
import MainContainer from '../shared/components/MainContainer'
import ChangePasswordForm from './components/ResetPasswordForm'
import ChangePasswordSuccessful from './components/ResetPasswordSuccessful'
import TopNavBar from '../shared/components/TopNavbar'
import LogoIcon from '../shared/components/icons/LogoIcon'

export default function ResetPassword() {
  const [resetPassSuccessful, setResetPassSuccessful] = useState<boolean>(false)
  return (
    <MainContainer className='bg-red-700 pt-[60px] flex flex-col'>
      <TopNavBar
        backButton={<TopNavBar.BackButton className='text-white' />}
        className='bg-transparent'
      />
      <LogoIcon className='h-[60px] text-white mx-auto' />
      {resetPassSuccessful ? (
        <ChangePasswordSuccessful />
      ) : (
        <ChangePasswordForm
          onResetPassSuccessful={() => setResetPassSuccessful(true)}
        />
      )}
    </MainContainer>
  )
}

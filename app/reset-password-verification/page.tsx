'use client'

import React, { useState } from 'react'
import MainContainer from '../shared/components/MainContainer'
import ResetPasswordForm from './components/ResetPasswordVerifForm'
import ResetPasswordSuccessful from './components/ResetPasswordVerifSuccessful'
import TopNavBar from '../shared/components/TopNavbar'
import LogoIcon from '../shared/components/icons/LogoIcon'

export default function ResetPasswordVerification() {
  const [emailSent, setEmailSent] = useState(false)
  return (
    <MainContainer className='bg-red-700 pt-[60px] flex flex-col'>
      <TopNavBar
        backButton={<TopNavBar.BackButton className='text-white' />}
        className='bg-transparent'
      />
      <LogoIcon className='h-[60px] text-white mx-auto' />
      {emailSent ? (
        <ResetPasswordSuccessful />
      ) : (
        <ResetPasswordForm onEmailSent={() => setEmailSent(true)} />
      )}
    </MainContainer>
  )
}

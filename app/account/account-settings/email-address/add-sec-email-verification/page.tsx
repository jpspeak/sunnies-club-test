import React from 'react'
import TopBar from '@/app/shared/components/TopBar'
import MainContainer from '@/app/shared/components/MainContainer'
import VerificationForm from './components/VerificationForm'

export default function AddSecEmailVerification() {
  return (
    <>
      <TopBar title='ACCOUNT SETTINGS' showBackNav className='px-4' />
      <MainContainer className='pt-[50px] pb-[110px] px-4'>
        <VerificationForm />
      </MainContainer>
    </>
  )
}

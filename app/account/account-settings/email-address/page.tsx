import React from 'react'
import TopBar from '@/app/shared/components/TopBar'
import MainContainer from '@/app/shared/components/MainContainer'
import UpdateSecEmailForm from './components/UpdateSecEmailForm'

export default function EmailAddress() {
  return (
    <>
      <TopBar title='ACCOUNT SETTINGS' showBackNav />
      <MainContainer className='flex flex-col px-4 pt-[50px] pb-[180px]'>
        <UpdateSecEmailForm />
      </MainContainer>
    </>
  )
}

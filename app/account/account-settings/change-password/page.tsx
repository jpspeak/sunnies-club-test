import React from 'react'
import TopBar from '@/app/shared/components/TopBar'
import MainContainer from '@/app/shared/components/MainContainer'
import UpdatePasswordForm from './components/UpdatePasswordForm'

export default function ChangePassword() {
  return (
    <>
      <TopBar title='ACCOUNT SETTINGS' showBackNav />
      <MainContainer className='flex flex-col px-4 pt-[50px] pb-[100px]'>
        <UpdatePasswordForm />
      </MainContainer>
    </>
  )
}

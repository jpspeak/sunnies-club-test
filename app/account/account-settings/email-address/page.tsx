import React from 'react'
import TopBar from '@/app/shared/components/TopBar'
import MainContainer from '@/app/shared/components/MainContainer'
import UpdateSecEmailForm from './components/UpdateSecEmailForm'

export default function EmailAddress() {
  return (
    <>
      <TopBar title='ACCOUNT SETTINGS' showBackNav />
      <MainContainer className='flex flex-col px-4 pt-[50px] pb-[75px]'>
        <UpdateSecEmailForm />
        <p className='p-3 rounded bg-soft-black-50 text-soft-black-400 text-xxs'>
          Start earning points with your Sunnies Studios in-store account. If
          you did not register with your original account, please add the email
          you used in-store under the secondary email address to automatically
          score points.​
        </p>
      </MainContainer>
    </>
  )
}

import React from 'react'
import MainContainer from '@/app/shared/components/MainContainer'
import TopBar from '@/app/shared/components/TopBar'
import ProfileForm from './components/ProfileForm'

export default function PersonalDetails() {
  return (
    <>
      <TopBar title='EDIT PROFILE' showBackNav />
      <MainContainer className='pt-[50px] pb-[110px] px-4'>
        <ProfileForm />
      </MainContainer>
    </>
  )
}

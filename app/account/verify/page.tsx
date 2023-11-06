import React from 'react'
import MainContainer from '@/app/shared/components/MainContainer'
import VerifyContainer from './components/VerifyContainer'
import LogoIcon from '@/app/shared/components/icons/LogoIcon'

export default async function Verify() {
  return (
    <MainContainer className='bg-red-700 pt-[60px] flex flex-col'>
      <LogoIcon linkToHome className='h-[60px] text-white mx-auto' />
      <VerifyContainer />
    </MainContainer>
  )
}

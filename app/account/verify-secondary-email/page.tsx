import React from 'react'
import MainContainer from '@/app/shared/components/MainContainer'
import LogoIcon from '@/app/shared/components/icons/LogoIcon'
import VerifySecondaryEmailContainer from './components/VerifySecondaryEmailContainer'

export default async function Verify() {
  return (
    <MainContainer className='bg-red-700 pt-[60px] flex flex-col'>
      <LogoIcon linkToHome className='h-[60px] text-white mx-auto' />
      <VerifySecondaryEmailContainer />
    </MainContainer>
  )
}

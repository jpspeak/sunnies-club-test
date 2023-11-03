'use client'

import React from 'react'
import Button from '@/app/shared/components/Button'
import FormHeader from '@/app/shared/components/FormHeader'
import BottomBar from '@/app/shared/components/BottomBar'
import ResendVerifLink from '../components/ResendVerifLink'
import MainContainer from '@/app/shared/components/MainContainer'
import TopNavBar from '@/app/shared/components/TopNavbar'
import LogoIcon from '@/app/shared/components/icons/LogoIcon'
import { useRouter } from 'next/navigation'

export default function SignupSuccessful() {
  const router = useRouter()

  const handleLoginCLick = () => {
    router.push('/auth?initialView=signin')
  }
  return (
    <MainContainer className='bg-red-700 pt-[60px]'>
      <TopNavBar
        backButton={<TopNavBar.BackButton className='text-white' />}
        className='bg-transparent'
      />
      <LogoIcon className='h-[60px] text-white mx-auto' />
      <FormHeader
        title='Confirm your email'
        body="Your sign-up was successful. We've sent you an email to confirm your account."
        className='mt-[40px] px-[44px]'
      />
      <p className='mt-[40px] text-sm text-center text-white'>
        Didn&apos;t receive the email? <ResendVerifLink />
      </p>
      <BottomBar noShadow className='bg-red-700 py-[40px]'>
        <Button
          onClick={handleLoginCLick}
          variant='outline'
          className='text-white border-white'
        >
          Go to login
        </Button>
      </BottomBar>
    </MainContainer>
  )
}

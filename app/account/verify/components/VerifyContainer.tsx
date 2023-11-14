'use client'

import BottomBar from '@/app/shared/components/BottomBar'
import ButtonLink from '@/app/shared/components/ButtonLink'
import Center from '@/app/shared/components/Center'
import FormHeader from '@/app/shared/components/FormHeader'
import Spinner from '@/app/shared/components/Spinner'
import userService from '@/app/shared/services/api/userService'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function VerifyContainer() {
  const [isLoadingVerify, setIsLoadingVerify] = useState(true)
  const [verifySuccessful, setVerifySuccessful] = useState(false)
  const [verifyError, setVerifyError] = useState('')
  const searchParams = useSearchParams()
  const verificationToken = searchParams.get('verificationToken')

  useEffect(() => {
    const verifyAccount = async (token: string) => {
      setIsLoadingVerify(true)
      try {
        await userService.verifyAccount(token)
        setVerifySuccessful(true)
        setIsLoadingVerify(false)
      } catch (error: any) {
        setVerifyError(error.response?.data?.message || 'An error occurred.')
        setIsLoadingVerify(false)
      }
    }

    if (verificationToken) {
      verifyAccount(verificationToken)
    }
  }, [verificationToken])

  if (isLoadingVerify)
    return (
      <Center className='mt-[40px]'>
        <Spinner className='text-white' />
      </Center>
    )
  if (verifySuccessful)
    return (
      <>
        <FormHeader
          title='Account confirmed!'
          body='Congratulations! Your account has been successfully confirmed. You can now log in to our platform.'
          className='mt-[40px] px-[60px]'
        />
        <BottomBar className='bg-primary pb-[40px]' noShadow>
          <ButtonLink
            variant='outline'
            href='/auth?initialView=signin'
            className='mt-6 text-white'
          >
            Back to login
          </ButtonLink>
        </BottomBar>
      </>
    )
  if (verifyError)
    return (
      <>
        <FormHeader
          title='Oops!'
          body={verifyError}
          className='mt-[40px] px-[60px]'
        />
        <BottomBar className='bg-primary pb-[40px]' noShadow>
          <ButtonLink
            variant='outline'
            href='/auth?initialView=signin'
            className='text-white'
          >
            Back to login
          </ButtonLink>
        </BottomBar>
      </>
    )
  return null
}

'use client'

import React, { useEffect } from 'react'
import Alert from '@/app/shared/components/Alert'
import MainContainer from '@/app/shared/components/MainContainer'
import MainWrapper from '@/app/shared/components/MainWrapper'
import { useRouter } from 'next/navigation'
import Button from '@/app/shared/components/Button'

export default function Error({ error }: { error: Error }) {
  const router = useRouter()
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <MainContainer>
      <MainWrapper withTopPad>
        <Alert variant='error'>{error.message}</Alert>
        <Button onClick={() => router.replace('/')} className='mt-6'>
          BACK TO HOME
        </Button>
      </MainWrapper>
    </MainContainer>
  )
}

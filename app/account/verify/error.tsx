'use client'

import { useEffect } from 'react'
import Alert from '@/app/components/ui/Alert'
import Link from 'next/link'
import MainContainer from '@/app/components/ui/MainContainer'
import Center from '@/app/components/ui/Center'

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <MainContainer>
      <Alert className='mt-4'>{error.message}</Alert>
      <Center>
        <Link href='/' className='underline'>
          Home
        </Link>
      </Center>
    </MainContainer>
  )
}

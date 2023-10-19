import Center from '@/app/shared/components/Center'
import Spinner from '@/app/shared/components/Spinner'
import React from 'react'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Center className='h-screen'>
      <Spinner />
    </Center>
  )
}

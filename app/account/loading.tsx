import React from 'react'
import Spinner from '../shared/components/Spinner'
import Center from '../shared/components/Center'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Center className='h-screen'>
      <Spinner />
    </Center>
  )
}

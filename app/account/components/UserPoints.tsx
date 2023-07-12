'use client'

import React from 'react'
import StarIcon from '@/app/components/ui/Icons/StarIcon'
import useUser from '@/app/hooks/useUser'
export default function UserPoints() {
  const { user } = useUser()

  const fullname = user
    ? user?.firstname.toUpperCase() + ' ' + user?.lastname.toUpperCase()
    : null

  return (
    <div className='flex items-center justify-between p-4 border-primary rounded-xl text-primary border-[1.5px]'>
      <p className='text-sm font-bold leading-none text-primary'>{fullname}</p>
      <div className='flex gap-1'>
        <StarIcon className='h-6' />
        <span className='font-bold'>{user?.points}</span>
      </div>
    </div>
  )
}

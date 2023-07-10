'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function TopBar({
  title,
  showBackNav
}: {
  title: string
  showBackNav?: boolean
}) {
  const router = useRouter()
  return (
    <div className='container fixed top-0 flex items-center max-w-sm p-4 mx-auto bg-white md:px-0 md:max-w-sm md:left-1/2 md:-translate-x-1/2 z-[1]'>
      {showBackNav ? (
        <button onClick={router.back} className='mr-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            />
          </svg>
        </button>
      ) : null}
      <h1 className='text-lg font-bold'>{title}</h1>
    </div>
  )
}

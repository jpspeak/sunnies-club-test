'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function TopBar({
  className,
  title,
  showBackNav
}: {
  className?: string
  title?: string
  showBackNav?: boolean
}) {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return (
    <div
      className={twMerge(
        'container fixed top-0 flex items-center h-[52px] max-w-md p-4 mx-auto bg-white left-1/2 -translate-x-1/2 z-[1]',
        className
      )}
    >
      {showBackNav ? (
        <button onClick={handleBackClick} className='mr-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            />
          </svg>
        </button>
      ) : null}
      <h1 className='text-sm font-bold leading-none uppercase text-soft-black-700'>
        {title}
      </h1>
    </div>
  )
}

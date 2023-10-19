'use client'

import { useRouter } from 'next/navigation'
import React, { PropsWithChildren, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import ArrowLeft from './icons/ArrowLeftIcon'

const TopNavBar = ({
  className,
  title,
  backButton
}: {
  className?: string
  title?: ReactNode
  backButton?: ReactNode
}) => {
  return (
    <div
      className={twMerge(
        'container fixed top-0 flex items-center h-[52px] max-w-md p-4 mx-auto bg-white md:max-w-md md:left-1/2 md:-translate-x-1/2 z-[1]',
        className
      )}
    >
      {backButton}
      {title}
    </div>
  )
}

// eslint-disable-next-line react/display-name
TopNavBar.BackButton = ({ className }: { className?: string }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return (
    <button onClick={handleBackClick} className={twMerge('mr-4', className)}>
      <ArrowLeft />
    </button>
  )
}

// eslint-disable-next-line react/display-name
TopNavBar.Title = ({ children }: PropsWithChildren) => (
  <h1 className='text-lg font-bold text-soft-black-700'>{children}</h1>
)

export default TopNavBar

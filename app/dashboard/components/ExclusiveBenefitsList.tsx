/* eslint-disable import/no-extraneous-dependencies */
'use client'

import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import 'swiper/css'
import { twMerge } from 'tailwind-merge'

export type ExclusiveBenif = {
  icon: () => React.JSX.Element
  label: string
}

export default function ExclusiveBenefitsList({
  className,
  exclusiveBenifs
}: {
  className?: string
  exclusiveBenifs?: ExclusiveBenif[]
}) {
  return (
    <ul className={twMerge('grid grid-cols-3 gap-4 mt-4', className)}>
      {exclusiveBenifs?.map((exclusiveBenif) => {
        const Icon = exclusiveBenif.icon
        return (
          <li
            key={exclusiveBenif.label}
            className='flex flex-col items-center gap-2'
          >
            <Icon />
            <p className='text-center text-xxs'>{exclusiveBenif.label}</p>
          </li>
        )
      })}
    </ul>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

export default function RewardsListSkeleton() {
  return (
    <ul className='flex flex-col'>
      {[1, 2, 3]?.map((reward, i) => (
        <li
          key={i}
          className='border-b-[1px] last:border-b-0 border-gray-neutral-50 py-4 relative'
        >
          <Link href='' className='flex gap-2'>
            <Skeleton
              containerClassName='w-[125px] h-[100px] shrink-0'
              className='h-full '
            />
            <div className='flex flex-col justify-center w-full gap-3'>
              <Skeleton containerClassName='h-[24px]' className='h-full' />
              <Skeleton containerClassName='w-[100px]' />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

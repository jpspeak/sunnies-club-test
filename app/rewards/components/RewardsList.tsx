'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import 'react-loading-skeleton/dist/skeleton.css'
import { Rewards } from '@/app/shared/services/api/rewardService'

export default function RewardsList({ rewards }: { rewards?: Rewards }) {
  return (
    <ul className='flex flex-col'>
      {rewards?.map((reward) => (
        <li
          key={reward._id}
          className='border-b-[1px] border-gray-neutral-50 p-4 relative'
        >
          <Link href={`/rewards/${reward._id}`} className='flex gap-3'>
            <Image
              src={reward.image}
              alt='Reward'
              width={100}
              height={80}
              quality={100}
              placeholder='blur'
              blurDataURL='/images/img-placeholder.svg'
              className='object-contain h-[80px] w-auto'
            />
            <div className='flex flex-col justify-center gap-1'>
              <p className='text-sm font-medium text-soft-black-700'>
                {reward.name}
              </p>
              <span className='text-xs text-soft-black-400'>
                {reward.points} points
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

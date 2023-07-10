'use client'

import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import rewardService from '@/app/services/api/rewardService'
import Image from 'next/image'

export default function RewardList() {
  const { data, isLoading, error } = useSWR(`rewards`, () =>
    rewardService.getRewards().then((res) => res.data)
  )

  if (error) return <>Error</>
  if (isLoading) return <>Loading...</>
  return (
    <ul className='flex flex-col'>
      {data?.map((reward) => (
        <li
          key={reward._id}
          className='border-b-[1.5px] last:border-b-0 border-netural py-4 relative'
        >
          <Link href={`/rewards/${reward._id}`} className='flex gap-2'>
            <Image
              src={reward.image}
              alt='Reward'
              width={125}
              height={100}
              quality={100}
              style={{ objectFit: 'contain' }}
              className='py-[18px] px-[32px]'
            />
            <div className='flex flex-col justify-center gap-3'>
              <p className='text-sm font-bold leading-none text-black'>
                {reward.name}
              </p>
              <span className='text-xs text-neutral'>
                {reward.points} points
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

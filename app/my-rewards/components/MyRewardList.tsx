'use client'

import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import Image from 'next/image'
import myRewardService from '@/app/services/api/myRewardService'
import formatDate from '@/app/utils/formatDate'

export default function MyRewardList() {
  const { data, isLoading, error } = useSWR(`my-rewards`, () =>
    myRewardService.getMyRewards().then((res) => res.data)
  )

  if (error) return <>Error</>
  if (isLoading) return <>Loading...</>
  return (
    <>
      <div className='flex gap-3'>
        <button className='w-full py-2 text-sm font-bold leading-none rounded-full bg-[#D4ECFB] text-[#249DE7]'>
          ACTIVE REWARDS
        </button>
        <button className='w-full py-2 text-sm font-bold leading-none rounded-full text-gray-neutral-300'>
          PAST REWARDS
        </button>
      </div>
      <ul className='flex flex-col gap-3 mt-4'>
        {data?.map((myReward) => (
          <li key={myReward._id} className='relative shadow-sm rounded-xl'>
            <Link href={`/my-rewards/${myReward._id}`} className='flex gap-2'>
              <Image
                src={myReward.image}
                alt='Reward'
                width={125}
                height={100}
                quality={100}
                style={{ objectFit: 'contain' }}
                className='py-[18px] px-[32px]'
              />
              <div className='flex flex-col justify-between gap-3 p-3 min-h-[100px]'>
                <p className='text-sm font-bold text-black '>{myReward.name}</p>
                <time className='text-xs text-neutral'>
                  Valid until {formatDate(myReward.expiryDate)}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import Image from 'next/image'
import utcToLocalMMMDYYYY from '@/app/shared/utils/utcToLocalMMMDYYYY'
import { useSearchParams } from 'next/navigation'
import MyRewardListTab from './MyRewardsListTab'
import myRewardService from '@/app/shared/services/api/myRewardService'
import Spinner from '@/app/shared/components/Spinner'
import FetchError from '@/app/shared/components/FetchError'

export default function MyRewardList() {
  const searchParams = useSearchParams()
  const valid = !searchParams.get('invalid')

  const { data, isLoading, error } = useSWR(
    `/my-rewards?${searchParams.toString()}`,
    () => myRewardService.getMyRewards(valid).then((res) => res.data)
  )

  const renderList = () => {
    if (error) return <FetchError />
    if (isLoading) return <Spinner containerClass='pt-[40px] px-2' />
    return (
      <ul className='flex flex-col gap-3 px-4 pb-4 pt-[50px]'>
        {data?.map((myReward) => (
          <li
            key={myReward._id}
            className='relative bg-white shadow-md rounded-xl'
          >
            <Link
              href={`/account/my-rewards/${myReward._id}`}
              className='flex gap-3 p-3'
            >
              <Image
                src={myReward.image}
                alt='Reward'
                width={125}
                height={100}
                quality={100}
                className={`object-contain h-[100px] ${!valid && 'grayscale'}`}
              />
              <div className='flex flex-col justify-center gap-1 min-h-[100px]'>
                <p className='text-sm font-medium text-soft-black-700'>
                  {myReward.name}
                </p>
                {myReward.dateUsed && (
                  <time className='text-xs text-soft-black-400'>
                    Used on {utcToLocalMMMDYYYY(myReward.dateUsed)}
                  </time>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <MyRewardListTab />
      {renderList()}
    </>
  )
}

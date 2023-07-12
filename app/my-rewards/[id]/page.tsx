'use client'

import BottomBar from '@/app/components/ui/BottomBar'
import Button from '@/app/components/ui/Button'
import MainContainer from '@/app/components/ui/MainContainer'
import TopBar from '@/app/components/ui/TopBar'
import myRewardService, {
  MyRewardItem
} from '@/app/services/api/myRewardService'
import formatDate from '@/app/utils/formatDate'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'
import useSWR from 'swr'

export default function MyReward() {
  const { id: myRewardId } = useParams()
  const {
    data: myReward,
    isLoading: isLoadingMyReward,
    error: errorMyReward
  } = useSWR<MyRewardItem>(`my-reward/${myRewardId}`, () =>
    myRewardService.getMyReward(myRewardId).then((res) => res.data)
  )

  if (errorMyReward) return <>Error</>
  if (isLoadingMyReward) return <>Loading...</>
  return (
    <>
      <TopBar title='MY REWARDS' showBackNav />
      <MainContainer>
        <div className='flex flex-col px-4 md:px-0 pt-[60px] pb-[70px]'>
          {myReward?.image ? (
            <Image
              src={myReward?.image}
              alt='Reward'
              width={125}
              height={100}
              quality={100}
              style={{ objectFit: 'contain' }}
              className='mx-auto my-12'
            />
          ) : null}

          <div className='p-4  border-gray-neutral-50 rounded-t-xl border-[1.5px]'>
            <p className='text-sm font-bold text-soft-black-700'>
              {myReward?.name}
            </p>
            <time className='mt-3 text-xs text-gray-neutral-200'>
              Valid until {myReward && formatDate(myReward?.expiryDate)}
            </time>
          </div>
          <div className='p-4 border-t-0 border-gray-neutral-50 rounded-b-xl border-[1.5px]'>
            <p className='text-xs text-gray-neutral-200'>
              Terms and Conditions
            </p>
            <div
              className='pl-4 text-sm  text-soft-black-700 mt-[14px] [&>ul]:list-disc'
              dangerouslySetInnerHTML={{
                __html: myReward?.termsAndConditions || ''
              }}
            ></div>
          </div>
        </div>
      </MainContainer>
      <BottomBar>
        {myReward?.type === 'IN-STORE VOUCHER' ? (
          <>
            <span className='inline-block text-xs leading-none text-gray-neutral-200'>
              Reward code
            </span>
            <div className='px-3 border-[1px] py-[10px] mt-3 text-sm font-bold rounded-full border-gray-neutral-50'>
              {myReward?.inStoreVoucherCode}
            </div>
          </>
        ) : null}
        {myReward?.type === 'ONLINE VOUCHER' ? (
          <>
            {/* <span className='inline-block text-xs leading-none text-gray-neutral-200'>
              Reward code
            </span>
            <div className='px-3 border-[1px] py-[10px] mt-3 text-sm font-bold rounded-full border-gray-neutral-50'>
              {myReward?.inStoreVoucherCode}
            </div> */}
            <Button variant='primary' className='text-sm font-bold'>
              USE NOW
            </Button>
          </>
        ) : null}
      </BottomBar>
    </>
  )
}

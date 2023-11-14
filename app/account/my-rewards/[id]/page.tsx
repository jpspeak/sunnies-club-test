'use client'

import BottomBar from '@/app/shared/components/BottomBar'
import Button from '@/app/shared/components/Button'
import FetchError from '@/app/shared/components/FetchError'
import MainContainer from '@/app/shared/components/MainContainer'
import Spinner from '@/app/shared/components/Spinner'
import TextCopiedModal from '@/app/shared/components/TextCopiedModal'
import TopBar from '@/app/shared/components/TopBar'
import myRewardService, {
  MyReward as TMyReward
} from '@/app/shared/services/api/myRewardService'
import DOMPurify from 'dompurify'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useRef, useState } from 'react'
import useSWR from 'swr'
import { useCopyToClipboard, useTimeout } from 'usehooks-ts'

export default function MyReward() {
  const [, copyToClipBoard] = useCopyToClipboard()
  const [showCopiedModal, setShowCopiedModal] = useState(false)
  const codeRef = useRef<HTMLDivElement>(null)
  const { id: myRewardId } = useParams()

  const {
    data: myReward,
    isLoading: isLoadingMyReward,
    error: errorMyReward,
    mutate: mutateMyReward
  } = useSWR<TMyReward>(`my-reward/${myRewardId}`, () =>
    myRewardService.getMyReward(myRewardId).then((res) => res.data)
  )

  const [isUsing, setIsUsing] = useState(false)

  const useOnlineVoucher = async () => {
    setIsUsing(true)
    try {
      await myRewardService.useMyReward(myRewardId)
      mutateMyReward()
      setIsUsing(false)
    } catch (error) {
      setIsUsing(false)
    }
  }

  const handleCopyCodeClick = () => {
    if (codeRef?.current?.innerText) {
      copyToClipBoard(codeRef.current.innerText)
      setShowCopiedModal(true)
    }
  }

  useTimeout(
    () => {
      setShowCopiedModal(false)
    },
    showCopiedModal ? 1000 : null
  )

  const renderBottomBar = () => {
    if (myReward?.type === 'IN-STORE VOUCHER') {
      if (!myReward?.isUsed)
        return (
          <BottomBar className='flex flex-col'>
            <span className='inline-block text-xxs tracking-[0.2px] text-soft-black-400'>
              REWARD CODE
            </span>
            <div className='px-3 py-[10px] mt-3 border rounded text-sm font-bold bg-soft-black-50 border-soft-black-100'>
              {myReward?.inStoreVoucherCode}
            </div>
          </BottomBar>
        )
    } else if (myReward?.type === 'ONLINE VOUCHER') {
      if (myReward?.isUsed)
        return (
          <BottomBar>
            <Button
              onClick={useOnlineVoucher}
              className='text-sm font-bold'
              isLoading={isUsing}
              variant='disabled'
              disabled
            >
              Use now
            </Button>
          </BottomBar>
        )
      if (myReward.onlineVoucherCode)
        return (
          <BottomBar className='flex flex-col'>
            <span className='inline-block text-xxs tracking-[0.2px] text-soft-black-400'>
              REWARD CODE
            </span>
            <div
              ref={codeRef}
              className='px-3 py-[10px] mt-3 border rounded text-sm font-bold bg-soft-black-50 border-soft-black-100'
            >
              {myReward?.onlineVoucherCode}
            </div>
            <Button
              onClick={handleCopyCodeClick}
              className='mt-4 text-sm font-bold'
              isLoading={isUsing}
            >
              Copy reward code
            </Button>
          </BottomBar>
        )

      return (
        <BottomBar>
          <Button
            onClick={useOnlineVoucher}
            className='text-sm font-bold'
            isLoading={isUsing}
          >
            Use now
          </Button>
        </BottomBar>
      )
    }
  }

  const render = () => {
    if (errorMyReward) return <FetchError />
    if (isLoadingMyReward) return <Spinner containerClass='p-2' />
    return (
      <>
        <div className='bg-white pb-7'>
          {myReward && (
            <Image
              src={myReward.image}
              alt='Reward'
              width={125}
              height={100}
              quality={100}
              className={`object-contain mx-auto  ${
                myReward.isUsed && 'grayscale'
              }`}
            />
          )}
        </div>

        <div className='p-4'>
          <div className='p-4 bg-white border border-gray-neutral-50 rounded-t-xl'>
            <p className='text-xl text-soft-black-700'>{myReward?.name}</p>
            <span className='mt-1 text-xs text-soft-black-400'>
              {myReward?.points} points
            </span>
          </div>
          <div className='p-4 bg-white border border-t-0 rounded-b-xl border-gray-neutral-50'>
            <p className='text-sm font-medium text-soft-black-700'>
              Terms & Conditions
            </p>
            <div
              className='pl-4 text-xs text-soft-black-400 mt-2 [&>ul]:list-disc [&>ul]:leading-normal'
              dangerouslySetInnerHTML={{
                __html: myReward?.termsAndConditions
                  ? DOMPurify.sanitize(myReward.termsAndConditions)
                  : ''
              }}
            ></div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <TopBar title='MY REWARDS' showBackNav />
      <MainContainer className='flex flex-col bg-soft-black-50 pt-[50px]'>
        {render()}
      </MainContainer>

      {renderBottomBar()}

      <TextCopiedModal
        show={showCopiedModal}
        onOutsideClick={() => setShowCopiedModal(false)}
      />
    </>
  )
}

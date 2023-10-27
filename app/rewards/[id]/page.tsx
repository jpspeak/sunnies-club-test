'use client'

import React, { useState } from 'react'
import BottomBar from '@/app/shared/components/BottomBar'
import Button from '@/app/shared/components/Button'
import MainContainer from '@/app/shared/components/MainContainer'
import Spinner from '@/app/shared/components/Spinner'
import TopBar from '@/app/shared/components/TopBar'
import useUser from '@/app/shared/hooks/useUser'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import RedeemSuccessModal from './components/RedeemSuccessModal'
import messages from '@/app/shared/constants/messages'
import Center from '@/app/shared/components/Center'
import DOMPurify from 'dompurify'
import rewardService, {
  RedeemResult,
  Reward as TReward
} from '@/app/shared/services/api/rewardService'
import FetchError from '@/app/shared/components/FetchError'
import InsufficientPointsModal from './components/InsufficientPointsModal'

export default function Reward() {
  const { user } = useUser()
  const router = useRouter()
  const [isLoadingRedeem, setIsLoadingRedeem] = useState(false)
  const [redeemResult, setRedeemResult] = useState<RedeemResult | null>()
  const [errorRedeem, setErrorRedeem] = useState<string>('')
  const { id: rewardId } = useParams()
  const {
    data: reward,
    isLoading: isLoadingReward,
    error: errorReward
  } = useSWR<TReward>(`/rewards/${rewardId}`, () =>
    rewardService.getReward(rewardId).then((res) => res.data)
  )

  const handleRedeemClick = async () => {
    if (user && reward && user?.points < reward?.points) {
      setErrorRedeem('Insufficient Points')
    } else {
      setIsLoadingRedeem(true)
      try {
        const { data: dataRedeem } = await rewardService.redeemReward(rewardId)
        setRedeemResult(dataRedeem)
        setIsLoadingRedeem(false)
      } catch (error) {
        setErrorRedeem(messages.somethingWentWrong)
        setIsLoadingRedeem(false)
      }
    }
  }
  // const handleConfirmClick = async () => {
  //   setShowConfirmation(false)
  //   setIsLoadingRedeem(true)
  //   try {
  //     const { data: dataRedeem } = await rewardService.redeemReward(rewardId)
  //     setRedeemResult(dataRedeem)
  //     setIsLoadingRedeem(false)
  //   } catch (error) {
  //     setErrorRedeem(messages.somethingWentWrong)
  //     setIsLoadingRedeem(false)
  //   }
  // }

  const redeemable =
    !!user?.points && !!reward?.points && user.points >= reward.points

  if (errorReward) return <FetchError />
  if (isLoadingReward)
    return (
      <Center className='h-screen'>
        <Spinner />
      </Center>
    )
  return (
    <>
      <TopBar title='REWARDS' showBackNav />
      <MainContainer className='flex flex-col bg-soft-black-50 pt-[50px]'>
        {reward?.image ? (
          <div className='bg-white pb-7'>
            <Image
              src={reward?.image}
              alt='Reward'
              width={125}
              height={100}
              quality={100}
              className={`object-contain mx-auto ${!redeemable && 'grayscale'}`}
            />
          </div>
        ) : null}
        <div className='p-4'>
          <div className='p-4 bg-white border border-gray-neutral-50 rounded-t-xl'>
            <p className='text-xl text-soft-black-700'>{reward?.name}</p>
            <span className='mt-1 text-xs text-soft-black-400'>
              {reward?.points} points
            </span>
          </div>
          <div className='p-4 bg-white border border-t-0 rounded-b-xl border-gray-neutral-50'>
            <p className='text-sm font-medium text-soft-black-700'>
              Terms & Conditions
            </p>
            <div
              className='pl-4 text-xs text-soft-black-400 mt-2 [&>ul]:list-disc [&>ul]:leading-normal'
              dangerouslySetInnerHTML={{
                __html: reward?.termsAndConditions
                  ? DOMPurify.sanitize(reward.termsAndConditions)
                  : ''
              }}
            ></div>
          </div>
        </div>
      </MainContainer>

      <BottomBar>
        <Button
          onClick={handleRedeemClick}
          isLoading={isLoadingRedeem}
          disabled={!redeemable}
          variant={redeemable ? 'solid' : 'disabledGray'}
        >
          {redeemable ? 'Redeem' : 'Unavailable'}
        </Button>
      </BottomBar>

      {!!redeemResult && (
        <RedeemSuccessModal
          redeemResult={redeemResult}
          onDoneClick={() => setRedeemResult(null)}
          onViewRewardClick={() =>
            redeemResult &&
            router.push(`/account/my-rewards/${redeemResult.reward._id}`)
          }
        />
      )}

      {/* <ConfirmationModal
        show={showConfirmation}
        title='Lorem Ipsum'
        body='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        confirmBtnText='REDEEM'
        onConfirmClick={handleConfirmClick}
        onCancelClick={() => setShowConfirmation(false)}
      /> */}

      {!!errorRedeem && (
        <InsufficientPointsModal onClick={() => setErrorRedeem('')} />
      )}
    </>
  )
}

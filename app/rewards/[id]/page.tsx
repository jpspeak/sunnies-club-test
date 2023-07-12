'use client'

import BottomAction from '@/app/components/ui/BottomAction'
import Button from '@/app/components/ui/Button'
import SuccesIcon from '@/app/components/ui/Icons/SuccessIcon'
import MainContainer from '@/app/components/ui/MainContainer'
import Modal from '@/app/components/ui/Modal'
import TopBar from '@/app/components/ui/TopBar'
import useModal from '@/app/hooks/useModa'
import useUser from '@/app/hooks/useUser'
import rewardService, {
  RedeemResult,
  RewardItem
} from '@/app/services/api/rewardService'
import formatDate from '@/app/utils/formatDate'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import useSWR from 'swr'

export default function Reward() {
  const router = useRouter()
  const { isShowingModal, toggleModal } = useModal()
  const [isRedeeming, setIsRedeeming] = useState(false)
  const { user } = useUser()
  const [redeemResult, setRedeemResult] = useState<RedeemResult | null>(null)
  const { id: rewardId } = useParams()
  const {
    data: reward,
    isLoading: isLoadingReward,
    error: errorReward
  } = useSWR<RewardItem>(`reward/${rewardId}`, () =>
    rewardService.getReward(rewardId).then((res) => res.data)
  )

  const redeem = async () => {
    setIsRedeeming(true)
    try {
      const { data: dataRedeem } = await rewardService.redeemReward(rewardId)
      setRedeemResult(dataRedeem)
      toggleModal()
      setIsRedeeming(false)
    } catch (error) {
      setIsRedeeming(false)
    }
  }

  if (errorReward) return <>Error</>
  if (isLoadingReward) return <>Loading...</>
  return (
    <>
      <TopBar title='REWARDS' showBackNav />
      <MainContainer>
        <div className='flex flex-col px-4 md:px-0 pt-[60px] pb-[70px]'>
          {reward?.image ? (
            <Image
              src={reward?.image}
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
              {reward?.name}
            </p>
            <span className='mt-3 text-xs text-gray-neutral-200'>
              {reward?.points} points
            </span>
          </div>
          <div className='p-4 border-t-0 border-gray-neutral-50 rounded-b-xl border-[1.5px]'>
            <p className='text-xs text-gray-neutral-200'>
              Terms and Conditions
            </p>
            <div
              className='pl-4 text-sm  text-soft-black-700 mt-[14px] [&>ul]:list-disc'
              dangerouslySetInnerHTML={{
                __html: reward?.termsAndConditions || ''
              }}
            ></div>
          </div>
        </div>
      </MainContainer>
      {user && reward && user?.points > reward?.points ? (
        <BottomAction isLoading={isRedeeming} onClick={redeem}>
          REDEEM
        </BottomAction>
      ) : null}

      {redeemResult ? (
        <Modal show={isShowingModal} onClose={toggleModal}>
          <SuccesIcon className='h-14 mx-auto text-[#A9D980]' />
          <span className='block mt-8 text-lg font-bold text-center text-soft-black-700'>
            SUCCESS
          </span>
          <p className='mt-3 text-sm font-bold text-center text-gray-neutral-500'>
            You just redeemed a reward.
          </p>
          <div className='flex justify-between gap-4 mt-8'>
            <span className='text-xs text-gray-neutral-200'>Reward</span>
            <div className='flex flex-col items-end'>
              <p className='text-sm text-gray-neutral-500'>
                {redeemResult?.reward.name}
              </p>
              <time className='mt-1 leading-none text-xxs text-gray-neutral-200'>
                Valid until {formatDate(redeemResult.reward.expiryDate)}
              </time>
            </div>
          </div>
          <div className='flex justify-between gap-4 mt-4'>
            <span className='text-xs text-gray-neutral-200'>Total</span>
            <span className='text-sm text-gray-neutral-500 '>
              {redeemResult.reward.points} points
            </span>
          </div>
          <hr className='my-4' />
          <div className='flex justify-between text-sm font-bold text-soft-black-700'>
            <span>BALANCE</span>
            <span>{redeemResult.user.points} POINTS</span>
          </div>
          <Button
            variant='primary'
            className='mt-8'
            onClick={() =>
              router.push(`/my-rewards/${redeemResult.reward._id}`)
            }
          >
            VIEW REWARD
          </Button>
          <Button className='mt-3 font-bold' onClick={toggleModal}>
            DONE
          </Button>
        </Modal>
      ) : null}
    </>
  )
}

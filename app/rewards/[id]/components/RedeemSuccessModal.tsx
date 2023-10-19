import React from 'react'
import Modal from '@/app/shared/components/Modal'
import Button from '@/app/shared/components/Button'
import SuccesIcon from '@/app/shared/components/icons/SuccessIcon'
import { addCommas } from '@/app/shared/utils/addCommas'
import CoinIcon from '@/app/shared/components/icons/CoinIcon'

type RedeemSuccessModalType = {
  redeemResult: any
  onViewRewardClick: () => void
  onDoneClick: () => void
}

export default function RedeemSuccessModal({
  redeemResult,
  onViewRewardClick,
  onDoneClick
}: RedeemSuccessModalType) {
  return (
    <Modal show className='pt-[60px]'>
      <SuccesIcon className='h-14 mx-auto text-[#A9D980]' />
      <span className='block mt-6 text-xl text-center text-soft-black-700'>
        Success
      </span>
      <p className='mt-2 text-xs text-center text-soft-black-400'>
        You just redeemed a reward.
      </p>
      <div className='flex justify-between gap-4 mt-8'>
        <span className='text-xxs text-soft-black-400 tracking-[0.2px]'>
          REWARD
        </span>
        <div className='flex flex-col items-end'>
          <p className='text-sm text-soft-black-700'>
            {redeemResult?.reward.name}
          </p>
          {/* <time className='mt-1 leading-none text-xxs text-gray-neutral-200'>
            Valid until {utcToLocalMMMDYYYY(redeemResult?.reward.expiryDate)}
          </time> */}
        </div>
      </div>
      <div className='flex justify-between gap-4 mt-4'>
        <span className='text-xxs text-soft-black-400 tracking-[0.2px]'>
          TOTAL
        </span>
        <span className='text-sm text-soft-black-700'>
          {addCommas(redeemResult?.reward.points)} points
        </span>
      </div>
      <hr className='my-4' />
      <div className='flex justify-between '>
        <span className='text-xxs text-soft-black-400 tracking-[0.2px]'>
          POINTS BALANCE
        </span>
        <div className='flex items-center gap-1 mt-1'>
          <CoinIcon />
          <p className='text-sm font-bold grow'>
            {addCommas(redeemResult?.user.points)}
          </p>
        </div>
      </div>
      <Button className='mt-8' onClick={onViewRewardClick}>
        View reward
      </Button>
      <Button className='mt-3 font-bold' variant='ghost' onClick={onDoneClick}>
        Done
      </Button>
    </Modal>
  )
}

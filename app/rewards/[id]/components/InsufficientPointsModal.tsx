import React from 'react'
import Button from '@/app/shared/components/Button'
import Modal from '@/app/shared/components/Modal'

type ErrorModalType = {
  onClick: () => void
}

export default function InsufficientPointsModal({ onClick }: ErrorModalType) {
  return (
    <Modal show centered className='py-[60px]'>
      <h3 className='text-xl leading-normal text-center text-soft-black-700'>
        You don’t have enough points to redeem this reward.
      </h3>
      <p className='mt-2 text-xs text-soft-black-400'>
        You can earn more points by making a Sunnies purchase.
      </p>
      <Button onClick={onClick} className='mt-6'>
        Got it
      </Button>
    </Modal>
  )
}

import React from 'react'
import Modal from './Modal'
import Button from './Button'

type ErrorModalType = {
  show: boolean
  title: string
  body?: string
  confirmBtnText?: string
  onConfirmClick: () => void
  onCancelClick: () => void
}

export default function ConfirmationModal({
  show,
  title,
  body,
  confirmBtnText,
  onConfirmClick,
  onCancelClick
}: ErrorModalType) {
  return (
    <Modal show={show} centered className='pt-10 pb-4'>
      <h3 className='text-lg font-bold text-center text-soft-black-700'>
        {title}
      </h3>
      <p className='px-4 mt-3 text-sm text-center text-gray-neutral-500'>
        {body}
      </p>
      <Button onClick={onConfirmClick} className='mt-6'>
        {confirmBtnText ? confirmBtnText : 'CONFIRM'}
      </Button>
      <Button onClick={onCancelClick} className='mt-4'>
        CANCEL
      </Button>
    </Modal>
  )
}

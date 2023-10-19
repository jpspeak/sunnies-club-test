import React from 'react'
import Modal from './Modal'

type ErrorModalType = {
  show: boolean
  onOutsideClick: () => void
}

export default function TextCopiedModal({
  show,
  onOutsideClick
}: ErrorModalType) {
  return (
    <Modal
      show={show}
      centered
      transparent
      widthMaxContent
      onOutsideClick={onOutsideClick}
      className='p-4 text-sm font-medium bg-gray-neutral-100'
    >
      <span className='text-gray-neutral-400'>Copied!</span>
    </Modal>
  )
}

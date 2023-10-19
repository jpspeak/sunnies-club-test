import React from 'react'
import Modal from './Modal'
import Button from './Button'

type ErrorModalType = {
  title: string
  body?: string
  onOkayClick: () => void
}

export default function ErrorModal({
  title,
  body,
  onOkayClick
}: ErrorModalType) {
  return (
    <Modal show centered>
      <h3 className='text-lg font-bold text-center text-soft-black-700'>
        {title}
      </h3>
      <p>{body}</p>
      <Button onClick={onOkayClick} className='mt-6'>
        Okay
      </Button>
    </Modal>
  )
}

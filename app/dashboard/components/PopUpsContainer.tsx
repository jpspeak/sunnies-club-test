'use client'

import React, { useState } from 'react'
import Modal from '@/app/shared/components/Modal'
import popUpService from '@/app/shared/services/api/popUpService'
import Image from 'next/image'
import useSWR from 'swr'
import { X } from 'lucide-react'
import useAuthStore from '@/app/shared/hooks/useAuthStore'

function PopUpModal({ url, image }: { url: string; image: string }) {
  const [show, setShow] = useState(true)

  const handleCloseClick = () => {
    setShow(false)
  }

  return (
    <Modal
      show={show}
      centered
      onOutsideClick={handleCloseClick}
      className='p-0 rounded-none'
    >
      <div className='relative'>
        <button
          onClick={handleCloseClick}
          className='absolute p-1 rounded-full bg-black/5 right-1 top-1'
        >
          <X className='h-[14px] w-[14px]' />
        </button>
        <a href={url} target='_blank' rel='noreferrer'>
          <Image
            alt={url}
            src={image}
            height={0}
            width={0}
            quality={100}
            className='w-full max-h-[600px] object-cover'
          />
        </a>
      </div>
    </Modal>
  )
}

function PopUpsContainer() {
  const { isAuthenticated } = useAuthStore((state) => state)

  const { data: popUps, error: errorPopUps } = useSWR(`/pop-ups`, () =>
    popUpService.getPopUps().then((res) => res.data)
  )

  if (!isAuthenticated || errorPopUps) return null
  return popUps?.map((popUp) => (
    <PopUpModal key={popUp.url} url={popUp.url} image={popUp.image} />
  ))
}

export default PopUpsContainer

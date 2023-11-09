import ButtonLink from '@/app/shared/components/ButtonLink'
import SunniesGuaranteeIcon from '@/app/shared/components/icons/SunniesGuaranteeIcon'
import Image from 'next/image'
import React from 'react'

export default function SunniesGuarantee() {
  return (
    <div className='p-4 text-white shadow-md rounded-xl bg-[#263074] mt-4'>
      <h3 className='text-xl'>Sunnies Guarantee</h3>
      <SunniesGuaranteeIcon className='mx-auto mt-6' />
      <p className='mt-4 text-center text-xxs'>
        Happy with your purchase? If not, you’re welcome to change your Sunnies
        Studios product within 90 days of purchase.
      </p>
      <ButtonLink
        href='https://ph.sunniesstudios.com/pages/sunnies-guarantee'
        className='mt-4 text-[#263074] bg-white'
        target='_blank'
      >
        Learn more
      </ButtonLink>
    </div>
  )
}

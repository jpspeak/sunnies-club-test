'use client'

import React from 'react'
import ExclusiveBenefitsList from './ExclusiveBenefitsList'
import SCCoinIcon from '@/app/shared/components/icons/SCCoinIcon'
import EventCalendarIcon from '@/app/shared/components/icons/EventCalendarIcon'
import BirthdayCakeIcon from '@/app/shared/components/icons/BirthdayCakeIcon'
// import ButtonLink from '@/app/shared/components/ButtonLink'

export default function ExclusiveBenefitsContainer() {
  const exclusiveBenifs = [
    {
      label: 'Earn 1 point for every P100 spent',
      icon: SCCoinIcon
    },
    {
      label: 'Get invited to exclusive Sunnies events',
      icon: EventCalendarIcon
    },
    {
      label: 'Double points on your birthday​',
      icon: BirthdayCakeIcon
    }
  ]

  return (
    <div className='p-4 mt-4 bg-white shadow-md rounded-xl'>
      <h2 className='text-xl'>Your exclusive benefits</h2>
      <ExclusiveBenefitsList
        exclusiveBenifs={exclusiveBenifs}
        className='mt-4'
      />
      {/* <ButtonLink href='' variant='outline' className='mt-6 text-red-700'>
        See all benefits
      </ButtonLink> */}
    </div>
  )
}

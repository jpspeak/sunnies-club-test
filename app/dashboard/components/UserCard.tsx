/* eslint-disable import/no-extraneous-dependencies */
'use client'

import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import useUser from '@/app/shared/hooks/useUser'
import LogoIcon from '@/app/shared/components/icons/LogoIcon'
import RedeemIcon from '@/app/shared/components/icons/RedeemIcon'
import Link from 'next/link'
import AccountIcon from '@/app/shared/components/icons/AccountIcon'
import CoinIcon from '@/app/shared/components/icons/CoinIcon'
import utcToLocalDDMMYY from '@/app/shared/utils/utcToLocalDDMMYY'
import { addCommas } from '@/app/shared/utils/addCommas'

export default function UserCard() {
  const { user } = useUser()

  const fullname = user ? (
    user?.firstname.toUpperCase() + ' ' + user?.lastname.toUpperCase()
  ) : (
    <Skeleton width={150} />
  )

  const userPoints = user ? (
    addCommas(user?.points)
  ) : (
    <Skeleton height={14} width={30} />
  )

  const memberSince = user ? (
    utcToLocalDDMMYY(user.createdAt)
  ) : (
    <Skeleton width={80} />
  )

  const links = [
    {
      label: 'My Rewards',
      href: '/account/my-rewards',
      icon: RedeemIcon
    },
    {
      label: 'My Profile',
      href: '/account/profile-details',
      icon: AccountIcon
    }
  ]

  return (
    <div className='bg-white shadow-md rounded-xl'>
      <div className='px-4 pt-4'>
        <LogoIcon className='h-8 text-red-700' />
      </div>
      <p className='mt-[32px] px-4 text-sm font-bold'>{fullname}</p>
      <div className='grid grid-cols-2 gap-1 px-4 mt-4'>
        <div className='flex flex-col'>
          <p className='text-xxs text-soft-black-400'>POINTS BALANCE</p>
          <div className='flex items-center gap-1 mt-1'>
            <CoinIcon />
            <p className='text-sm font-bold grow'>{userPoints}</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='text-xxs text-soft-black-400'>MEMBER SINCE</p>
          <p className='mt-1 text-sm font-bold'>{memberSince}</p>
        </div>
      </div>
      <ul className='grid grid-cols-2 mt-4'>
        {links.map((link) => {
          const Icon = link.icon
          return (
            <li
              key={link.href}
              className='[&:not(:last-child)]:border-r-[1px] border-t-[1px] border-blue-50'
            >
              <Link
                href={link.href}
                className='flex items-center justify-center p-3 text-xs text-blue-500 gap-[6px]'
              >
                <Icon /> <span>{link.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

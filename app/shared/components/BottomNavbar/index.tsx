'use client'

import React from 'react'
import useNotifications from '@/app/shared/hooks/useNotifications'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NotifBadge from '../NotifBadge'
import AccountIcon from '../icons/AccountIcon'
import HomeIcon from '@/app/shared/components/icons/HomeIcon'
import RedeemIcon from '@/app/shared/components/icons/RedeemIcon'
import InboxIcon from '@/app/shared/components/icons/InboxIcon'

export default function BottomNavbar() {
  const { hasUnread } = useNotifications()
  const pathname = usePathname()
  const navs = [
    { label: 'Home', pathname: '/dashboard', icon: HomeIcon },
    { label: 'Rewards', pathname: '/rewards', icon: RedeemIcon },
    { label: 'Inbox', pathname: '/inbox', icon: InboxIcon, hasNotif: true },
    { label: 'Account', pathname: '/account', icon: AccountIcon }
  ]

  return (
    <nav className='fixed bottom-0 z-[1] flex w-full bg-white border-t border-gray-neutral-50 justify-evenly max-w-md left-1/2 -translate-x-1/2 md:border-x'>
      {navs.map((nav) => {
        const Icon = nav.icon
        const isActive = pathname.includes(nav.pathname)
        return (
          <Link
            key={nav.label}
            href={nav.pathname}
            className={`text-xxs w-full flex flex-col items-center py-4 relative ${
              isActive ? 'text-red-700' : 'text-gray-neutral-200'
            }`}
          >
            <div className='relative'>
              <Icon />
              {nav.hasNotif && hasUnread ? (
                <NotifBadge className='absolute top-[2px] -right-[2px]' />
              ) : null}
            </div>
            <span className='pt-[6px] leading-none'>{nav.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

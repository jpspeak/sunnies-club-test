'use client'

import useNotifications from '@/app/hooks/useNotifications'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import NotifBadge from '../NotifBadge'
import HomeIcon from '../Icons/HomeIcon'
import RedeemIcon from '../Icons/RedeemIcon'
import InboxIcon from '../Icons/InboxIcon'
import AccountIcon from '../Icons/AccountIcon'

export default function BottomNavbar() {
  const { hasUnread, mutateNotifs } = useNotifications()
  const pathname = usePathname()
  const navs = [
    { label: 'Home', pathname: '/', icon: HomeIcon },
    { label: 'Redeem', pathname: '/rewards', icon: RedeemIcon },
    { label: 'Inbox', pathname: '/inbox', icon: InboxIcon, hasNotif: true },
    { label: 'Account', pathname: '/account', icon: AccountIcon }
  ]
  useEffect(() => {
    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/notifications/stream`,
      {
        withCredentials: true
      }
    )

    eventSource.addEventListener('message', (event) => {
      const eventData = JSON.parse(event.data)
      console.log(eventData)
      mutateNotifs()
    })
    return () => {
      eventSource.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav className='fixed bottom-0 flex w-full bg-white border-t border-neutral justify-evenly md:max-w-sm md:left-1/2 md:-translate-x-1/2 md:border-x'>
      {navs.map((nav) => {
        const Icon = nav.icon
        const isActive = pathname === nav.pathname
        return (
          <Link
            key={nav.label}
            href={nav.pathname}
            className={`text-xxs w-full flex flex-col items-center py-4 relative ${
              isActive ? 'text-primary' : 'text-neutral'
            }`}
          >
            <Icon />
            <span className='pt-[6px] leading-none'>{nav.label}</span>
            {nav.hasNotif && hasUnread ? (
              <NotifBadge className='absolute -translate-y-1/2 top-1/2 left-4' />
            ) : null}
          </Link>
        )
      })}
    </nav>
  )
}

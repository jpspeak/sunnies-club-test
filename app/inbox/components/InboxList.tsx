'use client'

import React, { useEffect } from 'react'
import useNotifications from '@/app/hooks/useNotifications'
import formatDate from '@/app/utils/formatDate'
import NotifBadge from '@/app/components/ui/NotifBadge'
import Link from 'next/link'
import timeAgo from '@/app/utils/timeAgo'
import { DateInput } from 'javascript-time-ago'

export default function InboxList() {
  const { notifs, isLoadingNotifs, errorNotifs } = useNotifications()

  if (errorNotifs) return <>Error</>
  if (isLoadingNotifs) return <>Loading...</>
  return (
    <ul className='flex flex-col gap-2'>
      {notifs?.map((notif) => (
        <li
          key={notif._id}
          className='relative py-4 border-b-[1px] border-gray-neutral-50'
        >
          <Link href={`/inbox/${notif._id}`}>
            <time className='block text-xs leading-none text-gray-neutral-200'>
              {timeAgo(new Date(notif.createdAt))}
            </time>
            <div className='mt-4'>
              <p className='text-sm truncate text-soft-black-700'>
                {notif.title}
              </p>
              <p className='truncate'>{notif.body}</p>
            </div>
            {!notif.isRead ? (
              <NotifBadge className='absolute -top-0.5 -left-0.5' />
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  )
}

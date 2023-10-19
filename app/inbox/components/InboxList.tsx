'use client'

import React from 'react'
import timeAgo from '@/app/shared/utils/timeAgo'
import 'react-loading-skeleton/dist/skeleton.css'
import { Notifications } from '@/app/shared/services/api/notificationService'
import { twMerge } from 'tailwind-merge'

export default function InboxList({ notifs }: { notifs?: Notifications }) {
  return (
    <ul className='flex flex-col'>
      {notifs?.map((notif) => (
        <li
          key={notif._id}
          className={twMerge(
            'relative p-4 border-b-[1px] border-soft-black-100',
            !notif.isRead && 'bg-red-50'
          )}
        >
          <div className='flex items-center gap-1'>
            {!notif.isRead && (
              <div className='h-[6px] w-[6px] rounded-full bg-red-700' />
            )}
            <time
              className={twMerge(
                'block text-xs leading-none text-soft-black-400',
                !notif.isRead && 'text-soft-black-700 font-bold'
              )}
            >
              {timeAgo(new Date(notif.createdAt))}
            </time>
          </div>
          <div className='mt-4'>
            <p className='text-sm leading-normal text-soft-black-700'>
              {notif.title}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

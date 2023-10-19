'use client'

import React, { useEffect } from 'react'
import useNotifications from '@/app/shared/hooks/useNotifications'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import InboxList from './InboxList'
import notificationService from '@/app/shared/services/api/notificationService'
import FetchError from '@/app/shared/components/FetchError'

export default function InboxContainer() {
  const { notifs, isLoadingNotifs, errorNotifs } = useNotifications()
  const { mutateNotifs } = useNotifications()
  useEffect(() => {
    const markAsRead = async () => {
      try {
        await notificationService.readAllNotif()
        mutateNotifs()
      } catch (error) {
        console.log(error)
      }
    }
    return () => {
      markAsRead()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (errorNotifs) return <FetchError />
  if (isLoadingNotifs) return <Skeleton count={3} className='h-[50px]' />
  return <InboxList notifs={notifs} />
}

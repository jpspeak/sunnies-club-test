'use client'

import MainContainer from '@/app/components/ui/MainContainer'
import TopBar from '@/app/components/ui/TopBar'
import useNotifications from '@/app/hooks/useNotifications'
import notificationService, {
  NotificationItem
} from '@/app/services/api/notificationService'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import useSWR from 'swr'

export default function InboxItem() {
  const { mutateNotifs } = useNotifications()
  const { id: notifId } = useParams()
  const { data, isLoading, error } = useSWR<NotificationItem>(
    `notifications/${notifId}`,
    () => notificationService.getNotification(notifId).then((res) => res.data)
  )
  useEffect(() => {
    const markAsRead = async () => {
      try {
        await notificationService.readNotif(notifId)
        mutateNotifs()
      } catch (error) {
        console.log(error)
      }
    }
    markAsRead()
  }, [])

  if (error) return <>Error</>
  if (isLoading) return <>Loading...</>
  return (
    <>
      <TopBar title='Inbox' showBackNav />
      <MainContainer>
        <div className='flex flex-col gap-1 px-4 mt-4 md:px-0'>
          <p>{data?.title}</p>
          <p className='text-sm'>{data?.body}</p>
        </div>
      </MainContainer>
    </>
  )
}

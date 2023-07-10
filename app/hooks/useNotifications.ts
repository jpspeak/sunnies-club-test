import useSWR from 'swr'
import notificationService, {
  NotificationItem
} from '../services/api/notificationService'

const useNotifications = () => {
  const {
    data: notifs,
    error: errorNotifs,
    isLoading: isLoadingNotifs,
    mutate: mutateNotifs
  } = useSWR<NotificationItem[]>('notifications', () =>
    notificationService.getNotifications().then((res) => res.data)
  )
  const hasUnread = notifs?.some((notif) => !notif.isRead)

  return { notifs, isLoadingNotifs, errorNotifs, mutateNotifs, hasUnread }
}
export default useNotifications

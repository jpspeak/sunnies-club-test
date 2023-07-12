import apiClient from './apiClient'

export type NotificationItem = {
  _id: string
  title: string
  body: string
  isRead: boolean
  createdAt: string
}

type NotificationList = NotificationItem[]

const getNotifications = () => apiClient.get<NotificationList>('/notifications')
const getNotification = (id: string) =>
  apiClient.get<NotificationItem>(`/notifications/${id}`)
const readNotif = (id: string) =>
  apiClient.post<NotificationItem>(`/notifications/${id}/read`)

const notificationService = { getNotifications, getNotification, readNotif }
export default notificationService

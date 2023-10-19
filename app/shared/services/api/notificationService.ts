import apiClient from './apiClient'

export type Notification = {
  _id: string
  title: string
  body: string
  isRead: boolean
  createdAt: string
}

export type Notifications = Notification[]

const getNotifications = () => apiClient.get<Notifications>('/notifications')

const getNotification = (id: string) =>
  apiClient.get<Notification>(`/notifications/${id}`)

const readNotif = (id: string) =>
  apiClient.post<Notification>(`/notifications/${id}/read`)

const readAllNotif = () => apiClient.post<Notification>(`/notifications/read`)

const notificationService = {
  getNotifications,
  getNotification,
  readNotif,
  readAllNotif
}

export default notificationService

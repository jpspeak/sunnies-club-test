'use client'

import useFPixel from '../shared/hooks/useFPixel'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  useFPixel({ eventName: 'PageView' })
  return children
}

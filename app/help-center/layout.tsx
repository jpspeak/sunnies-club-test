'use client'

import useFPixel from '../shared/hooks/useFPixel'

export default function HelpCenterLayout({
  children
}: {
  children: React.ReactNode
}) {
  useFPixel({ eventName: 'PageView' })
  return children
}

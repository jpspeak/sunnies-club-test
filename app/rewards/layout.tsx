'use client'

import useFPixel from '../shared/hooks/useFPixel'

export default function RewardsLayout({
  children
}: {
  children: React.ReactNode
}) {
  useFPixel({ eventName: 'PageView' })
  return children
}

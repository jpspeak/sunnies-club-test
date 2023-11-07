'use client'

import useFPixel from '@/app/shared/hooks/useFPixel'

export default function FAQsLayout({
  children
}: {
  children: React.ReactNode
}) {
  useFPixel({ eventName: 'PageView' })
  return children
}

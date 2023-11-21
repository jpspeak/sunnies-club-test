'use client'

import useFPixel from '@/app/shared/hooks/useFPixel'

export default function VerifyLayout({
  children
}: {
  children: React.ReactNode
}) {
  useFPixel({ eventName: 'Lead' })
  return children
}

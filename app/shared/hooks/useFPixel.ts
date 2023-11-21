'use client'

import { useEffect } from 'react'

type EventName = 'PageView' | 'Lead'

const useFPixel = ({ eventName }: { eventName: EventName }) => {
  useEffect(() => {
    window.fbq('track', eventName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useFPixel

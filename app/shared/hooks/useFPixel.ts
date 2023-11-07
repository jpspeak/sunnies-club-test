'use client'

import { useEffect } from 'react'

type EventName = 'PageView'

const useFPixel = ({ eventName }: { eventName: EventName }) => {
  useEffect(() => {
    // window.fbq('track', eventName)
  }, [])
}

export default useFPixel

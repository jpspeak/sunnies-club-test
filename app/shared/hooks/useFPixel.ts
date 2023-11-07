'use client'

import { useEffect } from 'react'

type EventName = 'PageView'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useFPixel = ({ eventName }: { eventName: EventName }) => {
  useEffect(() => {
    // window.fbq('track', eventName)
  }, [])
}

export default useFPixel

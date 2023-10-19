'use client'

import { useEffect } from 'react'
import { EventSourcePolyfill } from 'event-source-polyfill'
import authTokenService from '../services/authTokenService'
import { useSWRConfig } from 'swr'
import sseService from '../services/api/sseService'

export default function SSE() {
  const { mutate } = useSWRConfig()
  useEffect(() => {
    const eventSource = new EventSourcePolyfill(sseService.sseUrl(), {
      headers: {
        Authorization: `Bearer ${authTokenService.getAccessToken()}`
      },
      heartbeatTimeout: 120000
    })
    eventSource.addEventListener('message', (event) => {
      const { message } = JSON.parse(event.data)
      console.log(message)
      if (message === 'Earned Points' || message === 'Redeemed Points') {
        mutate('/transactions?limit=10')
        mutate('/auth/user')
        mutate('/notifications')
      }
    })
    return () => {
      eventSource.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return null
}

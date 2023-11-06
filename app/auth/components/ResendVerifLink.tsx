import React, { useEffect } from 'react'
import { useState } from 'react'
import userService from '@/app/shared/services/api/userService'
import { useLocalStorage } from '@uidotdev/usehooks'
import moment from 'moment-timezone'
import { toast } from 'react-toastify'
import { useSearchParams } from 'next/navigation'

export default function ResendVerifLink() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [resent, setResent] = useState<boolean>(false)
  const [countdown, setCountdown] = useState(0)
  const [tokenDateCreated, saveTokenDateCreated] = useLocalStorage(
    'tokenDateCreated',
    ''
  )
  const searchParams = useSearchParams()

  useEffect(() => {
    if (tokenDateCreated) {
      const timeDiffInSeconds = moment()
        .utc()
        .diff(moment(tokenDateCreated), 'seconds')

      const retryAfterSeconds = 60

      if (timeDiffInSeconds < retryAfterSeconds) {
        setCountdown(retryAfterSeconds - timeDiffInSeconds)

        const countdownInterval = window.setInterval(() => {
          setCountdown((prevState) => prevState - 1)
        }, 1000)

        return () => clearInterval(countdownInterval)
      } else {
        setCountdown(0)
      }
    }
  }, [tokenDateCreated])

  const handleResendClick = async () => {
    const email = searchParams.get('email') || ''
    setIsSubmitting(true)
    try {
      const formdata = { email }
      await userService.sendAccountVerification(formdata)
      setResent(true)
      saveTokenDateCreated(moment().utc().toISOString())
      setIsSubmitting(false)
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'An error occurred.', {
        toastId: 'error'
      })
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setResent(false)
    }, 1000)
  }, [resent])

  const renderText = () => {
    if (resent) return 'Sent!'
    if (countdown > 0) return `Resend in ${countdown}s`
    if (isSubmitting) return 'Resending'
    return 'Resend'
  }

  const disable = resent || isSubmitting || countdown > 0

  return (
    <button
      type='button'
      onClick={handleResendClick}
      disabled={disable}
      className={`${!disable && 'underline'}`}
    >
      {renderText()}
    </button>
  )
}

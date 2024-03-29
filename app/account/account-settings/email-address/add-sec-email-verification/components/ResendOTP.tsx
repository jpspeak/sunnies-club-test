import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import userService from '@/app/shared/services/api/userService'
import { useLocalStorage } from '@uidotdev/usehooks'
import moment from 'moment-timezone'
import { toast } from 'react-toastify'

export default function ResendOTP() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [resent, setResent] = useState<boolean>(false)
  const [countdown, setCountdown] = useState(0)
  const searchParams = useSearchParams()
  const [otpDateCreated, saveOTPDateCreated] = useLocalStorage(
    'otpDateCreated',
    ''
  )

  useEffect(() => {
    if (otpDateCreated) {
      const timeDiffInSeconds = moment()
        .utc()
        .diff(moment(otpDateCreated), 'seconds')
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
  }, [otpDateCreated])

  const handleResendClick = async () => {
    const secondaryEmail = searchParams.get('secondaryEmail') || ''
    setIsSubmitting(true)
    try {
      const formdata = { secondaryEmail }
      await userService.sendSecEmailVerification(formdata)
      setResent(true)
      saveOTPDateCreated(moment().utc().toISOString())
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
      className={`${!disable && 'underline'} ${
        disable ? 'text-soft-black-100' : 'text-soft-black-400'
      } `}
    >
      {renderText()}
    </button>
  )
}

'use client'

import React, { FormEvent, useState } from 'react'
import Button from '@/app/shared/components/Button'
import OTPInput from '@/app/shared/components/OTPInput'
import { useRouter, useSearchParams } from 'next/navigation'
import userService from '@/app/shared/services/api/userService'
import BottomBar from '@/app/shared/components/BottomBar'
import { toast } from 'react-toastify'
import ResendOTP from './ResendOTP'
import FormHeaderTwo from '@/app/shared/components/FormHeaderTwo'

export default function VerificationForm() {
  const [otp, setOTP] = useState('')

  const searchParams = useSearchParams()

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const router = useRouter()

  const handleOTPInputChange = (value: string) => {
    setOTP(value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsSubmitting(true)

    const secondaryEmail = searchParams.get('secondaryEmail') || ''

    const formdata = { otp, secondaryEmail }
    try {
      const { data } = await userService.addSecEmail(formdata)
      router.back()
      toast.success(data?.message)
      setIsSubmitting(false)
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'An error occurred.', {
        toastId: 'error'
      })
      setIsSubmitting(false)
      console.error(error)
    }
  }
  return (
    <form onSubmit={handleSubmit} className='mt-4'>
      <FormHeaderTwo
        heading='OTP Verification'
        subheading='Enter the OTP sent to your email address.'
      />
      <OTPInput onChange={handleOTPInputChange} containerClass='mt-[40px]' />
      <p className='mt-6 text-sm text-center text-soft-black-400'>
        Didn&apos;t receive the OTP? <ResendOTP />
      </p>
      <BottomBar noShadow>
        <Button type='submit' isLoading={isSubmitting}>
          Verify
        </Button>
      </BottomBar>
    </form>
  )
}

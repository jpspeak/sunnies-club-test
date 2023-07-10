'use client'

import Alert from '@/app/components/ui/Alert'
import TopBar from '@/app/components/ui/TopBar'
import BottomAction from '@/app/components/ui/BottomAction'
import Input from '@/app/components/ui/Input'
import MainContainer from '@/app/components/ui/MainContainer'
import emailVerficationService from '@/app/services/api/emailVerficationService'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function Add() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [sendOTPError, setSendOTPError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm<{ email: string }>()

  const submit: SubmitHandler<{ email: string }> = async (formdata) => {
    setIsSubmitting(true)
    try {
      await emailVerficationService.sendOTP(formdata)
      setIsSubmitting(false)
      router.push('/account/account-settings/email-address/add/verify')
    } catch (error: any) {
      setSendOTPError(error.response?.data?.message || 'An error occurred.')
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <TopBar title='Add email address' showBackNav />
      <MainContainer>
        <div className='px-4 md:px-0'>
          <h1 className=' text-2xl'>Add secondary email</h1>
          <h2 className='text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          {sendOTPError && <Alert className='mt-4'>{sendOTPError}</Alert>}
          <form onSubmit={handleSubmit(submit)} className='mt-6'>
            <Input
              type='email'
              label='Email address'
              error={errors.email?.message}
              {...register('email', { required: 'Email address is required' })}
            />
          </form>
        </div>
      </MainContainer>
      <BottomAction
        onClick={handleSubmit(submit)}
        disabled={!isDirty || !isValid || isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send verification'}
      </BottomAction>
    </>
  )
}

'use client'

import Button from '@/app/shared/components/Button'
import FormHeader from '@/app/shared/components/FormHeader'
import Input from '@/app/shared/components/form/Input'
import userService from '@/app/shared/services/api/userService'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

type FormDataType = {
  email: string
}

type ResetPasswordFormProps = {
  onEmailSent: () => void
}

const ResetPassVerifFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email address.')
    .email('Invalid email address')
})

export default function ResetPasswordForm({
  onEmailSent
}: ResetPasswordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataType>({
    resolver: zodResolver(ResetPassVerifFormSchema)
  })

  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const submit: SubmitHandler<FormDataType> = async (formdata) => {
    setIsSubmitting(true)
    try {
      await userService.resetPasswordVerification(formdata)
      onEmailSent()
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
    <>
      <FormHeader
        title='Reset password'
        body='To reset your password, enter the email address you use to sign in to Sunnies Club.'
        className='px-[60px] mt-[40px]'
      />
      <form
        onSubmit={handleSubmit(submit)}
        className='flex flex-col justify-between grow w-full px-4 pb-[40px] mt-[40px]'
      >
        <Input
          colorScheme='white'
          type='email'
          label='Email Address'
          error={errors.email?.message}
          {...register('email', { required: 'This field is required.' })}
        />
        <div className='grow' />
        <div className='flex flex-col'>
          <Button
            type='submit'
            variant='outline'
            isLoading={isSubmitting}
            className='mt-6 font-bold text-white'
          >
            Continue
          </Button>
          <Button
            type='button'
            variant='ghost'
            onClick={() => router.replace('/auth')}
            className='mt-[8px] font-bold text-white'
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  )
}

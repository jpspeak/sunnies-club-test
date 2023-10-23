'use client'

import React, { useState } from 'react'
import Button from '@/app/shared/components/Button'
import PasswordInput from '@/app/shared/components/form/PasswordInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import PasswordInputWithRequirements from '@/app/auth/components/PasswordInputWithRequirements'
import FormHeader from '@/app/shared/components/FormHeader'
import regex from '@/app/shared/constants/regex'
import { useRouter, useSearchParams } from 'next/navigation'
import userService from '@/app/shared/services/api/userService'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

type FormDataType = {
  password: string
  confirmPassword: string
}

type ResetPasswordFormProps = {
  onResetPassSuccessful: () => void
}

const ResetPassFormSchema = z
  .object({
    password: z
      .string()
      .min(1, 'Please enter your new password.')
      .regex(regex.password, 'Invalid password.'),
    confirmPassword: z.string().min(1, 'Please confirm your new password.')
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password does not match.'
  })

export default function ChangePasswordForm({
  onResetPassSuccessful
}: ResetPasswordFormProps) {
  const searchParams = useSearchParams()
  const token = searchParams.get('token') || ''

  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormDataType>({
    resolver: zodResolver(ResetPassFormSchema),
    defaultValues: {
      password: ''
    }
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const password = watch('password')

  const submit: SubmitHandler<Pick<FormDataType, 'password'>> = async (
    formdata
  ) => {
    setIsSubmitting(true)
    try {
      await userService.resetPassword({
        password: formdata.password,
        token
      })
      onResetPassSuccessful()
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
        body='Create your new password.'
        className='px-[60px] mt-[40px]'
      />
      <form
        onSubmit={handleSubmit(submit)}
        className='flex flex-col grow w-full mt-[40px] px-4 pb-[40px]'
      >
        <PasswordInputWithRequirements
          colorScheme='white'
          label='New Password'
          error={errors.password?.message}
          eye
          currentValue={password}
          {...register('password')}
        />
        <PasswordInput
          colorScheme='white'
          label='Confirm new password'
          error={errors.confirmPassword?.message}
          eye
          {...register('confirmPassword')}
          className='mt-3'
        />
        <div className='grow' />
        <div className='flex flex-col'>
          <Button
            type='submit'
            variant='outline'
            isLoading={isSubmitting}
            className='mt-6 text-white'
          >
            Reset
          </Button>
          <Button
            type='button'
            variant='ghost'
            className='mt-6 font-bold text-white'
            onClick={() => router.replace('/auth')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  )
}

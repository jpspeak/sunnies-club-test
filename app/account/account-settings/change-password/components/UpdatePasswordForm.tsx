'use client'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import BottomBar from '@/app/shared/components/BottomBar'
import Button from '@/app/shared/components/Button'
import userService from '@/app/shared/services/api/userService'
import { useRouter } from 'next/navigation'
import regex from '@/app/shared/constants/regex'
import PasswordInputWithRequirements from '@/app/auth/components/PasswordInputWithRequirements'
import PasswordInput from '@/app/shared/components/form/PasswordInput'
import FormHeaderTwo from '@/app/shared/components/FormHeaderTwo'

type FormDataType = z.infer<typeof UpdatePasswordFormSchema>

const UpdatePasswordFormSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: z
      .string()
      .min(1, 'Please enter your password.')
      .regex(regex.password, 'Invalid password.'),
    confirmPassword: z.string().min(1, 'Please confirm your password.')
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password does not match.'
  })

export default function UpdatePasswordForm() {
  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty }
  } = useForm<FormDataType>({
    resolver: zodResolver(UpdatePasswordFormSchema)
  })

  const newPassword = watch('newPassword')

  const submit: SubmitHandler<FormDataType> = async (formdata) => {
    setIsSubmitting(true)
    try {
      const { data } = await userService.updatePassword(formdata)
      router.replace('/account/account-settings/')
      toast.success(data?.message)
      setIsSubmitting(false)
      router.replace('/account/account-settings')
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'An error occurred.', {
        toastId: 'error'
      })
      reset()
      setIsSubmitting(false)
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className='flex flex-col w-full mt-4 grow'
    >
      <FormHeaderTwo
        heading='Change Password'
        subheading='Use a strong and unique password to protect your account.'
      />
      <PasswordInput
        label='CURRENT PASSWORD'
        error={errors.currentPassword?.message}
        eye
        {...register('currentPassword')}
        className='mt-[40px]'
      />
      <PasswordInputWithRequirements
        label='PASSWORD'
        error={errors.newPassword?.message}
        currentValue={newPassword}
        eye
        {...register('newPassword')}
        className='mt-3'
      />
      <PasswordInput
        label='RE-ENTER NEW PASSWORD'
        error={errors.confirmPassword?.message}
        eye
        {...register('confirmPassword')}
        className='mt-3'
      />
      <BottomBar noShadow>
        <Button
          type='submit'
          isLoading={isSubmitting}
          disabled={!isDirty}
          variant={!isDirty ? 'disabled' : 'solid'}
        >
          Save changes
        </Button>
      </BottomBar>
    </form>
  )
}

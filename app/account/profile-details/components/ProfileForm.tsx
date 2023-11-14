'use client'

import React, { useEffect } from 'react'
import Button from '@/app/shared/components/Button'
import Input from '@/app/shared/components/form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import useUser from '@/app/shared/hooks/useUser'
import userService from '@/app/shared/services/api/userService'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import regex from '@/app/shared/constants/regex'
import FormHeaderTwo from '@/app/shared/components/FormHeaderTwo'
import toHtmlDate from '@/app/shared/utils/toHtmlDate'
import BottomBar from '@/app/shared/components/BottomBar'
import { toast } from 'react-toastify'

type FormDataType = z.infer<typeof ProfileFormSchema>

const ProfileFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email address.')
    .email('Invalid email address'),
  firstname: z
    .string()
    .min(1, 'Please enter your first name.')
    .min(2, 'Too short.')
    .max(30, 'Too long.'),
  lastname: z
    .string()
    .min(1, 'Please enter your last name.')
    .min(2, 'Too short')
    .max(30, 'Too long'),
  birthdate: z.string().min(1, 'Please enter your birthday.'),
  mobileNumber: z
    .string()
    .min(1, 'Please enter your phone number.')
    .regex(regex.mobileNumberPh, 'Invalid mobile number.')
})

export default function ProfileForm() {
  const { user } = useUser()
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isDirty }
  } = useForm<FormDataType>({
    resolver: zodResolver(ProfileFormSchema)
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const submit: SubmitHandler<FormDataType> = async (formdata) => {
    setIsSubmitting(true)
    try {
      const { data } = await userService.updateProfile(formdata)
      toast.success(data?.message)
      reset({}, { keepValues: true })
      setIsSubmitting(false)
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'An error occurred.', {
        toastId: 'error'
      })
      setIsSubmitting(false)
      console.error(error)
    }
  }

  useEffect(() => {
    setValue('firstname', user?.firstname || '')
    setValue('lastname', user?.lastname || '')
    setValue('birthdate', user?.birthdate ? toHtmlDate(user?.birthdate) : '')
    setValue('mobileNumber', user?.mobileNumber || '')
    setValue('email', user?.email || '')
  }, [user, setValue])
  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col w-full mt-4'>
      <FormHeaderTwo
        heading='Personal Information'
        subheading='Complete your profile to receive exclusive offers.'
      />
      <Input
        label='First Name'
        error={errors.firstname?.message}
        {...register('firstname')}
        className='mt-[40px]'
      />
      <Input
        label='Last Name'
        error={errors.lastname?.message}
        {...register('lastname')}
        className='mt-3'
      />
      <Input
        type='date'
        label='Birthday'
        error={errors.birthdate?.message}
        readOnly
        {...register('birthdate')}
        className='mt-3'
      />
      <Input
        label='Phone number'
        error={errors.mobileNumber?.message}
        {...register('mobileNumber')}
        className='mt-3'
      />
      <Input
        label='Email address'
        error={errors.email?.message}
        readOnly
        {...register('email')}
        className='mt-3'
      />
      <BottomBar noShadow className='pb-[40px]'>
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

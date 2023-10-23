'use client'

import React, { forwardRef } from 'react'
import Input from '@/app/shared/components/form/Input'
import PasswordInput from '@/app/shared/components/form/PasswordInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import PasswordInputWithRequirements from '@/app/auth/components/PasswordInputWithRequirements'
import FormHeader from '@/app/shared/components/FormHeader'
import regex from '@/app/shared/constants/regex'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { useSignupStore } from '@/app/auth/store/signupStore'
import authService from '@/app/shared/services/api/authService'

type FormDataType = {
  email: string
  firstname: string
  lastname: string
  birthdate: string
  password: string
  confirmPassword: string
}

const SignupFormSchema = z
  .object({
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
    password: z
      .string()
      .min(1, 'Please enter your password.')
      .regex(regex.password, 'Invalid password.'),
    confirmPassword: z.string().min(1, 'Please confirm your password.')
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password does not match.'
  })

export default forwardRef<HTMLButtonElement, { containerClass?: string }>(
  function SignupForm({ containerClass }, submitButtonRef) {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm<FormDataType>({
      resolver: zodResolver(SignupFormSchema),
      defaultValues: {
        password: ''
      }
    })

    const { setIsSubmitting, setSignupSuccessful } = useSignupStore(
      (state) => state
    )

    const password = watch('password')

    const submit: SubmitHandler<FormDataType> = async (formdata) => {
      setIsSubmitting(true)
      try {
        await authService.signup(formdata)
        setSignupSuccessful()
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
      <div className={containerClass}>
        <FormHeader
          title='Join the club'
          body='Create an account to start earning points and unlock exclusive
              access to launches and events.'
          className='px-[44px]'
        />
        <form
          onSubmit={handleSubmit(submit)}
          className='flex flex-col w-full mt-[40px]'
        >
          <Input
            colorScheme='white'
            label='First Name'
            error={errors.firstname?.message}
            {...register('firstname')}
          />
          <Input
            colorScheme='white'
            label='Last Name'
            error={errors.lastname?.message}
            {...register('lastname')}
            className='mt-3'
          />
          <Input
            type='date'
            colorScheme='white'
            label='Date of Birth'
            error={errors.birthdate?.message}
            {...register('birthdate')}
            className='mt-3'
          />
          <Input
            colorScheme='white'
            type='email'
            label='Email Address'
            error={errors.email?.message}
            {...register('email')}
            className='mt-3'
          />
          <PasswordInputWithRequirements
            colorScheme='white'
            label='Password'
            error={errors.password?.message}
            currentValue={password}
            eye
            {...register('password')}
            className='mt-3'
          />
          <PasswordInput
            colorScheme='white'
            label='Confirm password'
            error={errors.confirmPassword?.message}
            eye
            {...register('confirmPassword')}
            className='mt-3'
          />
          <button ref={submitButtonRef} type='submit' className='hidden' />
        </form>
      </div>
    )
  }
)

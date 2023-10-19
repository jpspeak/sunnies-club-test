'use client'

import React, { forwardRef } from 'react'
import Input from '@/app/shared/components/form/Input'
import PasswordInput from '@/app/shared/components/form/PasswordInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import FormHeader from '@/app/shared/components/FormHeader'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import authService from '@/app/shared/services/api/authService'
import { useSigninStore } from '../store/signinStore'
import Link from 'next/link'
import useAuthStore from '@/app/shared/hooks/useAuthStore'
import authTokenService from '@/app/shared/services/authTokenService'

type FormDataType = {
  email: string
  password: string
}

const SigninFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email address.')
    .email('Invalid email address'),
  password: z.string().min(1, 'Please enter your password.')
})

export default forwardRef<HTMLButtonElement>(
  function SigninForm(props, submitButtonRef) {
    const signin = useAuthStore((state) => state.signin)

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm<FormDataType>({
      resolver: zodResolver(SigninFormSchema)
    })

    const { setIsSubmitting } = useSigninStore((state) => state)

    const submit: SubmitHandler<FormDataType> = async (formdata) => {
      setIsSubmitting(true)
      try {
        const { data } = await authService.signin(formdata)
        signin()
        authTokenService.setAccessToken(data.accessToken)
        authTokenService.setRefreshToken(data.refreshToken)
        setIsSubmitting(false)
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
      <>
        <FormHeader
          title='Join the club'
          body='Create an account to start earning points and unlock exclusive
              access to launches and events.'
          className='px-[44px] mt-[40px]'
        />
        <form
          onSubmit={handleSubmit(submit)}
          className='flex flex-col w-full mt-[40px]'
        >
          <Input
            colorScheme='white'
            type='email'
            label='Email Address'
            error={errors.email?.message}
            {...register('email')}
          />
          <PasswordInput
            colorScheme='white'
            label='Password'
            error={errors.password?.message}
            eye={true}
            {...register('password')}
            className='mt-3'
          />
          <button ref={submitButtonRef} type='submit' className='hidden' />
        </form>
        <div className='flex justify-center mt-6'>
          <Link
            href='/reset-password-verification'
            className='text-sm text-white underline'
          >
            Forgot your password?
          </Link>
        </div>
      </>
    )
  }
)

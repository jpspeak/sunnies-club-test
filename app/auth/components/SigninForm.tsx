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
import Checkbox from '@/app/shared/components/form/Checkbox'
import { useLocalStorage } from 'usehooks-ts'

type FormDataType = z.infer<typeof SigninFormSchema>

const SigninFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email address.')
    .email('Invalid email address'),
  password: z.string().min(1, 'Please enter your password.'),
  rememberMe: z.boolean()
})

export default forwardRef<HTMLButtonElement, { containerClass?: string }>(
  function SigninForm({ containerClass }, submitButtonRef) {
    const signin = useAuthStore((state) => state.signin)

    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
    const [_, setRememberMe] = useLocalStorage('rememberMe', false)

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
        authTokenService.setAccessToken(data.accessToken)
        authTokenService.setRefreshToken(data.refreshToken)
        setRememberMe(formdata.rememberMe)
        signin()
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
          <div className='flex items-center gap-2 mt-3 text-white'>
            <Checkbox id='rememberMe' {...register('rememberMe')} />
            <label htmlFor='rememberMe'>Remember me</label>
          </div>
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
      </div>
    )
  }
)

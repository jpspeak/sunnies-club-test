'use client'

import React, { forwardRef, useState } from 'react'
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
import userService from '@/app/shared/services/api/userService'
import moment from 'moment-timezone'
import { useRouter } from 'next/navigation'

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

    const [, setRememberMe] = useLocalStorage('rememberMe', false)

    const [, saveSentDate] = useLocalStorage('sentDate', '')

    const router = useRouter()

    const { setIsSubmitting } = useSigninStore((state) => state)
    const [, setResending] = useState(false)

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm<FormDataType>({
      resolver: zodResolver(SigninFormSchema)
    })

    const handleResendClick = async (email: string) => {
      setResending(true)
      try {
        await userService.sendAccountVerification({ email })
        saveSentDate(moment().utc().toISOString())
        setResending(false)
        router.push(`/auth/signup-successful?email=${email}`)
      } catch (error: any) {
        toast.error(error.response?.data?.message || 'An error occurred.', {
          toastId: 'error'
        })
        setResending(false)
      }
    }

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
        const unverified = error.response.status === 403
        toast.error(
          (
            <>
              <p>{error.response?.data?.message}</p>

              {unverified && (
                <>
                  <br />
                  <p>
                    Didn&apos;t receive the email?{' '}
                    <span
                      className='underline cursor-pointer'
                      onClick={() => handleResendClick(formdata.email)}
                    >
                      Resend
                    </span>
                  </p>
                </>
              )}
            </>
          ) || 'An error occurred.',
          {
            toastId: 'error',
            autoClose: unverified ? false : 3000
          }
        )
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
          <div className='flex items-end gap-1 mt-3 text-white md:items-center'>
            <Checkbox id='rememberMe' {...register('rememberMe')} />
            <label htmlFor='rememberMe' className='text-sm leading-none'>
              Remember me
            </label>
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

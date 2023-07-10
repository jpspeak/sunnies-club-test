'use client'

import Button from '@/app/components/ui/Button'
import Input from '@/app/components/ui/Input'
import PasswordInput from '@/app/components/ui/PasswordInput'
import authService from '@/app/services/api/authService'
import Link from 'next/link'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Alert from '@/app/components/ui/Alert'
import MainContainer from '@/app/components/ui/MainContainer'
import useAuthStore from '@/app/hooks/useAuthStore'
import LogoIcon from '@/app/components/ui/Icons/LogoIcon'

type Inputs = {
  email: string
  password: string
}

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [signinError, setSigninError] = useState(null)
  const signin = useAuthStore((state) => state.signin)

  const submit: SubmitHandler<Inputs> = async (formdata) => {
    setIsSubmitting(true)
    try {
      await authService.signin(formdata)
      signin()
      setIsSubmitting(false)
    } catch (error: any) {
      setSigninError(error.response?.data?.message || 'An error occurred.')
      setIsSubmitting(false)
      console.error(error)
    }
  }

  return (
    <MainContainer>
      <div className='w-full px-4'>
        <LogoIcon className='h-[60px] mt-[60px] text-soft-black-700 mx-auto' />
        <h1 className='text-lg font-bold text-center text-soft-black-700 mt-6'>
          GOOD TO SEE YOU AGAIN
        </h1>
        <p className='text-sm text-center text-gray-neutral-500 mt-2'>
          Log in to access your account.
        </p>
        {signinError && <Alert className='mt-4'>{signinError}</Alert>}
        <form
          onSubmit={handleSubmit(submit)}
          className='flex flex-col w-full mt-6'
        >
          <Input
            type='email'
            label='Email address'
            error={errors.email?.message}
            {...register('email', { required: 'Email address is required' })}
            className='mt-3'
          />
          <PasswordInput
            label='Password'
            error={errors.password?.message}
            disableEyeToggle
            {...register('password', { required: 'Password is required' })}
            className='mt-3'
          />
          <Button
            type='submit'
            variant='primary'
            isLoading={isSubmitting}
            className='mt-6 font-bold'
          >
            {isSubmitting ? '...' : 'LOG IN'}
          </Button>
        </form>
        <p className='text-center mt-3 text-gray-neutral-500'>
          Don't have an account?{` `}
          <Link href='/signup' className='underline'>
            Sign up
          </Link>
        </p>
      </div>
    </MainContainer>
  )
}

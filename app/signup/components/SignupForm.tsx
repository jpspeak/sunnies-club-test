'use client'

import React from 'react'
import Button from '@/app/components/ui/Button'
import DateInput from '@/app/components/ui/DateInput'
import Input from '@/app/components/ui/Input'
import PasswordInput from '@/app/components/ui/PasswordInput'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import authService from '@/app/services/api/authService'
import { useState } from 'react'
import Alert from '@/app/components/ui/Alert'
import MainContainer from '@/app/components/ui/MainContainer'
import Center from '@/app/components/ui/Center'
import LogoIcon from '@/app/components/ui/Icons/LogoIcon'

type Inputs = {
  email: string
  firstname: string
  lastname: string
  birthdate: string
  password: string
  confirmPassword: string
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      firstname: '',
      lastname: '',
      birthdate: '',
      password: '',
      confirmPassword: ''
    }
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [signupError, setSignupError] = useState(null)
  const [accountCreated, setAccountCreated] = useState<boolean>(false)

  const password = watch('password')

  const submit: SubmitHandler<Inputs> = async (formdata) => {
    setIsSubmitting(true)
    try {
      await authService.signup(formdata)
      setAccountCreated(true)
      setIsSubmitting(false)
    } catch (error: any) {
      setSignupError(error.response?.data?.message || 'An error occurred.')
      setIsSubmitting(false)
      console.error(error)
    }
  }

  return (
    <MainContainer>
      <div className='w-full px-4'>
        {accountCreated ? (
          <>
            <Alert className='mt-4'>
              Account created successfully! Please check your email to confirm.
            </Alert>
            <Center>
              <Link href='/signin' className='mt-10 underline'>
                Log in
              </Link>
            </Center>
          </>
        ) : (
          <>
            <LogoIcon className='h-[60px] mt-[60px] text-soft-black-700 mx-auto' />
            <h1 className='mt-6 text-lg font-bold text-center text-soft-black-700'>
              JOIN THE CLUB
            </h1>
            <p className='mt-2 text-sm text-center text-gray-neutral-500'>
              Create an account to start earning points and unlock exclusive
              access to launches and events.
            </p>
            {signupError && <Alert className='mt-4'>{signupError}</Alert>}
            <form
              onSubmit={handleSubmit(submit)}
              className='flex flex-col w-full mt-6'
            >
              <Input
                type='email'
                label='Email address'
                error={errors.email?.message}
                {...register('email', {
                  required: 'Email Address is required'
                })}
                className='mt-3'
              />
              <Input
                label='First name'
                error={errors.firstname?.message}
                {...register('firstname', {
                  required: 'Firt name is required'
                })}
                className='mt-3'
              />
              <Input
                label='Last name'
                error={errors.lastname?.message}
                {...register('lastname', {
                  required: 'Last name is required'
                })}
                className='mt-3'
              />
              <DateInput
                label='Birthdate'
                error={errors.birthdate?.message}
                {...register('birthdate', {
                  required: 'Birthdate is required'
                })}
                className='mt-3'
              />
              <PasswordInput
                label='Password'
                error={errors.password?.message}
                {...register('password', {
                  required: 'Password is required'
                })}
                className='mt-3'
              />
              <PasswordInput
                label='Confirm password'
                error={errors.confirmPassword?.message}
                {...register('confirmPassword', {
                  required: 'Confirm password is required',
                  validate: (value) =>
                    value === password || 'Passwords do not match.'
                })}
                className='mt-3'
              />
              <Button
                type='submit'
                variant='primary'
                isLoading={isSubmitting}
                className='mt-6 font-bold'
              >
                {isSubmitting ? '...' : 'SIGN UP'}
              </Button>
            </form>
            <p className='mt-3 text-center text-gray-neutral-500'>
              Already have an account?{` `}
              <Link href='/signin' className='underline'>
                Log In
              </Link>
            </p>
          </>
        )}
      </div>
    </MainContainer>
  )
}

export default Signup

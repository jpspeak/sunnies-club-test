'use client'

import React, { useEffect, useState } from 'react'
import Input from '@/app/shared/components/form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import BottomBar from '@/app/shared/components/BottomBar'
import Button from '@/app/shared/components/Button'
import useUser from '@/app/shared/hooks/useUser'
import userService from '@/app/shared/services/api/userService'
import { useRouter } from 'next/navigation'
import { useLocalStorage } from 'usehooks-ts'

type FormDataType = z.infer<typeof UpdateEmailFormSchema>

const UpdateEmailFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email address.')
    .email('Invalid email address'),
  secondaryEmail: z
    .string()
    .min(1, 'Please enter your secondary email address.')
    .email('Invalid email address')
})

export default function UpdateSecEmailForm() {
  const { user } = useUser()

  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [otpDateCreated, saveOTPDateCreated] = useLocalStorage(
    'otpDateCreated',
    ''
  )

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormDataType>({
    resolver: zodResolver(UpdateEmailFormSchema)
  })

  const submit: SubmitHandler<FormDataType> = async (formdata) => {
    setIsSubmitting(true)
    try {
      const { data } = await userService.addSecEmailVerification({
        secondaryEmail: formdata.secondaryEmail
      })
      saveOTPDateCreated(data.data.otpDateCreated)
      setIsSubmitting(false)
      router.push(
        `/account/account-settings/email-address/add-sec-email-verification?secondaryEmail=${formdata.secondaryEmail}`
      )
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'An error occurred.', {
        toastId: 'error'
      })
      setIsSubmitting(false)
      console.error(error)
    }
  }

  useEffect(() => {
    setValue('email', user?.email || '')
    setValue('secondaryEmail', user?.secondaryEmail || '')
  }, [user, setValue])

  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className='flex flex-col w-full mt-4 grow'
      >
        <Input
          type='email'
          label='Primary email address'
          error={errors.email?.message}
          disabled
          {...register('email')}
        />
        <Input
          type='email'
          label='Secondary email address'
          error={errors.secondaryEmail?.message}
          disabled={!!user?.secondaryEmail}
          {...register('secondaryEmail')}
          className='mt-6'
        />
        <BottomBar noShadow>
          <Button
            type='submit'
            isLoading={isSubmitting}
            disabled={!!user?.secondaryEmail}
            variant={!!user?.secondaryEmail ? 'disabled' : 'solid'}
          >
            Save changes
          </Button>
        </BottomBar>
      </form>
    </>
  )
}

import ButtonLink from '@/app/shared/components/ButtonLink'
import FormHeader from '@/app/shared/components/FormHeader'
import React from 'react'

export default function ResetPasswordSuccessful() {
  return (
    <>
      <FormHeader
        title='Email sent!'
        body='We’ve sent you an email with a link to update your password.'
        className='mt-[40px] px-[60px]'
      />
      <div className='flex items-end pb-[40px] px-4 grow'>
        <ButtonLink
          variant='outline'
          href='/auth?initialView=signin'
          className='px-4 mt-6 text-white grow'
        >
          Back to login
        </ButtonLink>
      </div>
    </>
  )
}

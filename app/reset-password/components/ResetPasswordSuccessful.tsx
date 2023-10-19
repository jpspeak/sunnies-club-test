import React from 'react'
import FormHeader from '@/app/shared/components/FormHeader'
import ButtonLink from '@/app/shared/components/ButtonLink'

export default function ChangePasswordSuccessful() {
  return (
    <>
      <FormHeader
        title='Password updated!'
        body='You can now log in with your new credentials'
        className='mt-[40px]'
      />
      <div className='flex items-end pb-[40px] px-4 grow'>
        <ButtonLink
          variant='outline'
          href='/auth?initialView=signin'
          className='mt-6 text-white'
        >
          Back to login
        </ButtonLink>
      </div>
    </>
  )
}

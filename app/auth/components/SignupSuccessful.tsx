import Button from '@/app/shared/components/Button'
import FormHeader from '@/app/shared/components/FormHeader'
import React from 'react'
import { useAuthViewStore } from '../store/authViewStore'

export default function SignupSuccessful() {
  const setView = useAuthViewStore((state) => state.setView)
  const handleLoginCLick = () => {
    setView('signin')
  }
  return (
    <>
      <FormHeader
        title='Confirm your email'
        body="Your sign-up was successful. We've sent you an email to confirm your account."
        className='mt-[40px] px-[44px]'
      />
      <div className='flex items-end grow'>
        <Button
          onClick={handleLoginCLick}
          variant='outline'
          className='mt-[40px] text-white border-white'
        >
          Log in
        </Button>
      </div>
    </>
  )
}

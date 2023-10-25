import Button from '@/app/shared/components/Button'
import FormHeader from '@/app/shared/components/FormHeader'
import React from 'react'
import { useAuthViewStore } from '../store/authViewStore'
import BottomBar from '@/app/shared/components/BottomBar'
import { useSignupStore } from '../store/signupStore'

export default function SignupSuccessful({
  containerClass
}: {
  containerClass?: string
}) {
  const setView = useAuthViewStore((state) => state.setView)

  const resetSignupStore = useSignupStore((state) => state.reset)

  const handleLoginCLick = () => {
    resetSignupStore()
    setView('signin')
  }
  return (
    <div className={containerClass}>
      <FormHeader
        title='Confirm your email'
        body="Your sign-up was successful. We've sent you an email to confirm your account."
        className='mt-[40px] px-[44px]'
      />
      <BottomBar noShadow className='bg-red-700 py-[40px]'>
        <Button
          onClick={handleLoginCLick}
          variant='outline'
          className='text-white border-white'
        >
          Go to login
        </Button>
      </BottomBar>
      {/* <div className='flex items-end grow'>
        
      </div> */}
    </div>
  )
}

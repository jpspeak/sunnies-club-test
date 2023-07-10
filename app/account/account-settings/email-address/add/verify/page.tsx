'use client'

import { useState } from 'react'
import TopBar from '@/app/components/ui/TopBar'
import BottomAction from '@/app/components/ui/BottomAction'
import MainContainer from '@/app/components/ui/MainContainer'
import OTPInput from '@/app/components/ui/OTPInput'
import { useRouter } from 'next/navigation'
import emailVerficationService from '@/app/services/api/emailVerficationService'
import Alert from '@/app/components/ui/Alert'

export default function Verify() {
  const router = useRouter()
  const [otp, setOTP] = useState('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [verificationSuccess, setVerificationSuccess] = useState(null)
  const [verificationError, setVerificationError] = useState(null)

  const handleOTPInputChange = (otp: string) => {
    setOTP(otp)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    const formdata = { otp }
    try {
      const { data } = await emailVerficationService.verifyOTP(formdata)
      setVerificationSuccess(data.message)
      setIsSubmitting(false)
    } catch (error: any) {
      setVerificationError(
        error.response?.data?.message || 'An error occurred.'
      )
      setIsSubmitting(false)
      console.error(error)
    }
  }

  return (
    <>
      <TopBar title='OTP verification' showBackNav />
      <MainContainer>
        <div className='px-4 md:px-0'>
          {verificationSuccess ? (
            <Alert className='mt-4'>{verificationSuccess}</Alert>
          ) : (
            <>
              <h1 className=' text-2xl'>Verify Your Account</h1>
              <h2 className='text-sm'>
                Verification email sent! To proceed, please find the OTP in your
                email and enter it below to confirm your account.
              </h2>
              {verificationError && (
                <Alert className='mt-4'>{verificationError}</Alert>
              )}
              <form className='flex items-center justify-center mt-6'>
                <OTPInput onChange={handleOTPInputChange} />
              </form>
            </>
          )}
        </div>
      </MainContainer>
      {verificationSuccess ? (
        <BottomAction href='/'>Back to Home</BottomAction>
      ) : (
        <BottomAction onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Verifying...' : 'Verify'}
        </BottomAction>
      )}
    </>
  )
}

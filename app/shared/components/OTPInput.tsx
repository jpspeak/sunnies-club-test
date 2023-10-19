import React, { ChangeEvent, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export default function OTPInput({
  containerClass,
  onChange
}: {
  containerClass?: string
  onChange: (otp: string) => void
}) {
  const [otp, setOTP] = useState(['', '', '', ''])
  const inputRefs = useRef<HTMLInputElement[]>([])

  const handleChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      if (value.length <= 1) {
        const newOTP = [...otp]
        newOTP[index] = value
        setOTP(newOTP)
        onChange(newOTP.join(''))

        if (value !== '' && index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1].focus()
        }
      }
    }

  const handlePaste = (e: any) => {
    const pasteData = e.clipboardData.getData('text/plain')

    // Validate and extract the OTP from the pasted data
    const pastedOtp = pasteData.match(/\d{4}/)
    if (pastedOtp) {
      const newOTP = pastedOtp[0].split('')
      setOTP(newOTP)
      onChange(newOTP.join(''))
    }

    e.preventDefault()
  }

  return (
    <div className={twMerge('grid w-full grid-cols-4 gap-4', containerClass)}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className='relative pb-[100%]'>
          <input
            className={twMerge(
              'absolute top-0 w-full h-full text-center border-b border-b-soft-black-100 text-soft-black-700 focus:outline-none text-[48px]',
              otp[i] && 'border-b-soft-black-700'
            )}
            type='number'
            min='0'
            max='9'
            maxLength={1}
            value={otp[i] || ''}
            onChange={handleChange(i)}
            onPaste={handlePaste}
            ref={(ref) => (inputRefs.current[i] = ref as HTMLInputElement)}
          />
        </div>
      ))}
    </div>
  )
}

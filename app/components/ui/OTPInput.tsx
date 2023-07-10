import React, { ChangeEvent, ChangeEventHandler, useRef, useState } from 'react'

export default function OTPInput({
  onChange
}: {
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
    <div className='flex gap-2'>
      {Array.from({ length: 4 }).map((_, i) => (
        <input
          className='h-10 w-10 text-center border border-black rounded-[8px]'
          key={i}
          type='number'
          min='0'
          max='9'
          maxLength={1}
          value={otp[i] || ''}
          onChange={handleChange(i)}
          onPaste={handlePaste}
          ref={(ref) => (inputRefs.current[i] = ref as HTMLInputElement)}
        />
      ))}
    </div>
  )
}

'use client'

import React, { ComponentProps, forwardRef, useState } from 'react'
import InputError from '../../InputError'
import { twMerge } from 'tailwind-merge'
import { InputColorScheme, inputCva, labelCva } from '../Input'
import { cva } from 'class-variance-authority'

const EyeCloseIcon = () => (
  // <svg
  //   xmlns='http://www.w3.org/2000/svg'
  //   fill='none'
  //   viewBox='0 0 24 24'
  //   strokeWidth='1.5'
  //   stroke='currentColor'
  //   className='w-6 h-6'
  // >
  //   <path
  //     strokeLinecap='round'
  //     strokeLinejoin='round'
  //     d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
  //   />
  // </svg>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    stroke='currentColor'
    className='w-4 h-4'
  >
    <path
      d='M1.33337 6.66669C1.33337 6.66669 3.66671 9.33335 8.00004 9.33335C12.3334 9.33335 14.6667 6.66669 14.6667 6.66669M2.66671 7.76335L1.33337 9.33335M14.6667 9.33335L13.336 7.76535M5.94271 9.12002L5.33337 11M10.042 9.12535L10.6667 11'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1'
    />
  </svg>
)

const EyeOpenIcon = () => (
  // <svg
  //   xmlns='http://www.w3.org/2000/svg'
  //   fill='none'
  //   viewBox='0 0 24 24'
  //   strokeWidth='1.5'
  //   stroke='currentColor'
  //   className='w-6 h-6'
  // >
  //   <path
  //     strokeLinecap='round'
  //     strokeLinejoin='round'
  //     d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
  //   />
  //   <path
  //     strokeLinecap='round'
  //     strokeLinejoin='round'
  //     d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
  //   />
  // </svg>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    stroke='currentColor'
    className='w-4 h-4'
  >
    <path
      d='M28.3427 14.616C28.9747 15.4427 28.9747 16.5587 28.3427 17.384C26.3521 19.9827 21.5761 25.3334 16.0001 25.3334C10.4241 25.3334 5.64806 19.9827 3.65739 17.384C3.3499 16.9882 3.18298 16.5012 3.18298 16C3.18298 15.4988 3.3499 15.0118 3.65739 14.616C5.64806 12.0174 10.4241 6.66669 16.0001 6.66669C21.5761 6.66669 26.3521 12.0174 28.3427 14.616Z'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const eyeIconCva = cva(
  'absolute right-0 text-current -translate-y-1/2 outline-none top-1/2 text-white',
  {
    variants: {
      colorScheme: {
        white: ['text-white'],
        neutral: ['text-soft-black-700']
      }
    },
    defaultVariants: {
      colorScheme: 'neutral'
    }
  }
)

export type PasswordInputProps = {
  className?: string
  colorScheme?: InputColorScheme
  label: string
  error?: string
  eye: boolean
}

export default forwardRef<
  HTMLInputElement,
  ComponentProps<'input'> & PasswordInputProps
>(function PasswordInput(
  { className, colorScheme, label, error, eye = false, ...otherProps },
  ref
) {
  const [inputType, setInputType] = useState<'password' | 'text'>('password')

  const handleEyeClick = () => {
    setInputType((prevState) => {
      return prevState === 'password' ? 'text' : 'password'
    })
  }

  return (
    <div>
      <div className={twMerge('input-wrapper text-sm', className)}>
        <label className={twMerge(labelCva({ colorScheme }))}>{label}</label>
        <div className='relative'>
          <input
            ref={ref}
            type={inputType}
            placeholder=' '
            {...otherProps}
            className={twMerge(inputCva({ colorScheme }))}
          />
          {eye && (
            <button
              type='button'
              onClick={handleEyeClick}
              className={twMerge(eyeIconCva({ colorScheme }))}
            >
              {inputType === 'text' ? <EyeCloseIcon /> : <EyeOpenIcon />}
            </button>
          )}
        </div>
      </div>
      {error && <InputError colorScheme={colorScheme}>{error}</InputError>}
    </div>
  )
})

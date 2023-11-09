'use client'

import React, { ComponentProps } from 'react'
import { forwardRef } from 'react'
import InputError from '../../InputError'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

export type InputColorScheme = 'white' | 'neutral'

type InputProps = {
  className?: string
  colorScheme?: InputColorScheme
  label: string
  error?: string
}

export const labelCva = cva(['uppercase', 'text-[10px]'], {
  variants: {
    colorScheme: {
      white: ['text-white'],
      neutral: ['text-soft-black-400']
    }
  },
  defaultVariants: {
    colorScheme: 'neutral'
  }
})

export const inputCva = cva(
  [
    'w-full',
    'text-lg',
    'leading-normal',
    'border-b',
    'bg-transparent',
    'outline-none',
    'py-[4px]',
    'font-medium',
    'rounded-none',
    'min-h-[36px]'
  ],
  {
    variants: {
      colorScheme: {
        white: ['text-white', 'border-b-white'],
        neutral: ['text-soft-black-700', 'border-b-soft-black-50']
      },
      disabled: {
        white: '',
        neutral: '!text-soft-black-700'
      }
    },
    defaultVariants: {
      colorScheme: 'neutral'
    }
  }
)

export default forwardRef<
  HTMLInputElement,
  ComponentProps<'input'> & InputProps
>(function Input(
  { className, colorScheme = 'neutral', label, error, disabled, ...otherProps },
  ref
) {
  return (
    <>
      <div className={`input-wrapper relative text-sm ${className}`}>
        <label className={twMerge(labelCva({ colorScheme }))}>{label}</label>
        <input
          ref={ref}
          placeholder=' '
          disabled={disabled}
          {...otherProps}
          className={twMerge(
            inputCva({
              colorScheme,
              disabled: disabled ? colorScheme : undefined
            })
          )}
        />
      </div>
      {error && <InputError colorScheme={colorScheme}>{error}</InputError>}
    </>
  )
})

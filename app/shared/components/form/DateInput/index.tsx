'use client'

import React, { ComponentProps, forwardRef } from 'react'
import { ChangeHandler } from 'react-hook-form'
import InputError from '../../InputError'
import { twMerge } from 'tailwind-merge'
import { InputColorScheme, inputCva, labelCva } from '../Input'

type DateInputProps = {
  className?: string
  colorScheme?: InputColorScheme
  label: string
  error?: string
  onBlur: ChangeHandler
  value: string
}

export default forwardRef<
  HTMLInputElement,
  ComponentProps<'input'> & DateInputProps
>(function DateInput(
  {
    className,
    colorScheme,
    label,
    error,
    onBlur,
    value,
    disabled,
    ...otherProps
  },
  ref
) {
  return (
    <div>
      <div className={`input-wrapper relative text-sm ${className}`}>
        <label className={twMerge(labelCva({ colorScheme }))}>{label}</label>
        <input
          ref={ref}
          placeholder=' '
          type='date'
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
    </div>
  )
})

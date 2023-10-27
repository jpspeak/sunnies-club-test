import React, { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { cva } from 'class-variance-authority'
import Spinner from './Spinner'

export const buttonCVA = cva(
  [
    'flex',
    'justify-center',
    'items-center',
    'w-full',
    'font-bold',
    'text-sm',
    'rounded-full',
    'px-[20px]',
    'py-[10px]',
    'border-[1.5px]',
    'border-transparent',
    'whitespace-nowrap',
    '!leading-4',
    'text-soft-black-700'
  ],
  {
    variants: {
      variant: {
        solid: ['bg-red-700', 'text-white'],
        outline: ['bg-transparent', 'border-current'],
        ghost: ['bg-transparent', 'border-none'],
        disabled: ['bg-red-50', 'text-red-100'],
        disabledGray: ['bg-soft-black-100', 'text-soft-black-400']
      }
    },
    // compoundVariants: [
    //   {
    //     variant: 'primary'
    //   }
    // ],
    defaultVariants: {
      variant: 'solid'
    }
  }
)

type ButtonProps = {
  className?: string
  variant?: 'solid' | 'outline' | 'ghost' | 'disabled' | 'disabledGray'
  isLoading?: boolean
}

export default forwardRef<
  HTMLButtonElement,
  ComponentProps<'button'> & ButtonProps
>(function Button(
  { children, className, variant, isLoading, ...otherProps },
  ref
) {
  return (
    <button
      ref={ref}
      disabled={isLoading}
      className={twMerge(buttonCVA({ variant, className }))}
      {...otherProps}
    >
      {isLoading ? <Spinner className='text-current' /> : children}
    </button>
  )
})

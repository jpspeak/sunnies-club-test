import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import ExclamationPoint from './icons/ExclamationPoint'
import { cva } from 'class-variance-authority'

export const containerCva = cva(
  [
    'inline-flex',
    'items-center',
    'mt-1',
    'gap-1',
    'p-[2px]',
    'rounded-[2px]',
    'w-max'
  ],
  {
    variants: {
      colorScheme: {
        white: ['bg-error-900', 'text-white'],
        neutral: ['bg-transparent', 'text-error-700']
      }
    },
    defaultVariants: {
      colorScheme: 'neutral'
    }
  }
)

type InputErrorProps = PropsWithChildren<{
  colorScheme?: 'white' | 'neutral'
}>

export default function InputError({ colorScheme, children }: InputErrorProps) {
  return (
    <div className={twMerge(containerCva({ colorScheme }))}>
      <ExclamationPoint />
      <p className='text-[10px] leading-[12px]'>{children}</p>
    </div>
  )
}

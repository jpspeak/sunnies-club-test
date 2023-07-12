import React, { PropsWithChildren } from 'react'
import Spinner from './Spinner'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  isLoading?: boolean
  className?: string
  [key: string]: any
}

export default function Button({
  children,
  isLoading,
  variant,
  className,
  ...other
}: PropsWithChildren<ButtonProps>) {
  let style
  switch (variant) {
    case 'primary':
      style =
        'border-[1.5px] border-primary bg-primary text-white md:hover:bg-white md:hover:text-primary'
      break
    case 'secondary':
      style = 'border-[1.5px] border-black bg-white text-black'
      break

    default:
      style = 'text-black'
      break
  }
  return (
    <button
      disabled={isLoading}
      className={`rounded-full px-[20px] py-[10px] leading-none flex justify-center items-center w-full ${style} ${className}`}
      {...other}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

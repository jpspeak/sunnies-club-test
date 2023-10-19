import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export default function MainContainer({
  children,
  className,
  ...otherProps
}: ComponentProps<'div'>) {
  return (
    <div
      {...otherProps}
      className={twMerge(
        'container max-w-md min-h-screen mx-auto overflow-x-hidden text-soft-black-700',
        className
      )}
    >
      {children}
    </div>
  )
}

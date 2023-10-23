import React, { ReactNode, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export default forwardRef<
  HTMLDivElement,
  { className?: string; children: ReactNode }
>(function MainContainer({ children, className, ...otherProps }, ref) {
  return (
    <div
      ref={ref}
      {...otherProps}
      className={twMerge(
        'container max-w-md min-h-screen mx-auto overflow-x-hidden text-soft-black-700',
        className
      )}
    >
      {children}
    </div>
  )
})

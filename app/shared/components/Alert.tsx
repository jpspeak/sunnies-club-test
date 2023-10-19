import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
export default function Alert({
  className,
  variant,
  children
}: PropsWithChildren<{ className?: string; variant: 'success' | 'error' }>) {
  let style

  switch (variant) {
    case 'success':
      style = 'bg-green-100 border-green-800'
      break
    case 'error':
      style = 'bg-red-100 border-red-800'
      break

    default:
      break
  }
  return (
    <div
      className={twMerge(
        `p-4 w-full border border-gray-neutral-50 text-sm  px-[12px] py-[10px] rounded`,
        `${style} ${className}`
      )}
    >
      {children}
    </div>
  )
}

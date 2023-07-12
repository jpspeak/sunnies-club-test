import React, { PropsWithChildren } from 'react'

export default function Alert({
  className,
  children
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`p-4 w-full border border-gray-neutral-50 text-sm text-red-500 px-[12px] py-[10px] rounded ${className}`}
    >
      {children}
    </div>
  )
}

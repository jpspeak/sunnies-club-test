import React, { PropsWithChildren } from 'react'

export default function Center({
  className,
  children
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {children}
    </div>
  )
}

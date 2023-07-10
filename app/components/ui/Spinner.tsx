import React from 'react'

export default function Spinner({ className }: { className?: string }) {
  return (
    <div
      className={` h-4 w-4 border-current border-2 border-t-transparent border-t-2 animate-spin rounded-full ${className}`}
    ></div>
  )
}

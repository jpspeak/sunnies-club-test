import React, { PropsWithChildren } from 'react'

export default function BottomBar({ children }: PropsWithChildren) {
  return (
    <div
      className='fixed bottom-0 w-full p-4 md:max-w-sm md:left-1/2 md:-translate-x-1/2 md:border-x'
      style={{
        boxShadow:
          '0px -4px  8px -2px rgba(42, 34, 31, 0.10), 0px -2px 4px -2px rgba(42, 34, 31, 0.06)'
      }}
    >
      {children}
    </div>
  )
}

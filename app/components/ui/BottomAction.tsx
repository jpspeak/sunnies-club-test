import React, { PropsWithChildren } from 'react'
import Button from './Button'

type BottomProps = {
  isLoading?: boolean
  onClick?: () => void
  href?: string
  [key: string]: any
}

export default function BottomAction({
  children,
  isLoading,
  onClick,
  href,
  ...other
}: PropsWithChildren<
  BottomProps & ({ onClick: () => void } | { href: string })
>) {
  return (
    <div
      className='fixed bottom-0 flex w-full p-4 justify-evenly md:max-w-sm md:left-1/2 md:-translate-x-1/2 md:border-x'
      style={{
        boxShadow:
          '0px -4px 8px -2px rgba(42, 34, 31, 0.10), 0px -2px 4px -2px rgba(42, 34, 31, 0.06)'
      }}
    >
      {href ? (
        <Button
          variant='primary'
          className='w-full p-4 font-bold leading-none border border-black rounded-full'
          href={href}
          {...other}
        >
          {children}
        </Button>
      ) : (
        <Button
          variant='primary'
          className='w-full p-4 font-bold leading-none border border-black rounded-full'
          onClick={onClick}
          isLoading={isLoading}
          {...other}
        >
          {children}
        </Button>
      )}
    </div>
  )
}

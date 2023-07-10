import NextLink from 'next/link'
import { PropsWithChildren } from 'react'
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
      className='flex fixed bottom-0 w-full justify-evenly p-4 md:max-w-sm md:left-1/2 md:-translate-x-1/2 md:border-x'
      style={{
        boxShadow:
          '0px -4px 8px -2px rgba(42, 34, 31, 0.10), 0px -2px 4px -2px rgba(42, 34, 31, 0.06)'
      }}
    >
      {href ? (
        <Button
          variant='primary'
          className='w-full border border-black rounded-full p-4 leading-none font-bold'
          href={href}
          {...other}
        >
          {children}
        </Button>
      ) : (
        <Button
          variant='primary'
          className='w-full border border-black rounded-full p-4 leading-none font-bold'
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

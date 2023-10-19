import Link from 'next/link'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { buttonCVA } from './Button'

type ButtonProps = {
  className?: string
  variant?: 'solid' | 'outline'
  colorScheme?: string
  href: string
  [key: string]: any
}

export default function ButtonLink({
  children,
  className,
  variant = 'solid',
  href,
  ...otherProps
}: ComponentProps<typeof Link> & ButtonProps) {
  return (
    <Link
      className={twMerge(buttonCVA({ variant, className }))}
      href={href}
      {...otherProps}
    >
      {children}
    </Link>
  )
}

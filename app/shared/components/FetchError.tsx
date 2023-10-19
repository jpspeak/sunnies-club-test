import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export default function FetchError(props: ComponentProps<'p'>) {
  return (
    <p className={twMerge('p-4 text-soft-black-100', props.className)}>
      An error occurred.
    </p>
  )
}

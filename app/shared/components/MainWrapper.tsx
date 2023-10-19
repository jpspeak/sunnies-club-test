import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type MainWrapperProps = {
  withTopPad?: boolean
  withBotPad?: boolean
  className?: string
}

export default function MainWrapper({
  children,
  withTopPad,
  withBotPad,
  className
}: PropsWithChildren<MainWrapperProps>) {
  return (
    <div
      className={twMerge(
        `px-4 md:px-0 ${withTopPad && 'pt-[60px]'} ${
          withBotPad && 'pb-[70px]'
        } `,
        className
      )}
    >
      {children}
    </div>
  )
}

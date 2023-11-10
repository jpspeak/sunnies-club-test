'use client'
import React, { PropsWithChildren } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export default function NextProgressProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <ProgressBar
        height='2px'
        color='#CE5119'
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}

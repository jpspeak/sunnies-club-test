import React, { PropsWithChildren } from 'react'

export default function MainContainer({ children }: PropsWithChildren) {
  return (
    <div className='container max-w-sm min-h-screen mx-auto'>{children}</div>
  )
}

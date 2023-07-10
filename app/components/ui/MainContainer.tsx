import { PropsWithChildren } from 'react'

export default function MainContainer({ children }: PropsWithChildren) {
  return (
    <div className='container mx-auto max-w-sm min-h-screen'>{children}</div>
  )
}

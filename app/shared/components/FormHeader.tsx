import React from 'react'

type FormHeaderProps = {
  className?: string
  title: string
  body?: string
}

export default function FormHeader({
  className,
  title,
  body
}: FormHeaderProps) {
  return (
    <div className={className}>
      <h1 className='text-xl font-medium text-center text-white'>{title}</h1>
      <p className='mt-2 text-xs text-center text-white'>{body}</p>
    </div>
  )
}

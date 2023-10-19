import React from 'react'

export default function FormHeaderTwo({
  heading,
  subheading
}: {
  heading: string
  subheading: string
}) {
  return (
    <div>
      <h1 className='text-lg'>{heading}</h1>
      <p className='mt-2 text-xs text-soft-black-400'>{subheading}</p>
    </div>
  )
}

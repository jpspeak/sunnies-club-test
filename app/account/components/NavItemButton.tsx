'use client'

import React, { ComponentProps } from 'react'

const ArrowIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    className='w-4 h-4 shrink-0'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8.25 4.5l7.5 7.5-7.5 7.5'
    />
  </svg>
)

export default function NavItemButton(props: ComponentProps<'button'>) {
  return (
    <button
      onClick={props.onClick}
      className='flex items-center justify-between w-full overflow-hidden text-sm leading-tight text-soft-black-700 text-ellipsis rounded-[8px] py-4'
    >
      <span className='overflow-hidden '>{props.children}</span>
      <ArrowIcon />
    </button>
  )
}

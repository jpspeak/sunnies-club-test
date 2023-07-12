'use client'

import React from 'react'
import { LegacyRef, PropsWithChildren, forwardRef } from 'react'
import './style.css'

type InputProps = {
  label: string
  className?: string
  error?: string
  [key: string]: any
}

export default forwardRef(function Input(
  { className, label, error, ...other }: PropsWithChildren<InputProps>,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <div>
      <div className={`outlined-input relative text-sm ${className}`}>
        <input
          ref={ref}
          placeholder=' '
          {...other}
          className='peer border border-gray-neutral-50 outline-none px-[12px] py-[10px] w-full rounded-full leading-none'
        />
        <label className='peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:top-0 peer-focus:bg-white absolute top-1/2 left-[10px] pointer-events-none bg-transparent text-gray-neutral-200 transition-all ease-in-out duration-[.2s] -translate-y-1/2 leading-none'>
          {label}
        </label>
      </div>
      {error && <p>{error}</p>}
    </div>
  )
})

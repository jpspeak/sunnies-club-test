'use client'

import React, {
  FocusEventHandler,
  LegacyRef,
  PropsWithChildren,
  forwardRef,
  useState
} from 'react'
import './style.css'
import { ChangeHandler } from 'react-hook-form'

type DateInputProps = {
  label: string
  className?: string
  error?: string
  onBlur: ChangeHandler
  [key: string]: any
}
type InputType = 'text' | 'date'

export default forwardRef(function DateInput(
  {
    className,
    label,
    error,
    onBlur,
    ...other
  }: PropsWithChildren<DateInputProps>,
  ref: LegacyRef<HTMLInputElement>
) {
  const [inputType, setInputType] = useState<InputType>('text')
  const handleOnBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    onBlur(e)
    setInputType('text')
  }
  const handleOnFocus = () => {
    setInputType('date')
  }
  return (
    <div>
      <div className={`outlined-input relative text-sm ${className}`}>
        <input
          ref={ref}
          placeholder=' '
          type={inputType}
          onFocus={handleOnFocus}
          onBlur={(e) => handleOnBlur(e)}
          {...other}
          className='peer border border-gray-neutral-50 outline-none px-[12px] py-[10px] w-full rounded-full text-sm leading-none'
        />
        <label className='peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:top-0 peer-focus:bg-white absolute top-1/2 left-[10px] pointer-events-none bg-transparent text-gray-neutral-200 transition-all ease-in-out duration-[.2s] -translate-y-1/2 leading-none'>
          {label}
        </label>
      </div>
      {error && <p>{error}</p>}
    </div>
  )
})

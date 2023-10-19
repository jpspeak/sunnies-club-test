import React from 'react'

export default function ProfilePicture() {
  return (
    <div className='flex flex-col items-center mx-auto mt-8 w-max'>
      <div className='w-[120px] h-[120px] bg-gray-neutral-300 rounded-full'></div>
      <button className='mt-3 text-xs text-gray-neutral-200'>Edit</button>
    </div>
  )
}

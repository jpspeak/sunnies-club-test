'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export default function MyRewardListTab() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const valid = !searchParams.get('invalid')

  return (
    <div className='fixed flex gap-3 bg-white z-[1] w-full max-w-md'>
      <button
        onClick={() => router.replace('/account/my-rewards')}
        className={twMerge(
          'w-full py-2 px-[10px] text-xs tracking-[0.24px] font-bold text-soft-black-100',
          `${valid && 'text-red-700 border-b border-red-700'}`
        )}
      >
        ACTIVE
      </button>
      <button
        onClick={() => router.replace('/account/my-rewards?invalid=true')}
        className={twMerge(
          'w-full  py-2 px-[10px] text-xs tracking-[0.24px] font-bold text-soft-black-100',
          `${!valid && 'text-red-700 border-b border-red-700'}`
        )}
      >
        PAST
      </button>
    </div>
  )
}

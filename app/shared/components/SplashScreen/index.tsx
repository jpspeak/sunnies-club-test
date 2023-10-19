'use client'

import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import UmbraDigital from '../icons/UmbraDigital'
import LogoIcon from '../icons/LogoIcon'

export default function SplashScreen({ children }: PropsWithChildren) {
  const [show, setShow] = useState<null | 'splash' | 'children'>(null)
  const [splashData, setSplashData] = useLocalStorage<null | string>(
    'splashData',
    null
  )
  const timerRef = useRef(0)

  const newSplashData = () =>
    JSON.stringify({
      // expiration: Date.now() + 5 * 24 * 60 * 60 * 1000 // In 5 days splash screen will show again
      expiration: Date.now() + 1000
    })

  useEffect(() => {
    if (splashData) {
      const { expiration } = JSON.parse(splashData)
      if (expiration > Date.now()) {
        setShow('children')
      } else {
        setShow('splash')
        setSplashData(null)
      }
    } else {
      setShow('splash')
    }
  }, [setSplashData, splashData])

  useEffect(() => {
    if (show === 'splash') {
      timerRef.current = window.setTimeout(() => {
        setSplashData(newSplashData())
        setShow('children')
      }, 1000)
    }
    return () => clearTimeout(timerRef.current)
  }, [setSplashData, show])

  if (show === 'splash')
    return (
      <div className='flex flex-col h-screen'>
        <div className='flex items-center justify-center grow'>
          <LogoIcon className=' text-red-700 h-[98px]' />
        </div>
        <div className='flex flex-col items-center justify-center text-sm text-[#737378] pb-[100px]'>
          <span className='text-[9px] font-poppins'>Powered by</span>
          <UmbraDigital className='w-24' />
        </div>
      </div>
    )

  if (show === 'children') return children

  return null
}

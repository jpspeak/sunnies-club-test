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

  const ALWAYS_ENABLE_SPLASH = false

  const newSplashData = () =>
    JSON.stringify({
      expiration: Date.now() + 365 * 24 * 60 * 60 * 1000 // Splash screen will show again after 1 year
    })

  useEffect(() => {
    if (ALWAYS_ENABLE_SPLASH) {
      setShow('splash')
    } else {
      if (splashData) {
        const { expiration } = JSON.parse(splashData)
        if (expiration > Date.now()) {
          setShow('children')
        } else {
          setShow('splash')
        }
      } else {
        setShow('splash')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      <div className='flex flex-col h-[calc(100vh-60px)]'>
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

'use client'

import React, { useEffect } from 'react'
import { isDesktop } from 'react-device-detect'
import { toast } from 'react-toastify'
import Button from './Button'

function SwitchToMobileModal() {
  useEffect(() => {
    if (isDesktop) {
      toast.info(
        <div>
          <p className='text-soft-black-700'>
            Welcome to Sunnies Club! Switch to mobile for a better experience.
          </p>
          <Button onClick={() => toast.dismiss()} className='mt-4'>
            Got it
          </Button>
        </div>,
        {
          theme: 'light',
          toastId: 'info',
          autoClose: false,
          closeButton: false
        }
      )
    }
  }, [])
  return null
}

export default SwitchToMobileModal

'use client'

import React from 'react'
import { ToastContainer, cssTransition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastProviderProps {
  children: React.ReactNode
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const noAnimation = cssTransition({
    enter: 'show',
    exit: 'hide',
    collapseDuration: 1
  })

  return (
    <>
      {children}
      <ToastContainer
        icon={false}
        theme='colored'
        hideProgressBar
        autoClose={3000}
        position='top-center'
        closeOnClick
        pauseOnHover
        draggable
        transition={noAnimation}
      />
    </>
  )
}

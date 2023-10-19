'use client'

import React from 'react'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastProviderProps {
  children: React.ReactNode
}

export default function ToastProvider({ children }: ToastProviderProps) {
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
        transition={Zoom}
      />
    </>
  )
}

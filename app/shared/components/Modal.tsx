import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import ReactDOM from 'react-dom'

type ModalType = {
  show: boolean
  onOutsideClick?: () => void
  centered?: boolean
  transparent?: boolean
  widthMaxContent?: boolean
  className?: string
}

export default function Modal({
  show,
  onOutsideClick,
  centered,
  transparent,
  widthMaxContent,
  className,
  children
}: PropsWithChildren<ModalType>) {
  return show
    ? ReactDOM.createPortal(
        <div
          className={twMerge(
            'fixed w-m top-0 left-0 w-full h-full px-4 overflow-auto bg-black z-[2] bg-opacity-[0.4]',
            `${centered && 'flex items-center'} ${
              transparent && 'bg-opacity-0'
            }`
          )}
          onClick={onOutsideClick}
        >
          <div
            className={twMerge(
              'bg-white mx-auto px-4 py-10 rounded-xl w-full max-w-md',
              `${className} ${!centered && 'mt-[15%]'} ${
                widthMaxContent && 'w-max'
              }`
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>,
        document.body
      )
    : null
}

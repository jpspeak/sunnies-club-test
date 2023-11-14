import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export default function BottomBar(
  props: ComponentProps<'div'> & { noShadow?: boolean }
) {
  return (
    <div
      className={twMerge(
        `fixed bottom-0 w-full p-4 pb-[24px] max-w-md left-1/2 -translate-x-1/2 bg-white ${
          !props.noShadow &&
          'shadow-[0px_-4px_8px_-2px_rgba(42,34,31,0.10),0px_-2px_4px_-2px_rgba(42,34,31,0.06)]'
        }`,
        props.className
      )}
    >
      {props.children}
    </div>
  )
}

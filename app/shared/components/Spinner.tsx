// import React from 'react'
// import { twMerge } from 'tailwind-merge'

// export default function Spinner({ className }: { className?: string }) {
//   return (
//     <div
//       className={twMerge(
//         'h-4 w-4 border-current border-2 border-red-700 border-t-transparent border-t-2 animate-spin rounded-full',
//         className
//       )}
//     ></div>
//   )
// }
import { Loader2 } from 'lucide-react'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Spinner({
  containerClass,
  ...otherProps
}: ComponentProps<typeof Loader2> & { containerClass?: string }) {
  return (
    <div className={containerClass}>
      <Loader2
        size={16}
        absoluteStrokeWidth
        {...otherProps}
        className={twMerge(
          'animate-spin text-soft-black-100',
          otherProps.className
        )}
      />
    </div>
  )
}

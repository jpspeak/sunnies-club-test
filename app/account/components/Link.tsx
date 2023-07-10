import { PropsWithChildren } from 'react'
import NextLink from 'next/link'

const ArrowIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    className='w-4 h-4 shrink-0'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8.25 4.5l7.5 7.5-7.5 7.5'
    />
  </svg>
)

export default function Link({
  href,
  children
}: PropsWithChildren<{ href: string }>) {
  return (
    <NextLink
      href={href}
      className='flex items-center justify-between overflow-hidden text-xs font-bold leading-none text-soft-black-700 text-ellipsis rounded-[8px] px-[10px] py-[14px]'
    >
      <span className='overflow-hidden '>{children}</span>
      <ArrowIcon />
    </NextLink>
  )
}

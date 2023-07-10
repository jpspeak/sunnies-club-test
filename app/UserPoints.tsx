'use client'

import Image from 'next/image'
import useUser from './hooks/useUser'
import star from '@/app/assets/icons/star.svg'
import Button from './components/ui/Button'
import RedeemIcon from './components/ui/Icons/RedeemIcon'
import LogoIcon from './components/ui/Icons/LogoIcon'
import { useRouter } from 'next/navigation'

export default function UserPoints() {
  const { user } = useUser()
  const router = useRouter()

  const fullname = user
    ? user?.firstname.toUpperCase() + ' ' + user?.lastname.toUpperCase()
    : null

  return (
    <div className='flex flex-col gap-7 border-[1.5px] border-primary rounded-xl p-4 m-4 md:mx-0'>
      <div className='flex items-center justify-between'>
        <LogoIcon className='h-8 text-primary' />
        <p className='text-sm font-bold text-primary'>{fullname}</p>
      </div>
      <div className='flex '>
        <Image src={star} alt='Points' />
        <span className='ml-1 text-2xl font-bold text-primary'>
          {user?.points}
        </span>
      </div>
      <Button
        variant='primary'
        onClick={() => router.push('/my-rewards')}
        className='gap-2 w-max'
      >
        <RedeemIcon />
        <span className='text-sm font-bold leading-none'>MY REWARDS</span>
      </Button>
    </div>
  )
}

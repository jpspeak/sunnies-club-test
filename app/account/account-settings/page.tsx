import MainContainer from '@/app/components/ui/MainContainer'
import React from 'react'
import Link from '../components/Link'
import TopBar from '@/app/components/ui/TopBar'

export default function AccountSettings() {
  return (
    <>
      <TopBar title='Account settings' showBackNav />
      <MainContainer>
        <div className='flex flex-col mt-4 px-4 md:px-0 gap-1'>
          <Link href='/account/account-settings/email-address'>
            Email address
          </Link>
          <Link href='/account/account-settings/change-password'>
            Change password
          </Link>
        </div>
      </MainContainer>
    </>
  )
}

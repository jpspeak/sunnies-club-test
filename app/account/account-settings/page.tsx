import React from 'react'
import MainContainer from '@/app/shared/components/MainContainer'
import TopBar from '@/app/shared/components/TopBar'
import NavItem from '../components/NavItem'
import BottomNavbar from '@/app/shared/components/BottomNavbar'
import NavItemSignout from './components/NavItemSignout'

export default function AccountSettings() {
  return (
    <>
      <TopBar title='ACCOUNT SETTINGS' showBackNav />
      <MainContainer className='flex flex-col pt-[50px] pb-[110px] px-4'>
        <NavItem
          href='/account/account-settings/email-address'
          className='border-b border-soft-black-50'
        >
          Email address
        </NavItem>
        <NavItem
          href='/account/account-settings/change-password'
          className='border-b border-soft-black-50'
        >
          Change password
        </NavItem>
        <NavItemSignout />
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

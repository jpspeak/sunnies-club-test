import React from 'react'
import MainContainer from '../components/ui/MainContainer'
import Link from './components/Link'
import BottomNavbar from '../components/ui/BottomNavbar'
import SignoutButton from './components/SignoutButton'
import TopBar from '../components/ui/TopBar'
import UserPoints from './components/UserPoints'

export default function Account() {
  return (
    <>
      <TopBar title='ACCOUNT' />
      <MainContainer>
        <div className='flex flex-col px-4 md:px-0 pt-[70px] pb-[70px]'>
          <UserPoints />
          <hr className='my-4' />
          <Link href='/account/profile-details'>PERSONAL DETAILS</Link>
          <Link href='/account/profile-details'>MY REWARDS</Link>
          <Link href='/account/profile-details'>TRANSACTION HISTORY</Link>
          <hr className='my-4' />
          <Link href='/account/account-settings'>ACCOUNT SETTINGS</Link>
          <Link href='/account/account-settings'>FAQ</Link>
          <SignoutButton />
        </div>
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

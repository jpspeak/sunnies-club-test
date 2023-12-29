import React from 'react'
import MainContainer from '../shared/components/MainContainer'
import NavItem from './components/NavItem'
import BottomNavbar from '../shared/components/BottomNavbar'
import UserCard from '../dashboard/components/UserCard'

export default function Account() {
  return (
    <>
      <MainContainer className='px-4 pt-4 pb-[110px]'>
        <UserCard />
        <NavItem
          href='/account/transactions'
          className='border-b border-soft-black-50'
        >
          Transaction history
        </NavItem>
        <NavItem
          href='/account/account-settings'
          className='border-b border-soft-black-50'
        >
          Account settings
        </NavItem>
        <NavItem href='/help-center' className='border-b border-soft-black-50'>
          Help Center
        </NavItem>
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

import React from 'react'
import MainContainer from '@/app/shared/components/MainContainer'
import TopBar from '@/app/shared/components/TopBar'

import BottomNavbar from '@/app/shared/components/BottomNavbar'
import NavItem from '../account/components/NavItem'

export default function HelpCenter() {
  return (
    <>
      <TopBar title='HELP CENTER' showBackNav />
      <MainContainer className='flex flex-col pt-[50px] pb-[110px] px-4'>
        <NavItem
          href='/help-center/faqs'
          className='border-b border-soft-black-50'
        >
          Frequently Asked Questions​
        </NavItem>
        <NavItem
          href='/help-center/terms-and-conditions'
          className='border-b border-soft-black-50'
        >
          Terms and Conditions​
        </NavItem>
        <NavItem
          href='https://ph.sunniesstudios.com/pages/sunnies-guarantee'
          target='_blank'
          className='border-b border-soft-black-50'
        >
          Sunnies Guarantee
        </NavItem>
        <NavItem
          href='mailto:help@sunniesstudios.com'
          className='border-b border-soft-black-50'
        >
          Contact Us
        </NavItem>
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

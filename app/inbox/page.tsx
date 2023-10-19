import React from 'react'
import MainContainer from '../shared/components/MainContainer'
import BottomNavbar from '../shared/components/BottomNavbar'
import TopBar from '../shared/components/TopBar'
import InboxContainer from './components/InboxContainer'

export default function Inbox() {
  return (
    <>
      <TopBar title='INBOX' />
      <MainContainer className='pt-[50px] pb-[110px]'>
        <InboxContainer />
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

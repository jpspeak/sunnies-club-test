import React from 'react'
import MainContainer from '../components/ui/MainContainer'
import BottomNavbar from '../components/ui/BottomNavbar'
import InboxList from './components/InboxList'
import TopBar from '../components/ui/TopBar'

export default function Inbox() {
  return (
    <>
      <TopBar title='INBOX' />
      <MainContainer>
        <div className='flex flex-col px-4 md:px-0 pt-[60px] pb-[70px]'>
          <InboxList />
        </div>
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

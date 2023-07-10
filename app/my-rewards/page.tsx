import React from 'react'
import MainContainer from '../components/ui/MainContainer'
import BottomNavbar from '../components/ui/BottomNavbar'
import TopBar from '../components/ui/TopBar'
import MyRewardList from './components/MyRewardList'

export default async function MyRewards() {
  return (
    <>
      <TopBar title='MY REWARDS' showBackNav />
      <MainContainer>
        <div className='flex flex-col px-4 md:px-0 pt-[60px] pb-[70px]'>
          <MyRewardList />
        </div>
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

import React from 'react'
import MainContainer from '../../shared/components/MainContainer'
import BottomNavbar from '../../shared/components/BottomNavbar'
import TopBar from '../../shared/components/TopBar'
import MyRewardList from './components/MyRewardList'

export default async function MyRewards() {
  return (
    <>
      <TopBar title='MY REWARDS' showBackNav />
      <MainContainer className='bg-soft-black-50  pt-[50px] pb-[70px]'>
        <MyRewardList />
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

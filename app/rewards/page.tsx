import React from 'react'
import MainContainer from '../shared/components/MainContainer'
import BottomNavbar from '../shared/components/BottomNavbar'
import TopBar from '../shared/components/TopBar'
import MainWrapper from '../shared/components/MainWrapper'
import RewardsContainer from './components/RewardsContainer'

// async function getRewards() {
//   // const { data } = await rewardService.getRewards({ next: { revalidate: 10 } })
//   // return data
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/rewards`, {
//     next: { revalidate: 10 }
//   }) // The result is cached
//   return res.json()
// }

export default async function Rewards() {
  // const rewards = await getRewards()

  return (
    <>
      <TopBar title='REWARDS' />
      <MainContainer>
        <MainWrapper withTopPad withBotPad className='flex flex-col'>
          <RewardsContainer />
        </MainWrapper>
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

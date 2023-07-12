import React from 'react'
import MainContainer from '../components/ui/MainContainer'
import BottomNavbar from '../components/ui/BottomNavbar'
import TopBar from '../components/ui/TopBar'
import RewardList from './components/RewardList'

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
        <div className='flex flex-col px-4 md:px-0 pt-[60px] pb-[70px]'>
          <RewardList />
        </div>
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

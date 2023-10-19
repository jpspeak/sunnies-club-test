import React from 'react'
import MainContainer from '../shared/components/MainContainer'
import BottomNavbar from '../shared/components/BottomNavbar'
import TransactionsContainer from './components/TransactionsContainer'
import UserCard from './components/UserCard'
import ExclusiveBenefitsContainer from './components/ExclusiveBenefitsContainer'
import MegaDealsContainer from './components/MegaDealsContainer'
import SunniesGuarantee from './components/SunniesGuarantee'

export default function Dashboard() {
  return (
    <>
      <MainContainer className='px-4 pt-4 pb-[110px] bg-soft-black-50'>
        <UserCard />
        <ExclusiveBenefitsContainer />
        <MegaDealsContainer />
        <SunniesGuarantee />
        <TransactionsContainer />
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

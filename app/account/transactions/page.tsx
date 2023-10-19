import React from 'react'
import MainContainer from '@/app/shared/components/MainContainer'
import TopBar from '@/app/shared/components/TopBar'
import TransactionsContainer from './components/TransactionsContainer'
import BottomNavbar from '@/app/shared/components/BottomNavbar'

export default function Transactions() {
  return (
    <>
      <TopBar title='TRANSACTION HISTORY' showBackNav />
      <MainContainer className='pt-[50px] pb-[110px]'>
        <TransactionsContainer />
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

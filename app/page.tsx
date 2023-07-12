import React from 'react'
import UserPoints from './UserPoints'
import BottomNavbar from './components/ui/BottomNavbar'
import MainContainer from './components/ui/MainContainer'

export default function Home() {
  return (
    <>
      <MainContainer>
        <UserPoints />
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

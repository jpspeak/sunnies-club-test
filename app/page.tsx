import React from 'react'
import MainContainer from './shared/components/MainContainer'
import MainWrapper from './shared/components/MainWrapper'
import Carousel from './homepage/components/Carousel'
import ButtonLink from './shared/components/ButtonLink'

export default function Home() {
  return (
    <>
      <MainContainer>
        <MainWrapper className='flex flex-col h-screen px-0'>
          <div className='grow'>
            <Carousel />
          </div>
          <div className='flex gap-2 px-4 py-10'>
            <ButtonLink href='/signup'>SIGN UP</ButtonLink>
            <ButtonLink href='/signin' className='px-5 w-max whitespace-nowrap'>
              LOG IN
            </ButtonLink>
          </div>
        </MainWrapper>
      </MainContainer>
    </>
  )
}

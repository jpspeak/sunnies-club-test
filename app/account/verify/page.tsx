import React from 'react'
import Alert from '@/app/components/ui/Alert'
import Center from '@/app/components/ui/Center'
import MainContainer from '@/app/components/ui/MainContainer'
import Link from 'next/link'

async function verify(code: string) {
  const res = await fetch(
    `http://localhost:8000/auth/verify?confirmationCode=${code}`,
    {
      method: 'POST',
      cache: 'no-store'
    }
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    const { message } = await res.json()
    throw new Error(message)
  }

  return res.json()
}

export default async function Page({
  searchParams
}: {
  searchParams: { confirmationCode: string }
}) {
  const { message } = await verify(searchParams.confirmationCode)

  return (
    <MainContainer>
      <Alert className='mt-4'>{message}</Alert>
      <Center>
        <Link href='/signin' className='mt-10 underline'>
          Log in
        </Link>
      </Center>
    </MainContainer>
  )
}

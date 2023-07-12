'use client'

import React from 'react'
import TopBar from '@/app/components/ui/TopBar'
import BottomAction from '@/app/components/ui/BottomAction'
import MainContainer from '@/app/components/ui/MainContainer'
import Link from '../../components/Link'
import useUser from '@/app/hooks/useUser'

export default function EmailAddress() {
  const { user, isLoadingUser, errorUser } = useUser()
  if (errorUser) return <>Error</>
  if (isLoadingUser) return <>Loading...</>
  return (
    <>
      <TopBar title='Email address' showBackNav />
      <MainContainer>
        <div className='px-4 md:px-0'>
          <h1 className='text-2xl '>Email address</h1>
          <h2 className='text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <p className='mt-6'>Main </p>
          <Link href='/account/account-settings/email-address/edit'>
            {user?.email}
          </Link>
          {user?.brandsAccounts?.length ? (
            <>
              <p className='mt-6'>Secondary</p>
              <div className='flex flex-col gap-2'>
                {user.brandsAccounts.map((account) => (
                  <Link
                    key={account.email}
                    href='/account/account-settings/email-address/edit'
                  >
                    {account.email}
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </MainContainer>
      <BottomAction href='/account/account-settings/email-address/add'>
        Add email
      </BottomAction>
    </>
  )
}

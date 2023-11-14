import React from 'react'
import MainContainer from '@/app/shared/components/MainContainer'
import TopBar from '@/app/shared/components/TopBar'
import BottomNavbar from '@/app/shared/components/BottomNavbar'

export default function TermsAndConditions() {
  return (
    <>
      <TopBar title='TERMS AND CONDITIONS' showBackNav />
      <MainContainer className='flex flex-col pt-[60px] pb-[110px] px-4 text-sm'>
        <p>
          Sunnies&nbsp;club points and rewards will have no expiration date​
        </p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Rewards are valid for one time use only in
              all&nbsp;Sunnies&nbsp;Studios stores.​
            </p>
          </li>
          <li>
            <p>Points and rewards are&nbsp;non transferrable.​</p>
          </li>
          <li>
            <p>
              Reward cannot be combined or stacked for use in a single
              transaction.​
            </p>
          </li>
          <li>
            <p>
              Rewards are applicable in conjunction with other discounts
              and&nbsp;promos.​
            </p>
          </li>
          <li>
            <p>All points and redemptions are final.​</p>
          </li>
        </ul>

        <p>​</p>

        <p>Sunnies&nbsp;club is not available in the following stores:​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>Landers​</p>
          </li>
          <li>
            <p>S&amp;R​</p>
          </li>
          <li>
            <p>True Value​</p>
          </li>
          <li>
            <p>Duty Free​</p>
          </li>
          <li>
            <p>Airport​</p>
          </li>
          <li>
            <p>Department Store​</p>
          </li>
          <li>
            <p>Lazada​​</p>
          </li>
          <li>
            <p>Shopee​​</p>
          </li>
          <li>
            <p>Tiktok​​</p>
          </li>
          <li>
            <p>Zalora​​</p>
          </li>
          <li>
            <a
              href='https://sunniesstudios.com/'
              target='_blank'
              rel='noreferrer'
            >
              sunniesstudios.com​
            </a>
          </li>
        </ul>

        <p>​</p>

        <p>Please note:​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Members will only earn points when they sign up the same email
              as&nbsp;their&nbsp;Sunnies&nbsp;Studios account in-store.​
            </p>
          </li>
          <li>
            <p>Earning of points will start from date of registration.​</p>
          </li>
          <li>
            <p>
              Sunnies Club vouchers cannot be used for Sunnies Guarantee
              payments.​
            </p>
          </li>
          <li>
            <p>Inactive accounts for 1 year will be deactivated.​</p>
          </li>
        </ul>

        <p>​</p>

        <p>*Terms and conditions may be revised without prior notice</p>
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

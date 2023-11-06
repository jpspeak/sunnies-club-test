import React from 'react'
import MainContainer from '@/app/shared/components/MainContainer'
import TopBar from '@/app/shared/components/TopBar'
import BottomNavbar from '@/app/shared/components/BottomNavbar'

export default function FAQs() {
  return (
    <>
      <TopBar title='FAQS' showBackNav />
      <MainContainer className='flex flex-col pt-[60px] pb-[110px] px-4 text-sm'>
        <p>What is&nbsp;Sunnies&nbsp;Club?​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            Sunnies&nbsp;Club is a loyalty program where members can earn points
            through purchasing products from any&nbsp;Sunnies&nbsp;Studios
            store. All members will also get access to preview new collections,
            get a chance to be invited to&nbsp;exclusive events, and get
            exclusive promos and limited-edition products.​
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>How do I join?​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Sign up at any&nbsp;Sunnies&nbsp;Studios store or
              in&nbsp;sunniesclub.com. Make sure to use the same email address
              as the one&nbsp;you registered in your&nbsp;Sunnies&nbsp;Studios
              account to start earning points.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>How do I earn points?​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Members can earn points through purchasing products from
              any&nbsp;Sunnies&nbsp;Studios store. Get a point for
              every&nbsp;P100 spent.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>How do I convert my points to vouchers?​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Go to the redeem section and select the voucher that you want to
              claim. Once&nbsp;you have&nbsp;redeemed a voucher,&nbsp;show your
              reward code to any of our staff in-store and&nbsp;they
              will&nbsp;discount it from your purchase.​
            </p>
          </li>
        </ul>

        <p>​</p>

        <p>Do my points and rewards expire?​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              All&nbsp;Sunnies&nbsp;Club points and rewards&nbsp;do
              not&nbsp;have an expiration date.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>
          Can I use my&nbsp;Sunnies&nbsp;Club reward vouchers with other
          promos?​
        </p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Yes, all converted&nbsp;Sunnies&nbsp;Club vouchers can be used
              together with other discounts or promos, but
              reward&nbsp;vouchers&nbsp;cannot&nbsp;be combined or stacked for
              use in a single transaction.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>Can I convert my points to cash?​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              No, all&nbsp;Sunnies&nbsp;Club points may only be converted to
              vouchers which can be used as good as cash.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>Can I use the voucher at&nbsp;sunniesstudios.com?​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              No, the vouchers can only be used in&nbsp;Sunnies&nbsp;Studios
              stores. Please refer to our Terms and Conditions to
              check&nbsp;which stores it&nbsp;doesn&rsquo;t&nbsp;apply to.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>
          Do I use the same account as my&nbsp;Sunnies&nbsp;Studios account?​
        </p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Yes, please use the same email as the one registered in
              your&nbsp;Sunnies&nbsp;Studios account to start earning points.
              If&nbsp;you registered a different email as your primary, you
              could add your&nbsp;Sunnies&nbsp;Studios account as a
              secondary&nbsp;email to receive your points automatically.
            </p>
          </li>
        </ul>
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

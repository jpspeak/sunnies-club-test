import React from 'react'
import MainContainer from '@/app/shared/components/MainContainer'
import TopBar from '@/app/shared/components/TopBar'
import BottomNavbar from '@/app/shared/components/BottomNavbar'

export default function FAQs() {
  return (
    <>
      <TopBar title='FAQS' showBackNav />
      <MainContainer className='flex flex-col pt-[60px] pb-[110px] px-4 text-sm'>
        <p>What is Sunnies Club?​​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            Sunnies Club is a loyalty program where members can earn points
            through purchasing products from any Sunnies Studios store. All
            members will also get access to preview new collections, get a
            chance to be invited to exclusive events, and get exclusive promos
            and limited-edition products.​
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>How do I join?​​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Sign up at any Sunnies Studios store or in sunniesclub.com. Make
              sure to use the same email address as the one you registered in
              your Sunnies Studios account to start earning points.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>How do I earn points?​​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Members can earn points through purchasing products from any
              Sunnies Studios store. Get a point for every P100 spent.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>How do I convert my points to vouchers?​​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Go to the redeem section and select the voucher that you want to
              claim. Once you have redeemed a voucher, show your reward code to
              any of our staff in-store and they will discount it from your
              purchase.​
            </p>
          </li>
        </ul>

        <p>​</p>

        <p>Do my points and rewards expire?​​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              All Sunnies Club points and rewards do not have an expiration
              date.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>
          Can I use my Sunnies Club reward vouchers with other promos and sale
          items?​
        </p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Yes, all converted Sunnies Club vouchers can be used together with
              other discounts or promos, but reward vouchers cannot be combined
              or stacked for use in a single transaction.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>Can I convert my points to cash?​​​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              No, all Sunnies Club points may only be converted to vouchers
              which can be used as good as cash.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>Can I use the voucher at sunniesstudios.com?​​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              No, the vouchers can only be used in Sunnies Studios stores.
              Please refer to our Terms and Conditions to check which stores it
              doesn&apos;t apply to.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>Do I use the same account as my Sunnies Studios account?​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Yes, please use the same email as the one registered in Sunnies
              Studios account to start earning points. If you registered a
              different email as your primary, you could add your Sunnies
              Studios account as a secondary email to receive your points
              automatically.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>How can I get invited to exclusive events?​​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Check the announcement section of the Sunnies Club homepage for
              event announcements and how to register.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>
          Can I use Sunnies Club vouchers to pay the price difference for
          replacements under Sunnies Guarantee​​​
        </p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              No, all Sunnies Club vouchers can only be used when purchasing
              products.​
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>Do I still earn points when I purchase sale items?​</p>

        <ul className='pl-4 list-disc text-soft-black-400'>
          <li>
            <p>
              Yes, Sunnies Club points will be based on the amount that the
              customer will pay.​
            </p>
          </li>
        </ul>
      </MainContainer>
      <BottomNavbar />
    </>
  )
}

'use client'

import React from 'react'
import MainContainer from '@/app/shared/components/MainContainer'
import TopBar from '@/app/shared/components/TopBar'
import useSWR from 'swr'
import transactionService, {
  Transaction as TTransaction
} from '@/app/shared/services/api/transactionService'
import { useParams } from 'next/navigation'
import CoinIcon from '@/app/shared/components/icons/CoinIcon'
import utcToLocalYYYYMMDDHHMM from '@/app/shared/utils/utcToLocalYYYYMMDDHHMM'
import { addCommasWithCents } from '@/app/shared/utils/addCommas'
import Spinner from '@/app/shared/components/Spinner'
import FetchError from '@/app/shared/components/FetchError'

export default function Transaction() {
  const { id: transactionId } = useParams()
  const {
    data: transaction,
    isLoading: isLoadingTransaction,
    error: errorTransaction
  } = useSWR<TTransaction>(`/transactions/${transactionId}`, () =>
    transactionService.getTransaction(transactionId).then((res) => res.data)
  )

  const render = () => {
    if (errorTransaction) return <FetchError />
    if (isLoadingTransaction) return <Spinner containerClass='p-4' />
    return (
      <>
        <div className='px-4 pb-4'>
          <ul className='flex flex-col gap-6 py-4 mt-1 border-t border-soft-black-50'>
            <li className='flex items-center justify-between'>
              <span className='text-soft-black-400 text-xxs'>STORE</span>
              <span className='text-sm text-soft-black-700'>
                {transaction?.orderDetails[0].storeName}
              </span>
            </li>
            <li className='flex items-center justify-between'>
              <span className='text-soft-black-400 text-xxs'>ORDER NO.</span>
              <span className='text-sm text-soft-black-700'>
                {transaction?.orderDetails[0].orderId}
              </span>
            </li>
            <li className='flex items-center justify-between'>
              <span className='text-soft-black-400 text-xxs'>DATE & TIME</span>
              <span className='text-sm text-soft-black-700'>
                {transaction?.orderDetails[0].paymentDate &&
                  utcToLocalYYYYMMDDHHMM(
                    transaction.orderDetails[0].paymentDate
                  )}
              </span>
            </li>
            <li className='flex items-center justify-between'>
              <span className='text-soft-black-400 text-xxs'>
                EARNED POINTS
              </span>
              <span className='flex items-center gap-1 text-sm text-soft-black-700'>
                <CoinIcon /> {transaction?.pointsChange}
              </span>
            </li>
          </ul>

          <ul className='py-4 border-t border-soft-black-50'>
            <li className='mb-2'>
              <ul className='grid grid-cols-[auto,2fr,1fr,1fr] font-normal text-left text-soft-black-400 text-xxs'>
                <li className='min-w-[40px]'>QTY</li>
                <li>ITEM NAME</li>
                <li className='text-right'>UNIT PRICE</li>
                <li className='text-right'>AMOUNT</li>
              </ul>
            </li>
            {transaction?.orderDetails.map((orderDetails, i) => (
              <li key={i} className='mb-1 text-xxs'>
                <ul className='grid grid-cols-[auto,2fr,1fr,1fr]'>
                  <li className='min-w-[40px]'>1</li>
                  <li className='truncate whitespace-nowrap'>
                    {orderDetails.productName}
                    {orderDetails.lensName && (
                      <>
                        <br />
                        {orderDetails.lensName}
                      </>
                    )}
                  </li>
                  <li className='text-right'>
                    {addCommasWithCents(parseFloat(orderDetails.total))}
                  </li>
                  <li className='text-right'>
                    {addCommasWithCents(parseFloat(orderDetails.total))}
                  </li>
                </ul>
              </li>
            ))}
          </ul>

          <div className='flex items-center justify-between py-4 border-t border-soft-black-50'>
            <span className='text-soft-black-400 text-xxs'>TOTAL AMOUNT</span>
            <span>
              {transaction &&
                transaction.orderDetails.length > 0 &&
                `P${addCommasWithCents(
                  transaction.orderDetails.reduce(
                    (total, orderItem) => total + parseFloat(orderItem.total),
                    0
                  )
                )}`}
            </span>
          </div>
        </div>

        <div className='p-3 mx-4 rounded bg-soft-black-50 text-soft-black-400 text-xxs'>
          Happy with your purchase? If not, you’re welcome to change your
          Sunnies Studios product within 90 days of purchase.{' '}
          <a
            href='https://ph.sunniesstudios.com/pages/sunnies-guarantee'
            className='leading-normal underline'
          >
            Learn more about Sunnies Guarantee.
          </a>
        </div>
      </>
    )
  }

  return (
    <>
      <TopBar title={transaction?.description} showBackNav />
      <MainContainer className='pt-[50px] pb-[40px] flex flex-col justify-between'>
        {render()}
      </MainContainer>
    </>
  )
}

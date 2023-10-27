import React from 'react'
import TransactionIcon from './TransactionIcon'
import { ChevronRight } from 'lucide-react'
import isPositive from '@/app/shared/utils/isPositive'
import {
  Transaction,
  Transactions,
  transactionTypes
} from '@/app/shared/services/api/transactionService'
import { addCommasWithCents } from '@/app/shared/utils/addCommas'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'
import utcToLocalMMMDYYYY from '@/app/shared/utils/utcToLocalMMMDYYYY'

export default function TransactionsList({
  className,
  transactions = []
}: {
  className?: string
  transactions?: Transactions
}) {
  const router = useRouter()

  const handleTxnClick = (txn: Transaction) => {
    if (txn.type === transactionTypes.earnedPoints) {
      router.push(`/account/transactions/${txn._id}`)
    }
  }

  if (transactions.length === 0)
    return (
      <p className='mt-4 text-center text-soft-black-400 text-xxs'>
        No transactions yet.
      </p>
    )

  const renderSales = (transaction: Transaction) => {
    let totalSales = 'P0.00'
    if (transaction.orderDetails && transaction.orderDetails.length > 0) {
      totalSales = `P${addCommasWithCents(
        transaction.orderDetails.reduce(
          (total, orderItem) => total + parseFloat(orderItem.total),
          0
        )
      )}`
    }
    return totalSales
  }

  return (
    <ul className={twMerge('bg-white shadow-md rounded-xl', className)}>
      {transactions?.map((transaction) => {
        return (
          <li
            key={transaction._id}
            onClick={() => handleTxnClick(transaction)}
            className={twMerge(
              'flex items-center gap-4 px-4 py-3 [&:not(:last-child)]:border-b border-soft-black-50',
              transaction.type === transactionTypes.earnedPoints &&
                'cursor-pointer'
            )}
          >
            <div className='flex items-center justify-center w-[32px] shrink-0'>
              <TransactionIcon txnDescription={transaction.description} />
            </div>

            <div className='w-full text-sm'>
              <p className='text-sm font-medium text-soft-black-700'>
                {transaction.description}
              </p>
              <p className='mt-1 text-xxs text-soft-black-400'>
                {utcToLocalMMMDYYYY(
                  transaction.type === transactionTypes.earnedPoints
                    ? transaction.orderDetails[0].paymentDate
                    : transaction.date
                )}
              </p>
            </div>

            <div className='flex flex-col items-end'>
              <span className='text-sm font-medium'>
                {renderSales(transaction)}
              </span>
              <span
                className={`text-xxs font-bold mt-1 whitespace-nowrap  ${
                  isPositive(transaction.pointsChange)
                    ? 'text-green-900'
                    : 'text-error-700'
                }`}
              >
                {isPositive(transaction.pointsChange) && '+'}
                {transaction.pointsChange} points
              </span>
            </div>
            {transaction.type === transactionTypes.earnedPoints ? (
              <div>
                <ChevronRight size={16} />
              </div>
            ) : (
              <div className='invisible pr-4' />
            )}
          </li>
        )
      })}
    </ul>
  )
}

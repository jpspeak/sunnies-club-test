'use client'

import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import TransactionList from '@/app/account/transactions/components/TransactionsList'
import useTransactions from '@/app/shared/hooks/useTransactions'
import Spinner from '@/app/shared/components/Spinner'
import FetchError from '@/app/shared/components/FetchError'

export default function TransactionsContainer() {
  const { paginatedTxns, errorTransactions, isLoadingTransactions } =
    useTransactions(10)

  const renderList = () => {
    if (errorTransactions) return <FetchError />
    if (isLoadingTransactions) return <Spinner />
    return (
      <TransactionList transactions={paginatedTxns?.docs} className='mt-3' />
    )
  }

  return (
    <>
      <h2 className='mt-[40px] text-xl'>Recent transactions</h2>
      {renderList()}
    </>
  )
}

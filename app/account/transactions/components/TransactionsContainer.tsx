'use client'

import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import TransactionsList from './TransactionsList'
import useTransactions from '@/app/shared/hooks/useTransactions'
import Spinner from '@/app/shared/components/Spinner'
import FetchError from '@/app/shared/components/FetchError'

export default function TransactionsContainer() {
  const { paginatedTxns, errorTransactions, isLoadingTransactions } =
    useTransactions(100)

  if (errorTransactions) return <FetchError />

  if (isLoadingTransactions) return <Spinner containerClass='p-4' />

  return (
    <TransactionsList
      transactions={paginatedTxns?.docs}
      className='shadow-none '
    />
  )
}

import useSWR from 'swr'
import transactionService, {
  Transactions
} from '../services/api/transactionService'
import { Paginated } from '../types'

const useTransactions = (limit = 10) => {
  const {
    data: paginatedTxns,
    error: errorTransactions,
    isLoading: isLoadingTransactions,
    mutate: mutateTransactions
  } = useSWR<Paginated<Transactions>>(`/transactions?limit=${limit}`, () =>
    transactionService.getTransactions(limit).then((res) => res.data)
  )

  return {
    paginatedTxns,
    isLoadingTransactions,
    errorTransactions,
    mutateTransactions
  }
}
export default useTransactions

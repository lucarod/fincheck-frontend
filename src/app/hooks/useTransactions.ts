import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../config/queryKeys';
import { transactionsService } from '../services/transactionsService';

export function useTransactions() {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: queryKeys.TRANSACTIONS,
    queryFn: () => transactionsService.getAll({
      month: 1,
      year: 2024,
    }),
  });

  return { transactions: data ?? [], isFetching, isLoading };
}

import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'src/app/config/queryKeys';
import { transactionsService } from 'src/app/services/transactionsService';
import { TransactionsFilters } from 'src/app/types/TransactionsFilters';

export function useTransactions(filters: TransactionsFilters) {
  const { data, isFetching, isLoading, refetch } = useQuery({
    queryKey: queryKeys.TRANSACTIONS,
    queryFn: () => transactionsService.getAll(filters),
  });

  return {
    transactions: data ?? [],
    isFetching,
    isLoading,
    refetchTransactions: refetch,
  };
}

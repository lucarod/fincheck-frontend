import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { queryKeys } from 'src/app/config/queryKeys';
import { transactionsService } from 'src/app/services/transactionsService';
import { TransactionsFilters } from 'src/app/types/TransactionsFilters';

export function useTransactions(filters: TransactionsFilters) {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const { data, isFetching, isLoading } = useQuery({
    queryKey: [...queryKeys.TRANSACTIONS, filters],
    queryFn: () => transactionsService.getAll(filters),
    staleTime: 60 * 60 * 24, // 1 day
  });

  useEffect(() => {
    if (isInitialLoading && !isLoading) {
      setIsInitialLoading(false);
    }
  }, [data]);

  return {
    transactions: data ?? [],
    isFetching,
    isLoading: isInitialLoading && isLoading,
  };
}

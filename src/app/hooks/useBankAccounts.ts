import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '../config/queryKeys';
import { bankAccountService } from '../services/bankAccountService';

export function useBankAccounts() {
  const { data, isFetching } = useQuery({
    queryKey: queryKeys.BANK_ACCOUNTS,
    queryFn: () => bankAccountService.getAll(),
    staleTime: 60 * 60 * 24, // 1 day
  });

  return { accounts: data ?? [], isFetching };
}

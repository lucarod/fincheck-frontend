import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '../config/queryKeys';
import { bankAccountService } from '../services/bankAccountService';

export function useBankAccounts() {
  const { data, isFetching } = useQuery({
    queryKey: queryKeys.BANK_ACCOUNTS,
    queryFn: () => bankAccountService.getAll(),
  });

  return { accounts: data ?? [], isFetching };
}

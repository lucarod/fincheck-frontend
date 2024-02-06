import { TransactionsFilters } from 'src/app/types/TransactionsFilters';
import { Transaction } from 'src/app/entities/Transaction';
import { api } from 'src/app/services/api';

export async function getAll(filters: TransactionsFilters) {
  const { data } = await api.get<Transaction[]>('/transactions', {
    params: filters,
  });
  return data;
}

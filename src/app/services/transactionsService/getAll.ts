import { api } from '../api';
import { Transaction } from 'src/app/entities/Transaction';

type TransactionsFilters = {
  month: number;
  year: number;
  bankAccountId?: string;
  type?: Transaction['type'];
}

export async function getAll(filters: TransactionsFilters) {
  const { data } = await api.get<Transaction[]>('/transactions', {
    params: filters,
  });
  return data;
}

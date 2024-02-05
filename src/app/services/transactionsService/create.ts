import { api } from '../api';

export interface CreateTransactionParams {
  bankAccountId: string;
  categoryId: string;
  name: string;
  value: number;
  date: string;
  type: 'INCOME' | 'EXPENSE'
}

export async function create(params: CreateTransactionParams) {
  const { data } = await api.post('/transactions', params);
  return data;
}

import { api } from '../api';

export interface UpdateTransactionParams {
  id: string;
  bankAccountId: string;
  categoryId: string;
  name: string;
  value: number;
  date: string;
  type: 'INCOME' | 'EXPENSE'
}

export async function update({ id, ...params }: UpdateTransactionParams) {
  const { data } = await api.put(`/transactions/${id}`, params);
  return data;
}

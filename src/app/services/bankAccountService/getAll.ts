import { BankAccount } from 'src/app/entities/BankAccount';
import { api } from '../api';

export async function getAll() {
  const { data } = await api.get<BankAccount[]>('/bank-accounts');
  return data;
}

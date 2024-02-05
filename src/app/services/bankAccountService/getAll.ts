import { BankAccount } from 'src/app/entities/BankAccount';
import { api } from '../api';

type BankAccountsResponse = Array<BankAccount>

export async function getAll() {
  const { data } = await api.get<BankAccountsResponse>('/bank-accounts');
  return data;
}

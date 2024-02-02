import { api } from '../api';

export interface BankAccountParams {
  name: string;
	initialBalance: number;
	color: string;
	type: 'INVESTMENT' | 'CHECKING' | 'CASH';
}

export async function create(params: BankAccountParams) {
  const { data } = await api.post('/bank-accounts', params);
  return data;
}

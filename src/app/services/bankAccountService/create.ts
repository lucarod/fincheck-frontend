import { api } from '../api';

export interface CreateBankAccountParams {
  name: string;
	initialBalance: number;
	color: string;
	type: 'INVESTMENT' | 'CHECKING' | 'CASH';
}

export async function create(params: CreateBankAccountParams) {
  const { data } = await api.post('/bank-accounts', params);
  return data;
}

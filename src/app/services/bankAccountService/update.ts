import { api } from '../api';

export interface UpdateBankAccountParams {
  id: string;
  name: string;
	color: string;
	type: 'INVESTMENT' | 'CHECKING' | 'CASH';
}

export async function update({ id, ...params }: UpdateBankAccountParams) {
  const { data } = await api.put(`/bank-accounts/${id}`, params);
  return data;
}

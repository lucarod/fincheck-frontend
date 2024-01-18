import { sleep } from 'src/app/utils/sleep';
import { api } from '../httpClient';

export interface SignupParams {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string
}

export async function signup(params: SignupParams) {
  await sleep(1500);
  const { data } = await api.post<SignupResponse>('/auth/signup', params);
  return data;
}

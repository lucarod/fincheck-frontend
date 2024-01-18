import { sleep } from 'src/app/utils/sleep';
import { api } from '../httpClient';

export interface SigninParams {
  email: string;
  password: string;
}

interface SigninResponse {
  accessToken: string
}

export async function signin(params: SigninParams) {
  await sleep(1500);
  const { data } = await api.post<SigninResponse>('/auth/signin', params);
  return data;
}

import { api } from '../api';

export interface SignupParams {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string
}

export async function signup(params: SignupParams) {
  const { data } = await api.post<SignupResponse>('/auth/signup', params);
  return data;
}

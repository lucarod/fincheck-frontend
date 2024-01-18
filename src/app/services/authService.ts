import { api } from './httpClient';

interface SignupParams {
  name: string;
  email: string;
  password: string;
}

async function signup(params: SignupParams) {
  const { data } = await api.post<{ accessToken: string }>('/auth/signup', params);
  return data;
}

export const authService = {
  signup,
};

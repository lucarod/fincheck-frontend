import { User } from 'src/app/entities/User';
import { api } from '../api';

export async function me() {
  const { data } = await api.get<User>('/users/me');
  return data;
}

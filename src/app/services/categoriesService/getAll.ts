import { Category } from 'src/app/entities/Category';

import { api } from '../api';

export async function getAll() {
  const { data } = await api.get<Category[]>('/categories');
  return data;
}

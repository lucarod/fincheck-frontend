import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '../config/queryKeys';
import { categoriesService } from '../services/categoriesService';

export function useCategories() {
  const { data, isFetching } = useQuery({
    queryKey: queryKeys.CATEGORIES,
    queryFn: () => categoriesService.getAll(),
  });

  return { categories: data ?? [], isFetching };
}

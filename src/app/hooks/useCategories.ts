import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '../config/queryKeys';
import { categoriesService } from '../services/categoriesService';

export function useCategories() {
  const { data, isFetching } = useQuery({
    queryKey: queryKeys.CATEGORIES,
    queryFn: () => categoriesService.getAll(),
    staleTime: 60 * 60 * 24, // 1 day
  });

  return { categories: data ?? [], isFetching };
}

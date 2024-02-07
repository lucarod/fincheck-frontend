import { useState } from 'react';

import { useDashboard } from 'src/app/hooks/useDashboard';
import { useTransactions } from 'src/app/hooks/useTransactions';
import { TransactionsFilters } from 'src/app/types/TransactionsFilters';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [filters, setFilters] = useState<TransactionsFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const {
    transactions,
    isFetching,
    isLoading,
  } = useTransactions(filters);

  function handleChangeFilters<
    TFilter extends keyof TransactionsFilters
  >(filter: TFilter) {
    return (value: TransactionsFilters[TFilter]) => {
      if (value === filters[filter]) return;

      setFilters(prevState => ({
        ...prevState,
        [filter]: value,
      }));
    };
  }

  function handleApplyModalFilters(filters: {
    bankAccountId: string | undefined,
    year: number
  }) {
    handleChangeFilters('bankAccountId')(filters.bankAccountId);
    handleChangeFilters('year')(filters.year);
    setIsFiltersModalOpen(false);
  }

  function handleOpenFiltersModal() {
    setIsFiltersModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFiltersModalOpen(false);
  }

  return {
    areValuesVisible,
    isInitialLoading: isLoading,
    isLoading: isFetching,
    transactions,
    isFiltersModalOpen,
    filters,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    handleChangeFilters,
    handleApplyModalFilters,
  };
}

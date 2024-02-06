import { useState } from 'react';

import { useDashboard } from 'src/app/hooks/useDashboard';
import { useTransactions } from 'src/app/hooks/useTransactions';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  const { transactions, isFetching, isLoading } = useTransactions();

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
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  };
}

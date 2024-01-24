import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';

interface DashboardContextValue {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  toggleValuesVisibility: () => void;
  openNewAccountModal: () => void;
  closeNewAccountModal: () => void;
}

export const DashboardContext = createContext<DashboardContextValue>(
  {} as DashboardContextValue
);

export function DashboardProvider({ children }: {children: ReactNode}) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(true);

  const toggleValuesVisibility = useCallback(() => {
    localStorage.setItem(
      'fincheck:areValuesVisible',
      JSON.stringify(!areValuesVisible)
    );
    setAreValuesVisible(prevState => !prevState);
  }, [areValuesVisible]);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  useEffect(() => {
    const visibilityStorage = localStorage.getItem('fincheck:areValuesVisible');

    if (!visibilityStorage) {
      localStorage.setItem(
        'fincheck:areValuesVisible',
        JSON.stringify(areValuesVisible)
      );

      return;
    }

    const areValuesVisibleLocalValue = JSON.parse(visibilityStorage);

    if (typeof areValuesVisibleLocalValue !== 'boolean') {
      return;
    }

    setAreValuesVisible(areValuesVisibleLocalValue);
  }, []);

  return (
    <DashboardContext.Provider value={{
      areValuesVisible,
      isNewAccountModalOpen,
      toggleValuesVisibility,
      openNewAccountModal,
      closeNewAccountModal,
    }}>
      {children}
    </DashboardContext.Provider>
  );
}

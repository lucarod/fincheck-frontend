import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';
import { BankAccount } from 'src/app/entities/BankAccount';

interface DashboardContextValue {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  isEditAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  newTransactionType: 'INCOME' | 'EXPENSE' | null;
  accountBeingEdited: BankAccount | null;
  toggleValuesVisibility: () => void;
  openNewAccountModal: () => void;
  closeNewAccountModal: () => void;
  openEditAccountModal: (bankAccount: BankAccount) => void;
  closeEditAccountModal: () => void;
  openNewTransactionModal: (type: 'INCOME' | 'EXPENSE') => void;
  closeNewTransactionModal: () => void;
}

export const DashboardContext = createContext<DashboardContextValue>(
  {} as DashboardContextValue
);

export function DashboardProvider({ children }: {children: ReactNode}) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [newTransactionType, setNewTransactionType] = useState<'INCOME' | 'EXPENSE' | null>(null);
  const [accountBeingEdited, setAccountBeingEdited] = useState<BankAccount | null>(null);

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

  const openEditAccountModal = useCallback((bankAccount: BankAccount) => {
    setAccountBeingEdited(bankAccount);
    setIsEditAccountModalOpen(true);
  }, []);

  const closeEditAccountModal = useCallback(() => {
    setAccountBeingEdited(null);
    setIsEditAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: 'INCOME' | 'EXPENSE') => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
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
      isEditAccountModalOpen,
      isNewTransactionModalOpen,
      newTransactionType,
      accountBeingEdited,
      toggleValuesVisibility,
      openNewAccountModal,
      closeNewAccountModal,
      openNewTransactionModal,
      closeNewTransactionModal,
      openEditAccountModal,
      closeEditAccountModal,
    }}>
      {children}
    </DashboardContext.Provider>
  );
}

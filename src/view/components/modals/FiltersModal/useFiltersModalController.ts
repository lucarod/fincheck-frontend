import { useState } from 'react';
import { useBankAccounts } from 'src/app/hooks/useBankAccounts';

export function useFiltersModal() {
  const [
    selectedBankAccountId,
    setSelectedBankAccountId,
  ] = useState<string | undefined>(undefined);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const { accounts } = useBankAccounts();

  function handleSelectBankAccountId(bankAccountId: string) {
    setSelectedBankAccountId(prevState => (
      prevState === bankAccountId ? undefined : bankAccountId
    ));
  }

  function handleChangeYear(step: number) {
    setSelectedYear(prevState => prevState + step);
  }

  return {
    selectedBankAccountId,
    selectedYear,
    accounts,
    handleSelectBankAccountId,
    handleChangeYear,
  };
}

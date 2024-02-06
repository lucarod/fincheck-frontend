import { useMemo, useState } from 'react';

import { useWindowWidth } from 'src/app/hooks/useWindowWidth';
import { useBankAccounts } from 'src/app/hooks/useBankAccounts';
import { useDashboard } from 'src/app/hooks/useDashboard';

export function useAccountsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const { accounts, isFetching } = useBankAccounts();

  const windowWidth = useWindowWidth();

  const {
    areValuesVisible,
    toggleValuesVisibility,
    openNewAccountModal,
  } = useDashboard();

  const slidesPerViewValue =
    windowWidth >= 1024 || windowWidth < 768 && windowWidth >= 425
      ? 2.15
      : 1.25;

  const totalBalance = useMemo(() => {
    return accounts.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);
  }, [accounts]);

  return {
    sliderState,
    slidesPerViewValue,
    areValuesVisible,
    isFetching: isFetching,
    accounts: accounts,
    totalBalance,
    setSliderState,
    toggleValuesVisibility,
    openNewAccountModal,
  };
}

import { useMemo, useState } from 'react';

import { useWindowWidth } from 'src/app/hooks/useWindowWidth';
import { useDashboard } from '../DashboardContext/useDashboard';
import { useQuery } from '@tanstack/react-query';
import { bankAccountService } from 'src/app/services/bankAccountService';
import { queryKeys } from 'src/app/config/queryKeys';

export function useAccountsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const { data, isFetching } = useQuery({
    queryKey: queryKeys.BANK_ACCOUNTS,
    queryFn: () => bankAccountService.getAll(),
  });

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
    if (!data) return 0;

    return data.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);
  }, [data]);

  return {
    sliderState,
    slidesPerViewValue,
    areValuesVisible,
    isFetching: isFetching,
    accounts: data ?? [],
    totalBalance,
    setSliderState,
    toggleValuesVisibility,
    openNewAccountModal,
  };
}
